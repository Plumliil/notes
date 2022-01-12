
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