# Less

#### 介绍
less是一门css的预处理语言
简单来说，less是css的增强版，通过less可以编写更少的代码来实现相同的效果

vscode中安装easyless插件，来对less文件进行编译

#### 对比
##### css缺点
css 虽然也支持使用变量但是兼容不好
- var( ) 定义变量
- calc ( ) 运算
~~~css
html{
    /* css原生也支持设置变量 */
    --color:#bfa;
    --length:100px
}
.box1{
    width: calc(100px*2);
    height: var(--length);
    background-color: var(--color);
}
~~~
##### less优点
- 在less中增加了许多新特性，如对变量的支持，对mixin的支持
- less语法大体上和css语法一致，但是less中增添了许多css的扩展
- 浏览器无法直接编译less，需要间less转译成css才能在浏览器中编译

#### less基本使用
~~~less
body{
    background-color: #fba;
    .box1{
        width: 300px;
        height: 300px;
        background-color: #bfa;
        .box2{
            width: 150px;
            height: 150px;
            background-color: orange;
            .box4{
                width: 75px;
                height: 75px;
                background-color: red;
            }
        }
        .box3{
            width: 150px;
            height: 150px;
            background-color: skyblue;
        }
    }
}
~~~
~~~html
<body>
    <div class="box1">
        <div class="box2">
            <div class="box4"></div>
        </div>
        <div class="box3"></div>
    </div>
</body>
~~~

- // 单行注释
- /**/ 多行注释
#### less中的变量
变量，在变量中可以储存一个值，并且可以在需要时任意修改这个值
- 变量语法 @变量名
- 使用变量时，如果直接使用，使用变量名即可
- 作为类名或者一部分值使用时必须以 @{变量名} 的形式使用
- 变量重名时会使用较近的变量
- 可以在变量声明前就使用变量
- 可以通过$来引用相同数值 `width: 50px;height: $width;`
~~~less
@a:100px;
@b:black;
@c:box6;
.box{
    width: @a;
    height: @a;
    background-color: @b;
    .@{c}{
        width: 50px;
        height: $width;
        background-color: white;
        background-image: url('@{c}/1.png');
    }
}
~~~
#### 特殊符号
- & 为父元素设置hover等 & &表示父层元素
~~~less
.box{
    &:hover{
        background-color: paleturquoise;
    }
    div &{
        background-color: yellow;
    }
}
// 编译后
.box:hover {
  background-color: paleturquoise;
}
div .box {
  background-color: yellow;
}
~~~
此时&表示.box
#### 扩展混合
- :extend(xx) 扩展 对当前选择器扩展指定的选择器样式
- mixin 混合 .xx{ .yy() } 将yy的样式直接复制一遍给xx
- 使用类选择器时，可以在选择器后添加括号，此时实际上就创建了一个mixin
- 混合函数 在混合函数中可直接设置变量
~~~less
// :extend(xx) 扩展 对当前选择器扩展指定的选择器样式
.p1{
    width: 100px;
    height: 200px;
}
.p2:extend(.p1){
    color: red;
}
// 编译后
.p1,
.p2 {
  width: 100px;
  height: 200px;
}
.p2 {
  color: red;
}
~~~
~~~less
// mixin 混合
// .xx{ .yy() } 将yy的样式直接复制一遍给xx
.p3{
    .p1();
    .p2();
}
// 编译后
.p3 {
  width: 100px;
  height: 200px;
  color: red;
}
~~~
~~~less
// 使用类选择器时，可以在选择器后添加括号，此时实际上就创建了一个mixin
.p4(){
    width: 150px;
    height: 150px;
    color: white;
    background-color: black;
}
.p5{
    display: flex;
    .p4;
}
// 编译后
.p5 {
  display: flex;
  width: 150px;
  height: 150px;
  color: white;
  background-color: black;
}
~~~
~~~less
// 混合函数 在混合函数中可直接设置变量
.test(@w:100px,@h:200px,@bgc:blue){
    width: @w;
    height: @h;
    border: 1px solid @bgc;
}
div{
    // 混合函数按顺序传递参数
    // .test(100px,200px,red);
    // 通过名称传值
    .test(@bgc:red,@w:200px,@h:100px);
}
// 编译后
div {
  width: 200px;
  height: 100px;
  border: 1px solid red;
}
~~~

#### 颜色
- average() 颜色平均值
- darken() 颜色加深
~~~less
// 取颜色平均值
span{
    color: average(red,yellow);
}
// 编译后
span {
  color: #ff8000;
}
~~~
~~~less
body{
    width: 100%;
    height: 100%;
    background-color: pink;
    transition: 1s;
    &:hover{
        background-color: darken(skyblue,10%);
    }
}
// 编译后
body {
  width: 100%;
  height: 100%;
  background-color: pink;
  transition: 1s;
}
body:hover {
  background-color: #5bbce4;
}
~~~

#### 数值运算
在less中可对数值直接进行运算
~~~less
.box{
    // 在less中直接进行运算
    width: 100px-50px;
    height: (100px+100px)*1.5;
    background-color: #bfa;
}
// 编译后
body{
    background-color:pink
    }
.box{
    width:50px;
    height:300px;
    background-color:#bfa
    }
~~~

#### 模块化开发
可以在一个less文件中引入其他less文件进行模块化开发
- 将多个less文件进行合并 模块化处理
- 定义变量
- 定义布局
- 定义动画
- 模块化，方便维护
~~~less
@import './syntax.less';
~~~