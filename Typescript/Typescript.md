

#### TypeScript特点
+ 官方对TypeScript有几段特点的描述,我觉得非常到位(虽然有些官方，了解- -下) , 我们一起来分享-下:
+ 始于JavaScript ,归于JavaScript
  - TypeScript从今天数以百万计的JavaScript开发者所熟悉的语法和语义开始。使用现有的JavaScript代码,包括流行的JavaScript库，并从JavaScript代码中调用TypeScript代码;
  - TypeScript可以编译出纯净、简洁的JavaScript代码 ,并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3 (或
更高版本)的JavaScript引擎中;
+ TypeScript是- -个强大的工具,用于构建大型项目
  - 类型允许JavaScript开发者在开发JavaScript应用程序时使用高效的开发工具和常用操作比如静态检和代码重构;
  - 类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。 类型让你定义软件组件之间的接口和洞察现有
JavaScript库的行为;


#### Typescript安装

`npm install typescript -g`

#### 环境搭建
##### webpack
下载ts-loader
webpack配置
~~~javascript
const path=require('path')

module.exports={
    entry:"./src/main.ts",
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:"bundle.js"
    },
    resolve:{
        extensions:[".ts"]
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                loader:'ts-loader'
            }
        ]
    }
}
~~~
##### ts-node


#### 变量声明
- typescript中定义变量需要制定标识符的类型
- 所以完整的声明格式如下
  - 声明类型后Typescript就会进行类型检测，声明的类型可以称之为类型注解
  - `var/let/const 标识符:数据类型 = 赋值 ;` 
  - `const msg: string = 'hello world';`

~~~typescript
const msg: string = 'hello world';
const num: number = 20010502;

// string: TypeScript中字符串类型
// String: JavaScript的字符串包装类的类型

// eslint => js代码规范
// tslint => ts代码规范
~~~

#### TypeScript数据类型

##### number类型
不区分浮点和整数
支持二进制，八进制，十六进制
~~~typescript
let num1: number = 100; // 十进制 100
let num2: number = 0b100; // 二进制 4
let num3: number = 0o100; // 八进制 64
let num4: number = 0x100; // 十六进制 256
~~~
##### boolean类型

`let flag: boolean = true`
`let flag: boolean = 20 > 30;`

##### string类型
默认情况下可以推导出类型可以不加
支持模板字符串
`let msg:string='hello world'`
`msg=`num1:${num1}--flag:${flag}--msg${msg}``

##### Array类型
~~~typescript
let arr: Array<string> = []; // 不推荐
let arr2: string[] = []; // 推荐
~~~

##### object类型
对象最好自己推导
负责无法赋值和取值
~~~typescript
let obj: object = {
    name: 'plumli',
    age: 18,
    height: 1.88
}
// 无法改值
// obj['name'] = 'plum';
let obj= {
    name: 'plumli',
    age: 18,
    height: 1.88
}
~~~
##### null和undefined

~~~typescript
let n1: null = null;
let u1: undefined = undefined;
~~~