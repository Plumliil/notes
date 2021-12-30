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