
## 处理问题的方式
人面对复杂问题的处理方式
- 任何一个人处理信息的逻辑能力是有限的
- 当面对复杂问题事将问题进行拆解 



### 1.
#### vue3中data必须是一个函数，否则会报错
#### 编程范式
声明式编程：
- what to do
- 声明数据，声明方法，进行绑定
命令式编程：
- how to do
- 给浏览器发布命令 
#### MVVM模型
MVC和MVVM都是一种软件体系结构
- MVC式Model-View-Controller的简称，是在前期被使用非常的框架的架构模式，比如ios，前端
- MVVM是Model-View-ViewMode，是非常流行的架构模式 vue
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220110113743.png)

#### createApp
在使用createApp的时候，我们传入了一个对象1，接下来详细解析传入属性分别代表什么含义

##### template属性 
作用：标识是vue需要帮助我们渲染模板信息
template元素是一种用于保护客户端内容的机制，该内容在加载页面是不会被呈现，但随后可以在运行时使用javascript实例化 
- 目前我们看到它里面有很多html标签，这些标签会替换掉挂载到的元素(比如id为app的div)的innerHTML
- 模板中有一些奇怪的语法，比如{{}}，比如@click，这些都是模板特有语法
- template写法
    - 方法一：使用script标签
    ~~~html
    <script type="x-template" id="plum">
        <div>
            <h1>{{msg}}</h1>
            <h2>{{num}}</h2>
            <button @click="desc">-1</button>
            <button @click="add">+1</button>
        </div>
    </script>
    ~~~
    - 方法二：使用template(可以任意标签设置id)
    ~~~html
    <template id="plum">
        <div>
            <h1>{{msg}}</h1>
            <h2>{{num}}</h2>
            <button @click="desc">-1</button>
            <button @click="add">+1</button>
        </div>
    </template>
    ~~~
##### data属性
data属性是传入一个函数，并且该函数返回一个对象
- 在vue2.x中，也可以传入一个对象(虽然官方推荐是一个函数)
- 在vue3.x中，必须传入一个函数，否则就会直接在浏览器中报错
data中返回的对象会被Vue响应式系统劫持，之后该对象的修改或者访问都会在劫持中被处理
- 所以在template中通过{{counter}}访问counter，可以从对象中获取到数据
- 所以在修改counter的值是，template中的{{counter}}也会发生改变

##### methods属性
methods是一个对象，通常我们会在这个对象中定义很多方法
- 这些方法可以被绑定到template模板中
- 在该方法中，我们可以使用this关键字来直接访问到data中返回的对象的属性
注意：不应该使用箭头函数来定义method函数(如：`plus:()=>this.a++`)，理由是箭头函数绑定了父级作用域的上下文，所以this将不能按照期望指向组件实例，this.a将是undefined
问题一:为什么不能使用箭头函数(官方文档有给出解释)?
问题二:不使用箭头函数的情况下，this到底指向什么?

##### 其他属性
- props
- computed
- watch
- emits
- setup
- 生命周期

### 2.
#### methods方法绑定this
- 不能使用箭头函数
    我们在methods中要使用data返回对象中的数据：
    - 那么这个this是必填的，并且应该可以通过this获取到data返回对象中的数据
- 那么这个this能不能是window
    - methods中箭头函数的this指向window，找不到data中的值
- 为什么是window呢
    - 这里涉及到箭头函数使用this的查找规则，他会在自己的上层作用域中来查找this；
    - 最终刚好找到的是script作用域中的this，所以是window
- this的指向与绑定规则有关
    - 事实上vue的源码中就是对methods中的所有函数进行遍历，并且通过bind绑定this
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220110151052.png)
源码cop613

#### vue代码片段
代码片段[https://snippet-generator.app/]

#### 模板语法
vue支持jsx的开发模式
- 大多数情况下使用基于html语法；
- 在模板中，允许开发者以生命式的方式将DOM和底层组件实例的数据绑定在一起
- 在底层实现中，vue将模板编译成虚拟DOM渲染函数

#### mustache语法双大括号语法
在{}可以对数据直接进行运算，
也可以使用computed(计算属性)
也可以调用函数
也可以使用三元运算符
~~~html
<h2>{{message+'...'}}</h2>
<h2>{{message.split(' ').reverse().join(' ')}}</h2>
<h2>{{getUpMessage()}}</h2>
<h2>{{message?'三元表达式':'不显示'}}</h2>
~~~
错误语法
不能包含赋值语句
不能包含if语句
~~~html
<h2>{{var name='abc'}}</h2>
<h2>{{if(message){'if语句'}}}</h2>
~~~

#### 指令
v-once用于指定某个元素或者组件只渲染一次
- 当数据变化时，元素或者组件以及其所有的子元素将视为静态内容并跳过
- 该指令可以用于性能优化
- 子节点也是只会渲染一次

v-pre用于跳过元素和他的子元素编译过程，显示原始的musatch标签
- 跳过不需要编译的节点，加快编译速度

v-clock这个指令保持在元素上知道关联组件结束编译

v-bind
##### 提供动态绑定属性的一个指令
```html
<input type="button" name="" v-bind:title="mytitle" value="button">
```
v-bind属性可以简洁为一个：要绑定的属性，且v-bind中可以写合法的表达式
```html
<input type="button" name="" :title="mytitle +'123'' " value="button">
```
mytitle:'自定义title'
允许v-bind绑定属性值期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号如

##### 使用v-bind绑定对象
~~~html
<h2 v-bind="info">{{message}}</h2>
<!-- 编译后 -->
<h2 name="plum" age="21" height="178">Hello Plumli</h2>
<script>
    data: function () {
                return {
                    message: 'Hello Plumli',
                    info:{
                        name:'plum',
                        age:21,
                        height:178
                    }
                }
            }
</script>
~~~

#### v-on绑定事件
使用v-on可以监听用户的各种事件，比如点击，拖拽，键盘等等
v-on修饰符
    - .stop 调用event.stopPropagation()
    - .prevent 调用event.preventDefault()
    - .self 只当事件是从监听器绑定元素本身触发时才触发回调
    - .capture 添加事件监听器时使用capture模式
    - .{keyAlias} 仅当事件是从特定按键触发时才触发回调
    - .once 只触发一次回调
    - .left 只当点击鼠标左键时触发
    - .right 只当鼠标点击右键时触发
    - .middle 只当鼠标点击鼠标中键时触发
    - .passive {passive:true} 模式添加侦听器


### 列表渲染 diff算法

#### 条件渲染
基本使用

#### 列表渲染

v-for和template结合使用
template不会渲染，可以进行数据循环

#### 数据更新检测

Vue将被监听的数组变更方法进行包裹，所以他们也会触发试图更新，这些被包裹的方法包括
- .push()
- .pop()
- .shift()
- .unshift()
- .splice()
- .sort()
- .reverse()

#### v-for中key的作用
在使用v-for进行列表渲染时，通常给元素或者组件绑定一个key属性

这个key属性有什么作用
- key属性用在Cue的虚拟DOM算法，在新旧nodes对比边是VNodes
- 如果不适用key，Vue会使用一种最大限度减少动态元素并且尽可能的常士就地修改/服用相同类型元素算法
- 而使用key，他会基于key的变化重新排列元素顺序，别切会移除销毁/key不存在的元素

#### 认识VNode
目前没有学习完整的组件概念，随意先理解为html元素和VNode将的转换 
VNode全称时Virtual Node，也就是虚拟节点
事实上无论是组件还是元素，他们在vue中的表现形式都是VNode
VNode本质是一个JavaScript对象
~~~html
<div class="title" style="font-size: 30px;color:red;">Hello Plumli</div>
~~~
~~~javascript
const vnode={
    type:"div",
    props:{
        class:"title",
        style:{
            "font-size":"30px",
            "color":"red"
        },
    },
    children:"Hello Plumli"
}
~~~

template----->VNode----->真实DOM

好处：多平台的适配

#### 虚拟DOM
如果当前不是一个简单的div，而是一大堆元素，那么他们会形成一个VNode Tree
         div

       /  \   \
    
      /    \   \
    
    p      span strong

   / \

  /   \

  i    i

  #### 插入F案例
  点击按钮在中间插入一个f
  生成4个VNode
  diff算法：将原来的VNodes和现在VNodes内容做对比
  - 可以确定的是，这次更新对于ul和button时不需要进行更新滚，需要更新的是我们li列表
    - 在vue中，对于相同父元素的子元素节点不会重新渲染整个，列表
    - 行为对于列表中abcd他们都是没有变化的
    - 在操作真实Dom的时候，我们只要在中间插入一个li即可 
  - 那么Vue中对于列表的更新究竟是如何操作的呢
    - Vue事实上会对于有key和没key会调用两种不同的方法
    - 有key，那就使用patchKeyedChildren()方法
    - 没有key，使用patchUnkeyedChildren()
diff算法 找不同
使用key可以让代码效率更高

package>runtime-core>src>randerer.ts>baseCreateRander>patchKeyedChildren 1690
mount 挂载 将div放在真实dom上
unmount 销毁 卸载真实dom上div

红黑树手写

patch打补丁

### 04 计算属性
#### 复杂data的处理方式
在模板中可以直接通过插值语法显示一些data中的数据
但是在某些情况下，我们可能需要对数据进行一些转化后在现实，或者将多个数据结合起来进行显示
- 比如需要对多个data数据进行运算，三元运算符来决定结果，数据进行某种转化后显示
- 在模板中使用表达式，可以非常方便的实现，但是设计他们的初衷时用于简单的运算
- 在模板中放入太多的逻辑会让模板过重难以维护
- 并且如果多个地方使用到，那么会有大量的重复代码
有没有方法可以将逻辑抽离
- 可以，其中一种方式就是将逻辑抽取到一个method中，放到methods的options中
- 但是，这中做法有一个弊端，就是所有的data使用过程就变成了方法的调用 
- 另外有一种方法就是使用计算属性
#### 计算属性computed
什么是计算属性：
- 对于任何包含响应式的复杂逻辑，都应该使用计算属性
- 计算属性将会被混入到组件实例中，getter和setter的this上下文自动绑定为组件实例
计算属性的方法：
- 选项：computed
- 类型：`{key:string:[Function]|{get:Function,set:Function}}`

三个案例：
- 有两个变量：firstName和lastName，希望他们拼接之后在界面上显示；
- 有一个分数
    - 当大于60在页面显示及格
    - 当小于60在页面显示不及格
- 有一个变量message,记录一段文字
    - 某些情况下直接显示这段文字
    - 某些情况下需要对文字进行反转
三种思路：
- 在模板语法中直接使用表达式
- 使用method对逻辑进行抽取
- 使用计算属性computed

计算属性的好处：
计算属性是有缓存的

#### 计算属性 vs methods
在上面的实现路由中，我们会发现计算属性和methods的实现看起来是差别不大的，而且我们多次提到计算属性有缓存的

计算属性在数据更改时会重新计算,后续会使用计算后的数据，计算属性是有缓存的

#### 计算属性的setter和getter
~~~html
<div id="app"></div>
    <template id="my-app">
        <h2>{{message.split(' ').reverse().join(' ')}}</h2>
        <h2>{{name}}</h2>
        <h2>{{score}}</h2>
        <button @click="changeName">changeName</button>
    </template>
    <script src="../js/vue.global.js"></script>

    <script>
        const App = {
            template: '#my-app',
            data: function () {
                return {
                    message: 'Hello Plumli',
                    // score:'',
                    firstName: 'Li',
                    lastName: 'Plum'
                }
            },
            computed: {
                // 定义了计算属性叫name
                name: {
                    get() {
                        console.log('computed');
                        return this.firstName + this.lastName;
                    },
                    set(newValue){
                        const names=newValue.split(' ');
                        this.firstName=names[0]
                        this.lastName=names[1]
                    }
                },
                score() {
                    let score = 70;
                    return score > 60 ? '及格' : '不及格'
                }
            },
            methods: {
                changeName(){
                    this.name='L YH'
                }
            }
        }
        Vue.createApp(App).mount('#app')
    </script>
~~~


#### watch 侦听器
什么是侦听器
- 开发过程中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中
- 当数据变化是，template会自动进行更新来显示最新的数据
- 但是在某些情况下我们希望在代码逻辑中监听某个数据的便哈，这个时候就需要用到侦听器watch来完成

监听某些值的变化并作出反应
~~~javascript
methods:{
    queryAnswer(){
        console.log(`你的问题${this.question}是`+':哈哈哈');
    }
},
watch:{
    question(newvalue,oldvalue){
        console.log(newvalue);
        this.queryAnswer()
    }
}
~~~
#### 侦听器的配置选项
默认情况下侦听器只会侦听数据本身发生改变，但是数据内部发生变化无法被侦听

##### 深度侦听 deep
~~~javascript
watch:{
    info:{
        handler(newI,oldI){
            console.log(newI,oldI);
        },
        deep:true
    }
}
~~~
##### 立即执行:immediate
~~~javascript
watch:{
    info:{
        handler(newI,oldI){
            console.log(newI,oldI);
        },
        deep:true,
        immediate:true
    }
}
~~~
#### 侦听器watch的其他方式
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220111152456.png)
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220111152527.png)
还有一种方式是$watchAPI
我们可以在created的生命周期中，使用this.$watchs来侦听:
- 第一个参数是要侦听的源
- 第二个参数是侦听的回调函数callback
- 第三个参数是额外的其他选项，比如deep，immediate

### vue3的表单和开发模式

#### watch深度监听数组
展示数组时展示一个基本组件，利用v-for进行遍历
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220112095108.png)

#### v-model的基本使用
表单提交是开发中非常常见的功能，也是和用户交互的重要手段
- 比如在登陆注册时提交账号密码
- 比如在检索创建更新信息是，提交一些数据
这些都要求我们可以在代码逻辑中获取到用户提交的数据，我们通常会使用v-model指令来完成
- v-model指令可以在表单input，textarea以及select元素上创建数据双向绑定
- 它会根据控件类型自动选取正确的方法来更新元素
- 尽管有些生气，但v-model本质上不过是语法糖，她负责监听用户输入事件来更新数据，并在某种极端场景下进行一些特殊处理 

#### v-model的原理
官方说到v-model的原理其实是背后的两个操作：
- v-bind绑定value属性的值
- v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中

`<input type="text" :value="message" @input="inputChange">`
`<input type="text" v-model="message">`

#### 事实上v-model更加复杂
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220112102422.png)


#### v-model绑定radio
~~~html
        <label for="male">
            <input id="male" type="radio" v-model="gender" value="male">男
        </label>
        <label for="female">
            <input id="female" type="radio" v-model="gender" value="female">女
        </label>
        <h3>gender:{{gender}}</h3>
~~~
#### v-modle绑定select
~~~html
        <select v-model="fruit" name="" id="">
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
        </select>
        <h2>fruit:{{fruit}}</h2>
~~~

#### v-model的值绑定
目前我们在前面的案例中大部分的值都是在template中固定好的
- 比如gender的联合个输入框值male，female
- 比如hobbires的三个输入框值basketball，football，tennis
在真实开发中，我们的数据可能来自服务器的，那么我们就可以先将值请求下来，绑定到data返回的对象中，再通过v-bind来进行值绑定，这个国产就是值绑定

#### v-model修饰符
- .lazy
    - 默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么回在每次输入内容后将最新的值和绑定的属性进行同步
    - 如果我们在v-model后跟上lazy修饰符，那么会将绑定的事件切换为change事件，只有在提交时(比如回车)才会触发。
- number
    - message作为string类型，即使设置type为number也是string类型
    - 如果我们希望转换为数字类型是，可以使用.number修饰符
    - 另外在进行逻辑判断时，如果是string类型会进行隐式转换
- trim
    - 如果要自动过滤用户输入的首尾空白字符，可以给v-model添加trim修饰符

<!-- #### v-model组件上使用 -->


#### 组件化开发
将一个页面中所有的处理逻辑全部
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220112112020.png)
- 整个大前端都是组件化天下
- 学习组件化最主要是学习思想
我们需要通过组件化思想来思考整个应用程序
- 我们将一个完整的页面分成更多个组件，每个组件都用于是西安页面的一个功能块
- 每个组件又可以进行细分
- 组件本身可以在多个地方进行复用
- 任何应用都会被抽象成一棵组件树

全局组件
~~~html
    <div id="app"></div>
    <template id="my-app">

        <c-a></c-a>
        <c-a></c-a>
        <c-a></c-a>
        <c-a></c-a>
    </template>

    <template id="c-a">
        <h1>App</h1>
        <h2>我是c-a组件</h2>
        {{title}}
        <button @click="btnc">c-a-btn</button>
    </template>

    <script src="../js/vue.global.js"></script>

    <script>
        const App = {
            template: '#my-app',
        }
        const app=Vue.createApp(App);
        // 使用app注册组件
        // app.component(组件名称,组件对象)
        app.component('c-a',{
            template:'#c-a',
            data(){
                return{
                    title:'我是c-ad的title'
                }
            },
            methods:{
                btnc(){
                    console.log('btnc');
                }
            }
        })
        app.mount('#app');
    </script>
~~~

#### 注册组件的方式
如果我们现在有一部分内容(模板，逻辑)，我们希望将这部分内容抽取到一个独立的组件中去维护，这个时候需要注册组件
注册组件分为两种：
- 全局组件：在任何其他的组件中都可以使用的组件
- 局部组件：只有在注册的组件中才能使用的组件

#### 组件的名称
在通过app.component注册一个组件的时候，第一个参数是组件的名称，定义组件名的方式有两种：
- 使用kebab-case (短横线分隔符)
- 使用KebabCase驼峰命名
~~~html
    <div id="app"></div>
    <template id="my-app">
        <c-a></c-a>
        <c-b></c-b>
    </template>

    <template id="c-a">
        <h1>App</h1>
        <h2>我是c-a组件</h2>
        {{title}}
        <button @click="btnc">c-a-btn</button>
    </template>
    <template id="c-b">
        <h1>驼峰命名组件</h1>
    </template>
    
    <script src="../js/vue.global.js"></script>

    <script>
        const App = {
            template: '#my-app',
        }
        const app=Vue.createApp(App);
        // 使用app注册组件
        // app.component(组件名称,组件对象)
        app.component('c-a',{
            template:'#c-a',
            data(){
                return{
                    title:'我是c-ad的title'
                }
            },
            methods:{
                btnc(){
                    console.log('btnc');
                }
            }
        })
        app.component('c-b',{
            template:'#c-b'
        })
        app.mount('#app');
    </script>
~~~
#### 注册局部组件
全局组件往往实在应用程序一开始就会全局组件完成，那么就意味着如果某些组件没有用到也会被一起注册。
- 比如我们注册了三个全局组件 ComponentA,ComponentB,ComponentC
- 在开发中只使用了ComponentA,ComponentB,如果ComponentC没有用到但是我们依然在全局进行了注册，那么就意味着类似于webpack这种打包工具打包项目是，依然会对其进行打包
- 这样最终打包出来的js包就会有关于ComponentC的内容，用户在下载对应的js时也会增加包的大小
所以在开发时通常使用组件的时候采用的都是局部注册
- 局部注册是在我们需要使用到的组件中，通过components属性选项来进行注册
- 比如之前的App组件中，我们有data，computed，methods等选项，事实上还有一个components选项
- 该components选项对应的是一个对象，对象中的键值对是  组件名称:组件对象
~~~html
    <div id="app"></div>
    <template id="my-app">
        <h2>{{message}}</h2>
        <c_a></c_a>
    </template>
    <script src="../js/vue.global.js"></script>
    <template id="c-a">
        <h1>C-A</h1>
        <h2>我是局部组件</h2>
    </template>
    <script>
        const c_a={
            template:'#c-a',
        }
        const App = {
            template: '#my-app',
            components:{c_a},
            data: function () {
                return {
                    message: 'Hello Plumli'
                }
            }
        }
        Vue.createApp(App).mount('#app')
    </script>
~~~

#### vue的开发模式
目前我们使用vue的过程都是在html文件中，通过template编写自己的模板，脚本样式，样式等
随着项目越来越复杂，我们会采用组件化的方式来进行开发
- 这就意味着每个组件都会有自己的模板，脚本逻辑，样式等
- 当然我们依然可以把他们抽离到单独的js，css文件中，但是他们还是会分离开
- 也爆扣我们的script实在一个全局的作用于下，很容易出现命名冲突的问题
- 并且我们的代码为了适配一些浏览器，必须使用es5语法
- 在编写代码完成之后，以染需要通过工具对代码进行构建,代码

#### 如何支持SFC
如果我们想要使用这一个SFC的.vue文件，比较常见的两种方式
- 使用vue-cli来创建项目，项目会默认帮助我们配置好所有的配置选项，可以在其中直接使用.vue文件
- 自己使用webpack或者rollup或者vite这类打包工具，对其进行打包处理

项目中更多情况下是使用vue-cli


### webpack基础打包
事实上随着前端的快速发展，前端开发变得越来越复杂
- 通过模块化方式来开发
- 使用高级特性来加快开发效率或者安全性，比如es6+，ts，sass，less
- 通过监听文件变化并反映到浏览器上，提高开发效率
- 将代码进行压缩合并以及其他相关优化
- ...
#### webpack到底是什么
webpack是一个静态的模块化打包工具，为现代的javascript应用程序

对上边的解释进行拆解：
- 打包bundler：webpack可以将帮助我们打包，所以他是一个打包工具
- 静态的static：这样表述的原因是我们最终可以将代码打包成最终的静态资源(部署到静态服务器)
- 模块化module：webpack默认支持各种模块化开发，ESModule，CommonJS，AMD等
- 现代的modern：真实因为现代前端开发面临各种各样的问题，才催生了webpack的出现和发展

#### vue项目加载文件有哪些
javascript打包
- 将es6转化为es5
- typescript转化为javascript
css的处理
- css文件模块的加载，提取
- less，sass等处理器处理
资源文件img，font：
- 图片img文件的加载
- 字体font文件的加载
html资源的处理
- 打包html资源文件
处理vue项目的sfc文件.vue文件

#### vuecli 脚手架
+ 什么是Vue脚手架?
  - 我们前面学习了如何通过webpack配置Vue的开发环境,但是在真实开发中我们不可能每一个项目从头来完成所有的webpack配置,这样显示开发的效率会大大的降低;
  - 所以在真实开发中,我们通常会使用脚手架来创建一个项目 , Vue的项目我们使用的就是Vue的脚手架;
  - 脚手架其实是建筑工程中的一个概念,在我们软件工程中也会将-些帮助我们搭建项目 的工具称之为脚手架;
+ Vue的脚手架就是Vue CLI :
  - CLI是Command-Line Interface,翻译为命令行界面;
  - 我们可以通过CLI选择项目的配置和创建出我们的项目;
  - Vue CL已经内置了webpack相关的配置,我们不需要从零来配置;
#### 创建项目过程
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220114163036.png)

#### vuecli运行原理
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115092500.png)

#### 认识vite
webpack是目前整个前端使用最多的构建工具，但是除了webpack之后也有其他的构建工具
  - 比如rollup,parcel,gulp,vite等等
什么是vite？官方定位:下一代前端开发与构建工具
如何定义下一代开发和构建工具？
  - 我们知道在实际开发中，我们编写的代码往往是不能被浏览器直接识别的，比如es6,typescript,vue文件等；
  - 所以我们必须通过构建工具来对代码进行转换，编译，类似的工具有webpack，rollup，parcel
  - 但是随着项目越来越拉，需要处理的javascript呈指数级增长，模块越来越多
  - 构建工具需要很长时间才能开启服务器，HMR也需要几秒钟才能在浏览器反应过来
  - 所以有这样的说法：天下苦webpack久矣

#### vite构造
它主要由两部分组成
  - 一个开发服务器，它基于原生es模块提供了吩咐的内建功能，HMR的速度非常快速
  - 一套构建指令，它使用rollup打开我们代码，并且它是与配置的，可以输出生成环境的优化过的静态资源
目前是否要大力学习vite ? vite的未来是怎么样的?
  - 我个人非常看好vite的未来,也希望它可以有更好的发展;
  - 但是,目前vite虽然已经更新到2.0 ,依然并不算非常的稳定,并且比较少大型项目(或框架)使用vite来进行
构建;
  - vite的整个社区插件等支持也还不够完善; .
  - 包括vue脚手架本身,目前也还没有打算迁移到vite ,而依然使用webpack (虽然后期-定是有这个打算的)
  - 所以vite看起来非常的火热,在面试也可能会问到,但是实际项目中应用的还比较少;

#### vite原理
vite会建造一个本地服务器 vite 1 koa vite 2 connect


#### vite对vue支持
vite对vue提供第一优先级支持 :
  - Vue 3单文件组件支持主@vitejs/plugin-vue_ 中
  - Vue 3 JSX支持: @vitejs/plugin-vue-jsx
  - Vue 2支持: underfin/vite-plugin-vue2

#### vite打包项目


#### ESBuild
ESBuild使用Go语言编写，可以直接转换成机器代码，而无需经过字节码
ESBuild可以充分利用CPU的多内核，尽可能让他们进行饱和
ESBuild的所有内容都是从0开始编写，而不是使用第三方，所以从一开始就可以考虑各种性能问题
ESBuild的特点:
  - 超快的构建速度,并且不需要缓存;
  - 支持ES6和CommonJS的模块化; 
  - 支持ES6的Tree Shaking ;
  - 支持Go、JavaScript的API ;
  - 支持TypeScript. JSX等语法编译;
  - 支持SourceMap ;
  - 支持代码压缩;
  - 支持扩展其他插件;


#### vite脚手架
官方文档

## vue3组件化开发

#### 认识组件嵌套
+ 前面我们是将所有的逻辑放到- -个App.vue中:
  - 在之前的案例中,我们只是创建了-个组件App ;
  - 如果我们一个应用程序将所有的逻辑都放在一个组件中 ,那么这个组件就会变成非
常的臃肿和难以维护;
  - 所以组件化的核心思想应该是对组件进行拆分,拆分成一个个小的组件;
  - 再将这些组件组合嵌套在-起,最终形成我们的应用程序;
#### 组件的拆分
我们可以按照以下方式进行拆分
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115100700.png)

#### css作用域
`scoped`防止样式污染
没有根组件会被污染


#### 组件通信
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115100700.png)
+ 上面的嵌套逻辑如下,它们存在如下关系:
  - App组件是Header. Main、 Footer组件的父组件
  - Main组件是Banner. ProductList组件的父组件 ;
+ 在开发过程中,我们会经常遇到需要组件之间相互进行通信:
  - 比如App可能使用了多个Header ,每个地方的Header展示的内容不同,那么我们就需要使用者传递给Header
一些数据, 让其进行展示;
  - 又比如我们在Main中- -次性请求了Banner数据和ProductList数据,那么就需要传递给它们来进行展示;
  - 也可能是子组件中发生了事件,需要由父组件来完成某些操作,那就需要子组件向父组件传递事件;

#### 父子组件之间通信
- 父组件传递给子组件：通过props属性
- 子组件传递给父组件：通过$emit触发事件
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115103940.png)

#### 父组件传递给子组件
在开发过程中很常见的就是负组件之间通信，比如父组件的一些数据需要子组件来展示:
  - 这个时候可以通过props来完成组件之间通信
什么是props
  - props可与是在组件上注册一些自定义的attribute
  - 父组件给这些attribute赋值，子组件通过attribute的名称获取到相应的值
props有两种常见写法
  - 字符串数组，数组中的字符串就是attribute的名称
  - 对象类型，对象类型我们可以在指定的attribute名称同时，指定它需要传递的类型，是否是必须的，默认值等等
    - type:String,Number,Bollean,Array,Object,Data,Function,Symbol
    - object类型写一个函数 创建多个组件时，引用的是一个地址 所以需要写成函数进行返回
    - 可以通过valuedator进行验证
对象类型其他写法 ![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115105718.png)
Prop的大小写命名(camelCase vs kebab-case)
  - HTML中的attribute名是大小写不敏感的,所以浏览器会把所有大写字符解释为小写字符; 
  - 这意味着当你使用DOM中的模板时, camelCase (驼峰命名法)的prop名需要使用其等价的kebab-case (短横线分隔命名)命名;

    ~~~javascript
    obj:{
        type:Object,
        default(){
            return {name:'zs'}
        }
    }
    ~~~
~~~javascript
    props:['title','content','footer'],
~~~
~~~javascript
props: {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},
~~~

#### 非Prop的Attribute
什么是非Prop的Attribute
  - 当我们传递一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为非Prop的Attribute
  - 常见的包括class，style，id属性
Attribute继承
  - 当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中

  #### 禁用Attribute
如果我们不希望组件的根元素继承attribute ,可以在组件中设置inheritAttrs: false :
  - 禁用attribute继承的常见情况是需要将attribute应用于根元素之外的其他元素;
  - 我们可以通过$attrs来访问所有的非props的attribute ;
  - ![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115112647.png)
多个根节点的attribute
  - 多个根节点的attribute如果没有显示的绑定,那么会报警告,我们必须手动的指定要绑定到哪一个属性上:
  - ![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220115112752.png)

#### 子组件传递给父组件
+ 什么情况下子组件需要传递内容到父组件呢?
  - 当子组件有一些事件发生的时候 ,比如在组件中发生了点击,父组件需要切换内容;
  - 子组件有一-些内容想要传递给父组件的时候;
+ 我们如何完成上面的操作呢?
  - 首先,我们需要在子组件中定义好在某些情况下触发的事件名称; 
  - 其次,在父组件中以v-on的方式传入要监听的事件名称,并且绑定到对应的方法中;
  - 最后,在子组件中发生某个事件的时候,根据事件名称触发对应的事件; 


#### 非父子组件之间通信
在开发中，我们构建了组件树之后，除了父子组件之间的通信外，还会有非父子组件之间的通信
在这里主要学两种方式
- Provide/Inject
- Mitt全局事件总线

#### Provide/Inject
Provide/Inject用于非父子组件之间共享数据
  - 比如有一些深度嵌套的组件，子组件想要获取父组件的部分内容
  - 在这种情况下，如果仍然按照props沿着组件链逐级传递下去，就会变得非常麻烦
对于这种情况，我们为你可以使用Provide和Inject
  - 无论层级多深，父组件都可以作为其所有组件的以来提供者
  - 父组件有一个Provide选项来提供数据
  - 子组件有一个inject选项来使用这些数据
实际上，你可以将依赖注入看作是long range props，除了：
  - 父组件不需要知道哪些子组件使用它provide的property
  - 子组件不需要知道inject的property来自哪里
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220117095809.png)
provide最好不变，确保使用this的时候不会出错
~~~javascript
// 爷
  provide() {
    return {
      name: "plumli",
      age: 20,
      length: computed(()=>this.names.length), // 一次性赋值 返回ref对象 .value 
    };
  },
// 孙
inject:['name','age','length'],
~~~
#### 处理响应式数据
我们先来验证一个结果:如果我们修改了this.names的内容,那么使用length的子组件会不会是响应式的?
我们会发现对应的子组件中是没有反应的:
  - 这是因为当我们修改了names之后,之前在provide中引入的this.names.length本身并不是响应式的;
那么怎么样可以让我们的数据变成响应式的呢?
  - 非常的简单,我们可以使用响应式的一些API来完成这些功能,比如说computed函数;
  - 当然,这个computed是vue3的新特性，在后面我会专]讲解,这里大家可以先直接使用一下;
注意:我们在使用length的时候需要获取其中的value
  - 这是因为computed返回的是一个ref对象 ,需要取出其中的value来使用;
#### 全局事件总线mitt库(eventBus)
Vue3从实例中移除了$on、 $off和$once方法,所以我们如果希望继续使用全局事件总线,要通过第三方的库:
  - Vue3官方有推荐- -些库 ,例如mitt或tiny-emitter;
  - 这里我们主要讲解一下mitt库的使用;
发送事件
`emitter.emit('cli',{name:'plumli',age:20})`
监听事件
~~~javascript
    emitter.on('cli, (info) => {
      console.log('cli',info);
    });
~~~
#### mitt的事件取消
在某些情况下可能希望取消掉之前注册的函数监听
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220117105335.png)

#### 认识插槽slot
在开发中,我们会经常封装-个个可复用的组件:
  - 前面我们会通过props传递给组件一些数据 ,让组件来进行展示;
  - 但是为了让这个组件具备更强的通用性,我们不能将组件中的内容限制为固定的div、span等等这些元素;
  - 比如某种情况下我们使用组件,希望组件显示的是一个按钮 ,某种情况下我们使用组件希望显示的是一张图片;
  - 我们应该让使用者可以决定某一块区域到底存放什么内容和原生;
举个栗子:假如我们定制一一个通用的导航组件- NavBar
  - 这个组件分成三块区域:左边-中间-右边,每块区域的内容是不固定;
  - 左边区域可能显示一个菜单图标,也可能显示一个返回按钮,可能什么都不显示;
  - 中间区域可能显示一个搜索框,也可能是一个列表,也可能是一个标题 ,等等;
  - 右边可能是- -个文字,也可能是一个图标,也可能什么都不显示;
    ![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220117110117.png)
#### 如何使用插槽
这个时候我们就可以来定义插槽slot:
  - 插槽的使用过程其实是抽取共性、预留不同;
  - 我们会将共同的元素、内容依然在组件内进行封装; 
  - 同时会将不同的元素使用slot作为占位,让外部决定到底显示什么样的元素;
如何使用slot呢?
  - Vue中将<slot> 元素作为承载分发内容的出口;
  - 在封装组件中,使用特殊的元素<slot>就可以为封装组件开启一个插槽;
  - 该插槽插入什么内容取决于父组件如何使用;
#### 插槽的基本使用


#### 具名插槽使用
事实上,我们希望达到的效果是插槽对应的显示,这个时候我们就可以使用具名插槽:
  - 具名插槽顾名思义就是给插槽起一个名字, <slot>元素有一一个特殊的attribute : name ;
  - 一个不带name的slot ,会带有隐含的名字default ;

~~~javascript
    // 父
    <div>
        <h1>App</h1>
        <nav-bar>
            <template v-slot:left>
                <button>左边按钮</button>
            </template>
            <template v-slot:center>
                <h2>title</h2>
            </template>
            <template v-slot:right>
                <i>右边元素</i>
            </template>
        </nav-bar>
    </div>
~~~
~~~javascript
  // 子
  <div class="nav-bar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="center">
        <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
~~~

#### 动态插槽名
什么是动态插槽名呢?
  - 目前我们使用的插槽名称都是固定的;
  - 比如v-slot:left、v-slot:center等等 ;
  - 我们可以通过v-slot:[dynamicSlotName]方式动态绑定一个名称;
  - 通过props传递

#### 具名插槽v-slot缩写

v-slot: ===> #

#### 渲染作用域
在vue中有渲染作用域的概念：
  - 父级模板里的内容都是在父级作用域编译的
  - 子级模板内容都是在子作用域编译的
如何理解这句话：
  - 在我们的案例中ChildCpn自然是可以让问自己作用域中的title内容的;
  - 但是在App中,是访问不了ChildCpn中的内容的,因为它们是跨作用域的访问;

#### 作用域插槽
但是有时候我们希望插槽可以访问到子组件中的内容是非常重要的:
  - 当一个组件被用来渲染一个数组元素时 ,我们使用插槽,并且希望插槽中没有显示每项的内容;
  - 这个Vue给我们提供了作用域插槽;
我们来看下面的- -个案例:
  - 在App.vue中定义好数据
  - 传递给ShowNames组件中
  - ShowNames组件中遍历names数据
  - 定义插槽的prop
  - 通过v-slot:default的方式获取到slot的props
  - 使用slotProps中的item和index

#### 作用域插槽案例
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220117153615.png)
~~~html
  <!-- 子组件内 -->
  <div>
      <template v-for="(item,index) in names">
          <slot name="plum" :item="item" :index="index"></slot>
          <slot :item="item" :index="index"></slot>
      </template>
  </div>

  <!-- 父组件内 -->
  <div>
    <h1>APP</h1>
    <!-- 非默认插槽 -->
    <child-cpn :names="names">
      <template #plum="slotProps">
        <strong>{{ slotProps.item }}--{{ slotProps.index }}</strong>
      </template>
    </child-cpn>

    <!-- 独占默认插槽缩写 -->
    <child-cpn :names="names" v-slot="slotProps">
      <strong>{{ slotProps.item }}--{{ slotProps.index }}</strong>
    </child-cpn>
    <!-- 如果有其他具名插槽，需要使用template编写 -->
    <!-- 默认插槽和具名插槽混合 -->
    <child-cpn :names="names">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}--{{ slotProps.index }}</strong>
      </template>
      <template #plum>
        <h2>xxx</h2>
      </template>
    </child-cpn>
  </div>
~~~

### keepalive生命周期组件vmodel

#### 切换组件案例

##### v-if
~~~html
<button
  :class="{ active: currentTab === item }"
  v-for="(item, index) in tabs"
  :key="index"
  @click="itemClick(item)"
>
  {{ item }}
</button>
<template v-if="currentTab==='home'">
  <home></home>
</template>
<template v-else-if="currentTab==='about'">
  <about></about>
</template>
<template v-else>
  <category></category>
</template>
~~~
##### 动态组件实现
动态组件是使用component组件，通过一个特殊的attribute is 来实现：
~~~html
<button
  :class="{ active: currentTab === item }"
  v-for="(item, index) in tabs"
  :key="index"
  @click="itemClick(item)"
>
  {{ item }}
</button>
<component :is="currentTab"></component>
~~~
这个currentTab的值需要什么内容
  - 可以是通过component函数注册的组件；
  - 在一个组件对象的components对象中注册组件

  #### 动态组件传值
  ~~~html
<component :is="currentTab" name="plum" :age="18"       @pageClick="pageClick"></component>
  ~~~

#### keep-alive
我们先对之前的案例中About组件进行改造:
  - 在其中增加了一个按钮，点击可以递增的功能
比如减counter点到10，那么在切换到home再切换到about是，状态是否可以保持
  - 答案是否定的
  - 这是因为默认情况下，我们在切换组件后，about组件会被销毁掉，再次回来的时候会重新创建组件
但是再开发情况下我们希望继续保持组件状态而不是销毁掉，此时就可以使用一个内置组件：`keep-alive`
~~~html
<keep-alive>
  <component
    :is="currentTab"
    name="plum"
    :age="18"
    @pageClick="pageClick"
  ></component>
</keep-alive>
~~~
#### keep-alive属性
keep-alive有一些属性
  - include-string|RegExp|Array，只有名称匹配的组件会被缓存
  - exclude-string|RegExp|Array，任何名称匹配的组件都不会被缓存
  - max-number|string。最多可以缓存多少个组件实例，一旦达到这个数字，那么缓存组件中最近没有被缓存的组件示例会被销毁
include和extende prop允许组件有条件的缓存
  - 二者都可以用逗号分割字符串，正则表达式或一个数组来表示
  - 匹配首先检查组件自身的name选项
~~~html
    <!-- 逗号分隔 -->
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="plum"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
    <!-- 正则 使用v-bind -->
    <keep-alive :include="/home|about/">
      <component
        :is="currentTab"
        name="plum"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
    <!-- Array 使用v-bind -->
    <keep-alive :include="['home','about']">
      <component
        :is="currentTab"
        name="plum"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
~~~
#### 缓存组件的生命周期
对于缓存的组件来说，再次进入是，我们是不会执行created或者mounted等生命周期函数的:
  - 但是有时候我们确实希望监听到何时进入到了该组件，何时离开了该组件；
  - 这个时候我们可以使用activated和deactivated这两个什么名周期钩子函数来监听

#### webpack的代码分包
默认打包过程：
  - 默认情况下，在构建整个组件树的过程中，因为组件和组件之间通信是通过模块化直接以来的，那么webpack在打包时会将组建模块打包到1一起(比如一个app.js文件中)
  - 这时候随着项目的不断庞大，app.js文件的内容过大，会造成受聘的渲染速度变慢；

~~~javascript
// 通过import函数导入的模块，webpack打包时会进行分包操作
import('./11/utils/math').then(res=>{
    console.log(res.sum(1,2));
})

~~~

#### vue中实现异步组件
异步组件实现代码分包
如果项目过大，对于某些组件我们希望通过异步的方式进行加载(目的是对其进行分包处理)，那么vue中提供给我们了一个:defineAsyncComponent
`import { defineAsyncComponent } from "vue";`
defineAsyncComponent 接受两种类新的参数:
  - 类型一：工厂函数，该工厂函数需要返回一个promise对象；
  - 类型二：接受一个对象类型，对异步函数进行配置
~~~javascript
// 类型一：
import { defineAsyncComponent } from "vue";
const AsyncCategory =
   defineAsyncComponent(() => import("./AsyncCategory.vue"));
export default {
  components: { AsyncCategory },
};
~~~
~~~javascript
// 类型二：
import { defineAsyncComponent } from "vue";
const AsyncCategory = defineAsyncComponent({
  loader: () => import("./AsyncCategory.vue"),
  // 加载过程占位组件
  loadingComponent: Loading,
  // errorComponent: 加载失败时的组件，
  // 在现实 loadingComponent 组件前等待多长时间
  delay:2000,
  /**
   * err:错误信息
   * retry：函数，调用retry尝试重新加载
   * attempts：记录尝试的次数
   */
  onError: function(err,retry,attempts){}
});
export default {
  components: { AsyncCategory },
};
~~~
#### 异步组件和Suspense
async-category 为异步组件
loading 为非异步组件
Suspense是一个内置全局组件，该组件有两个插槽
  - default:如果default可以显示，那么显示default内容
  - fallback:如果default无法显示，那么回西安是fallback
~~~html
    <suspense>
        <template #default>
            <async-category></async-category>
        </template>
        <template #fallback>
            <loading></loading>
        </template>
    </suspense>
~~~
#### $refs的使用
某些情况下,我们在组件中想要直接获取到元素对象或者子组件实例:
  - 在Vue开发中我们是不推荐进行DOM操作的;
  - 这个时候,我们可以给元素或者组件绑定一个ref的attribute属性 ;
组件实例有一个$refs属性:
  - 它本身是个对象Object ,持有注册过ref attribute的所有DOM元素和组件实例。
~~~html
    <h1 ref="h1">app</h1>
    <nav-bar ref="navBar"></nav-bar>
    <button @click="btnClick">获取元素</button>
~~~
~~~javascript
    btnClick() {
      console.log(this.$refs.h1);
      console.log(this.$refs.navBar.message);
      this.$refs.navBar.sayHello()
    },
~~~
#### $parent和$root
用于在子组件中获取对应的父组件或者根组件
我们可以通过$parent来访问父元素。
HelloWorld.vue的实现:
  - 这里我们也可以通过$root来实现,因为App是我们的根组件;
  - ~~~javascript
      visitParent(){
        console. log (this. s$parent . message) ;
        console. log(this. $root . message) ;
      }
      ~~~
注意:在Vue3中已经移除了$children的属性,所以不可以使用了。

#### $el
在组件中通过$el拿到组件根元素

~~~javascript
// NavBar
console.log(this.$el);
// <div>
    // <h3>NavBar</h3>
    // <h3>{{message}}</h3>
    // <button @click="getDate">NavBar获取父组件和根组件</button>
// </div>
~~~

#### 生命周期
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220118115059.png)
什么是生命周期呢?
  - 每个组件都可能会经历从创建、挂载、更新、卸载等一系列的过程;
  - 在这个过程中的某一个阶段 ,用于可能会想要添加一一些属于自己的代码逻辑(比如组件创建完后就请求-些服务器数据) ;
  - 但是我们如何可以知道目前组件正在哪一个过程呢? Vue给我们提供了组件的生命周期函数;
生命周期函数: 
  - 生命周期函数是-些钩子函数,在某个时间会被Vue源码内部进行回调;
  - 通过对生命周期函数的回调,我们可以知道目前组件正在经历什么阶段; 
  - 那么我们就可以在该生命周期中编写属于自己的逻辑代码了;
  ~~~javascript
    beforeCreate() {
      console.log("beforeCreate 阶段 创建前");
    },
    created() {
      console.log("created 阶段 创建成功");
    },
    beforeMount() {
      console.log("beforeMount 阶段 挂载前");
    },
    mounted() {
      console.log("mounted 阶段 挂载成功");
    },
    beforeUnmount() {
      console.log("beforeUnmount 阶段 卸载前");
    },
    unmount() {
      // 取消注册的事件
      console.log("beforeUnmount 阶段 卸载成功");
    },
    beforeUpdate() {
      console.log("beforeUpdate 阶段 更新前");
    },
    updated() {
      console.log("update 阶段 更新成功");
    },
  ~~~

#### 组件的v-model

~~~html
  <!-- 父 -->
  <div>
    <h1>组件的v-model</h1>
    <h2>{{ message }}</h2>
    <input :value="message" @input:model-value="message=$event">
    <pl-input v-model="message"></pl-input>
  </div>
  <!-- 子 -->
  <template>
  <div>
    <strong>PlInput：</strong>
    <input :value="modelValue" @input="btnClick" />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: String,
  },
  emits:['update:modelValue'],
  methods: {
    btnClick(event) {
        this.$emit('update:modelValue',event.target.value)
    },
  },
};
</script>
~~~
计算属性实现
~~~html
<template>
  <div>
    <strong>PlInput：</strong>
    <input v-model="value">
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  emits:['update:modelValue'],
  computed:{
      value:{
          set(value){
              this.$emit('update:modelValue',value)
          },
          get(){
              return this.modelValue
          }
      }
  },
};
</script>
~~~
传入多个v-model
~~~html
<template>
  <div>
    <h4>PlInput：</h4>
    <input v-model="value" />
    <br>
    <input v-model="titleI" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    title:String
  },
  emits: ["update:modelValue","update:title"],
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    titleI: {
      set(title) {
        this.$emit("update:title", title);
      },
      get() {
        return this.title;
      },
    },
  },
};
</script>

<style scoped>
</style>
~~~

#### 认识动画
在开发中,我们想要给一个组件的显示和消失添加某种过渡动画 ,可以很好的增加用户体验:
  - React框架本身并没有提供任何动画相关的API ,所以在React中使用过渡动画我们需要使用一一个第三方库
react-transition-group ;
  - Vue中为我们提供一些内置组件和对应的API来完成动画,利用它们我们可以方便的实现过渡动画效果;
我们来看一个案例:
  - Hello World的显示和隐藏;
  - 通过下面的代码实现,是不会有任何动画效果的;
没有动画的情况下,整个内容的显示和隐藏会非常的生硬:
  - 如果我们希望给单元素或者组件实现过渡动画,可以使用transition内置组件来完成动画;
~~~vue
<template>
  <div>
    <button @click="isShow = !isShow">isShow</button>
    <transition name="plum">
      <h1 v-if="isShow">Hello World</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.plum-enter-from,
.plum-leave-to {
    opacity: 0;
}
.plum-enter-to,
.plum-leave-from{
    opacity: 1;
}

.plum.enter-active,
.plum-leave-active{
    transition: opacity 2s;
}
</style>
~~~
#### Transition组件原理
我们发现，vue自动给h2添加动画，这是什么原理
当插入或者删除包含在transition组件中的元素是，vue将会做出以下处理
  - 自动嗅探目标元素是否应用了css过度或者动画，如果有那么在适当的时机添加或删除css类名
  - 如果transition组件提供了javascript钩子函数，这些钩子函数在适当的时机会被调用
  - 如果没有找到javascript狗子并且也没有检测到css过渡动画，Dom插入，删除操作将会立即执行

#### 过渡动画class
class的name命名规则如下:
  - 如果我们使用的是一个没有name的transition ,那么所有的class是以-作为默认前缀;
  - 如果我们添加了-个name属性,比如<transtion name="why"> ,那么所有的class会以why-开头;
我们会发现.上面提到了很多个class ,事实上Vue就是帮助我们在这些class之间来回切换完成的动画:
  - v-enter-from :定义进入过渡的开始状态。在元素被插入之前生效,在元素被插入之后的下- -帧移除。
  - v-enter-active :定义进入过渡生效时的状态。在整个进入过渡的阶段中应用,在元素被插入之前生效,在过渡/动
画完成之后移除。这个类可以被用来定义进入过渡的过程时间,延迟和曲线函数。
  - v-enter-to :定义进入过渡的结束状态。在元素被插入之后下- -帧生效(与此同时v-enter-from被移除) , 在过渡/
动画完成之后移除。
  - v-leave-from :定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
  - v-leave-active :定义离开过渡生效时的状态。在整个离开过渡的阶段中应用,在离开过渡被触发时立刻生效,在
过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间,延迟和曲线函数。
  - v-leave-to :离开过渡的结束状态。在离开过渡被触发之后下一帧生效(与此同时v-leave-from被删除) ,在过渡/
动画完成之后移除。
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220119103650.png)


#### animation 帧动画
~~~vue
<script>
<style scoped>
.plum-enter-active{
    animation: bounce 1s ease;
}
.plum-leave-active{
    animation:  bounce 1s ease reverse;
}
@keyframes bounce {
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
}
</style>
~~~

#### 同时设置transition和animation
Vue为了知道过渡的完成,内部是在监听transitionend或animationend ,到底使用哪一个取决于元素应用的
CSS规则:
  - 如果我们只是使用了其中的-个,那么Vue能自动识别类型并设置监听;
但是如果我们同时使用了过渡和动画呢?
  - 并且在这个情况下可能某一个动画执行结束时 ,另外-个动画还没有结束; 
  - 在这种情况下,我们可以设置type属性为animation或者transition来明确的告知Vue监听的类型;

#### 过渡模式mode
我们来看当前的动画在两个元素之间切换的时候存在的问题:
Toogle
Hello World你好啊,李银河
我们会发现Hello World和你好啊,李银河是同时存在的:
  - 这是因为默认情况下进入和离开动画是同时发生的;
  - 如果确实我们希望达到这个的效果,那么是没有问题;
可以设置mode in-out 或者 out-in 来使节点动画有个先后顺序
#### 组件显隐动画
~~~html
<transition name="plum" type="animation">
      <h1 v-if="isShow">Hello World</h1>
      <component :is="isShow ? 'home' : 'about'"></component>
</transition>
~~~
#### 结合三方库使用
animate.css
如果我们手动一个个来编写这些动画,那么效率是比较低的,所以在开发中我们可能会引用一些第三方库的动画库,
比如animate.css。
什么是animate.css呢?
  - Animate.css is a library of ready-to-use, cross browser animations for use in your web projects. Great
for emphasis, home pages, sliders, and attention-guiding hints.
  - Animate.css是一个已经准备好的、跨平台的动画库为我们的web项目,对于强调、主页、滑动、注意力引导
非常有用;
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220119111832.png)
#### gsap库
某些情况下我们希望通过JavaScript来实现一 些动画的效果,这个时候我们可以选择使用gsap库来完成。
什么是gsap呢?
  - GSAP是The GreenSock Animation Platform ( GreenSock动画平台)的缩写;
  - 它可以通过JavaScript为CSS属性、SVG、 Canvas等设置动画 ,并且是浏览器兼容的;
这个库应该如何使用呢?
  - 第一步:需要安装gsap库;
  - 第二步:导入gsap库;
  - 第三步:使用对应的api即可;

#### javascript钩子
~~~html
    <transition
      name="plum"
      type="animation"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterenter"
      @before-leave="beforeleave"
      @leave="leave"
      @afterLeave="afterleave"
    >
      <h1 v-if="isShow">Hello World</h1>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
~~~

#### gsap实现数字变化
~~~vue
<template>
  <div>
    <input type="text" v-model="counter" />
    <h2>当前计数：{{ showCounter }}</h2>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      counter:0,
      showNumber:0
    };
  },
  computed:{
    showCounter(){
      return this.showNumber.toFixed(0)
    }
  },
  watch:{
    counter(newValue){
      gsap.to(this,{duration:1,showNumber:newValue})
    }
  }
};
</script>
<style scoped>
</style>
~~~

#### 列表过度
目前为止，过渡动画只要是针对单个元素或者组件的
  - 要么是单个节点
  - 要么是同一时间渲染多个节点中的一个
如果希望渲染的是一个列表，并且该列表中添加删除数据也有动画执行
  - 这个时候我们要使用`<transition-group>`
使用`<transition-group>`有如下特点
  - 默认情况下，他不会渲染一个元素的包裹器，但是可以指定一个元素并以tag attribute进行渲染
  - 过渡模式不可用，因为我们不在相互切换特有元素
  - 内部元素总是需要提供唯一的key attribute值
  - css过度的类将会引用在内部的元素中，而不是这个组/容器本身

数组添加删除动画
~~~vue
<template>
  <div>
    <button @click="add">添加数字</button>
    <button @click="remove">删除数字</button>
    <transition-group name="plum" tag="p">
      <span class="item" v-for="item in numbers" :key="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      numberCounter: 10,
    };
  },
  methods: {
    add() {
      this.numbers.splice(this.randomIndex(),0,this.numberCounter++);
    },
    remove(){
      this.numbers.splice(this.randomIndex(),1);

    },
    randomIndex() {
      return Math.floor(Math.random()*this.numbers.length)
    },
  },
};
</script>

<style scoped>
.item {
  display: inline-block;
  margin-right: 10px;
}
.plum-enter-from,
.plum-leave-to{
  opacity: 0;
  transform: translateY(50px);
}
.plum-enter-active,
.plum-leave-active{
  transition: all 1s ease;
}
.plum-leave-active{
  /* 使原来元素脱离文档流 */
  position: absolute;
}
.plum-move{
  transition: transform 1s ease;
}
</style>
~~~

#### 列表交错过渡案例

~~~vue
<template>
  <div>
    <input type="text" v-model="keyword" />
    <transition-group
      tag="ul"
      name="plum"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      names: [
        "aaa",
        "bbb",
        "ccc",
        "ddd",
        "aab",
        "aac",
        "aad",
        "bbc",
        "bbd",
        "ccd",
      ],
      keyword: "",
    };
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1);
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      console.log(el);
      gsap.to(el, {
        opacity: 1,
        height: "1.5em",
        delay: el.dataset.index * 0.3,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: "0em",
        delay: el.dataset.index * 0.3,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>

</style>
~~~
### mixin和ComponsitionAPI
#### 认识mixin目前
- 我们是使用组件化的方式在开发整个vue的应用程序，但是组件和组件之间有时候会存在相同的代码逻辑，我们希望对香港铜的代码逻辑进行抽取
+ 在vue2和vue3中都支持的一种方式就是使用mixin来完成
  - mixin提供了一种非常灵活的方式，来分发组件中的可复用功能；
  - 一个mixin对象可以包含任何组件选项
  - 当组件使用mixin对象时，所有mixin对象的选项将被混合进入该组件本身的选项中 

#### mixin合并规则
+ 如果mixin对象中选项和组件中选项发生冲突，那该怎么处理
   + 1.如果是data函数的返回对象
     - 返回值对象默认情况下会合并
     - 如果属性发生冲突则会保留组件自身数据 
   + 如果是生命周期钩子
     - 这两个生命周期会被放入数组中然后被遍历
   + 值为对象的选项，例如methods，components和directives，将被合并为同一个对象 
     - 比如都有methods选项，并且都定义了方法，那么他们都会生效；
     - 但是如果对象的key相同 那么会取组件对象的键值对
#### 全局混入mixin
  + 如果组件中的某些选线是所有组件都需要有的，那么这俄格时候我们可以使用全局的mixin；
    - 全局的mixin可以使用app的方法mixin来完成注册
    - 一旦注册，那么全局混入的选项将会去影响每一个组件
  ~~~js
    app.mixin({
        created(){
            console.log('hello plumli');
        }
    })
  ~~~
#### entends
直接继承组件，只能继承对象里的选项，不能继承标签
类似于mixin，可以用mixin代替
~~~JavaScript
import BasePage from './BasePage.vue'
export default {
    extends:BasePage,
};
~~~
#### 认识CompositionApi
+ 那么既然知道CompositionApi想要帮助我们做什么事，接下来看一下到底是怎么做的
  - 为了开始使用CompositionApi，需要有一个可以实际使用它的地方
  - 在vue中，这个位置就是setup函数
+ setup其实就是组件的另外一个选项
  - 只不过这个选项强大到我们可以用它来替代之前所编写的大部分其他选项
  - 比如methods，computed，watch，data，生命周期等等
+ 接下学习setup函数使用
  - 函数的参数
  - 函数的返回值
#### setup函数参数 
+ props
  - 对于定义props的类型，我们还是和之前一样，在props中定义
  - 并且在template中依然可以正常使用props中属性，比如message
  - 如果我们在setup函数中想要使用props，那么不可以通过this去获取
  - 因为props有直接将作为参数传递到setup中，所以我们可以直接通过参数来使用即可
+ context
  - attrs 所有的非prop的attribute
  - slots 父组件传递过来的插槽(这个在以渲染函数返回时会有作用，后面会讲到)
  - emit 当我们组件内部需要发出事件时会用到emit(因为不能访问this，所以不能通过this.$emit发出事件)
#### setup返回值可以在template中使用
普通返回数据不具有响应式的效果
+ setup既然是一个函数，那么他也有返回值，它的返回值用来做什么
  - setup的返回值可以在模板template中使用
  - 也就是说可以通过setup的返回值来代替data选项
+ 甚至可以返回一个执行函数来替代methods中的方法
  ~~~javascript
  setup() {
    let counter = 100;
    // 局部函数
    const add = () => {
      console.log("add");
    };
    const sub = () => {
      console.log("sub");
    };
    return {
      counter,
      add,
      sub,
    };
  },
  ~~~
#### setup中不能使用this
在 setup() 内部，this 不是该活跃实例的引用，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。这使得 setup() 在和其它选项式 API 一起使用时可能会导致混淆。

#### ref API
+ reactive API对传入的类型是有限制的，他要求我们必须传入的是一个对象或者数组类型
  - 如果我们传入一个基本数据类型会报警告
+ 这时候vue3提供了另外一个API：ref API
  - ref 会返回一个可变的响应式对象
  - 逻辑代码中仍然需要使用.value
  - 它内部的值时在ref的value属性中被维护的
~~~javascript
    let counter = ref(100);
    // 局部函数
    const add = () => {
      counter.value++;
    };
    const sub = () => {
      counter.value--;
    };
~~~
+ 注意事项：
  - 在模板中引入ref值时，vue会自动帮助我们进行解包操作，所以我们并不需要在模板中通过ref.value的方式来使用
#### ref中的自动解包(浅层解包)
不是最外层无法解包，需要使用.value
~~~javascript
const info={
        counter
      }
// template中
info.counter.value
~~~
在reactive中对象形式会自动解包

#### readonly
+ 我们通过reactive或者ref可以获取到一个响应式对象，但某些情况下我们传入给其他地方(组件)的这个响应式对象希望在另外一个地方被使用，但是不能被修改
  - vue3提供了readonly方法
  - readonly会返回原生对象的只读代理(也就是它依然是一个proxy，这是一个proxy的set方法被劫持，并且不能对其进行修改)
~~~js
    // 1.普通对象
    let info1 = { name: "plumli" };
    const rdoyInfo1=readonly(info1)
    // 2.reactive对象
    let info2 = reactive({ name: "plum" });
    const rdoyInfo2=readonly(info2)
    // 3.ref对象
    let info3 = ref('pl');
    const rdoyInfo3=readonly(info3)
    let changeState = () => {
        rdoyInfo1.name='plum';
        rdoyInfo2.name='li';
        rdoyInfo3.value='li';
    };
~~~
### ref-computed-watch等api

#### reactive判断的api
- isProxy 检查对象是否由reactive 或 readonly创建的proxy
- isReactive 检查对象是否由reactive创建的响应式代理 如果该代理时readonly创建的，但包裹了reactive创建的另一个代理，它也会返回true
- isReadonly 检查对象是否由readonly创建的只读代理
- toRaw 返回reactive 或 readonly 代理的原始对象（谨慎使用）
- shallowReactive 创建一个响应式代理，它跟踪其自身的property的响应性，但不执行嵌套对象的深层次响应式转换（深层还是原生对象）

#### ref Api
##### toRefs和toRef
传入响应式对象(reactive对象)
+ 如果使用es6的解构语法，对reactive返回的对象进行解构获取值，那么之后无论是修改解构后的变量，还是修改reactive返回的state对象，数据都不再是响应式的

~~~js
    const info = reactive({ name: "zs", age: "20", sex: "男" });
    // toRef 将对象中某个属性转换成ref 建立链接
    let { name } = toRef(info, "name");
    // toRef 将reactive中的所有属性转成ref 建立链接
    let { name, age, sex } = toRefs(info);
~~~

##### unref
如果我们想要获取一个ref引用中的value，那么也可以通过unref方法
  如果参数是一个ref，则返回内部值，否则返回函数本身
  这是`val=isRef(val)?val.value:val`语法糖函数
##### isRef
判断值是否是一个ref对象
##### shallowRef
创建一个浅层的ref对象 页面不变数据改变
~~~js
    const info = shallowRef({ name: "zs"});
    const changeInfo = () => {
      info.value.name='ls';
      console.log(info.value);
      // age.value++;
    };
~~~
##### triggerRef
手动触发和shallowRef相关联的副作用

##### customRef
创建一个自定义的ref，并对其以来项进行跟踪和更新触发进行显示控制
  - 他需要一个工厂函数，该函数接受track和trigger函数作为函数
  - 并且应该返回一个带有get和set的对象
案例:对双向绑定的属性进行debounce操作
~~~js
import { customRef } from 'vue'
// 自定义ref
export default function (value) {
    let timer = null;
    return customRef((track, trigger) => {
        // track 什么时候收集
        // trigger 什么时候更新
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                if(timer) clearTimeout(timer);
                timer=setTimeout(() => {
                    value = newValue
                    trigger();
                }, 1000);
            }
        }
    })
}
~~~
#### computed
- 接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象。
- 接受一个包含get和set函数的对象
~~~js
    const firstName = ref("zhang");
    const lastName = ref("san");
    // 1.传入getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + "" + lastName.value);
    // 2.传入一个对象，包含getter和setter
    const fullName = computed({
        get:()=>() => firstName.value + "" + lastName.value,
        set:(newValue)=>{
            const names=newValue.split(' ');
            firstName=name[0];
            lastName=name[1];
        }
    });
~~~
#### 侦听数据变化
+ 在前面的Options API中,我们可以通过watch选项来侦听data或者props的数据变化,当数据变化时执行某- -些
操作。
+ 在Composition API中,我们可以使用watchEffect和watch来完成响应式数据的侦听;
  - watchEffect用于自动收集响应式数据的依赖;
  - watch需要手动指定侦听的数据源;
##### watchEffect
+ 当侦听到某些响应式数据变化时,我们希望执行某些操作,这个时候可以使用watchEffect。
+ 我们来看一个案例:
  - 首先, watchEffect传入的函数会被立即执行一次,并且在执行的过程中会收集依赖;
  - 其次,只有收集的依赖发生变化时, watchEffect传入的函数才会再次执行;
~~~js
    watchEffect(()=>{
        console.log('name',name.value);
    })
~~~
###### 停止侦听
~~~js
    const changeA = () => {
      age.value++;
      if (age.value > 25) {
        stop();
      }
    };
    // 默认执行一次
    const stop = watchEffect(() => {
      console.log("name", name.value, "age", age.value);
    });
~~~
###### 清除副作用
+ 什么是清除副作用呢?
  - 比如在开发中我们需要在侦听函数中执行网络请求,但是在网络请求还没有达到的时候,我们停止了侦听器或者侦听器侦听函数被再次执行了。
  - 那么上- -次的网络请求应该被取消掉,这个时候我们就可以清除上一 -次的副作用;
+ 在我们给watchEffect传入的函数被回调时,其实可以获取到一个参数: onInvalidate
  - 当副作用即将重新执行或者侦听器被停止时会执行该函数传入的回调函数;
  - 我们可以在传入的回调函数中,执行一 些清楚工作;
~~~js
    // 默认执行一次
    const stop = watchEffect((onInvalidate) => {
      // 根据name和age两个变量发送网络请求
      const timer=setTimeout(() => {
          console.log('网络请求成功');
      }, 2000);
      onInvalidate(()=>{
          clearTimeout(timer)
          console.log('onInvalidate');
      });
      console.log("name", name.value, "age", age.value);
    });
~~~
##### 执行时机
默认情况下,组件的更新会在副作用函数执行之前:
- 如果我们希望在副作用函数中获取到元素,是否可行呢?
  戈们会发现打印结果打印了两次: .
- 这是为setup函数在执行时就会立即执行传入的副作用函数,这个时候DOM并没有挂载,所以打印为null ;
- 而当DOM挂载时,会给title的ref对象赋值新的值,副作用函数会再次执行,打印出来对应的元素;

~~~js
    const title = ref(null);
    watchEffect(()=>{
        console.log(title.value);
    },{
      // 挂载完成后拿到ref
      flush:"post"
    })
~~~
##### 调整执行时机
+ 如果我们希望在第一次的时候就打印出来对应的元素呢 ?
  - 这个时候我们需要改变副作用函数的执行时机;
  - 它的默认值是pre ,它会在元素挂载或者更新之前执行;
  - 所以我们会先打印出来一个空的,当依赖的title发生改变时,就会再次执行一-次 ,打印出元素;
我们可以设置副作用函数的执行时机:
~~~js
    watchEffect(()=>{
        console.log(title.value);
    },{
      // 挂载完成后拿到ref
      flush:"post"
    })
~~~
#### 使用ref获取dom元素
在讲解watchEffect执行时机之前，我们先补充一个知识 :在setup中如何使用ref或者元素或者组件?
- 其实非常简单,我们只需要定义一个ref对象 ,绑定到元素或者组件的ref属性.上即可;
~~~js
    watchEffect(()=>{
        console.log(title.value);
    },{
      // 挂载完成后拿到ref
      flush:"post"
    })
~~~
#### watch
+ watch的api完全等同于组件watch选项的property
  - watch需要侦听特定的数据源，并在回调函数中执行副作用
  - 默认情况下是惰性的，只有当被侦听源发生变化时才会执行回调
+ 与watchEffect比较，watch允许:
  - 懒执行副作用(第一次不会直接执行)
  - 更具体的说明了哪些状态发生变化时，触发侦听器的执行
  - 访问侦听器变化前后的值
##### 侦听单个数据源
watch侦听函数的数据源有两种类型
  - 一个getter函数：但是getter函数必须引用可响应式对象(比如reactive或者ref)
  - 直接写入一个可响应式对象,ref(如果是一个reactive对象的侦听,需要进行某些转换)
~~~js
    // getter
    watch(()=>watchInfo.name, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
~~~
~~~js
    // ref对象
    watch(watchInfo, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
~~~
注意多个同步更改只会触发一次侦听器。
通过更改设置 flush: 'sync'，我们可以为每个更改都强制触发侦听器，尽管这通常是不推荐的。或者，可以用 nextTick 等待侦听器在下一步改变之前运行。例如:
~~~js
const changeValues = async () => {
  firstName.value = 'John' // 打印 ["John", ""] ["", ""]
  await nextTick()
  lastName.value = 'Smith' // 打印 ["John", "Smith"] ["John", ""]
}
~~~
##### 侦听多个数据源

~~~js
    const watchInfo = reactive({ name: "watch", age: 20 });
    const name=ref('zs');
    watch([()=>({...watchInfo}),name], (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
~~~
详情见 [vue3官方文档][https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E4%BE%A6%E5%90%AC%E5%93%8D%E5%BA%94%E5%BC%8F%E5%AF%B9%E8%B1%A1]
### 自定义指令
#### 认识自定义指令
+ 在vue的模板语法中我们学习过各种指令:v-show。v-for，v-model等等，除了使用指令外，vue也允许自己自定义指令
 - 在vue中，代码复用和抽象主要还是通过组件
 - 通常在某些情况下对dom进行底层操作，这时候就会使用自定义指令
+ 自定义指令分为两种
 - 局部指令：组件通过directives选项，只能在当前组件使用
 - 全局指令：app的directive方法，可以在任意组件中被使用
+ 比如我们来做非常简单的案例：当某个元素挂在完成后可以自定获取焦点
 - 实现方式一:使用默认指令
~~~js
  setup() {
    const input = ref(null);
    onMounted(()=>{
        input.value.focus()
    })
    return {
      input,
    };
~~~
 - 实现方式二:使用v-focus局部指令
~~~js
 directives:{
    focus:{
        mounted(el){
            el.focus()
            console.log(el);
        }
    }
 },
~~~
 - 实现方式三:使用v-focus全局指令
~~~js
const app = createApp(App);
app.directive('focus', {
    mounted(el) {
        el.focus()
        console.log(el);
    }
})
~~~
#### 指令的生命周期
一个指令定义的对象，vue提供了如下几个钩子函数
- created:在绑定元素的attribute或事件监听器被应用之前调用
- beforeMount:当指令第一次绑定到元素并且在挂载父组件之前调用
- mounted:在绑定元素的父组件被挂载后调用
- beforeUpdate:在更新包含组件的VNode之前调用
- update:在包含组件的VNode及其子组件的VNode更新后调用
- beforeUnmounted:在卸载绑定元素的父组件之前调用
- unmounted:当指令与元素接触绑定且父组件已卸载时，只调用一次

#### 修饰符和参数
有四个参数
- el:指令绑定到的元素。这可用于直接操作 DOM
+ bindings:
  - instance：使用指令的组件实例。
  - value：传递给指令的值。例如，在 v-my-directive="1 + 1" 中，该值为 2。
  - oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否有更改都可用。
  - arg：传递给指令的参数(如果有的话)。例如在 v-my-directive:foo 中，arg 为 "foo"。
  - modifiers：包含修饰符(如果有的话) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 {foo: true，bar: true}。
  - dir：一个对象，在注册指令时作为参数传递。例如，在以下指令中
- vnode:一个真实 DOM 元素的蓝图，对应上面收到的 el 参数
- prvenode:上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用。
注意:除了 el 之外，你应该将这些参数视为只读，并且永远不要修改它们。如果你需要跨钩子共享信息，建议通过元素的自定义数据属性集进行共享。

#### 自定义指令练习
+ 自定义指令案例:时间戳的显示需求:
 - 在开发中,大多数情况下从服务器获取到的都是时间戳;
 - 我们需要将时间戳转换成具体格式化的时间来展示;
 - 在Vue2中我们可以通过过滤器来完成;
 - 在Vue3中我们可以通过计算属性( computed )或者自定义一个方法( methods )来完成;
 - 其实我们还可以通过一个自定义的指令来完成;
~~~js
// format-time.js
import dayjs from 'dayjs'
export default function registerDirectives(app) {
    app.directive('format-time', {
        mounted(el,bindings) {
            let formatString=bindings.value;
            console.log(formatString);
            if(!formatString){
                formatString='YYYY-MM-DD  hh:mm:ss';
            }
            const textContent = el.textContent;
            let timestamp = parseInt(textContent)
            if (timestamp.length === 10) {
                timestamp = timestamp * 1000
            }
            el.textContent = dayjs(timestamp).format(formatString)
            console.log(typeof textContent);
        },
    })
}
~~~
~~~js
// index.js
import registerFormatTime from "./format-time";
export default function registerDirectives(app) {
    registerFormatTime(app)
}
~~~
~~~js
// main.js
import { createApp } from 'vue'
import App from 'App.vue'
import registerDirectives from './directives'
const app = createApp(App);
registerDirectives(app)
app.mount('#app')
~~~
~~~js
// <!-- App.vue -->
<template>
  <h4 v-format-time="'YYYY/MM/DD hh:mm:ss'">
    {{timestamp}}
  </h4>
</template>
// js
setup(){
  const timestamp = new Date().getTime();
  return{
    timestamp
  }
}

~~~

#### 认识Teleport
在组件化开发中，我们封装一个组件A，在另外一个组件B中使用
 - 那么组件A中的template元素会被挂载到组件B中template的某个位置
 - 最终我们的应用程序会形成一颗Dom树结构
+ 但是某些情况下,我们希望组件不是挂载在这个组件树上的,可能是移动到Vue app之外的其他位置:
 - 比如移动到body元素上,或者我们有其他的div#app之外的元素上;
 - 这个时候我们就可以通过teleport来完成;
+ Teleport是什么呢?
 - 它是一个Vue提供的内置组件,类似于react的Portals ; 
 - teleport翻译过来是心灵传输、远距离运输的意思;
+ 它有两个属性:
 - to :指定将其中的内容移动到的目标元素,可以使用选择器;
 - disabled :是否禁用teleport的功能;
~~~javascript
<teleport to='#plum'>
   <h3>Teleport</h3>
</teleport>
~~~

#### 认识vue插件
通常我们向vue全局添加一些功能时，会采用插件的模式，他有两种编写方式
 - 对象类型:一个对象，但是必须包含一个install函数，该函数会在安装插件时执行
 - 函数类型:一个function，这个函数会在安装插件时自动执行
插件可以完成的功能没有限制，比如以下几种都是可以的
 - 添加全局方法或者property，通过把他们添加到config.globalProperties上实现

 - 添加全局资源 指令、过滤器、过渡等
 - 通过全局mixin来添加一些组件选项
 - 一个库 提供自己的API，同时提供上面提到的一个或多个功能



### 路由

#### 前端路由
+ 路由其实就是网络工程中一个术语
  - 在架构一个网络时,非常重要的两个设备就是路由器和交换机
  - 事实上,路由器主要维护的是一个映射表(ip地址和电脑的mac地址映射关系)
  - 映射表会决定数据的流向
+ 路由的概念在软件工程中出现,最早是在后端路由中实现,原因是web的发展主要经历了这样的一些阶段:
  - 后端路由阶段
  - 前后端分离阶段
  - 单页面富应用(SPA)
#### 后端路由
+ 早期的网站开发整个html页面是由服务器来渲染
  - 服务器直接生产渲染好对应的html页面,返回给客户端进行展示
+ 但是, -个网站,这么多页面服务器如何处理呢?
  - 一个页面有自己对应的网址，也就是URL ;
  -  URL会发送到服务器,服务器会通过正则对该URL进行匹配,并且最后交给-个Controller进行处理 ;
  - Controller进行各种处理,最终生成HTML或者数据，返回给前端.
+ 上面的这种操作,就是后端路由:
  - 当我们页面中需要请求不同的路径内容时,交给服务器来进行处理,服务器渲染好整个页面,并且将页面返回给客户端.
  - 这种情况下渲染好的页面,不需要单独加载任何的js和css,可以直接交给浏览器展示，这样也有利于SEO的优化.
#### 前后端分离
+ 前端渲染的理解:
  - 每次请求涉及到的静态资源都会从静态资源服务器获取,这些资源包括HTML+CSS+JS ,然后在前端对这些请求回来的资源进行渲染; 
  - 需要注意的是,客户端的每一次请求,都会从静态资源服务器请求文件;
  - 同时可以看到,和之前的后端路由不同,这时后端只是负责提供API了;
+ 前后端分离阶段:
  - 随着Ajax的出现,有了前后端分离的开发模式;
  - 后端只提供API来返回数据,前端通过Ajax获取数据,并且可以通过JavaScript将数据渲染到页面中; .
  - 这样做最大的优点就是前后端责任的清晰,后端专注于数据上,前端专注于交互和可视化上;
  - 并且当移动端(iOS/Android)出现后，后端不需要进行任何处理,依然使用之前的一套API即可;
  - 目前比较少的网站采用这种模式开发(jQuery开发模式) ;
#### 改变内容是不刷新页面

##### URL的hash
前端路由是如何做到url和内容映射,监听url改变
+ url的hash
  - url的hash也就是锚点(#),本质上是window.location的href属性
  - 我们可以通过直接赋值location.hash来改变href,但是页面不发生刷新
+ hash的优势是兼容性更好,在老版ie中都可以运行,但是缺陷有一个#,显得不像是一个真实的路径
~~~javascript
window.addEventListener('hashchange', (){
    switch (location.hash) {
        case '#/home':
            contentEl.innerHTML = 'home';
            break;
        case '#/about':
            contentEl.innerHTML = 'about';
            break;
        default:
            contentEl.innerHTML = 'default';
            break;
    }
})
~~~
##### html5的history模式
+ history接口是HTML5新增的,他有六种模式改变URL而不刷新页面
  - replaceState:替换原来路径
  - pushState:使用新路径 `history.pushState({},'',href);` 压栈操作
  - popState:路径的回退
  - go:向前或向后改变路径
  - forward:向前改变路径
  - back:向后改变路径

获取到href改变内容
~~~javascript
for (let aEl of aEls) {
    aEl.addEventListener('click', e => {
        e.preventDefault()
        const href = aEl.getAttri('href');
        history.pushState({},'',href);
        switch (location.pathname) {
        case '/home':
            contentEl.innerHTML = 'home';
            break;
        case '/about':
            contentEl.innerHTML = 'about';
            break;
        default:
            contentEl.innerHTML = 'default';
            break;
    }
    })
}
~~~
### vue-router

#### 认识vue-router
+ 目前前端流行的三大框架,都有自己的路由实现:
  - Angular的ngRouter
  - React的ReactRouter
  - Vue的vue-router
+ Vue Router是Vue.js的官方路由。它与Vue.js核心深度集成,让用Vue.js构建单页应用变得非常容易。
  - 目前Vue路由最新的版本是4.x版本,我们上课会基于最新的版本讲解。
+ vue-router是基于路由和组件的
  - 路由用于设定访问路径,将路径和组件映射起来.
  - 在vue-router的单页面应用中,页面的路径的改变就是组件的切换.
+ 安装
   - npm install vue-router@4
#### 路由使用步骤
- 创建路由组件
- 配置路由映射
- 通过createRouter创建路由对象,并且传入routes和history模式
- 通过router-link和router-view使用
#### 路由的默认路径
可以在routes中配置一个映射
- path配置的根路径 /
- redirect是重定向,也就是我们将根路径重定向到/home的路径下,这样就可以得到想要的结果

#### history模式
`import {createRouter,createWebHistory,,createWebHashHistory} from 'vue-router';`

#### router-link
router-link事实上有很多属性可以配置:
- to属性:是一个字符串或者一个对象
- replace属性:设置replace属性的话,点击时,会调用router.replace()而不是router.push()
- active-class:设置激活a元素后应用class,默认是router-link-active
- exact-active-class:链接精准激活时,应用于渲染a的class默认是router-exact-active-class

#### 路由懒加载
+ 当打包构建应用时, JavaScript包会变得非常大,影响页面加载:
  - 如果我们能把不同路由对应的组件分割成不同的代码块,然后当路由被访问的时候才加载对应组件,这样就会
更加高效;
  - 也可以提高首屏的渲染效率;
+ 其实这里还是我们前面讲到过的webpack的分包知识,而Vue Router默认就支持动态来导入组件:
  - 这是因为component可以传入-个组件,也可以接收一个函数 ,该函数需要放回一个Promise ;
  - 而import函数就是返回一个Promise ;
component的值也可以是函数
使用懒加载方式载入组件,在编译时会进行分包,在浏览器加载时不会立即加载出来
~~~javascript
const routes=[
    {path:'/',redirect:'/home'},
    {path:'/home',component:()=>{
        return import(/* webpackChunkName:"home-chunk" */'../views/Home.vue')
    }},
    {path:'/about',component:()=>{
        return import(/* webpackChunkName:"about-chunk" */'../views/About.vue')
    }}
];
~~~
#### 路由的其他属性
- name 字符串类型 可以通过name进行跳转
- meta 对象类型 自定义数据数据 拿到route对象后可以取到meta属性
#### 动态路由基本匹配
~~~javascript
    {
        path: '/user/:username', component: () => {
            return import('../views/User.vue')
        }
    },
~~~
+ 很多时候我们需要将给定匹配模式的路由映射到同一个组件: 
  - 例如,我们可能有一个User组件,它应该对所有用户进行渲染,但是用户的ID是不同的;
  - 在Vue Router中,我们可以在路径中使用一个动态字段来实现,我们称之为路径参数;
+ 在router-link中做如下跳转
 <router-link to="/user/plum">user</router-link>

setup中使用useRoute,通过import在vue-router中引用
#### 获取动态路由的值
在template中可以用`$route.aras.id`
在setup中要使用vue-router提供的hook useRoute
该hook会返回一个Route对象,对象中保存着当前路由的相关值

#### NotFound
使用`/:patchMatch(.*)`匹配不存在路由
~~~javascript
{
    path: '/:patchMatch(.*)', component: () => {
        return import('../views/NotFound.vue')
    }
},
~~~
在notfound页面可以通过`$route.params.patchMatch`获取信息
~~~javascript
<h1>Page <span style="color:red">{{$route.params.patchMatch}}</span> Not Found</h1>
~~~

#### 路由的嵌套
~~~javascript
{
  path: '/home',
    component: () => {
      return import(/* webpackChunkName:"home-chunk" */'../views/Home.vue')
    },
      children: [
        {
          path: '',
          redirect: '/home/message'
        },
        {
          path: 'message',
          component: () => import('../views/HomeMsg.vue')
        },
        {
          path: 'shop',
          component: () => import('../views/HomeShop.vue')
        },
      ]
},
~~~


#### 编程式导航 代码的页面跳转
函数中
~~~javascript
// <button @click="jumpToAbout">关于</button>
jumpToAbout(){
  // 拿到router对象
  this.$router.push('/about')
  console.log(this.$router);
}
~~~
setup中
~~~javascript
// <button @click="jumpToAbout">关于</button>
import { useRouter } from "vue-router";
setup() {
  const router = useRouter();
  const jumpToAbout = () => {
    router.push({
      path:'/about',
      query:{
        name:'zs',
        age:20
      }
    });
  }
}
// 也可以使用
// router.replace()
// router.go()
~~~

#### router-link中的v-slot
使用props接受参数,
custom取消a链接,
~~~html
    <router-link to="/home" v-slot="props" custom>
      <new-bar title="home" />
      <button @click="props.navigate">{{props.href}}</button>
      <button @click="props.navigate">{{props.href}}</button>
      <span :class="{'active':props.isActive}">{{props.isActive}}</span>
      <span :class="{'active':props.isActive}">{{props.isActive}}</span>
      <!-- {{props}} -->
    </router-link>
~~~

#### router-view增强
router-view的v-slot
router-view也提供给我们一个插槽,可以用于<transition> 和<keep-alive>组件来包裹你的路由组件:
  - Component :要渲染的组件;
  - route :解析出的标准化路由对象;

~~~html
<router-view v-slot="props">
  <transition name="pl">
    <keep-alive>
      <component :is="props.Component"></component>
        </keep-alive>
      </transition>
  </router - view >
<style>
.pl-enter-from,
.pl-leave-to {
      opacity: 0;
}

.pl-enter-to,
.pl-leave-from {
      opacity: 1;
}
.pl-enter-active,
.pl-leave-active {
      transition: opacity 1s ease;
}
</style>
~~~

#### 动态添加路由
真实开发中rotes可能不是写死的
而是根据角色来动态添加路由

~~~javascript
// 动态添加路由
const categoryRoute={
    path:'/category',
    component:()=>import('../views/Category.vue')
}
// 最外层顶级路由对象
router.addRoute(categoryRoute);
// 给home children添加路由对象
router.addRoute('home',{
    path:'/info',
    component:()=>import('../views/HomeInfo.vue')
})
~~~

#### 动态删除路由

- 添加一个name相同的路由
- 通过removeRoute方法,传入路由名称
- 通过addRoute方法返回值回调 

#### 路由导航守卫
+ vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
+ 全局的前置守卫beforeEach是在导航触发时会被回调的:
它有两个参数: 
  - to :即将进入的路由Route对象; .
  - from :即将离开的路由Route对象;
+ 它有返回值:
  - false :取消当前导航; .
  - 不返回或者undefined :进行默认导航;
})
  + 返回- -个路由地址:
    - 可以是一个string类型的路径 ;
    - 可以是一个对象,对象中包含path、query. params等信息 ;
+ 可选的第三个参数: next
  - 在Vue2中我们是通过next函数来决定如何进行跳转的;
  - 但是在Vue3中我们是通过返回值来控制的,不再推荐使用next函数,这是因为开发中很容易调用多次next;

#### 其他导航守卫
- router.beforeResolve
- router.afterEach
- 在路由配置上定义 beforeEnter 守卫,全局独享守卫
- 组件内的守卫
~~~javascript
const UserDetails = {
  template: `...`,
  beforeRouteEnter(to, from) {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
  },
  beforeRouteUpdate(to, from) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from) {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
  },
}
~~~
导航守卫详见https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%AE%8C%E6%95%B4%E7%9A%84%E5%AF%BC%E8%88%AA%E8%A7%A3%E6%9E%90%E6%B5%81%E7%A8%8B


### vuex

#### 什么是状态管理
+ 在开发中,我们会的应用程序需要处理各种各样的数据,这些数据需要保存在我们应用程序中的某一位置,对于这些数据的管理我们称之为是状态管理
在前面是如何管理自己的状态
+ 在前面如何管理自己状态
  - 在Vue开发中,我们使用组件化开发模式
  - 而在组件中我们定义data或者setup中返回使用的数据,这些数据我们称之为state
  - 在模块template中我们可以使用这些数据,模块最终会被渲染成DOM,我们称之为view
  - 在模块中我们会产生1一些行为时间,处理这些行为事件时,有可能会修改state,这些行为事件我们称之为actions

### vuex的状态管理
+ 管理不断变化的state本身是非常困难的:
  - 状态之间相互会存在依赖, -个状态的变化会引起另一个状态的变化, View页面也有可能会引起状态的变化;
  - 当应用程序复杂时, state在什么时候,因为什么原因而发生了变化,发生了怎么样的变化,会变得非常难以控制和追踪;
+ 因此,我们是否可以考虑将组件的内部状态抽离出来,以一一个全局单例的方式来管理呢?
  - 在这种模式下,我们的组件树构成了一个巨大的“试图View” ;
  - 不管在树的哪个位置,任何组件都能获取状态或者触发行为;
  - 通过定义和隔离状态管理中的各个概念,并通过强制性的规则来维护试图和状态间的独立性,我们的代码边会变得更加结构化和易于维护、跟踪;
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220225102425.png)

#### 创建store
+ 每一个vuex应用的核心就是store(仓库)
  - store本质上是一个容器,它包含着应用中大部分状态1
+ vuex和单纯的全局对象有什么区别
  - 第一:vuex的状态储存时响应式的,当vue组件从store中读取状态的时候,若store中的状态发生变化,那么相应的组件也会被更新
  - 第二:不能直接改变store中的状态,改变store中的状态为疑途径就是提交(commit)mutation.这样使得我们可以方便的跟踪每一个状态的变化,从而让我们能够通过一些工具更好的管理应用状态
  - 使用步骤:创建Store对象,在app中安装
~~~javascript
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations:{
    add(state){
      state.counter++
    },
    sun(state){
      state.counter--
    },
  }
})

export default store
~~~
~~~javascript
export default {
  methods:{
    sub(){
      this.$store.commit('sub')
    },
    add(){
      this.$store.commit('add');
    }
  }
}
~~~

#### 单一状态树
+ vuex使用单一状态树:
 - 用一个对象就包含了全部的应用层级别状态
 - 采用的是ssot,singl source of truth,也可以翻译成单一数据源
 - 这也意味着,每个应用将仅仅包含一个store实例
 - 单状态数和模块化并不冲突,后面会讲到module的概念
+ 单一状态树优势
  - 如果你的状态新是保存到多个Store对象中,那么之后的管理和维护等等都会变得特别困难
  - 所以vuex也使用单一状态树来管理应用层级全部状态
  - 单一状态树能够让我们最直接的方式找到某个状态的片段,而且在之后的维护调试中,也可以非常方便的管理和维护

~~~javascript
import { mapState } from "vuex";
export default {
  computed: {
    // 原有的
    fullName() {
      return "ls";
    },
    // 其他计算属性,从stote中获取
    // 1.使用数组接收
    // ...mapState(["counter", "name", "age"]),
    // 2.可以传递对象,改变名称使用
    ...mapState({
      sCounter:state=>state.counter,
      sName:state=>state.name,
      sAge:state=>state.age,
    })
  },
};
~~~

setup中调用store中的数据

#### mapState
+ 在setup中如果我们单个获取装是非常简单的:
  - 通过useStore拿到store后去获取某个状态即可;
  - 但是如果我们需要使用mapState的功能呢?
+ 默认情况下, Vuex并没有提供非常方便的使用mapState的方式,这里我们进行了- 个函数的封装:
~~~javascript
import { computed } from 'vue'
import { mapState,useStore } from 'vuex'


export function useState(mapper) {
    // 拿到store独享
    const store = useStore(); // store对象相当于optionApi中的this.$store
    const storeStateFns = mapState(mapper); // 进行遍历,获取数据的函数
    // key:function 对数据进行转换
    const storeState = {}; // 生命空对象存值
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({ $store: store }); // bind改变this指向,指向store对象
        storeState[fnKey] = computed(fn); // 通过计算属性 同步值
    })
    // 返回生产的数据对象
    return storeState
}
~~~
~~~javascript
import {useState} from '../hooks/useState'
export default {
  setup() {
    const storeState=useState(['counter','name','age'])
    const storeState2=useState({
      sCounter:state=>state.counter
    })
    return{
      ...storeState,
      ...storeState2,
    }
  },
};
~~~

#### getters的基本使用
+ 某些属性我们可能需要经过变化后来使用,这个时候可以使用getters
+ getter第一个参数是state状态,第二个是getters,都可以帮助getters拿到想要的数据
  
~~~javascript
  getters: {
    totalPrice(state,getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count + book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    titalCounterGreaterN(state){
      return function(n){
        return state.books.filter(item=>item.count>n)
      }
    },
    nameInfo(state){
      return `name:${state.name}`
    },
    ageInfo(state){
      return `age:${state.age}`
    }
  }
~~~

~~~javascript
const store = useStore();
let mapGettersFns = mapGetters(["nameInfo","ageInfo"]);
let mapGetter = {};
Object.keys(mapGettersFns).forEach((fnKey) => {
  const fn = mapGettersFns[fnKey].bind({$store:store});
  mapGetter[fnKey]=computed(fn)
});
console.log(mapGetter);
~~~

#### mutation
+ 更改vuex的store种状态的唯一方式就是更改mutation
~~~javascript
state:{},
mutations: {
  add(state) {
    state.counter++
  },
  sub(state) {
    state.counter--
  },
},
getters:{}
~~~
+ mutation携带数据 函数中第一个是state用于操作state中值,第二个为payload,参数传入的值,通常为一个对象
`this.$store.commit('addTen',{num:10});`
~~~javascript
this.$store.commit({
  type:'addTen',
  num:10
})
~~~
+ mutation函数映射到methods中 也可以传入对象改变名字
~~~javascript
// <button @click="sub">-1</button>
// <button @click="add">+1</button>
// <button @click="add_n({ num: 10 })">+10</button>
import { mapMutations } from "vuex";
import {ADD_N} from '../store/mutation-type';
export default {
  methods: {
    ...mapMutations(["add", "sub", ADD_N]),
  },
};
~~~

#### actions的基本使用
Action类似于mutation,不同在于:
  - Action提交的是mutation而不是直接改变状态
  - Action可以包含任意异步操作
这里有一个非常重要的参数context:
  - context是一个和store实例均有相同方法和属性的context对象
  - 我们可以从其中获取commit方法来提交一个mutation,或者通过context.state和context.getters来获取state和getters
  - 但是它为什么不是store对象,Modules
  - 可以对context进行解构
~~~javascript
    addAction({commit}){
      // add 为mutation中函数
      setTimeout(() => {
        commit('add')
      }, 1000);
    },
~~~


~~~javascript
// actions dispatch
this.$store.dispatch('getHomeHero')
this.$store.dispatch({
  type:'getHomeHero'
})
~~~
~~~javascript
  actions:{
    addAction(context){
      // add 为mutation中函数
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    getHomeHero(context){
      axios.get('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2741699')
      .then(res=>{
        // addHeroData 为 mutation 中函数
        // 在actions中执行异步操作
        // state 为store中参数
        // addHeroData(state,payload){
        //   state.heros=payload;
        // }
        context.commit('addHeroData',res.data.hero)
      })
    }
  }
~~~