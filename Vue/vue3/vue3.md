

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