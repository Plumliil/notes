
## 面向对象：

Object qriented programming

在面向对象的程序开发思想中，每一个对象都是功能中心，具有明确分工

面向对象变成具有灵活，代码可复用，容易维护和开发的特点，更适合多人合作的大型软件项目

### 面向对象的作用

封装 继承 多态

面向对象是把事物分解为一个个对象，然后有对象之间分工合作

举个例子，把大象放进冰箱面向对象做法

先找出对象，并写出这些对象的功能

1.大象为对象

进去

2.冰箱对象

打开

关闭

3.使用大象和冰箱的功能

面向对象是以对象功能来划分问题，而不是步骤

### 面向对象和面向过程的优缺点

面向过程

优点：性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机就采用面向过程

缺点：不如面向对象易维护，易复用，易扩展

面向对象优缺点相反，耦合高，更灵活，易维护

面向过程程序就像蛋炒饭

面向对象程序就像盖浇饭

## 语言基础：

#### 语法：

很大程度上借鉴了c

#### 标识符：

所谓标识符就是变量函数属性或者函数参数的名称

规则：

- ​	第一个标识符必须是一个字符，下划线或者美元符号
- ​	剩下的字符可以是字母下划线美元符号或者是数字
- ​	关键字，保留字，true，false和null不能作为标识符

#### 保留字与关键字：

ECMA-262描述了一组保留字，这些关键字有特殊用处，按照规定，保留的关键字不能作为标识符或者属性名

#### 变量：

EMCAScript的变量是松散类型，意思是可以用于保存任何类型的值

声明风格及最佳实践：不使用或少用var const优先，let次之

##### var：

- ###### 作用域在函数内部，离开函数，var声明的变量无效

- ###### 在函数内定义变量省略var操作符，可以定义一个全局变量

  ```javascript
  function text(){
  	var message='hello world'; // 局部变量
  }
  text();
  console.log(message); //出错 ！
  
  function text(){
  	message='hello world'; // 全局变量
  }
  text();
  console.log(message); // 'hello world
  ```

- ###### 存在变量提升

  使用关键字声明的变量自动提升到函数作用域顶部

  ```javascript
  function fn(){
  	console.log(age);
      var age=18;
  }
  fn(); //undefined 输出undefind并不报错 代码等价于
  
  
  function fn(){
  	var age;
      console.log(age);
      age=18;
  }
  fn(); // undefined
  ```

  

##### let & const：

- ###### let和const的作用域为块级作用域(块级作用域﹝函数作用域)

```javascript
if(true){
	var message='hello world';
    console.log(message); //'hello world'
}
console.log(message); // 'hello world'

if(true)(
	let message='hello world';
    console.log(message); //'hello world'
)
console.log(message); //ReferenceError:message没有定义
```

- ###### let和const声明的变量不存在变量提升

```javascript
console.log(age);
let age=18; //ReferenceError:message没有定义
```

- ###### 其中const声明的变量不可修改（不允许重复声明）

#### 数据类型：

##### 	ECMAScript有六种简单的数据类型（也称原始类型）还有一种复杂的数据类型object

| 简单数据类型 | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| undefined    | 表示值未定义                                                 |
| boolean      | 表示值为布尔值(其他数据类型的值都有相应布尔值的等价形式)     |
| string       | 表示值为字符串                                               |
| number       | 表示值为数值                                                 |
| null         | 表示值为空值（逻辑上讲null值表示一个空对象指针，给typeof传入null时会返回object） |
| symbol       | 表示值为符号                                                 |

| 复杂数据类型 | 说明                       |
| ------------ | -------------------------- |
| object       | 表示值为对象（而不是函数） |

其中typeof操作符可以确定变量的任意数据类型如

```javascript
let message='hello world';
console.log(typeof message); //'string'
console.log(typeof 10); //'number'
```

#### 操作符：

一元操作符，位操作符，布尔操作符，乘性操作符，指数操作符，加性操作符，关系操作符，相等操作符，条件操作符，赋值操作符，逗号操作符

| 操作符                                               | 说明 |
| ---------------------------------------------------- | ---- |
| i++,i--,++i,--i                                      |      |
| ~，&，\|，^，<<,>>,>>>                               |      |
| !,&&,\|\|                                            |      |
| *,/                                                  |      |
| **                                                   |      |
| +,-                                                  |      |
| >,<,>=,<=                                            |      |
| ==,!=,===,!==                                        |      |
| variable = boolean_expression?true_value:false_value |      |
| =                                                    |      |
| ，                                                   |      |
## 前端访问流程

​	代码在后台，访问时从后台获取，后期使用压缩技术使用户快速执行

​	注释与执行符

​	注释：//  对代码进行声明

​	执行符：；如果没有代码压缩时回报错

#### 变量的声明（弱类型）

##### 1.typeof 验证变量类型

```javascript
let a='lyh';
        console.log(a);
        console.log(typeof a); // string
        a=99;
        console.log(typeof a); // number
        a={};
        console.log(typeof a); // objecct
```

​	声明是开辟空间，赋值是放入内容

##### 2.体验解析过程与变量提升

​	解析是把所有代码解析，也存在变量提升（不好）

​	

```javascript
function fn(){
    if(false){
        var web='lyh.com'
    }else{
        console.log(web);
    }
}
fn(); //undefind
```

​	var 声明的变量存在变量提升

​	let const声明的变量不存在

##### 3.let const 暂时性死区

​	let const声明的变量不存在变量提升

​	**声明语句必须放到使用之前**

##### 4.var let const 共同点	

​	函数中可以访问到外部全局变量

​	内部声明后为私有

​	使用时先找局部变量，如果没有使用全局变量

​    作用域链	就近原则 

```javascript
var web='lyh.com';
function show(){
    var web='lyh';
    console.log(web); // lyh
    function run(){
        var web='run---web'
        console.log(web);
    }
    run(); // run---web
    console.log(web);  // lyh
}
show(); // lyh
console.log(web); // lyh.com
```

##### 6.全局污染

​	可以使用严格模式来避免全局污染

​	use strict

##### 7.块作用域的先进特性

​	声明变量是优先使用let 

```javascript
var i=99;
for(let i=0;i<5;i++){
    console.log(i);
}
console.log(i);
```

##### 8.const声明

​	定义固定常量，不能更改（同一个作用域）

​	引用类型的对象数组可以改变

```javascript
const web='lyh.com';
function show(){
    const web='web.com';
    console.log(web);
}
show();
```

##### 9.window全局对象污染与重复声明

​	var 可能导致全局污染

​	let 不会导致（不会改变window对象）

```javascript
var screenLeft=88;
console.log(window.screenLeft); // 88
let screenLeft=88;
console.log(window.screenLeft); //xxxx
console.log(screenLeft); //88
```

​	let const 不可以重复声明（统一作用域）

```javascript
let web='ls';
let web='zs';
console.log(web);
// Identifier 'web' has already been declared
```

##### 10.object.freeze冻结变量

​	

```javascript
// object.freeze冻结变量
"use strict"
const HOST={
    url:'https://lyh.com',
    post:8080
};
Object.freeze(HOST);
HOST.post=3000;
console.log(HOST);
```

11.标量与引用特性的传值与传址

​	![image-20210619100945637](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210619100945637.png)

```javascript
// 地址也改变，创建新的内存地址，针对小数据(两个内存空间)
let a=1;
let b=a;
console.log(a,b);
b=3;
console.log(a,b);
// 地址没有改变，不创建新的内存地址，针对大数据（一个内存空间）
let e={name:'zs'};
let f=e;
console.log(e,f);
f.name='ls';
console.log(e,f);

```

##### 12.null undefined

​	没有值为undefined

```javascript
// null undefined
 let config=null; // 引用类型 {}
 let web=undefined; // 基本类型 ''
 console.log(config);
 console.log(web);

function show(name){
    console.log(name);
}
console.log(show());

```

##### 13.严格模式

​	避免未声明变量使用

​	避免保留字的使用

​	严格模式作用域为从当前作用域向下查找

```javascript
"use strict"

 var pub = 'ww';
 console.log(pub); //Uncaught SyntaxError: Unexpected strict mode reserved word

 var web = 'ls';
 function run() {
     web = 'zs';
 }
 run();
 console.log(web); //Uncaught ReferenceError: web is not defined

 function show(){
     "use strict"
     function handle(){
         webadd='zs.com';
     }
     handle()
 }
 function na(){
     site='啦啦啦';
 }
 show(); //Uncaught ReferenceError: webadd is not defined

let {name,url}={name:'zs',url:'zs.com'};
console.log(name,url);
```

#### 运算符和流程控制

1.赋值与算术运算符

​	取余%

2.一元运算符的前置与后置

​	++i：先自增，i++：先运算 --同理

```javascript
let n=1;
let f=2;
let d=f+ n++;
console.log(d);
```

3.比较运算符注意事项

​	不同类型之间比较会转换类型

```javascript
true let a = 1, b = 2, c = 1, d = '1';
 console.log(a < b);//true 
 console.log(a > b);//false
 console.log(a == b);//false
 console.log(a == c);//true
 console.log(a == d);//true
 console.log(b >= 2);//true
```

```html
<body>
       <input type="text" name="age">
    <span id="msg"></span>
    <script>
        let inp=document.querySelector('[name="age"]');
        let span=document.querySelector('#msg');
        inp.addEventListener('keyup',function(){
            span.innerHTML=this.value>=90?'年龄不能超过90':'';
        })；
    </script>
</body>
```

4.逻辑运算符

```javascript
let a=1,b=1;
if(a==1&&b==1){
    // 全为真
    console.log('ab全为1');
}
if(a==1||b==2){
    // 一个满足条件就成立
    console.log('有一个为1');
}
```



```html
<body>
    <input type="text" name="password" id="">
    <input type="text" name="config_password">
    <span name="msg"></span>
    <script>
        function query(name){
           return document.querySelector(`[name='${name}'`)
        }
       let inputs= document.querySelectorAll('[name="password"],[name="config_password"]');
       console.log(inputs);
       [...inputs].map(item=>{
           item.addEventListener('keyup',function(){
               msg='';
               if(query('password').value!=query('config_password').value||query('password').value.length<5){
                  msg='两次密码不一致或密码长度小于5位';
               }
               query('msg').innerHTML=msg;
           })
       })
    </script>
</body>
```

5.短路与运算的妙用

```javascript
let a = 1, b = 0;
if (a || b) {
    console.log(11);
}

let c = 6, d = 0;
let f = c || d;
console.log(f);

let sex = prompt('输入') || '保密';
console.log(sex);

function star(num) {
    return '*'.repeat(num || 1);
}
console.log(star());
```

6.网站协议接收验证

trim()

trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。

trim() 方法不会改变原始字符串。

```javascript
<body>
    <form action="" id="form">
        用户名:<input type="text" name="user">
        <hr>
        <input type="checkbox" name="copyright" id=""> 接收协议
        <hr>
        <button>提交</button>
    </form>
    <script>
        function query(el){
            return document.querySelector(el);
        }
        query('#form').addEventListener('submit',function(){
            let user=query('[name="user"]').value.trim();
            let copyright=query('[name="copyright"]').checked;
            console.log(user.length);
            if(!user||copyright===false){
                console.log('请提交协议并添加用户名');
            }
            event.preventDefault();
        })
    </script>
</body>
```

7.if else判断密码长度

```html
<body>
    <form action="" id="form">
        <input type="password" name="password">
        <span id="msg"></span>
    </form>
    <script>
        function query(el){
            return document.querySelector(el);
        }
        query('[name="password"]').addEventListener('keyup',function(){
            let length=this.value.length;
            let msg='';
            if(length>10){
                msg='密码无敌安全';
            }else if(length>6){
                msg='密码强度适中';
            }else{
                msg='密码强度较弱';
            }
            query('#msg').innerHTML=msg;
        })
    </script>
</body>
```

8.三元表达式

```javascript
// 可以作为用户自定义创建对象来使用
function div(options = {}) {
    let div = document.createElement('div');
    div.style.width = options.width ? options.width : '100px';
    div.style.height = options.height ? options.height : '100px';
    div.style.backgroundColor = options.bgcolor ? options.bgcolor : 'pink';
    document.body.appendChild(div);
}
div({ width: '300px', height: '400px', bgcolor: 'blue' });
```

## javascript数组挖掘

#### 1.shift

shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

**注意：** 此方法改变数组的长度！

**提示:** 移除数组末尾的元素可以使用 [pop()](https://www.runoob.com/jsref/jsref-pop.html) 方法。

```javascript
 let arr1 = ['l', 'y'];
        let arr2 = ['h', 1, 2, 3];
        arr1.push(...arr2);
        // console.table(arr1);
        function range(begin, end) {
            const arr = [];
            for (let i = begin; i <= end; i++) {
                arr.push(i);
            }
            return arr;
        }
        // console.table(range(1,50))

        const arr3 = ['hdcms', 'houdunren'];
        let arr4=arr3.shift();
        console.log(arr4);
        // const arr4 = arr3.unshift('后盾人');
        console.table(arr3);
```



#### 2.数组填充及出栈入栈方法

fill() 方法用于将一个固定值替换数组的元素。

```javascript
console.log(Array(5).fill('lyh'));
console.log([1,2,3,4].fill('l',1,3));
```



#### 3.splice和slice实现增删改查

![image-20210714113458879](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210714113458879.png)

```javascript
 let arr = [1, 2, 3, 4, 5];
let arr1=arr.slice();
arr1.splice(arr1.length,0,'li');
console.table(arr1);
```



#### 4.数组移动函数

```javascript
        function move(array,from,to){
            if(from<0||to>=array.length){
                console.error('参数错误');
                return;
            }
            const newArray=[...array];
            let item=newArray.splice(from,1)
            console.log(item);
            newArray.splice(to,0,item[0]);
            console.table(newArray);
            return newArray;
        }
        let array=[1,2,3,4];
        move(array,1,2)
```

#### 5.清空数组

```javascript
        let arr = [1, 2, 3, 4, 5, 6];
        let arr1=arr;
        arr.length=0;
        console.log(arr);
```

#### 6.数组的拆分与合并

```javascript
   let arr=['hdcms','houdunren'];
        let hd=[1,2,3,4];
        let cms=['shop','cms'];
        let str='hdcms,houdunren';
        console.log(str.split(','));
        // arr=arr.concat(hd,cms);
        arr=[...arr,...hd,...cms]
        console.table(arr);
        // Array.copyWithin(复制到的位置，复制起始位置，复制终止位置(不包括))
        console.log(hd.copyWithin(2,0,1));
```

#### 7.数组的查找

```javascript
   let arr=[1,2,3,4,2];
        // indexOf:从左开始查找
        // lastIndexOf:从右开始查找
        // includes：数组总含有这个字符串，已经查找到
        console.log(arr.indexOf(2));
        console.log(arr.lastIndexOf(2));
```

#### 8.includes方法

```javascript
 let arr=[1,2,3,4,5,6,7];
        const includes=(array,find)=>{
            for(const value of array){
                if(value===find) return true;
            }
            return false;
        };
        console.log(includes(arr,3));
```

#### 9.find和findindex

```javascript
 // let arr = [1, 2, 3, 4, 5, 6, 78];
        // let res=arr.find(function(item){
        //     // return item=200;
        //     // console.log(item);
        //     // return item=200;
        //     return item==200;
        // })
        // console.log(res);

        // find查找对象，返回查询到的数据
        // findIndex返回对象所在的位置
        let lessons=[{name:'js'},{name:'css'},{name:'html'}];
        let status=lessons.find((item)=>{
           return item.name='css';
        })
        console.log(status);
```

#### 10.find原型方法的实现

```javascript
  function find(array,callback){
            for(const value of array){
                if(callback(value)) return value;
            }
            return undefined;
        }
        let arr=[1,2,3,4,5,6,7,8];
        console.log(
            find(arr,function(item){
                return item==300;
            })
        );
```

#### 11.数组排序

```javascript
  let arr=[1,5,7,3,4,8];
          // sort()里边值为1正序，-1倒序
          arr=arr.sort((a,b)=>{
              // a-b
              // -1从小到大
              // 1从大到小
              return a-b;
          });
          console.table(arr)
          let cart=[
              {name:'iphone',price:12000},
              {name:'imac',price:18000},
              {name:'ipad',price:3200}
          ];
          cart=cart.sort(function(a,b){
              return a.price-b.price;
          })
          console.table(cart)
```

#### 12.数组循环操作

```javascript
    let lessons = [
            { title: 'flex', category: 'css' },
            { title: 'grid', category: 'css' },
            { title: '盒子', category: 'css' }
        ];
        // for (let i = 0; i < lessons.length; i++) {
        //     lessons[i].title = `LYH${lessons[i].title}`
        // }
        // 引用类型改变原来数组
        for(const value of lessons){
            value.title=`LYH${value.title}`;
        }
        console.table(lessons);
        let arr=[1,2,3];
        // 值类型不会改变乱来数组
        for(const value of arr){
            value==10;
        }
        console.table(arr);
```

#### 13.foreach循环

#####       every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

#####       every() 方法使用指定函数检测数组中的所有元素：

#####       如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。

##### 	  some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

#####       some() 方法会依次执行数组的每个元素：

#####       如果有一个元素满足条件，则表达式返回true, 剩余的元素不会再执行检测。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .disable{
            color: #ddd;
        }
    </style>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
    <script>
        let lis=document.querySelectorAll('li');
        lis.forEach((item)=>{
            item.addEventListener('click',function(){
                this.classList.toggle('disable')
            })
        })
        let lessons = [
            { title: 'flex', category: 'css' },
            { title: 'grid', category: 'css' },
            { title: '盒子', category: 'css' }
        ];
        lessons.forEach((item,index,lessons)=>{
            // substr 截断字符串
            item.title=item.title.substr(0,2)
        })
        console.table(lessons);
    </script>
</body>
</html>
```

#### 14.iterator迭代器方法玩转数组

```javascript
      let arr = ['hdcms', 'houdunren'];

        for (const value of arr.values()) {
            console.log(value);
        }
        for (const keys of arr.keys()) {
            console.log(keys);
        }

        // entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对(key / value) 。
        // 迭代对象中数组的索引值作为 key， 数组元素作为 value。
        let entries = arr.entries();
        let { done, value } = entries.next();
        console.log(done, value);
        // keys() 方法用于从数组创建一个包含数组键的可迭代对象。
        // 如果对象是数组返回 true，否则返回 false。
        // 获取索引
        // let keys = arr.keys();
        // let { value, done } = keys.next();
        // 获取值
        // let values = arr.values();
        // let { value, done } = values.next();
        // while(({value,done}=values.next())&&done===false){
        //     console.log(value);
        // }
        // console.log(value, done);
```

#### 15.every，some

```html
<body>
    <input type="text" name="title">
    <span></span>
    <script>
        let keywords=['php','js'];
        let title=document.querySelector('[name="title');
        title.addEventListener('keyup',function(){
          const res2= keywords.some(keyword=>{
                return this.value.indexOf(keyword)!=-1;
            })
            if(res2===false){
                document.querySelector('span').innerHTML='必须包含'+keywords.join(',')+'关键词';
            }
            else{
                document.querySelector('span').innerHTML='';
            }
        })

        let user = [
            { name: 'lisi', js: 89 },
            { name: 'zhangsan', js: 99 },
            { name: 'wangwu', js: 80 },
        ];
        // every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
        // every() 方法使用指定函数检测数组中的所有元素：
        // 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
        // 如果所有元素都满足条件，则返回 true
        const res = user.every(item => {
            return item.js >= 60;
        })
        console.log(res ? '学生全部及格' : '有学生未及格');
        // let arr = ['hdcms', 'houdunren'];
        // let arr.every((item, index, arr) => {
        //     console.log(arr);
        //     return true;
        // })


        // some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
        // some() 方法会依次执行数组的每个元素：
        // 如果有一个元素满足条件，则表达式返回true, 剩余的元素不会再执行检测。
        // 如果没有满足条件的元素，则返回false。
        let arr = ['hdcms', 'houdunren'];
        let res1 = arr.some((value, index, arr) => {
            console.log(value);
            return false;
        })
        console.log(res1);
    </script>
</body>

```

#### 16.filter 数组过滤

```javascript
 // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测。
        // 注意： filter() 不会改变原始数组。
        // let arr = ['php', 'js'];
        let user = [
            { name: 'lisi', js: 89 },
            { name: 'zhangsan', js: 99 },
            { name: 'wangwu', js: 80 },
            { name: 'zhaoliu', js: 92 },
            { name: 'tianqi', js: 95 }
        ];
        let newuser = user.filter((value, index, arr) => {
            return value.js >= 90
        })
        console.table(newuser);
```

#### 17.过滤函数

```javascript
  let arr=[1,2,3,4];
        function filter(array,callback){
            let newarr=[];
            for(const value of array){
                if(callback(value)===true){
                    newarr.push(value);
                };
            }
            console.log(newarr);
            return newarr;
        }
        filter(arr,function(value){
            return value>2
        });
```



#### 18.map映射数组与引用类型处理技巧

##### 	map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

##### 	map() 方法按照原始数组元素顺序依次处理元素。

##### 	**注意：** map() 不会对空数组进行检测。

##### 	**注意：** map() 不会改变原始数组。

##### 	语法

```javascript
array.map(function(currentValue,index,arr), thisValue)
```

##### 参数说明

| 参数                                | 描述                                                         |
| :---------------------------------- | :----------------------------------------------------------- |
| *function(currentValue, index,arr)* | 必须。函数，数组中的每个元素都会执行这个函数 函数参数: 参数描述*currentValue*必须。当前元素的值*index*可选。当前元素的索引值*arr*可选。当前元素属于的数组对象 |
| *thisValue*                         | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。 如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。 |

```javascript
  // map
        // map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
        // map() 方法按照原始数组元素顺序依次处理元素。
        // 注意： map() 不会对空数组进行检测。
        // 注意： map() 不会改变原始数组。

        let lessons = [
            { title: 'flex', category: 'css' },
            { title: 'grid', category: 'css' },
            { title: '盒子', category: 'css' }
        ];
        let lessons_click = lessons.map(value => {
            return {
                title: value.title,
                category: value.category,
                click: 100
            }
        });
        console.log(lessons);
        console.log(lessons_click);
        let arr = ['hdms', 'houdunren'];
        let hd = arr.map((value, index, arr) => {
            value = `后盾人-${value}`;
            return value;
        })
        console.log(arr);
        console.log('-----------------------------');
        console.log(hd);
```

#### 19.reduce方法（获取价格超过多少的商品名称，数组去重，）

##### 	reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

##### 	reduce() 可以作为一个高阶函数，用于函数的 compose。

##### 	**注意:** reduce() 对于空数组是不会执行回调函数的。

##### 	语法

```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

#### 	参数

| 参数                                      | 描述                                                         |
| :---------------------------------------- | :----------------------------------------------------------- |
| *function(total,currentValue, index,arr)* | 必需。用于执行每个数组元素的函数。 函数参数:参数描述*total*必需。*初始值*, 或者计算结束后的返回值。*currentValue*必需。当前元素*currentIndex*可选。当前元素的索引*arr*可选。当前元素所属的数组对象。 |
| *initialValue*                            | 可选。传递给函数的初始值                                     |

```javascript
  // let arr=[1,2,3,4,5,6];
        // arr.reduce((pre,value,index,arr)=>{
        //     console.log(pre,value);
        //     return 99;
        // });
        // // console.log('-------------------');
        // arr.reduce((pre,value,index,arr)=>{
        //     console.warn(pre,value);
        //     return 99;
        // },0)
        let arr = [1, 2, 3, 4, 10, 1, 2, 1];
        function arrayCount(array, item) {
            return array.reduce((total, cur) => {
                total += item == cur ? 1 : 0;
                total = total + (item == cur ? 1 : 0);
                return total;
            }, 0);
        }
        console.log(arrayCount(arr, 1));
        function arrayMax(array){
           return array.reduce((pre,cur)=>{
                return pre>cur?pre:cur
            },0)
        };
        console.log(arrayMax(arr));
```

#### 	20.字体效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        body{
            width: 100vh;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #34495e;
        }
        div{
            font-size: 4em;
            text-transform: uppercase;
            color: #9b59b6;
        }
        div>span{
            display: inline-block;
            position: relative;
        }
        .color{
            animation-name: color;
            animation-duration: 1s;
            animation-iteration-count: 2;
            animation-timing-function: linear;
            animation-direction: alternate;
        }
        @keyframes color{
            50%{
                color: #f1c40f;
                transform: scale(1.5);
            }
            100%{
                color: #e74c3c;
                transform: scale(0.5);
            }
        }
    </style>
</head>
<body>
    <div>lyh.wslyh</div>
    <script>
        const div=document.querySelector('div');
        console.log(...div.textContent);
        [...div.textContent].reduce((pre,cur,index)=>{
            console.log(pre,cur,index);
            pre==index&&(div.innerHTML='');
            let span=document.createElement('span');
            span.innerHTML=cur;
            div.appendChild(span);
            span.addEventListener('mouseover',function(){
                this.classList.add('color');
            })
            span.addEventListener('animationend',function(){
                this.classList.remove('color');
            })
        },0)
    </script>
</body>
</html>
```

## symbol

#### 1.声明定义symbol的几种方式

-  'let lyh = Symbol('带描述的symbol')' 该声明方式会重复创建symbol唯一

   let l = Symbol('带描述的symbol')' 和 let y = Symbol('带描述的symbol')'不同

  获取描述值用xxx..description

- ‘  let h = Symbol.for('我是h')’ 该声明方式不会被重复创建，

   let h = Symbol.for('我是h')和 let i = Symbol.for('我是h') 相同

  获取值用xxx.keyFor()

#### 2.使用Symbol解决字符串耦合的问题

~~~javascript
  let user1 ={
      name:'李四',
      key:Symbol()
  }
  let user2 ={
      name:'李四',
      key:Symbol()
  }
  let grade = {
      [user1.key]: {js: 100,css: 89},
      [user2.key]: {js: 60,css: 55},
  }
  console.log(grade[user1.key]); // 第一个李四
  console.log(grade[user2.key]); // 第二个李四
~~~

#### 3.Symbol在缓存容器中的使用

~~~javascript
        class Catch {
            static data = {}
            static set(name, value) {
                return (this.data[name] = value)
            }
            static get(name) {
                return this.data[name]
            }
        }
        // Catch.set('lyh', 'he is lyh')
        // console.log(Catch.get('lyh'));
        let user = {
            name: 'apple',
            desc: '用户资料',
            key: Symbol('购物车数据')
        };
        let cart = {
            name: 'apple',
            desc: '购物车',
            key: Symbol('购物车数据')

        }
        Catch.set(user.key, user)
        Catch.set(cart.key, cart)
        console.log(Catch.get(cart.key));
~~~

#### 4.扩展特性与对象属性的保护

~~~javascript
let symbol = Symbol('这是一个Symbol类型')
        let lyh = {
            name: 'LYH',
            [symbol]: 'I am LYH'
        }
        for (const key in Reflect.ownKeys(lyh)) {
            console.log(key);
        }
        let site = Symbol('this is a symbol')
        class User {
            constructor(name) {
                this.name = name;
                this[site] = 'LYH'
            }
            getName() {
                return `${this[site]} ${this.getName}}`
            }
        }
        let lisi=new User('李四')
        for (const key in lisi){
            console.log(key);
        }
~~~

## Map类型

#### 1.Map类型特点与创建方法

~~~javascript
        // 对象中的键只能是字符串
        let obj = {
            name: 'lyh'
        }
        let newObj = {
            [obj]: 'new obj'
        }
        console.log(newObj);
        console.log(newObj[obj.toString()]);
        // Map对象中的键可以是多种类型
        let map = new Map()
        map.set('name', 'lyh')
        map.set({}, 'l')
        map.set(1, 'y')
        console.log(map);
        let map1=new Map([['firstName','L'],['lastName','YH']])
        map1.set('sex','man')
        map1.set('age','20')
        console.log(map1);
~~~

#### 2.Map类型的增删改查操作

~~~javascript
     let obj = {
            name: 'lyh'
        }
        let map = new Map()
        // 设置
        map.set(obj, 'lyh.com')
        map.set('test', 'test')
        // 获取
        console.log(map.get(obj));
        // 删除单个
        console.log(map.delete(obj));
        console.log(map);
        // 删除全部
        map.clear();
        console.log(map);
        // 查询
        map.set('find','findValue')
        console.log(map.has(obj)); // false
        console.log(map.has('find')); // true
~~~

#### 3.遍历Map类型数据

~~~javascript
        let map = new Map([
            ['firstName', 'L'],
            ['lastName', 'YH']
        ])
        map.set('sex', 'man')
        map.set('age', '20')
        console.log(map);
        console.log('keys:',map.keys());
        console.log('values:',map.values());
        console.log('entries:',map.entries());
        for(const [key,value] of map.entries()){
            console.log(key,value);
        }
        map.forEach((value,key)=>{
            console.log(value,key);
        })
~~~

#### 4.Map类型转换操作

~~~javascript
		// 获取值魏20的集合
        let map = new Map([
            ['firstName', 'L'],
            ['lastName', 'YH'],
            ['sex', 'man'],
            ['age', '20']
        ])
        console.log([...map]);
        let newArr = [...map].filter(item => {
            return item[1].includes('20')
        })
        console.log(newArr);
        let info = new Map(newArr)
        console.log(info);
~~~

#### 5.Map操作DOM节点

~~~javascript
        <div name="l">姓氏</div>
    	<div name="yl">名字</div>
	    // Map类型操作管理DOM节点
        let map = new Map()
        document.querySelectorAll('div').forEach(item => {
            map.set(item, {
                content: item.getAttribute('name')
            })
        })
        console.log(map);
        map.forEach((config, elem) => {
            elem.addEventListener('click', () => {
                alert(config.content)
                console.log(config);
                console.log(elem);
            })
        })
~~~

#### 6.使用Map类型控制网站表单提交

~~~javascript
    <form action="http://124.70.8.61" onsubmit="return post()">
        接受协议：
        <input type="checkbox" name="agreement" error="请接受协议">
        我是学生：
        <input type="checkbox" name="student" error="网站只对学生开放">
        <input type="submit">
    </form>
        function post() {
            let map = new Map();
            let inputs = document.querySelectorAll('[error]')
            inputs.forEach(item => {
                map.set(item, {
                    'error': item.getAttribute('error'),
                    status: item.checked
                })
            });
            return [...map].every(([elem, config]) => {
                // console.log(config);
                config.status || alert(config.error)
                return config.status
            })
        }
~~~

#### 7.WeakMap的语法使用

~~~javascript
  	<div>l</div>
    <div>yh</div>
	let divs = document.querySelectorAll('div')
        let map = new WeakMap()
        divs.forEach(item => map.set(item, item.innerHTML))
        // map.set([],'weakmap')
        console.log(map);
        let arr = []
        let newMap=new WeakMap()
        map.set(arr,'lyh.com')
        console.log(arr);
        console.log(map.has(arr));
        console.log(map.keys); // undefined
        console.log(map.size); // undefined
        // let l=new Map([['name','lyh']])
        // console.log(l.size);
        // WeakMap为弱引用类型不可迭代
        for(const interator of map){
            console.log(interator); // Uncaught TypeError: map is not iterable
        }
~~~

#### 8.WeakMap弱引用类型体验

~~~javascript
        // WeakMap弱引用类型体验
        let lyh = {
            name: 'lyh'
        }
        lll = lyh
        let map = new WeakMap()
        map.set(lyh, 'my name is lyh')
        lyh = null
        lll = null
        console.log(map); // WeakMap {{…} => 'my name is lyh'}
        // console.log(map.keys);
        setTimeout(()=>{
            console.log(map); // WeakMap {}
        },1000)
~~~

#### 9.使用WeakMap开发选课组件

~~~javascript
      	<div
        	style="width: 600px;height:100px;border: 3px solid red;display: flex;justify-content: center;align-items: center;">
        	<ul style="border: 3px solid gray;flex: 1;height: 95%;">
            	<li><span>js</span><a href="javascript:;">+</a></li>
            	<li><span>html</span><a href="javascript:;">+</a></li>
            	<li><span>css</span><a href="javascript:;">+</a></li>
            	<li><span>node</span><a href="javascript:;">+</a></li>
        	</ul>
        	<div style="border: 3px solid gray;flex: 1;height: 95%;">
            	<strong id="count">共选择了2门课</strong>
            	<p id="lists"></p>
        	</div>
    	</div>
		class Lesson {
            constructor() {
                this.lis = document.querySelectorAll('ul>li')
                this.countElem = document.getElementById('count')
                this.listElem = document.getElementById('lists')
                this.map = new WeakMap()
            }
            run() {
                this.lis.forEach(li => {
                    li.querySelector('a').addEventListener('click', (event) => {
                        const a = event.target
                        const state = li.getAttribute('select');
                        if (state) {
                            li.removeAttribute('select');
                            a.innerHTML = '+';
                            this.map.delete(li)
                            a.style.backgroundColor = 'green'
                        } else {
                            this.map.set(li)
                            li.setAttribute('select', true);
                            a.innerHTML = '-';
                            a.style.backgroundColor = 'red'
                            a.style.color = 'white'
                        }
                        this.render()
                    });
                });
            }
            count() {
                return [...this.lis].reduce((count, li) => {
                    return (count += this.map.has(li) ? 1 : 0);
                }, 0)
            }
            lists() {
                return [...this.lis].filter(li => {
                    return this.map.has(li)
                }).map(li => {
                    return `<span>${li.querySelector('span').innerHTML}</span>`
                })
            }
            render() {
                this.countElem.innerHTML = `共选择了${this.count()}门课`;
                this.listElem.innerHTML = this.lists();
            }
        }
        new Lesson().run()
~~~

## Js中函数的秘密

#### 1.函数声明的多种方式

声明字符串也可以用声明对象的方法

~~~JavaScript
let str = new String('lyh');
        console.log(str.substr(0, 1));
        let func = new Function('title', 'console.log(title)')
        func('Function')

        function fn(title) {
            console.log(title);
        }
        fn('fn')
        let cms = function (title) {
            console.log(title);
        };
        cms('cms')
        // console.log(cms);
        let user = {
            name: null,
            serUsername: function (name) {
                this.name = name
            },
            getUsername: function () {
                return this.name
            }
        }
        user.serUsername('LYH')
        console.log(user.getUsername());
~~~

#### 2.全局函数定义的特点

​    声明的关键词不同体验的形式不同*

​    用var声明的函数会被压到window里，此时winow也可以调用*

​    用let声明的函数不会被压到window对象中，window无法调用*

​    建议函数不要独立存，尽量都编写到类里面*

~~~javascript
        var varf=function(){
            console.log('varf');
        }
        let letf=function(){
            console.log('letf');
        }
        varf(); //varf
        window.varf(); // varf
        letf(); // letf
        window.letf(); // 报错：Uncaught TypeError: window.letf is not a function
~~~

#### 3.匿名函数与函数提升

函数是引用类型，是个对象

函数的调用引用类型的内存地址的指针传递

~~~javascript
        // 定义匿名函数并赋值给变量
        fn() 报错，匿名函数无变量提升
        let fn = function () {
            console.log('fn');
        }
        // 变量提升
        show()
        function show() {
            console.log('show');
        }
        function sum(...args) {
            return args.reduce((a, b) => {
                return a + b
            })
        }
        console.log(sum(1, 2, 3, 4, 5, 6, 77, 20));  // 118
~~~

#### 4.立即执行函数与块作用域解决冲突

##### 立即执行函数冲突解决

把该函数命名后挂载到window对象上，然后再调用（作用域放到私有作用域里）

~~~javascript
(function (window) {
    function fn() {
        console.log('index fn()');
    }

    function show() {
        console.log('index show()');
    }
    window.i={fn,show}
})(window)

// 调用时
i.show()
~~~

##### 块级作用域 let，const

#### 5.形参和实参

例如买房子，其中房托就是形参，实实在在买房子就是实参

~~~javascript
     function sum(a, b) {
            return a + b
        }
     console.log(sum(1,2,3,4)); // 3,4无意义，为形参，1，2有它实际的作用，为实参
~~~

#### 6.默认参数的使用技巧

- 可以在传入的参数里使用等号设默认值

- 没有必要使用的参数放后边，就不用传入

~~~javascript
 function sortArray(array, type="asc") {
            return array.sort(function (a, b) {
                return type === 'asc' ? a - b : b - a
            })
        }
 console.log(sortArray([1,5,2,7,187]));
~~~

#### 7.函数参数与arguments

arguments为函数传入的参数，在函数里可以打印出来当传入的参数过多时如果有需要可以使用点语法来进行收集与释放，结构和赋值

~~~javascript
        function sum(...args) {
            console.log(args); // (6) [1, 23, 3, 45, 24, 53]
            console.log(arguments); // Arguments(6) [1, 23, 3, 45, 24, 53, callee: (...), Symbol(Symbol.iterator): ƒ]
        }
        console.log(sum(1, 23, 3, 45, 24, 53));
~~~

#### 8.箭头函数的使用语法

~~~javascript
// 求和 
let lyh = [1, 2, 3, 4, 5, 6, 7].reduce((a, b) => a + b)
 console.log(lyh);
 // this
 // 递归回调
~~~

####     9.通过函数完成递归算法

需要考虑的问题：

- 递归考虑两层即可
- 注意返回的时机

~~~
        function factorial(num) {
            if (num === 1) {
                return 1
            }
            return num * factorial(num - 1)
        }
        console.log(factorial(4));
~~~

#### 10.递归求和和点语法的注意事项

~~~javascript
    function sum(...args){
            console.log(args);
            return args.length===0?0:args.pop()+sum(...args)
            // return args.pop()+sum(...args)
        }
    console.log(sum(1, 2, 3, 4, 5, 6, 7));  //28
~~~

#### 11.递归实现倒三角

~~~javascript
     function star(sum) {
            if (sum == 0) {
                return ''
            }
            document.write('⭐'.repeat(sum) + '</br>')
            star(--sum)
            // return sum ? document.write('⭐'.repeat(sum) + '</br>') || star(--) : ""
        }
     star(5)
~~~

#### 12.递归附件参数使用技巧

~~~javascript
        let lessons = [{
                title: 'html',
                click: 80
            },
            {
                title: 'CSS',
                click: 79
            },
            {
                title: 'Javascript',
                click: 100
            },
            {
                title: 'css3',
                click: 81
            }
        ]
        function change(lessons,num=100,i=0){
            if(i===lessons.length){
                return lessons
            }
            lessons[i].click+=num;
            return change(lessons,num,++i)
        }
        // console.table(change(lessons,40))
        let newLessons=lessons.map(function(item){
            item.click+=100
            return item
        })

        console.table(newLessons);
~~~

#### 13.什么是回调函数

回调函数就是一个参数，将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数。这个过程就叫做回调。

~~~javascript
 let lyh = [1, 2, 3, 4]
        let newLyh = lyh.map(function (value,index,array) {
            return array[index]+=10
        })
 console.log(newLyh);
~~~

#### 14.展开语法(点语法)的正确使用方式

~~~javascript
        let arr = [1, 2, 3, 4]
        let [a, b, c, d] = [...arr]
        console.log(a, b, c); // 1,2,3
        let [...edu] = [1, 2, 3, 4]
        console.log(edu); // [1, 2, 3, 4]
		
        function sum(discount = 0, ...price) {
            console.log(price); // [199, 2990, 877]
            let total = price.reduce((a, b) => a + b)
            return Math.round(total * (1 - discount))
        }
        console.log(sum(0.5, 199, 2990, 877)); // 2033
~~~

#### 15.函数和方法中的this不同

~~~javascript
        name = 'window对象的name'
        let obj = {
            name: 'lyh',
            show: function () {
                console.log('show');
                console.log(this); // obj这个对象

                function rander() {
                    console.log('rander');
                    console.log(this); // window对象
                }
                rander()
                return this.name
            }
        }
        // 如果函数是对象属性,是类方法,那么这个函数的this指向这个对象
        // 如果函数是对象属性的函数,那么该函数中的this指向的是window对象
~~~

#### 16.通过常量改变this指针

~~~javascript
   let lesson = {
            site: 'cc',
            lists: ['js', 'css', 'mysql'],
            show: function () {
                const self = this; // 通过定义变量来接收this关键字
                console.log(this);
                return this.lists.map(function (value) {
                    // console.log(value);
                    console.log(this.site);
                    return `${self.site}-${value}`
                },this)
                // 通过传入第二个参数改变this的指向
            }
        }
        console.log(lesson.show());
~~~

#### 17.箭头函数带来的this变化的实例

~~~javascript
        let lesson = {
            site: 'cc',
            lists: ['js', 'css', 'mysql'],
            show: function () {
                return this.lists.map(value => `${this.site}-${value}`)
            }
        }
        console.log(lesson.show());
~~~

#### 18.this的构造原理的实现

~~~javascript
        function User(name){
            this.name=name;
            // return {a:'lyh.com'}
        }
        // 构造
        let lisi=new User('lisi')
        let hdcms={url:'hdcms.com'}
        console.log(lisi); // User {name: 'lisi'}
        User.call(hdcms,'开源系统')
        console.log(hdcms); // {url: 'hdcms.com', name: '开源系统'}
~~~

#### 19.call与apply

call 的参数是直接放进去的，第二第三第 n 个参数全都用逗号分隔，直接放到后面 myFun.call(db,'成都', ... ,'string' )。

apply 的所有参数都必须放在一个数组里面传进去myFun.apply(db,['成都', ..., 'string' ])。

~~~javascript
        // 获得数组中元素的最大值
        // 通过apply传递数组this指向Math对象
        let arr = [1, 2, 4, 7, 12, 23] 
        console.log(Math.max(...arr)); // 23
        console.log(Math.max.apply(Math,arr)); // 23
	    // 又如
        let lisi = {
            name: 'lisi'
        }
        let wangwu = {
            name: 'wangwu'
        }

        function User(web, url) {
            console.log(web + url + this.name);
        }
        // call,apply在调用后会立即执行
        User.call(lisi, 'hdr', 'hdr.com');
        User.apply(lisi, ['hdr', 'hdr.com'])

~~~

#### 20.构造函数的方法继承

##### 未继承



![image-20211116140244258](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20211116140244258.png)

~~~javascript
        function Article() {
            this.url = 'article/lists'
            Request.call(this)
            this.get = function (params) {
                //id=1&cat=js
                console.log('params', params); // {id: 1, cat: 'js'}
                console.log(Object.keys(params)); // (2) ['id', 'cat']
                let newParasm = Object.keys(params).map(k => {
                    return `${k}=${params[k]}`
                }).join('&')
                let url = `https://${this.url}` + '/' + newParasm
                console.log(url); // https://article/lists/id=1&cat=js
            }
        }

        function User() {
            this.url = 'user/lists'
            Request.call(this)
            this.get = function (params) {
                //id=1&cat=js
                console.log('params', params); // {id: 1, cat: 'js'}
                console.log(Object.keys(params)); // (2) ['id', 'cat']
                let newParasm = Object.keys(params).map(k => {
                    return `${k}=${params[k]}`
                }).join('&')
                let url = `https://${this.url}` + '/' + newParasm
                console.log(url); // https://article/lists/id=1&cat=js
                document.write(url); // https://article/lists/id=1&cat=js
            }
        }
        let user = new User()
        user.get({
            id: 2,
            role: 'admin'
        })
        let article = new Article()
        article.get({
            id: 1,
            cat: 'js'
        });
~~~

##### 继承

![image-20211116140409048](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20211116140409048.png)

~~~javascript
function Request() {
            this.get = function (params) {
                console.log('params', params);
                console.log(Object.keys(params));
                let newParasm = Object.keys(params).map(k => {
                    return `${k}=${params[k]}`
                }).join('&')
                let url = `https://${this.url}` + '/' + newParasm
                console.log(url);
                document.write(url);
            }
        }

        function Article() {
            this.url = 'article/lists'
            Request.call(this)
        }

        function User() {
            this.url = 'user/lists'
            Request.call(this)
        }
        let user = new User()
        user.get({
            id: 2,
            role: 'admin'
        })
        let article = new Article()
        article.get({
            id: 1,
            cat: 'js'
        });
~~~

##### 21.优雅的开发面板组件

折叠面板组建的封装call应用，不传this传第二个参数

~~~javascript
	    // html 部分
		<dl>
        	<dt>后盾人</dt>
        	<dd>1</dt>
        	<dt>hdcms</dt>
        	<dd hidden=hidden>2</dd>
    	</dl>       
	   // js部分
	   function panel(i) {
            let dds = document.querySelectorAll('dd')
            dds.forEach(dd => dd.setAttribute('hidden', 'hidden'))
            dds[i].removeAttribute('hidden')
        }
        document.querySelectorAll('dt').forEach((dt, i) => {
            console.log(i);
            dt.addEventListener('click', () => panel.call(null, i))
        })
~~~

#### 22.bind的用法

bind不立即执行，可以有两次传参的机会

~~~javascript
        function fn(a, b) {
            return this.f+a+b
        }
        console.log(fn.bind({f:2})(1,1)); // 4
        console.log(fn.bind({f:2},2)(1)); // 5
~~~

#### 23.bind改变this实现随即色效果

~~~javascript
        function Color(elem) {
            this.elem = elem;
            this.colors = ['#3498db', '#1abc9c', '#34495e', '#f1c40f']
            this.run = function () {
                setInterval(function(){
                    // console.log(this);
                    let i =Math.floor(Math.random()*this.colors.length)
                    console.log(i);
                    console.log(this.elem);
                    this.elem.style.backgroundColor=this.colors[i]
                }.bind(this),1000)
                // console.log(this);
            }
        }
        let obj = new Color(document.body)
        obj.run()
~~~

## JS的作用域和闭包

#### 1.什么是环境和作用域

~~~javascript
        // js全局环境不会被回收
        let title = 'lyh';

        // function fn() {
        //     alert('title')
        // }
        // console.log(title);
        // document.querySelector('button').addEventListener('click',fn)
        function show() {
            alert('title')
        }
        show()
~~~

#### 2.函数的环境与作用域原理

声明的函数每次调用就会创造新的内存地址，第一个创建的函数和第二个创建的函数

~~~javascript
        function show() {
            let url = 'hdrcms.com'

            function fn() {
                let site = 'hdcms'
                console.log(site);
            }
            fn()
            console.log(site);
        }
        show(); // 每次调用都会存到新的内存地址，数据不会共用
~~~

#### 3.延伸函数环境生命周期

   如果数据被使用就不会被删除,就会被保留，延长含糊的生命周期

~~~javascript
        function fn() {
            let n = 1
            return function () {
                let m = 1
                return function show(){
                    console.log('n',++n);
                    console.log('m',++m);
                }
            }
        }
        let a = fn()();
        a(); // n 2 m 2
        a(); // n 3 m 3
        a(); // n 4 m 4
~~~

#### 4.构造函数中作用域的使用形态

~~~JavaScript
        function Fn(){
            let n = 1;
            this.sum=function(){
                console.log(++n);
            }
        }
        let a=new Fn()
        a.sum(); // 2
        a.sum(); // 3
~~~

#### 5.什么是块级作用域

第一个对象里的a能被全局访问

第二个对象里定义的a不能被全局访问，只能在对像内所属的块级作用域使用

~~~javascript
        {
            var a= 1;
            console.log(a);
        }
        {
            let a =2;
            console.log(a);
        }
        console.log(a);
~~~

#### 6.let，const，var在for循环中的使用差异

~~~javascript
        for (var i = 1; i <= 3; i++) {
            // console.log(i);
            setTimeout(function () {
                console.log(i); // 3 4
            }, 1000)
        }
        console.log('i', i); // 4
        console.log(window.i); // 4
        for (let i = 1; i <= 3; i++) {
            // console.log(i);
            setTimeout(function () {
                console.log(i); 
                // 1 
                // 2
                // 3
            }, 1000)
        }
        console.log('i', i); // Uncaught ReferenceError: i is not defined
        console.log(window.i); // Uncaught ReferenceError: i is not defined
~~~

#### 7.模拟出var的伪块级作用域

var有函数作用域，使用立即执行函数来封装使var定义的变量有块级作用域效果

~~~javascript
	   for (var i = 1; i <= 3; i++) {
            (function (a) {
                setTimeout(function () {
                    console.log(a); // 3 4
                }, 1000)
            })(i)
        }
~~~

#### 8.多级作用域嵌套详解

~~~javascript
        let arr=[]
        for (var i = 1; i <= 3; i++) {
            // var有函数作用域，使用立即执行函数来封装
            (function(i){
                arr.push(function(){
                return i
            })
            })(i)
        }
        console.log(arr[0]()); // 1
~~~

#### 9.什么是闭包及与其他语言对比实例

闭包的含义是某一函数可以访问其他函数作用域中的变量叫做闭包

#### 10.使用闭包获取商品区间



~~~JavaScript
        let lessons = [
            {
            title: 'html',
            click: 30,
            price: 12
            },
            {
            title: 'css',
            click: 97,
            price: 40
            },
            {
            title: 'js',
            click: 124,
            price: 75
            },
            {
            title: 'vur',
            click: 105,
            price: 70
            },
        ]
        function between(a, b) {
            return function (v) {
                return v.price >= a && v.price <= b
            }
        }
        console.table(lessons.filter(between(50, 100)));
~~~

![image-20211117140033427](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20211117140033427.png)

#### 10移动动画的闭包使用

##### 动画为什么会抖动

~~~javascript

	<button>BUTTON</button>

	let buttons = document.querySelectorAll('button')
        buttons.forEach(item => {
            item.addEventListener('click', () => {
                let left = 1;
                setInterval(() => {
                    item.style.left = left++ + 'px'
                }, 100);
            })
        })
~~~

##### 动画为什么会加速

```javascript
<button>BUTTON</button>

let buttons = document.querySelectorAll('button')
    buttons.forEach(item => {
        let left = 1;
        item.addEventListener('click', () => {
            setInterval(() => {
                item.style.left = left++ + 'px'
            }, 100);
        })
    })
```

##### 解决动画抖动及加速方法

动画抖动和加速说到底使环境问题，当点击click使就会创建一个环境，此时需要判断一下定时器是否为真，如果定时器为真就返回一个空环境，否则创建定时器，执行动画

~~~javascript
        let buttons = document.querySelectorAll('button')
        buttons.forEach(item => {
            // parent
            let bind = false
            item.addEventListener('click', () => {
                if (!bind) {
                    let left = 1
                    bind = setInterval(() => {
                        item.style.left = left++ + 'px'
                    }, 10);
                }
            })
        })
~~~

11.利用闭包根据字段排序商品

~~~javascript
 let lessons = [{
                title: 'html',
                click: 30,
                price: 12
            },
            {
                title: 'css',
                click: 107,
                price: 40
            },
            {
                title: 'js',
                click: 124,
                price: 75
            },
            {
                title: 'vur',
                click: 99,
                price: 70
            },
        ]
        function order(field,type='asc') {
            return function (a, b) {
                if(type==='asc') return a[field] > b[field] ? 1 : -1;
                return a[field] > b[field] ? -1 : 1
            }
        }
        let hd = lessons.sort(order('click','desc'))
~~~

#### 12.闭包的内存泄漏解决办法

~~~JavaScript
        let divs = document.querySelectorAll('div')
        divs.forEach(item => {
            let desc = item.getAttribute('desc')
            item.addEventListener('click', () => {
                console.log(desc);
                console.log(item);
            })
            item = null
        })
~~~

#### 13.this在闭包中的历史遗留问题

this的指向问题

~~~javascript
        // this指的是当前调用函数的对象
        let obj = {
            user: 'lyh',
            get: function () {
                return () => {
                    this.user
                }
            }
        }
        obj.get()
~~~

## 对象

#### 1.函数编程与面向对象的实例

~~~javascript
        let user = {
            name: 'lyh',
            grade: [{
                    name: 'js',
                    score: 99
                },
                {
                    name: 'docker',
                    score: 80
                },
            ],
            average: function () {
                let total = this.grade.reduce((t, l) => t + l.score, 0)
                console.log(total / this.grade.length);
                return total
            }
        }
        console.log(user.average());
~~~

#### 2.属性的基本操作方法

~~~javascript
        let user={
            name:'lyh',
            'my age':18
        }
        console.log(user.name); // lyh
        console.log(user['name']); // lyh
        console.log(user['my age']); // 18
        for(const key in user){
            console.log(key); // name my age
            console.log(user[key]); // lyh  18
        }
        user.age=19;
        user.get=function(){
            return `${this.name}的年龄是${this.age}`
        }
        console.log(user.get()); // lyh的年龄是19
        delete user.age
        console.log(user.get()); // lyh的年龄是undefined
~~~



#### 3.对象的引用传值

​	对象函数传值传地址，普通字符串传值直接复制

~~~javascript
     let user = {
            name: "了以后"
        };
        function show(a){
            a+=100
            console.log(a); // 101
        }
        let a=1
        show(a);
        console.log(a); // 1
        function showFn(user){
            user.age=18
        }
        showFn(user)
        console.log(user); // {name: '了以后', age: 18}
~~~



#### 4.使用展开语法完成参数合并

在对象当中出现同名属性的时候，后边的属性值会把前边的属性值覆盖

~~~javascript
        function upload(params) {
            let config = {
                type: '*.jpg,*.png',
                size: 10000
            }
            config={...config,...params}
            console.log(config); // {type: '*.jpg,*.png', size: 99}
        }
        upload({size:99})
~~~

#### 5.解构赋值新增特性】

可以全部解构，也可以部分解构

~~~javacript
        let user={name:'了以后',age:18}
        console.log(user);
        let {name,age}=user;
        console.log('user',name,age); // 了以后 18

        function fn(){
            return {name1:'了以后1',age1:19}
        }
        let {name1,age1}=fn()
        console.log('fn()',name1,age1); // 了以后1 19
        function userFn({name,age}){
            console.log(name,age);
        }
        userFn(user); // 了以后 18
        let {random}=Math
        console.log(random());
~~~

#### 6.严格模式下的结构特性

~~~javascript
    "use strict";
        let {name,age}={name:'了以后',age:18}
        {name,age}={name:'了以后',age:18} // 报错
~~~

#### 7.结构操作的简写形式与对象结构

~~~javascript
      let arr=['了以后','plumli.com'];
        let[,b]=arr
        console.log(b);
        let user={name:'了以后',age:18}
        let {age}=user; // 18
        console.log(age);
~~~

#### 8.多层对象的就够操作

~~~javascript
        let obj={
            name:'了以后',
            lesson:{
                title:'javascript'
            }
        };
        let {name,lesson:{title}}=obj
        console.log(title); // javascript
~~~

#### 9.解构默认值实现配置项合并

建议以后敲代码时可以频繁用到解构，可以带来很大方便

~~~javascript
        let user={name:'了以后',url:'plumli.com',title:'web'};
        let {name,url,title='plumli'}=user;
        console.log(name,url,title);
        function createElement(options={}){
            let {width=200,height=100,backgroundColor='red'}=options;
            const div=document.createElement('div');
            div.style.width=width+'px';
            div.style.height=height+'px';
            div.style.backgroundColor=backgroundColor;
            document.body.appendChild(div)
        }
        createElement({width:100})
~~~

#### 10.函数参数的解构使用技巧

~~~javascript
        function fn(name,{age:a,sex:b}){
            console.log(name,a,b);
        }
        fn('了以后',{age:18,sex:'男'})
~~~

#### 11.对象属性的 添加删除操作

~~~javascript
        let obj = {};
        obj.name = '了以后';
        obj['age'] = 18;
        console.log(obj);
        delete obj.name;
        console.log(obj);
~~~

#### 12.对象与原型链属性检测实例

~~~javascript
        let arr= ['plumli.com','lyh']
        console.log(arr); // (2) ['plumli.com', 'lyh']
        // hasOwnProperty只能看见当前的对象中，无法查询prototype中的属性
        console.log(arr.hasOwnProperty('length')); // 判断数组中是否含有length这个属性 true
        console.log(arr.hasOwnProperty('concat')); // 判断数组中是否含有concat这个属性 false
        // in 可以查看整个对象中的属性
        console.log('concat' in arr); // 判断数组中是否含有concat这个属性
        function oss(options){
            if(!options.hasOwnProperty('host')){
                throw new Error('必须设置主机地址'); // Uncaught Error: 必须设置主机地址
            }
        }
        oss({user:'admin'})
~~~

#### 13.计算属性与assign的使用

计算属性

~~~javascript
        const lessons = [{
                title: '媒体查询响应式布局',
                category: 'css'
            },
            {
                title: 'FlEX 弹性盒模型',
                category: 'css'
            },
            {
                title: 'MYSQL多表查询随意操作',
                category: 'MYSQL'
            },
        ]
        let res = lessons.reduce((obj, cur, index) => {
            obj[`${cur['category']}-${index+1}`] = cur
            return obj
        },{})
        console.log(res);
~~~

assign

~~~javascript
        let hd = Object.assign({a:1},{b:2})
        console.log(hd); // {a: 1, b: 2}
        function upload(params){
            let options={
                size:19999
            }
            options=Object.assign(options,params)
            console.log(JSON.stringify(options));
        }
        upload({size:99,type:'jpeg'}); // {"size":99,"type":"jpeg"}
~~~

#### 14.遍历操作和DOM绘制

普通方法遍历对象

~~~javascript
        for (const key in lyh) {
            console.log(lyh[key]);
        }
~~~



数组方法遍历对象

~~~javascript
    for(const [key,value] of Object.entries(lyh)){
            console.log(key); // ['year', 2001]
            console.log(value);
        }
~~~

DOM绘制

~~~javascript
       let lessons = [{
            name: 'js',
            click: 999
        },
        {
            name: 'node',
            click: 127
        }]
        let ul=document.createElement('ul')
        for(const lesson of lessons){
            let li=document.createElement('li')
            li.innerHTML=`课程:${lesson.name},点击数:${lesson.click}`
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
~~~

#### 15.对象的浅拷贝多种操作方法

`let pl ={name:'lyh',url:'plumli.xyz'};`

1.

~~~javascript
 	    let pl={name:'plumli'}
        let plum={name:pl.name}
        console.log(plum);
        plum.name='plum'
        console.log(plum);
~~~

2.

~~~javascript
 let obj={};
        for(const key in pl){
            obj[key]=pl[key]
        }
        obj.name='plumli'
        console.log(obj);
        console.log(pl);
~~~

3.

~~~javascript
    let pl ={name:'lyh',url:'plumli.xyz'};
        let obj=Object.assign({},pl)
        obj.name='plumli'
        console.log(obj);
~~~

4.

~~~javascript
  let obj={...pl}
        console.log(obj);
~~~

#### 16.深拷贝多层次分析

~~~javascript
        let obj1 = {
            name: 'obj1name',
            age: 18,
            hobbies: {
                one: 'eat',
                two: 'sleep'
            },
            lessons: ['javascript', 'css']
        }

        function copy(object) {
            let res = object instanceof Array ? [] : {}
            for (const [k,v] of Object.entries(object)) {
                res[k] = typeof v === 'object' ? copy(v) : v
            }
            return res
        }
        let obj2 = copy(obj1)
        obj2.hobbies.two = 'play'
        obj2.name = 'obj2name'
        obj2.lessons.push('html')
        console.log('obj1', JSON.stringify(obj1, null, 2));
        console.log('obj2', JSON.stringify(obj2, null, 2));
~~~

#### 17.使用工厂函数创建对象

~~~javascript
       function user(name,age){
            return {
                name,
                age,
                show(){
                    console.log(this.name+'-PlumLi');
                },
                info(){
                    console.log(this.name+'-'+this.age);
                }
            }
        }
        let lyh=user('了以后',18)
        console.log(lyh); // {name: '了以后', age: 18, show: ƒ, info: ƒ}
        lyh.show() // 了以后-PlumLi
        lyh.info() // 了以后-18
~~~

#### 18.构造函数创建对象的方式

~~~javascript
        function User(name){
            this.name=name;
            this.show=function(){
                console.log(this);
            }
        }
        let lyh =new User('了以后')
        console.log(lyh); // User {name: '了以后', show: ƒ}
        lyh.show()
        let fn=lyh.show
        fn() // undefind
~~~

#### 19.使用构造函数创建数据

绝大多数的数据都是由构造函数来创造的，我们可以使用这些构造函数中的提供的一些方法

~~~javascript
   let o = new Object()
        o.name = 'lyh'
        let n = new Number(1)
        console.log(n);
        console.log(n + 3);
        let s = new String('str')
        console.log(s);
        console.log(s.valueOf());
        console.log(s.toUpperCase());
        let b=new Boolean(true)
        console.log(b.toString());
        console.log(b.valueOf());
        let d=new Date()
        console.log(d);
        let r = new RegExp('\\d+')
        console.log(r.valueOf());
        console.log(r.test('abc'));
        function fn(){}
        console.log(fn.constructor);
        let User=new Function('name',`
            this.name=name;
            this.show=function(){
                console.log(this.name)
            }
        `)
        let lyh=new User('了以后')
        console.log(lyh);
        lyh.show()
~~~

#### 20.面向对象的封装与抽象

~~~javascript
        // 封装
	    // 将封装的函数抽象后在函数外部无法直接改变函数内部的值
        function User(name, age) {
            // 抽象解构
            let data = {
                name,
                age
            };
            let info = function () {
                return data.age > 50 ? '老年' : '青年'
            };
            this.show = function () {
                console.log(data.name + info());
            };

        }
        let lyh = new User('了以后', 18)
        lyh.name = 'xxx'
        lyh.info=function(){
            return ''
        }
        lyh.show() // 了以后青年
        console.log(lyh);
~~~

#### 21.什么是对象的属性特征

对象的属性是有特征的

~~~javascript
    const user = {
            name: '了以后',
            age: 18
        }
        console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user,'name'),null,2));
	    // {
        //     "value": "了以后",
        //     "writable": true,
        //     "enumerable": true,
        //     "configurable": true
        // }
        console.log(JSON.stringify(Object.getOwnPropertyDescriptors(user),null,2));
		// {
        //     "name": {
        //         "value": "了以后",
        //         "writable": true,
        //         "enumerable": true,
        //         "configurable": true
        //     },
        //     "age": {
        //         "value": 18,
        //         "writable": true,
        //         "enumerable": true,
        //         "configurable": true
        //     }
        // }

~~~

#### 22.灵活的控制属性特征

通过设置属性特征可以定制属性

- **`Object.getOwnPropertyDescriptor()`** 方法返回指定对象上一个自有属性对应的属性描述符 `Object.getOwnPropertyDescriptor(obj, prop)`
- `Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。`Object.defineProperty(obj, prop, descriptor)`
- **`Object.defineProperties()`** 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。 `Object.defineProperties(obj, props)`

~~~javascript
     const user = {
            name: '了以后',
            age: 18
        }
        console.log(JSON.stringify(Object.getOwnPropertyDescriptor(user, 'name'), null, 2));
	   Object.defineProperty(user, 'name', {
            value: '李子味李子',
            writable: true, // 限制属性是否可被修改
            enumerable: true, // 限制属性是否被遍历
            configurable: true // 是否允许被删除
        })
        Object.defineProperties(user, {
            name: {
                value: '李子味李子',
                writable: true, // 限制属性是否可被修改
                enumerable: false,
                configurable: false // 是否允许被遍历
            },
            age: {
                value: 18,
                writable: true, // 限制属性是否可被修改
                enumerable: false,
                configurable: false // 是否允许被遍历
            },
        })
~~~

通过控制writable,enumerable,configurable来定制对象属性特征三者都是布尔类型

- writable 属性是否可被修改
- enumerable 属性是否被遍历
- configurable 是否允许被删除

#### 23.不允许向对象中添加属性API

`**Object.preventExtensions()**`方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。

~~~JavaScript
let arr = ['lyh', 'plumli']
        const user = {
            name: '了以后',
            age: 18
        }
        // Object.preventExtensions(user) // 保护对象不能再添加新的属性
        console.log(Object.isExtensible(user));
        if (Object.isExtensible(user)) {
            user.site = 'Plumli.xyz'
            console.log(user); // {name: '了以后', age: 18, site: 'Plumli.xyz'}
        }
~~~

#### 24.封闭对象的API操作

`**Object.seal()**`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。

~~~javascript
       let arr = ['lyh', 'plumli']
        const user = {
            name: '了以后',
            age: 18
        }
        Object.seal(user)
        console.log(Object.isSealed(user));
        if (!Object.isSealed(user)) {
            user.site = 'Plumli.xyz'
        }
~~~

#### 25.冻结属性API操作

**`Object.freeze()`** 方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()` 返回和传入的参数相同的对象。

**`Object.isFrozen()`** determines if an object is  [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

当对象被冻结后不允许进行增删改操作,但是可以查询

封闭对象和冻结对象的区别是封闭对象里的属性如果是可改的那么仍让可以更改,但是冻结属性是整个对象都无法增改删

#### 26.使用访问器保护数据

~~~javascript
        const user = {
            data: {
                name: 'lyh',
                age: 18
            },
            set age(value) {
                if (typeof value !== 'number' || value < 10 || value > 100) {
                    throw new Error('年龄错误')
                }
                this.data.age = value
            },
            get age() {
                return this.data.age
            }
        }
        user.age = 19
        console.log(user.age); // 19
~~~

#### 27.访问器伪造属性操作

~~~javascript
        let Lesson = {
            lists: [{
                    name: 'js',
                    price: 100
                },
                {
                    name: 'mysql',
                    price: 212
                },
                {
                    name: 'vue.js',
                    price: 98
                }
            ],
            get total() {
                // 获取总价
                return this.lists.reduce((t, l) => t + l.price, 0)
            }
        }
        console.log(Lesson.total);
        // Lesson.total = 9999
        console.log(Lesson.total); // 410
~~~

#### 28.使用访问器批量设置属性

~~~javascript
        const web={
            name:'LYH',
            url:'plumli.xyz',
            set site(value){
                [this.name,this.url]=value.split(',')
                // console.log(value.split(','));
            },
            get site(){
                return `${this.name}的网址是${this.url}`
            }
        }
        web.site='笔记记录,www.plumli.xyz';
        console.log(web.name); // 笔记记录
        console.log(web.url); // www.plumli.xyz
~~~

#### 29.token的读写处理

~~~javascript
   let Request={
            set token(content){
                localStorage.setItem('token',content)
            },
            get token(){
                let token = localStorage.getItem('token')
                if(!token){
                    alert('请登录')
                }
                return token;
            }
        }
        Request.token='8972189ya89wyd89as2uyy'
        console.log(Request.token);
~~~

#### 30.访问器的优先级

访问器的优先级高于普通属性,自定义的访问器覆盖了默认的访问器

~~~javascript
  const user={
            data:{name},
            age:10,
            set name(value){
                this.data.name=value
                console.log(value); // plumli
            },
            get name(){
                return this.data.name
            }
        }
        user.name='plumli'
        console.log(user); // {data: {…}, age: 10}
        console.log(user.data); // {name: 'plumli'}
        user.data.name='lyh'
        console.log(user.data);
~~~

#### 31.构造函数与class语法糖中使用访问器

##### 构造函数

~~~javascript
// 构造函数特征的形式来定义访问器
        function User(name,age){
            // this.name=name;
            // this.age=age;
            let data={name,age}
            Object.defineProperties(this,{
                name:{
                    get(){
                        return data.name
                    },
                    set(value){
                        if(value.trim()===''|| value.length>20){
                            throw new Error('用户名不合法')
                        }
                        data.name=value
                        console.log(value+'----set...');
                    }
                },
                age:{
                    get(){
                        return data.age
                    },
                    set(value){
                        data.age=value
                        console.log(value+'----set...');
                    }
                },
            })
        }
        let lyh=new User('了以后',19)
        lyh.name='plumli'
        lyh.age=20
        console.log(lyh);
~~~

##### class类语法糖使用访问器

~~~javascript
// 如果想让data变为私有可以使用symbol
        class User {
            constructor(name, age) {
                this.data = {
                    name,
                    age
                }
            }
            get name() {
                return this.data.name
            }
            set name(value) {
                if (value.trim() === '' || value.length > 20) {
                    throw new Error('用户名不合法')
                }
                this.data.name = value
                console.log(value + '----set...');
            }
            get age() {
                return data.age
            }
            set age(value) {
                this.data.age = value
                console.log(value + '----set...');
            }

        }
        let lyh = new User('了以后', 19)
        lyh.name = 'plumli'
        lyh.age = 20
        console.log(lyh);
~~~

#### 32.什么是proxy拦截

**Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

##### 语法

```
const p = new Proxy(target, handler)
```

##### 参数

- `target`

  要使用 `Proxy` 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。

- `handler`

  一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为。

~~~javascript
        // 对象的代理 通过代理访问数据
        const lyh={name:'了以后'};
        const proxy=new Proxy(lyh,{
            get(obj,property){
                // property 是对象的属性
                return obj[property]
            },
            set(obj,property,value){
                // property 是对象的属性
                // value 是新设置的值
                return obj[property]=value
            }
        })
        console.log(proxy.name); // 了以后
        proxy.name='plumli'
        console.log(proxy.name); // plumli
        console.log(proxy); // Proxy {name: 'plumli'}
~~~

#### 33.使用代理proxy控制函数

~~~javascript
        function factorial(num) {
            return num === 1 ? 1 : num * factorial(num - 1)
        }
        // console.log(factorial(5));
        let proxy=new Proxy(factorial,{
            apply(func,obj,args){
                console.time('run');
                func.apply(this,args)
                console.timeEnd('run');
                // console.log(func);
                // console.log(obj);
                // console.log(args);
            }
        })
        proxy.apply({},[10])
~~~

#### 34.数组使用代理拦截操作

当数组内元素超过长时进行截断并把截断的元素换成...

~~~javascript
let lessons = [{
                title: '媒体查询响应式布局',
                category: 'css'
            },
            {
                title: 'FlEX模型',
                category: 'css'
            },
            {
                title: 'MYSQL多表查询随意操作',
                category: 'MYSQL'
            },
        ]
        let proxy = new Proxy(lessons, {
            get(array, key) {
                const title = array[key].title;
                console.log(title);
                const len = 10;
                array[key].title=title.length > len ?
                    title.substr(0, len) + '.'.repeat(3) :
                    title
                console.log(array);
                return array[key]
            }
        })
        console.log(JSON.stringify(proxy[2],null,2));
~~~

#### 35.代理拦截的例子：vuejs数据绑定的容器更新

~~~html
   <input type="text" v-model="title" />
    <input type="text" v-model="title" />
    <div v-bind="title">这里也会发生更新</div>
~~~



~~~javascript
        function View() {
            let proxy = new Proxy({}, {
                get(obj, property) {},
                set(obj, property, value) {
                    console.log(value);
                }
            })
            this.init=function(){
                const els=document.querySelectorAll('[v-model]');
                els.forEach(item=>{
                    item.addEventListener('keyup',function(){
                        // console.log(111);
                        proxy[this.getAttribute('v-model')]=this.value
                    })
                })
            }
        }
        new View().init()
~~~

#### 36.双向页面绑定的数据渲染

![image-20211126130641295](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20211126130641295.png)

~~~html
    <input type="text" v-model="content" />
    <h4 v-bind="content"></h4>
    <hr>
    <input type="text" v-model="title" />
    <input type="text" v-model="title" />
    <p style="background-color: skyblue;" v-bind="title">title</p>
    <p style="background-color: pink;" v-bind="content">content</p>
~~~



~~~javascript
    function View() {
            let proxy = new Proxy({}, {
                get(obj, property) {},
                set(obj, property, value) {
                    console.log(property);
                    document.querySelectorAll(`[v-model="${property}"`)
                        .forEach(item => {
                            item.value = value;
                        });
                    document.querySelectorAll(`[v-bind="${property}"]`)
                        .forEach(item=>{
                            item.innerHTML=value;
                        })
                }
            })
            this.init = function () {
                const els = document.querySelectorAll('[v-model]');
                els.forEach(item => {
                    item.addEventListener('keyup', function () {
                        // console.log(111);
                        proxy[this.getAttribute('v-model')] = this.value
                    })
                })
            }
        }
        new View().init()
~~~

#### 37.表单验证组建的代理工厂

##### 基本功能，触发表单的时候，让代理开始工作

~~~javascript
        class Validata {
            max(value, len) {
                return value.length < len;
            }
            min(value, len) {
                return value.length > len;
            }
            isNumber(value) {
                return /^\d+$/.test(value)
            }
        }

        function ProxyFactory(target) {
            return new Proxy(target, {
                get(target, key) {
                    return target[key]
                },
                set(target, key, value) {
                    console.log(key);
                }
            })
        }
        let proxy = ProxyFactory(document.querySelectorAll('[validata]'));
        proxy.forEach((item, i) => {
            item.addEventListener('keyup', function () {
                proxy[i] = this
            })
        })
~~~

#### 39.使用代理完成自定义验证组件

~~~html
    <input type="text" validata rule="max:12,min:3">
    <input type="text" validata rule="max:3,isNumber">
~~~



~~~javascript
        // 功能类
        class Validata {
            max(value, len) {
                return value.length <= len;
            }
            min(value, len) {
                return value.length >= len;
            }
            isNumber(value) {
                return /^\d+$/.test(value)
            }
        }
        // 代理工厂的创建
        function ProxyFactory(target) {
            return new Proxy(target, {
                get(target, key) {
                    return target[key]
                },
                set(target, key, el) {
                    // 获取验证规则
                    const rule=el.getAttribute('rule')
                    // 声明验证类
                    const validata=new Validata()
                    // every 函数，返回值都为真才为真，有一个为假就为假
                    let state=rule.split(',').every(rule=>{
                        // 拆分验证规则 使用验证函数
                        const info=rule.split(':');
                        console.log(info); // ['max', '12'] ['min', '3']
                        return validata[info[0]](el.value,info[1])
                    })
                    el.classList[state?'remove':'add']('error')
                    return true
                }
            })
        }
        let proxy = ProxyFactory(document.querySelectorAll('[validata]'));
        proxy.forEach((item, i) => {
            item.addEventListener('keyup', function () {
                console.log(proxy[i]);
                proxy[i] = this
                console.log(proxy[i]);
            })
        })
~~~

#### 40.*JSON数据解决什么问题*

~~~javascript
        let data = {
            name: '了以后',
            data: {
                title: 'node'
            }
        }
        console.log(data);
        let json = JSON.stringify(data, null, 2)
        console.log(json);
        let jsjson = `{
  "name": "plumli",
  "data": {
    "title": "node"
  }
}`  
    let obj=JSON.parse(jsjson)
    console.log(obj.data);
    // 数组也可以转化成json
~~~

#### 41.JSON序列化与自定义toJSON

~~~javascript
        let data = {
            name: '了以后',
            url: 'plumli.xyz',
            data: {
                title: 'node'
            },
            toJSON: function () {
                return {
                    name: this.name,
                    url: this.url,
                    title:this.data.title
                }
            }
        }
        // console.log(data);
        // JSON.stringify(对象,)
        let json = JSON.stringify(data, null, 2)
        console.log(json);
~~~

#### 42.JSON转化为js可操作类型

~~~javascript
        let data = {
            name: '了以后',
            url: 'plumli.xyz',
            data: {
                title: 'node'
            }
        }
        let json = JSON.stringify(data, null, 2)
        console.log(json);
	   //{
        //     "name": "了以后",
        //     "url": "plumli.xyz",
        //     "data": {
        //         "title": "node"
        //     }
        // }
        let obj = JSON.parse(json, (key, value) => {
            if (key === 'title') {
                value = '[LYH]-' + value
            }
            return value
        })
        console.log(obj); // {name: '了以后', url: 'plumli.xyz', data: {…}}
~~~

## 原型和继承

#### 1.原型的初步认识
~~~javascript
        let arr = ['了以后'];
        console.log(arr.concat('plumli'))
        let lyh = {};
        console.log(lyh);
        let yh = {};
        console.log(yh);
        console.log('------------------');
        console.log(Object.getPrototypeOf(lyh)===Object.getPrototypeOf(yh)); // true
        console.log(Object.getPrototypeOf(lyh)===Object.getPrototypeOf(arr)); // false
        console.log(Object.getPrototypeOf(lyh)===Object.getPrototypeOf(Object.getPrototypeOf(arr))); // true

~~~
`Object.getPrototypeOf(xxx)获取某个对象的原型`
其中数组的原型是Number而对象的原型是Object，Number的原型是Object
#### 2.没有原型的对象也是存在的
~~~javascript
        let lyh={name:'lyh'}
        console.log(lyh); // {name: 'lyh'}
        console.log(lyh.hasOwnProperty('name')); // true
        let plum=Object.create(null,{
            name:{
                value:'plumli'
            }
        })
        console.log(plum.hasOwnProperty('name')); // Uncaught TypeError: plum.hasOwnProperty is not a function    
~~~
#### 3.原型方法与对象方法优先级
优先使用自己的方法
当自己对象中没有方法是才会使用上级父类的方法

给父类自定义方法
~~~javascript
        // xxx为自己
        xxx.__proto__.render = function () {
            console.log('上级rander方法');
        }
~~~
示例：
~~~javascript
     let lyh = {
            show() {
                console.log('了以后');
            },
            render() {
                console.log('自己的render方法');
            }
        }
        lyh.show(); // 了以后
        lyh.render(); // 自己的render方法
        lyh.__proto__.render = function () {
            console.log('上级rander方法');
        }
        lyh.render() // 自己的render方法
        console.dir(lyh); // Object
~~~
#### 4.函数拥有多个长辈
prototype服务于函数实例化出的对象

__proto__可以理解为构造函数的原型对象

~~~javascript
        function User() {}
        console.dir(User); // ƒ User()
        User.prototype.show=function(){
            console.log('User show()');
        }
        User.__proto__.view=function(){
            console.log('User function view method');
        }
        User.view(); // User function view method
        let lyh = new User();
        console.log(lyh); // User {}
        lyh.show(); // User show()
        console.log('---------');
        console.log(User.prototype===lyh.__proto__); // true
~~~
#### 5.原型对象的关系
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211127165919.png)
a,b,c分别为使用对象方法创造的字符串，数字和对象

a,b,c有`__proto__`属性即`[[prototype]]`属性指向原型对象

构造a,b,c的对象有`prototype`属性指向原型对象