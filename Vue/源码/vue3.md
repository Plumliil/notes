### vue设计思想
- vue3更注重快的拆分,在2.0中无法单独使用部分模块,需要引入完整的vuejs(例如想要使用响应式部分,但需要引入完整vuejs),vue3中模块之间耦合度地,模块可以独立使用,拆分模块
- vue2中很多方法挂载到了实例中导致没有使用也会被打包(还有其他很多组件),通过构建工具Tree-shaking机制实现按需引入,减少用户打包后体积,重写API
- vue3允许自定义渲染器,扩展能力强,改写vue源码改造渲染方式扩展更加方便

> 依然保留vue2的特色

### 声明式框架

#### 命令式和声明式
- 早在JQ时代编写代码时命令式的,命令式框架重要特点就是关注过程
- 声明式框架更加关注结果.命令式的代码封装到了vuejs中,过程靠vuejs来实现
>声明式代码更加简单,不需要关注实现,按照要求填写代码就可以
~~~javascript
- 命令式编程:
let nums=[1,2,3,4,5];
let total=0;
for(let i=0;i<nums.length;i++){
    total+=nums[i]; // 关注过程
}
console.log(total)
- 声明式编程:
let total2=nums.reduce((pre,cur)=>{return pre+cur},0)
console.log(total2)
~~~

#### 采用虚拟DOM
传统更新页面,拼接一个完整的字符串innerHTML全部重新渲染,添加DOM,可以比较新旧虚拟节点,找到变化在更新,虚拟DOM就是一个对象,用来描述真实DOM.
~~~javascript
const vnode={
    __v_isVNode:true,
    __v_skip:true,
    type,
    props,
    key:props&&normalizeKey(props),
    ref:props&&normalizeKey(props),
    children,
    component:null,
    el:null
    pathchFlag,
    dynamicProps,
    dynamicChildren:null,
    appContext:null
}
~~~

#### 区分编译时和运行时
- 我们需要一个虚拟Dom,调用渲染方法将虚拟DOM渲染成真实DOM(缺点是虚拟DOM编写麻烦)
- 专门写个编译时可以将模板编译成虚拟DOM(在构建的时候进行编译性能更高,不需要再运行时)

### vue3整体架构

#### 架构介绍

##### Monorepo管理项目
Monorepo是管理项目代码的一个方式,指在一个项目仓库(repo)中管理多个模块/包(package),vue3源码采用monorepo方式进行管理,将模块拆分到package目录中
- 一个仓库可以维护多个模块,不用到处找仓库
- 方便版本管理和依赖管理,模块之间的引用,调用都非常方便

##### vue3项目结构
![](https://s2.loli.net/2022/05/04/QPgv98kAa47VeFX.png)

#### 开发环境搭建

pnpm 
- -w:workspace-root 工作环境根目录下
##### 搭建monorepo环境
###### 全局安装pnpm
~~~shell
npm install pnpm -g # 全局安装pnpm
~~~
~~~shell
pnpm init -y # 初始化配置文件
~~~
###### 创建.npmrcs
~~~shell
shamefully-hoist = true
~~~
> 使用该配置文件可以将依赖的模块提升到node_modules下,添加羞耻的提升可以将vue3所依赖的模块提升到node_modules中

###### 配置workspace


##### 环境搭建
###### 初始化ts
~~~shell
pnpm install typescript -W -D
~~~
~~~shell
pnpm tsc init
~~~
~~~typescript
// tsconfig.json
{
  "compilerOptions": {
    "outDir": "dist", // 输出目录
    "target": "es2016", // 目标语法
    "sourceMap": true, // 采用sourcemap                                 
    "module": "esnext", // 模块格式        
    // "forceConsistentCasingInFileNames": true, // 
    "strict": false, // 严格模式                                   
    // "skipLibCheck": true 
    // "resolveJsonModule": true, // 解析json模块
    "esModuleInterop": true, // 允许通过es6语法引入commonjs模块                          
    "moduleResolution": "node", // 模块解析方式
    "jsx": "preserve", // jsx不转译
    "lib": ["esnext","dom"], // 支持的类库
    "baseUrl": ".",
    // 开发能找到路径
    "paths": {
      "@vue/*":["packages/*/src"]
    }
  }
}
~~~

###### 创建模块
> 现在在packages目录下新建两个package,用于下一章手写响应式原理做准备
- reactivity 响应式模块
- shared 共享模块
**所有包的入口均为`src/index.ts`,这样可以实现统一打包**

- reactivity/package.json
~~~javascript
{
  "name": "@vue/reactivity",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.js",
  "module":"dist/reactivity.esm-bundler.js",
  "buildOptions":{
    "name":"vueReactivity",
    "formats":[
      "global",
      "cjs",
      "esm-bundler"
    ]
  }
}
~~~
- shared/package.json
~~~javascript
{
  "name": "@vue/shared",
  "version": "1.0.0",
  "description": "",
  "module":"dist/shared.esm-bundler.js",
  "main": "./src/index.js",
  "buildOptions":{
    "name":"vueReactivity",
    "formats":[
      "cjs",
      "esm-bundler"
    ]
  }
}
~~~
> formats为自定义打包格式,有esm-bundler在构建工具中使用的格式,esm-browser在浏览器中使用的格式,cjs在node中使用的格式global立即执行函数的格式

~~~javascript
// scripts/dev.js
// 打包这个模块,格式为global
// node scripts/dev.js reactivity -f global 
// -f format 自定义属性 
// minimist 用来解析命令行参数的 后边括号,引包执行
const args = require('minimist')(process.argv.slice(2));
const {
    resolve
} = require('path');
const target = args._[0] || 'reactivity';
const format = args.f || 'global';
// 开发环境只打包某一个
const pkg = require(resolve(__dirname, `../packages/${target}/package.json`));
// iife 立即执行函数
// cjs node中的模块
// esm 浏览器中esModule模块
const outputFormat = format.startsWith('global') ?
    'iife' : format === 'cjs' ?
    'cjs' : 'esm';
const outfile=resolve(__dirname,`../packages/${target}/dist/${target}.${format}.js`);

build({
    entryPoints:[resolve(__dirname,`../packages/${target}/src/index.ts`)],
    outfile,
    bundle:true,
    sourcemap:true,
    format:outputFormat,
    globalName:pkg.buildOptions?.name,
    platform:format==='cjs'?'node':'browser',
    watch:{
        onRebuild(error){
            if(!error) console.log('rebuilt~~~')
        }
    }
}).then(()=>{
    console.log('watching~~~')
})

~~~

###### 开发环境esbuild打包

###### 开发环境rollup打包

### vue3响应式原理

#### vue3响应式

##### vue3对比vue2的变化
- 在vue2的时候使用defineProperty来进行数据劫持,需要对属性进行重写添加getter及setter性能差(defineProperty只能劫持以前存在的属性)
- 当新增属性和删除属性时无法监控变化.需要通过`$set`和`$delete`实现
- 数组不采用defineProperty来劫持(浪费性能,对所有索引进行劫持会造成性能浪费)需对数组单独进行处理
> vue3中使用Proxy来实现响应式数据变化,从而解决了上述问题

##### CompositionAPI
- 在vue2中采用的是OptionsAPI,用户提供的data,props,methods,computed,watch等属性(用户编写复杂逻辑业务会出现反复横跳问题)
- vue2中所有的属性都是通过this昂问,this存在指向明确问题
- vue2中很多未使用方法或属性依旧会被打包,并且所有全局API都在vue对象上公开,CompoositionAPI对tree-shaking更加友好,代码也更加容易压缩
- 组件逻辑共享问题,vue2采用mixins实现组件之间逻辑共享;但是会有数据来源不明确,命名冲突问题,vue3采用ComponsitionAPI提取公共逻辑非常方便