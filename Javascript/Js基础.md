
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

~~~javascript
        let a=new String('aaa')
        console.log(a.__proto__===String.prototype); // true
        console.log(a.__proto__.constructor===String); // true
~~~

#### 6.自定义对象的原型设置
~~~javascript
      let lyh={name:'lyh'};
        let parent={name:'parent',show(){
            console.log('parent method',this.name);
        }};
        console.log(lyh.__proto__===Object.prototype); // true
        // 设置原型
        Object.setPrototypeOf(lyh,parent) 
        // 获取原型
        console.log(Object.getPrototypeOf(lyh)); // {name: 'parent', show: ƒ}
        console.log(lyh);
        lyh.show(); // parent method lyh
        parent.show(); // parent method parent
~~~     
#### 7.通过原型找到构造函数 原型中constructor的运用
有constructor存在时可以使用constructor来创建另一个对象

~~~javascript
        function User(name){
            this.name=name
        }
        // 这种方法直接改变prototype，如果不加constructor就会报错
        User.prototype={
            constructor:User,
            show(){
                console.log(this.name);
            },
            sing(){
                console.log('sing');
            }
        }
        // User.prototype.show=function(){
        //     console.log(this.name);
        // }
        console.dir(User); // ƒ User(name)
        console.log(User.prototype.__proto__===Object.prototype); // true
        let lisi=new User.prototype.constructor('李四');
        console.log(lisi); // User {name: '李四'}
        lisi.show(); // 李四
        lisi.sing(); // sing
~~~
#### 8.当constructor存在时，使用对象创造新的对象
Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）。
~~~javascript
 function User(name) {
            this.name = name;
            this.show=function(){
                console.log(this.name);
            }
        }
        let lyh = new User('了以后');
        console.log(lyh);

        function createByObject(obj, ...args) {
            const constructor = Object.getPrototypeOf(obj).constructor
            console.log(constructor);
            return new constructor(...args)
        }
        let plum = createByObject(lyh, 'plumLi')
        plum.show()
        console.log(plum);
~~~
#### 9.总结一下原型链
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211128140818.png)
~~~javascript
        let arr=[]; // new Array
        console.log(arr.__proto__.__proto__===Object.prototype); // true
        // 原型链 原型的继承
        let a = {
            name: 'a'
        };
        let c = {
            name: 'c'
        };
        let b = {
            name: 'b',
            show() {
                console.log(this.name);
            },
            view(){
                console.log('view method');
            }
        };
        // 手动改变a和c的父亲，让a和c都能够继承b的方法
        Object.setPrototypeOf(a, b);
        Object.setPrototypeOf(c, b);
        console.log(a);
        a.show(); // a
        c.show(); // c
        c.view(); // view method
~~~
#### 10.原型链检测之instanceof
可以查看某一个原型链的对象上是否有另一个对象的prototype可以用instanceof来查看
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211130191035.png)
~~~javascript
        function A() {}
        function B() {}
        function C() {}
        let c = new C();
        B.prototype = c;
        let b = new B();
        A.prototype = b;
        let a = new A();
        console.log(a instanceof A); // true
        console.log(a instanceof C); // true
        console.log(a instanceof C); // true
        console.log(b instanceof A); // false
~~~
#### 11.Object isPrototypeOf检测
检测某一对象是否为另一对象原型链中的额一份子

也可理解为该对象是否为另一对像的长辈或父级
~~~javascript
        let a={}
        let b={}
        console.log(b.isPrototypeOf(a)); // false
        console.log(b.__proto__.isPrototypeOf(a)); // true
        console.log(Object.prototype.isPrototypeOf(a)); // true
~~~
~~~javascript
        let a={}
        let b={}
        Object.setPrototypeOf(a,b)
        console.log(b.isPrototypeOf(a)); // true
~~~
~~~javascript
        let a={}
        let b={}
        let c={}
        Object.setPrototypeOf(b,c)
        Object.setPrototypeOf(a,b)
        console.log(b.isPrototypeOf(a)); // true
        console.log(c.isPrototypeOf(a)); // true
        console.log(c.isPrototypeOf(b)); // true
~~~
#### 12.in与hasOwnProperty
in 检测某一属性是否在另一个对象中或者在该对象的原型链上 会攀升原型链
而hasOwnProperty不会
~~~javascript
        let a={url:'plumli.xyz'};
        let b={name:'plumli'};
        console.log('url' in a); // true
        console.log('web' in a); // false
        Object.prototype.web='plumli.xyz'
        console.log('web' in a); // true
        Object.setPrototypeOf(a,b) // 改变a的原型为b
        console.log('name' in a); // true
~~~
Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。
~~~javascript
        let a={url:'plumli.xyz'};
        let b={name:'plumli'};
        Object.setPrototypeOf(a,b) // 改变a的原型为b
        for(const key in a){
            if(a.hasOwnProperty(key)){
                const element=a[key]
                console.log('hasOwnProperty',key); // hasOwnProperty url
            }
        }
~~~
#### 13.使用apply和call借用原型
`Object.values()`方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
~~~javascript
       let pl={
            data:[1,23,4,5,6,7]
        }
        // 向Object原型上添加方法
        Object.setPrototypeOf(pl,{
            max(data){
                return data.sort((a,b)=>b-a)[0]
            }
        })
        console.log(pl.max(pl.data)); // 23
        let yh={
            lessons:{js:89,html:90,node:77,linux:80}
        }
        // 不传this指向，单纯调用方法
        // call调用Object原型上的方法
        console.log(pl.max.call(null,Object.values(yh.lessons))); // 90
~~~
#### 14.优化方法借用
如果某一个对象不存在方法或者该对象的原型链上也不存在方法甚至家族中都没用功能就可以使用apply或call进行调用其他家族方法

~~~javascript
        let pl={
            data:[1,23,4,5,6,7]
        }
        console.log(Math.max.apply(null,pl.data));
        let yh={
            lessons:{js:89,html:90,node:77,linux:80}
        }
        console.log(Math.max.apply(null,Object.values(yh.lessons)));
~~~
#### 15.DOM节点借用Array原型方法
~~~JavaScript
        let arr=[1,3,43];
        let res=arr.filter(item=>{
            return item>30
        })
        console.log(res);
        let btns=document.querySelectorAll('button');
        // 调用数组原型上的方法
        // btns=Array.prototype.filter.call(btns,item=>{
            // 调用数组方法，让数组自己上原型上寻找
            btns=[].filter.call(btns,item=>{
            // item.hasAttribute('class') 判断某个节点是否有class属性
            return item.hasAttribute('class')
        })
        console.log(btns); // [button.red]
~~~
#### 16.合理的构造函数方法声明
~~~javascript
        function User(name){
            this.name=name;
        }
        // 在User的原型上show函数
        // User.prototype.show=function(){
        //     console.log(this.name);
        // }

        // 直接更改User的原型对象
        User.prototype={
            constructor:User,
            show(){
                console.log(this.name);
            },
            get(){
                console.log('get...');
            }
        }
        let ly=new User('了以');
        let yh=new User('以后');
        ly.show(); // 了以 
        yh.show(); // 以后
~~~
#### 17.this和原型没有关系的
this的指向永远指向调用属性的对象

this和调用的方式有关，通过对象，方法调用的指向对象，自己调用的指向window

一般是谁调用指向谁
~~~javascript
        let lyh = {
            name: '了以后',
            // show() {
            //     console.log(this.name);
            // }
        }
        let User={
            name:'plumli',
            show(){
                console.log(this.name);
            }
        }
        // Object.setPrototypeOf(lyh,{})
        Object.setPrototypeOf(lyh,User)
        lyh.show(); // 了以后
~~~
#### 18.不要滥用原型
当自己在原型上封装了方法，然后在调用其他的库时可能也有类似的方法，这样就会造成方法的冲突，所以不能滥用原型
#### 19.Object.create与__proto__
`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）
~~~javascript
        let user={
            show(){
                return this.name
            }
        }
        // // 定义对象的原型，不能获取
        // let lyh=Object.create(user,{
        //     name:{
        //         value:'了以后'
        //     }
        // })
        // // lyh.name='了以后'
        // console.log(lyh.show());
        let lyh={name:'了以后'};
        lyh.__proto__=user;
        console.log(lyh.__proto__);
~~~
#### 20.使用setPrototypeOf来替代__proto__
__proto__是非标准的
~~~javascript
        let user={
            show(){
                return this.name
            }
        }
        let lyh={name:'了以后'};
        Object.setPrototypeOf(lyh,user);
        console.log(lyh.show()); // 了以后
        console.log(Object.getPrototypeOf(lyh)); // {show: ƒ}
~~~
#### 21.__proto__原来是属性访问器 getter setter
面试题，如何认为更改__proto__
让想要更改的对象的原型为空，这样所更改的对象上就没有了__proto__上的get和set访问器，这样给所更改对象的__proto__赋值就不会无效
~~~javascript
        let lyh={};
        console.dir('lyh',lyh)
        Object.setPrototypeOf(lyh,null)
        lyh.__proto__='了以后';
        console.log('lyh.__proto__',lyh.__proto__);
~~~
#### 22.改变构造函数原型并不是继承
在js中的继承是原型的继承而不是改变构造函数的原型
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211201170012.png)
~~~javascript
        function User(){}
        User.prototype.name=function(){
                console.log('user name methods');
            }
        // let lyh=new User();
        // console.log(lyh);
        // lyh.name()
        
        function Admin(){}
        Admin.prototype=User.prototype;
        Admin.prototype.role=function(){
            console.log('Admin role');
        }
        // let a=new Admin;
        // console.log(a);
        // a.name()
        function Member(){}
        Member.prototype=User.prototype
        Member.prototype.role=function(){
            console.log('Member role');
        }
        // 这样在Admin中设置的role就会被Member新设置的role覆盖，因为两者共用一个User的原型
        // 所以说改变构造函数的原型不叫继承
        let a =new Admin()
        a.role()
        
~~~
#### 23.继承是原型的继承
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211201171618.png)
~~~javascript
function User(){}
        User.prototype.name=function(){
                console.log('user name methods');
        }
        function Admin(){}
        Admin.prototype.__proto__=User.prototype;
        Admin.prototype.role=function(){
            console.log('Admin role');
        }
        function Member(){}
        Member.prototype.__proto__=User.prototype
        Member.prototype.role=function(){
            console.log('Member role');
        }
        // 这样在Admin中设置的role就会被Member新设置的role覆盖，因为两者共用一个User的原型
        // 所以说改变构造函数的原型不叫继承
        let a =new Admin()
        a.role(); // Admin role
        let m=new Member()
        m.role(); // Member role
~~~
#### 24.继承对新增对象的影响
两种方法
- `Admin.prototype=Object.create(User.prototype)`新建了一个原型对象，当该行代码放在实例化对象前时，原来原型上的额方法就会失效

`Object.create()`方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）
~~~javascript
        function User(){}
        User.prototype.name=function(){
                console.log('user name methods');
        }
        function Admin(){}
        let a=new Admin()
        // a.role(); // Uncaught TypeError: a.role is not a function
        Admin.prototype=Object.create(User.prototype)
        Admin.prototype.role=function(){
            console.log('Admin role');
        }
        a.role(); // Uncaught TypeError: a.role is not a function
~~~
- `Admin.prototype.__proto__=User.prototype`这种方法只是改变了xxx对象父亲的原型对象，仍然可以使用它父亲的方法
~~~javascript
        function User(){}
        User.prototype.name=function(){
                console.log('user name methods');
        }
        function Admin(){}
        let a=new Admin()
        // a.role(); // Admin role
        Admin.prototype.__proto__=User.prototype;
        Admin.prototype.role=function(){
            console.log('Admin role');
        }
        a.role(); // Admin role
~~~
#### 25.继承对constructor属性的影响
当用`Object.create()`方法完整的把一个对象设置成原型对象之后记得添加给被设置的对象添加商constructor属性,保证软来的构造函数存在
~~~javascript
        function User(){}
        User.prototype.name=function(){
                console.log('user name methods');
        }
        function Admin(){}
        Admin.prototype=Object.create(User.prototype)
        // Admin.prototype.constructor=User
        Admin.prototype.role=function(){
            console.log('Admin role');
        }
        let a=new Admin()
        // console.dir('a',a)
        let b=new a.__proto__.constructor()
        console.dir(b)
~~~
#### 26.禁止constructor被遍历
其中通过`Object.definProperty(对象，属性，设置内容)`来实现禁止constructor的遍历

`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
~~~javascript
function User(){}
        User.prototype.name=function(){
                console.log('user name methods');
        }
        function Admin(){}
        Admin.prototype=Object.create(User.prototype);
        Object.defineProperty(Admin.prototype,'constructor',{
            value:Admin,
            enumerable:false
        })
        Admin.prototype.role=function(){
            console.log('Admin role');
        }
        let a=new Admin()
        for(const key in a){
            console.log(key); // role name
        }
~~~
#### 27.方法重写与父级属性访问
如果父类方法不够使用，可以对这个方法进行重写，对字类来定义这样的方法，同时子类也可以对父类的方法进行调用
~~~javascript
        function User(){}
        User.prototype.show=function(){
            console.log('user name');
        }
        User.prototype.site=function(){
            return 'plumli'
        }
        function Admin(){}
        Admin.prototype=Object.create(User.prototype);
        Admin.prototype.constructor=Admin;
        Admin.prototype.show=function(){
            console.log(User.prototype.site()+'--'+'Admin show');
        }
        let pl=new Admin();
        pl.show(); // plumli--Admin show
~~~
#### 28.面向对象的多态实现
调用了爷爷类方法，调用了父类继承给子类的方法
~~~javascript
        function User(){}
        User.prototype.show=function(){
            console.log(this.description());
        }

        function Admin(){}
        Admin.prototype=Object.create(User.prototype)
        Admin.prototype.description=function(){
            return '管理员在此'
        }

        function Member(){}
        Member.prototype=Object.create(User.prototype)
        Member.prototype.description=function(){
            return '我是会员'
        }

        function Enterprise(){}
        Enterprise.prototype=Object.create(User.prototype)
        Enterprise.prototype.description=function(){
            return '企业账户'
        }
        
        for(const obj of [new Admin,new Member,new Enterprise]){
            obj.show();
            // 管理员在此
            // 我是会员
            // 企业账户
        }
~~~
#### 29.使用父类构造函数初始属性
~~~javascript
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.show = function () {
            console.log(this.name,this.age);
        }

        function Admin(name,age) {
            User.call(this,name,age)
        }
        Admin.prototype = Object.create(User.prototype)
        let a=new Admin('了以后',18)
        a.show()
        function Member(...args) {
            User.apply(this,args)
        }
        Member.prototype = Object.create(User.prototype)
        let m=new Member('以后',18)
        m.show()
~~~
#### 30.使用原型工厂封装继承
~~~javascript
        function extend(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            Object.defineProperty(sub.prototype, 'constructor', {
                value: sub,
                enumerable: false
            })
        }

        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.show = function () {
            console.log(this.name, this.age);
        }

        function Admin(...args) {
            User.apply(this,args)
        }
        extend(Admin, User);
        let a = new Admin('了以后',18)
        a.show(); // 了以后 18  
~~~
### 31.对象工厂派生对象并实现继承
通过一个工厂来产生对象并添加方法
部分代码
~~~javascript
       function admin(name,age) {
            const instance=Object.create(User.prototype)
            User.call(instance,name,age);
            instance.role=function(){
                console.log('admin role');
            }
            return instance
        }
~~~
完整代码
~~~javascript
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.show = function () {
            console.log(this.name, this.age);
        }

        function admin(name,age) {
            const instance=Object.create(User.prototype)
            User.call(instance,name,age);
            instance.role=function(){
                console.log('admin role');
            }
            return instance
        }
        let a = admin('了以后',18)
        a.show(); // 了以后 18  
        a.role(); // admin role
        function member(name,age){
            const instance=Object.create(User.prototype)
            User.call(instance,name,age);
            return instance
        }
        let m=member('以后',20)
        m.show(); // 以后 20
~~~
#### 32.多继承带来的困扰
多继承出现的原因：一个实例如果要需要多个方法，必须一级一级的继承，但这样会给没有关系的方法绑定上关系
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211201212332.png)
这样会导致混乱
#### 35.使用mixin实现多继承
原型是一个对象，只要是对象就可以往里边压属性，可以通过`Object.assign()`方法向原型对象里压属性，来实现调用功能
~~~javascript
        // 原型构建工厂
        function extend(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            Object.defineProperty(sub.prototype, 'constructor', {
                value: sub,
                enumerable: false
            })
        }

        const Adress = {
            getAdress() {
                console.log('获取收获地址');
            }
        }
        const Credit = {
            total(){
                console.log('积分统计');
            }
        }
        const Request={
            ajax(){
                console.log('请求后台');
            }
        }
        function User(name,age){
            this.name=name;
            this.age=age;
        }
        User.prototype.show=function(){
            console.log(this.name,this.age);
        }
        function Admin(name,age){
            User.call(this,name,age)
        }
        extend(Admin,User)
        Admin.prototype=Object.assign(Admin.prototype,Request,Credit)
        let admin=new Admin('adm',19)
        admin.show()
        admin.ajax()
        admin.total()
        function Member(name,age){
            User.call(this,name,age)
        }
        extend(Member,User)
        Member.prototype=Object.assign(Member.prototype,Request,Credit)
        let member=new Member('mem',19)
        member.show()
        member.ajax()
        member.total()
~~~
#### 36.mixin内部继承与super关键字功能类之间的相互继承
~~~javascript
        function extend(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            Object.defineProperty(sub.prototype, 'constructor', {
                value: sub,
                enumerable: false
            })
        }

        const Adress = {
            getAdress() {
                console.log('获取收获地址');
            }
        };
        const Request = {
            ajax() {
                return '请求后台';
            }
        };
        const Credit = {
            __proto__: Request,
            total() {
                // super = __proto__
                // super是当前类的原型
                // console.log(this.__proto__.ajax()+'--积分统计');
                console.log(super.ajax() + '--积分统计');
            }
        };

        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.show = function () {
            console.log(this.name, this.age);
        }

        function Admin(name, age) {
            User.call(this, name, age)
        }
        extend(Admin, User)
        Admin.prototype = Object.assign(Admin.prototype, Request, Credit)
        let admin = new Admin('adm', 19)
        admin.show();
        admin.total(); // 请求后台--积分统计
~~~

#### tab切换实例并且开放更多api实现灵活定制

~~~html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            display: flex;
            justify-content: space-around;
        }

        .box1 {
            margin-top: 100px;
            background-color: wheat;
            width: 300px;
            position: relative;
            /* height: 400px; */
        }

        a,span {
            display: block;
            text-decoration: none;
            color: white;
            background-color: cadetblue;
            padding: 5px;
            width: 50px;
            border: 1px solid black;
            cursor: pointer;

        }

        section {
            /* margin-top: 20px; */
            position: absolute;
            width: 300px;
            height: 200px;
            background-color: tomato;
        }
    </style>
</head>

<body>
    <div class="box1" id="tab1">
        <nav>
            <span href="javascript:;">了以后</span>
            <span href="javascript:;">plumli</span>
        </nav>
        <section>1</section>
        <section>2</section>
    </div>
    <div class="box1" id="tab2">
        <nav>
            <a href="javascript:;">了以后</a>
            <a href="javascript:;">plumli</a>
        </nav>
        <section>1</section>
        <section>2</section>
    </div>
    <button class="btn">xxx</button>
    <script>
        function extend(sub, sup) {
            sub.prototype = Object.create(sup.prototype);
            sub.prototype.constructor = sub;
        }

        function Animation() {}
        Animation.prototype.show = function () {
            this.style.display = 'block'
        }
        Animation.prototype.hide = function () {
            this.style.display = 'none'
        }
        Animation.prototype.background = function (color) {
            this.style.backgroundColor = color
        }

        function Tab(args) {
            // console.log(args);
            args=Object.assign({el:null,link:'a',section:'section',callback:null},args);
            console.log(args);
            // this.callback = args['callback'] || null;
            console.log(this.callback);
            this.tab = document.querySelector(args['el']);
            console.log(this.tab);
            this.links = this.tab.querySelectorAll(args['link']);
            console.log(this.links);
            this.sections = this.tab.querySelectorAll(args['section']);
            this.callback=args['callback'];

        }
        extend(Tab, Animation)
        Tab.prototype.run = function () {
            this.bindEvent();
            this.reset();
            this.action(0);
        }
        Tab.prototype.bindEvent = function () {
            this.links.forEach((el, i) => {
                el.addEventListener('click', () => {
                    this.reset();
                    this.action(i);
                    if(this.callback) this.callback()
                })
            })
        }
        Tab.prototype.action = function (i) {
            this.background.call(this.links[i], '#e67e21')
            this.show.call(this.sections[i])
        }
        Tab.prototype.reset = function () {
            this.links.forEach((el, i) => {
                this.background.call(this.links[i], 'cadetblue')
                this.hide.call(this.sections[i])
            })
        }
        // new Tab('tab1');
        new Tab({el:'#tab1',link:'span',section:'section',callback:function(){
            console.log(111);
        }}).run()
        new Tab({
            el:'#tab2',
            callback(){
                console.log('tab2');
            }
        }).run()
    </script>
</body>

</html>
~~~

## 类

#### 1.类的特点是什么
通过类可以更好地操作对象
#### 2.class声明类语法 class内部操作就是原型的操作
~~~javascript
        // 类创建方法不用直接放到原型中，而是会自动放到原型中
        class User {
            constructor(name){
                this.name=name;
            }
            show(){
                console.log(this.name);
            }
        }
        console.dir(User)
        let user=new User('user')
        console.log(user);
        console.log(Object.getOwnPropertyNames(user)); // ['name']
        console.log(Object.getOwnPropertyNames(User.prototype)); // ['constructor','show']
        function Fn(name){
            this.name=name;
        }
        let fn=new Fn('fn');
        console.log(fn);
        console.log(Object.getOwnPropertyNames(fn)); // ['name']
        console.log(Object.getOwnPropertyNames(Fn.prototype)); // ['constructor']
~~~
把原来函数定义的方法进行简化，类只是包了个壳，内部还是原型机制
#### 3.属性的声明
~~~javascript
        class User {
            site = '了以后';
            constructor(name) {
                this.name = name;
            }
            show() {
                console.log(this.name);
            }
            changeSite(value) {
                this.site = value;
            }
            show(){
                return `${this.site}:${this.name}`
            }
        }
        console.dir(User);
        let pl = new User('plumli');
        let lyh = new User('了以后');
        pl.changeSite('pl')
        console.log(pl.show());
        console.log('pl', pl); // pl:plumli
        lyh.changeSite('lyh'); 
        console.log(lyh.show()); // pl User {site: 'pl', name: 'plumli'}
        lyh.changeSite('lyh'); // lyh:了以后
        console.log('lyh', lyh); // lyh User {site: 'lyh', name: '了以后'}
~~~
#### 4.class声明的方法为什么不能遍历
class中的方法默认不被遍历
~~~javascript
        class User {
            constructor(name){
                this.name=name;
            }
            show(){
                console.log(0);
            }
        }
        let u=new User('plumli');
        for(const key in u){
            console.log(key); // name
        }
        // 函数中方法可以遍历
        function Fn(name){
            this.name=name;
        }
        Fn.prototype.show=function(){}
        let f=new Fn('fn')
        for(const key in f){
            console.log(key); // name show
        }
~~~
#### 5.严格模式下运行
class内语法默认在严格模式下运行
~~~javascript
        function User() {}
        User.prototype.show = function () {
            function test() {
                console.log(this);
            }
            test()
        }
        let u = new User();
        u.show(); // window
        class Fn {
            show() {
                function test() {
                    console.log(this);
                }
                test()
            }
        }
        let fn = new Fn();
        fn.show(); // undefined
~~~
#### 6.静态属性的使用
静态属性可以用static的方式写在类中，供所有类生成的对象使用，而不需要每次生成类时再生成一遍该属性
~~~javascript
        class Request{
           static host='www.plumli.xyz'
           api(url){
               return Request.host+'/'+url
           }
        }
        let obj=new Request();
        console.log(obj.api('article'));
~~~
#### 7.静态方法的实现原理
如果不是对单个对象进行管理，使用静态方法就比较适合

函数中静态方法
~~~javascript
        function User(){}
        User.prototype.show=function(){
                console.log('prototype.show');
            }
        // 静态方法
        // 直接用到函数上就是静态方法
        User.show=function(){
            console.log(this+'static.show');
            console.log('User.show',this);
            console.log(this===User);
        }
        // User.show()
        console.dir(User)
        let u=new User();
        u.show(); // prototype.show
        User.show(); // function User(){}static.show
        User.prototype.show(); // prototype.show
~~~
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211204202722.png)
类中静态方法
~~~javascript
        class User {
            show() {
                console.log('prototype.show');
            }
            static show(){
                console.log('static.show');
            }
        }
        console.log(typeof User);
        let u = new User(); // function
        console.log(u); // User {}[[Prototype]]: Object
        User.show(); // static.show
~~~
类静态方法使示例
~~~javascript
      class User{
            constructor(name,age,sex){
                this.name=name;
                this.age=age;
                this.sex=sex;
            }
            static create(...args){
                return new User(...args)
            }
        }
        let lyh=User.create('了以后',19,'男')
        console.log(lyh);
~~~
#### 8.静态属性练习之课程管理的类
使用静态方法循环创建数组中新对象，并对新对象进行操作
~~~javascript
class Lesson {
            constructor(data) {
                this.model = data;
            }
            get price() {
                return this.model.price;
            }
            get name(){
                return this.model.name;
            }
            static createBatch(data) {
                return data.map(item => new Lesson(item))
            }
            static maxPrice(data) {
                return data.sort((a, b) => {
                    return b.price-a.price
                })[0]
            }
            static totalPrice(data){
                return data.reduce((t,c)=>{
                    console.log('t',t); // 累加后的值
                    console.log('c',c); // data中的一个元素
                    return t+c.price
                },0)
            }
        }
        let lessons = Lesson.createBatch(data);
        console.log(lessons); // (4) [Lesson, Lesson, Lesson, Lesson]
        console.log(Lesson.maxPrice(lessons).price); // 317
        console.log(Lesson.maxPrice(lessons).name); // js
        console.log(Lesson.totalPrice(lessons)); // 855
~~~
#### 9.在类中使用访问器

~~~javascript
        class Request{
            constructor(host){
                this.data={};
                this.host=host;
            }
            set host(url){
                if(!/^https?:\/\//i.test(url)){
                    throw new Error('地址错误')
                }
                this.data.host=url
            }
            get(){
                this.data['host']
            }
        }
        let pl=new Request('https://www.pl.xyz');
        pl.host='https://plumli.xyz'
        console.log(pl);
~~~

#### 10.使用命名规则保护属性

~~~javascript
        class User {
            _url = "https://pl.com";
            constructor(name) {
                this.name = name;
            }
            set url(url) {
                if (!/^https?:/i.test(url)) {
                    throw Error('非法网址');
                }
                this._url = url;
            }
        }
        let pl = new User('plumli');
        pl.name
        pl.url='https://www.plumli.xyz'
        console.log(pl); // User {_url: 'https://www.plumli.xyz', name: 'plumli'}
~~~

#### 11.使用Symble设置protected属性
将属性保护起来，在类及其子类中可以使用
~~~javascript
       const protecteds = Symbol();
        class Common {
            constructor() {
                // 将Symble声明为对象来装被保护的属性
                this[protecteds] = {}
                console.log(33);
                this[protecteds].host = 'https://pl.com';
            }
            set url(url) {
                if (!/^https?:/i.test(url)) {
                    throw Error('非法网址');
                }
                this[protecteds].host = url;
            }
            get host() {
                return this[protecteds].host
            }
        }
        class User extends Common {
            // public
            constructor(name) {
                super()
                this.name = name;
            }

        }
        let pl = new User('plumli');
        pl.url = 'https://www.plumli.xyz'
        console.log(pl);
        // User {
        //     name: 'plumli',
        //     Symbol(): {
        //         …}
        // }
        // name: "plumli"
        // Symbol():
        //     host: "https://www.plumli.xyz" [
        //         [Prototype]
        //     ]: Object
        // host: (...)[[Prototype]]: Common
        // console.log(pl); // User {_url: 'https://www.plumli.xyz', name: 'plumli'}
~~~

#### 12.使用WeakMap保护属性
通过WeakMap保护单个属性
~~~javascript
 const host = new WeakMap()
        class Comment {
            constructor() {
                host.set(this, "https://pl.com")
            }
            set host(url) {
                if (!/^https?:/i.test(url)) {
                    throw Error('非法网址');
                }
                host.set(this, url)
            }
            get host() {
                return host.get(this)
            }
        }
        class User extends Comment{
            // public
            constructor(name) {
                super()
                this.name = name;
            }

        }
        let pl = new User('plumli');
        console.log(pl);
~~~
保护多个属性
~~~javascript
        const protecteds = new WeakMap()
        class Comment {
            constructor() {
                protecteds.set(this, {
                    host: "https://pl.com"
                })
            }
            set host(url) {
                if (!/^https?:/i.test(url)) {
                    throw Error('非法网址');
                }
                protecteds.set(this,{...protecteds.get(this,url)})
            }
            get host() {
                return protecteds.get(this)['host']
            }
        }
        class User extends Comment {
            // public
            constructor(name) {
                super()
                this.name = name;
            }

        }
        let pl = new User('plumli');
        console.log(pl);
~~~
#### 13.pricate私有属性
属性前边加 # ，私有属性只能在当前类里面使用
~~~javascript
class User {
            #host = 'https://pl.com';
            constructor(name) {
                this.name = name;
                this.#check(name);
            }
            set host(url) {
                if (!/^https?:/i.test(url)) {
                    throw Error('非法网址');
                }
                this.#host = url
            }
            get host() {
                return this.#host
            }
            #check = () => {
                if (this.name.length < 5) {
                    throw new Error('名字长度不能小于5位')
                }
                return true
            }
        }
        let pl = new User('plumli');
        pl.host = 'https://www.plumli.xyz';
        // console.log(pl.#check); // 外部调用报错 Uncaught SyntaxError: Private field '#check' must be declared in an enclosing class
~~~
#### 14.class属性继承原理

函数属性继承的原理实现
~~~javascript
        function User(name) {
            this.name = name;
        }

        function Admin(name) {
            User.call(this,name)
        }
        Admin.prototype = Object.create(User.prototype);
        Admin.prototype.show = function () {}
        let pl =new Admin('plumli')
        console.log(pl); // Admin {name: 'plumli'}
~~~
class类实现继承 语法塘结构，内部原理还是原型或者原型链
~~~javascript
            class User{
                constructor(name){
                    this.name=name;
                }
            }
            class Admin extends User{
                constructor(name){
                    super(name)
                }
            }
            let pl=new Admin('plumli');
            console.log(pl); // Admin {name: 'plumli'}
~~~

#### 15.类方法的继承原理

函数方法继承
~~~javascript
       function User(name) {
            this.name = name;
        }
        User.prototype.show = function () {
            console.log('User Show');
        }

        function Admin(name) {}
        Admin.prototype = Object.create(User.prototype);
        // Admin.prototype.show = function () {}
        let pl = new Admin('plumli')
        console.log(pl);
        pl.show('User Show');
~~~
类方法的继承
~~~javascript
        // 方法为所有属性共享，始终在原型对象上
        class User {
            show() {
                console.log('User.show');
            }
        }
        class Admin extends User {
            constructor(name) {
                super()
                this.name = name;
            }
        }
        let pl = new Admin('plumli');
        console.log(pl); // Admin {name: 'plumli'}
        pl.show(); // User.show
~~~
#### 16.super原理分析
super就是访问父级类
~~~javascript
  class Admin extends User {
            show(){
                super.show()
                console.log('Admin.show');
            }
        }
~~~
普通对象的函数继承，super原理
~~~javascript
        let pl={
            name:'pl.name',
            show(){
                console.log('this.name',this.name);
            }
        }
        let lyh={
            __proto__:pl,
            name:'lyh.name',
            show(){
                this.__proto__.show.call(this)
                console.log('lyh.show');
            }
        }
        console.log(lyh); // {name: 'lyh.name', show: ƒ}
        lyh.show(); // this.name lyh.name // lyh.show
~~~

#### 17.多继承中super的魅力
super也可以脱离class调用，但是得在对象中的fn(){}中使用
~~~javascript
        let common = {
            show() {
                console.log('common.show',this.name);
            }
        }
        let pl = {
            __proto__:common,
            name: 'pl.name',
            show() {
                super.show()
            }
        }
        pl.show(); // common.show pl.name
        let lyh = {
            __proto__: pl,
            name: 'lyh.name',
            show() {
                super.show()
            }
        }
        lyh.show(); // common.show lyh.name
~~~
#### 18.为什么子类constructor中执行super
为了让父类的构造函数成功执行，如果子类里有constructor则super必须放在子类的构造函数上边，如果写在下边父类的属性就会覆盖子类的属性

字类定义的属性高于父级

~~~javascript
        class User {
            constructor(name) {
                this.name = name;
            }
        }
        class Admin extends User {
            constructor(...args) {
                super(...args);
                this.site = 'plumli.xyz';
            }
        }
        let a = new Admin('admin')
        console.log(a);
~~~
#### 19.使用super访问父类方法
实现多层继承
~~~javascript
        class Common{
            sum(){
                return this.data.reduce((t,c)=>t+c.price,0)
            }
        }
        class Consroller extends Common {
            constructor(){
                super()
            }
        }

        class Lesson extends Consroller {
            constructor(data) {
                super()
                this.data = data;
            }
            info(){
                return {
                    totalPrice:super.sum(),
                    data:this.data
                }
            }
        }
        let data = [
            {name: 'javascript',price: 150},
            {name: 'node.js',price: 173},
            {name: 'vue',price: 132},
        ]
        let pl = new Lesson(data);
        console.log(pl.info()); // {totalPrice: 455, data: Array(3)}data: (3) [{…}, {…}, {…}]totalPrice: 455[[Prototype]]: Object
~~~
#### 20.父类方法的重写
在子类里写方法来覆盖父类方法
~~~javascript
        class Common{
            sum(){
                return this.data.reduce((t,c)=>t+c.price,0)
            }
            getByKey(key){
                return this.data.filter(item=>item.name.includes(key))
            }

        }
        class Consroller extends Common {
            constructor(){
                super()
            }
        }

        class Lesson extends Consroller {
            constructor(data) {
                super()
                this.data = data;
            }
            info(){
                return {
                    totalPrice:super.sum(),
                    data:this.data
                }
            }
            getByKey(key){
                return super.getByKey(key).map(item=>item.name)
            }
        }
        let data = [
            {name: 'javascript',price: 150},
            {name: 'node.js',price: 173},
            {name: 'vue.js',price: 132},
        ]
        let pl = new Lesson(data);
        console.log(pl.getByKey('js')); // (2) ['node.js', 'vue.js']
~~~
#### 21.静态的属性调用
实现原理
~~~javascript
        function User() {}
        User.site = 'plumli.xyz'
        User.show = function () {
            console.log('User static methods');
        }
        console.dir(User)
        function Admin() {}
        Admin.__proto__ = User;
        // console.dir(Admin)
        Admin.show()
        console.log(Admin.site);
~~~
类中静态方法的调用
~~~javascript
        class User{
            static site='plumli.xyz'
            static show(){
                console.log('User.static methods');
            }
        }
        class Admin extends User{}
        console.dir(Admin.site); // plumli.xyz
        Admin.show(); // User.static methods
~~~
类本质上就是对象，类中继承中方法和属性的调用本质上就是prototype和__proto__以及原型链的运用
#### 22.使用instanceof检测对象实现
![](https://gitee.com/Plumliil/images/raw/master/MdPicture/20211207140221.png)
~~~javascript
        class User {}
        class Admin extends User {}
        let a =new Admin()
        console.log(a instanceof Admin); // true
        console.log(a instanceof User); // true 
        console.log(Admin.prototype instanceof User); // true
~~~
#### 23.isPrototypeOf检测继承关系
~~~javascript
        class Common{}
        class User extends Comment {}
        class Admin extends User {}
        let pl = new Admin();
        console.log(Admin.prototype.isPrototypeOf(pl));
        console.log(Comment.prototype.isPrototypeOf(pl));
~~~
#### 24.继承内置类的原型实现
继承内置数组方法并使用
~~~javascript
        function Arr(...args) {
            args.forEach(item => this.push(item))
            console.log(this);
            this.first = function () {
                return this[0]
            };
            this.max = function () {
                return this.sort((a, b) => b - a)[0]
            }
        }
        Arr.prototype = Object.create(Array.prototype)
        // console.dir(Arr)
        let arr = new Arr(1, 2, 3, 4, 56, 7, 8)

        // console.log(arr);
        console.log(arr.first());
        console.log(arr.max());
~~~

#### 25.使用继承增强内置类
在内置类的基础上增加新方法来增强内置类
~~~javascript
        class Arr extends Array {
            constructor(...args) {
                super(...args)
            }
            first() {
                return this[0]
            }
            max() {
                return this.sort((a, b) => {
                    return b - a
                })[0]
            }
            add(item) {
                this.push(item)
            }
            remove(value) {
                let pos = this.findIndex(item => item === value)
                console.log(pos);
                this.splice(pos,1)
            }
        }
        let arr = new Arr(1, 2, 3, 4, 56, 7, 8)
        // console.log(arr.first());
        // console.log(arr.max());
        arr.remove(56)
        arr.remove(1)
        arr.remove(2)
        arr.add('了以后')
        console.log(arr);
~~~
#### 26.使用mixin混合方法
该方法中用到Object.assign()来向类原型中压入对象方法，使该类能使用压入的方法
~~~javascript
        let Tools={
            max(key){
                return this.data.sort((a,b)=>b[key]-a[key])[0]
            }
        }
        let Arr={
            count(key){
                return this.data.reduce((t,c)=>t+c[key],0)
            }
        }
        class Lesson {
            constructor(lessons) {
                this.lessons = lessons;
            }
            get data(){
                return this.lessons
            }
        }
        let data = [
            {name: 'javascript',price: 150,click:189},
            {name: 'node.js',price: 173,click:173},
            {name: 'vue.js',price: 132,click:210},
        ]
        Object.assign(Lesson.prototype,Tools,Arr)
        let pl=new Lesson(data);
        console.log(pl.max('price')); // {name: 'node.js', price: 173, click: 173}
        console.log(pl.max('click')); // {name: 'vue.js', price: 132, click: 210}
        console.log(pl.count('price')); // 455
~~~
#### 27.动画实例

##### 灵活的动画处理类
~~~javascript
 class Animation {
            constructor(el) {
                this.el = el;
                this.timeout = 5;
                this.isShow = true;
                this.defaultHeight = this.height;
                // console.log(this.defaultHeight);
            }
            hide(callback) {
                this.isShow = false;
                let id = setInterval(() => {
                    if (this.height === 0) {
                        clearInterval(id)
                        callback && callback()
                        return
                    }
                    this.height = this.height - 1;
                }, this.timeout)
            }
            show(callback) {
                this.isShow = true;
                console.log('------------------------------', this.defaultHeight);
                let id = setInterval(() => {
                    if (this.height === this.defaultHeight || this.height > this.defaultHeight) {
                        clearInterval(id)
                        callback && callback()
                        return
                    }
                    this.height = this.height + 1;
                }, this.timeout)
            }
            get height() {
                return window.getComputedStyle(this.el).height.slice(0, -2) * 1;
            }
            set height(height) {
                this.el.style.height = height + 'px';
            }
        }
~~~
##### 容器管理类slide
~~~javascript
        class Slide {
            constructor(el) {
                this.el = document.querySelector(`${el}`);
                this.links = this.el.querySelectorAll('dt');
                this.panels = [...this.el.querySelectorAll('dd')].map(item => new Panel(item))
                this.bind()
            }
            bind() {
                this.links.forEach((item, i) => {
                    console.log(i);
                    item.addEventListener('click', () => {
                        console.log(i);
                        this.action(i)
                    })
                })
            }
            action(i) {
                Panel.hideAll(Panel.filter(this.panels, i), () => {
                    this.panels[i].show()
                })
                console.log(Panel.filter(this.panels, i));
            }
        }

~~~
##### 批量执行动画
~~~javascript
        class Panel extends Animation {
            static num = 0;
            static hideAll(items, callback) {
                if (Panel.num > 0) return;
                items.forEach(item => {
                    Panel.num++;
                    item.hide(() => {
                        Panel.num--;
                    })
                })
                callback && callback()
            }
            static filter(items, i) {
                return items.filter((item, index) => index !== i)
            }
        }
~~~
##### 动画队列的控制
定义num
~~~javascript
      static num = 0;
            static hideAll(items, callback) {
                if (Panel.num > 0) return;
                items.forEach(item => {
                    Panel.num++;
                    item.hide(() => {
                        Panel.num--;
                    })
                })
                callback && callback()
            }
~~~

# 模块化
#### 1.什么是模块化
将独立的功能拆分成不同的文件
用到哪个文件调用哪个文件

#### 2.开发一个模块管理工具
用moduleList对象，通过闭包把导入的对象保存起来，需要在拿对应的key获取
~~~javascript
        let module = (function () {
            const moduleList = {};

            function define(name, modules, action) {
                // 使用map取出方法
                modules.map((m,i)=>{
                    // 取出引用模块的方法
                    modules[i]=moduleList[m]
                })
                // 让当前模块调用，被调用模块的方法
                // 储存方法
                moduleList[name] = action.apply(null, modules);
            }
            return {
                // 暴露方法
                define
            }
        })();
        module.define('lyh', [], function () {
            return {
                first(arr) {
                    return arr[0]
                },
                max(arr,key) {
                    return arr.sort((a,b)=>b[key]-a[key])[0]
                }
            }
        })
        module.define('a',[],function(){
            return {
                site:'了以后',
                url:'plumli.xyz'
            }
        })
        module.define('b',['a'],function(a){
            a.site='plumli'
            console.log(a);
        })
        module.define('lesson',['lyh'],function(lyh){
            console.log(lyh);
            let data=[
                {name:'js',price:125,click:200},
                {name:'css',price:105,click:174},
                {name:'html',price:80,click:310},
                {name:'node',price:200,click:110},

            ]
            console.log(lyh.first(data));
            console.log(lyh.max(data,'price'));
        })
~~~
#### 3.模块的基本使用
需要导入的js
~~~javascript
// pl.js
let title = '了以后';
let url = 'plumli.xyz';
function show(){
    console.log('plumli');
}
// 只有导出的文件才可以使用
export {title,url,show}
~~~
~~~html
<script type="module">
        // 路径中需要加入目录
        import {title,url,show} from './js/pl.js'
        // console.log(title,url);
        show()
</script>
~~~

#### 4.模块延迟解析与严格模式
js代码按顺序执行
但是如果script标签有module属性则会延迟加载，即为模块延迟解析，后解析
~~~html
    <script type="module">
        console.log(document.querySelector('button'));
    </script>
~~~
使用模块的时候默认为严格模式，必须要按严格模式来
~~~html
    <script type="module">
        site='plumli.xyz'
        console.log(document.querySelector('button'));
        // Uncaught ReferenceError: site is not defined
        console.log(ths); // undefined
    </script>
~~~

#### 5.作用域在模块中实现
模块有其独立的作用域，在其他作用域无法访问模块内值
~~~html
    <script type="module">
        let site = 'plumli.xyz'
    </script>
    <script>
        console.log(site);
        // Uncaught ReferenceError: site is not defined
    </script>
~~~
模块间相互调用也需要import调用

#### 6.预解析的必要性
调用的时候解析一次，节省资源

#### 7.模块的具名导入与导出
具名导入
~~~javascript
import {site} from './js/pl.js'
~~~
具名导出
~~~javascript
export {site}
~~~
#### 8.批量导入与建议
批量导入
~~~javascript
        import * as pl from './js/pl.js'
        console.log(pl.site);
~~~
具名导入在一定程度上可以节省资源，打包工具在打包时只会打包用到的导入的函数或方法

#### 9.别名的使用
当命名冲突时，可以使用别名来减少冲突
~~~javascript
let title = '了以后';
let site = 'pl.xyz';
export {title as t,site}
~~~
~~~html
    <script type="module">
        let site='xx'
        import {site as s,t} from './js/pl.js'
        console.log(site); // xx
        console.log(s); // pl.xyz
        console.log(t); // 了以后
    </script>
~~~

#### 10.default默认导出
默认导出只有一个，所以可以用任何名字来接受
~~~javascript
export default class User{
    show(){
        console.log('默认导出 User.show');
    }
}
// 原理 export { User as default }
~~~
~~~html
    <script type="module">
        import User from './js/plum.js'
        console.log(User);
    </script>
~~~

#### 11.混合导入与导出的使用
~~~javascript
let site = 'plumli.xyz'
export default class User {
    show() {
        console.log('默认导出 User.show');
    }
}
export {site}
~~~
~~~html
    <script type="module">
        import User,{site} from './js/plum.js'
        console.log(User);
        console.log(site);
    </script>
~~~
批量导出
~~~javascript
let site = 'plumli.xyz'
class User {
    static show() {
        console.log('默认导出 User.show');
    }
}
export {User as default,site}
~~~
~~~html
    <script type="module">
        import * as plum from './js/plum.js'
        console.log(plum.default.show());
        console.log(plum.site);
    </script>
~~~
#### 12.默认导出模块的使用规范
默认导出的名字一般和文件名有关联
#### 13.模块合并导出
通过一个文件将所有用到的模块集合在一起一块导出
~~~html
    <script type="module" src="./js/pl.js"></script>
~~~
~~~javascript
// pl.js
import * as pl3 from './pl3.js'
console.log(pl3);
pl3.pl2.User.show()
~~~
~~~javascript
// pl1.js
let title = '了以后';
let site = 'pl.xyz';
export {title,site}
~~~
~~~javascript
// pl2.js
let site = 'plumli.xyz'
class User {
    static show() {
        console.log('默认导出 User.show');
    }
}
export {User,site}
~~~
~~~javascript
// pl3.js
import * as pl1 from './pl1.js'
import * as pl2 from './pl2.js'
export {pl1,pl2}
~~~
将每个模块整合到一起统一导出
#### 14.按需动态加载模块
~~~html
    <script type="module">
        // import() 返回一个promise对象，可以实现动态加载模块
        document.querySelector('button').addEventListener('click',()=>{
            import('./js/pl.js').then(({User,site})=>{
                User.show()
            })
        })
    </script>
~~~
~~~javascript
let site = 'plumli.xyz'
class User {
    static show() {
        console.log('默认导出 User.show');
    }
}
export {User,site}
~~~
#### 15.webpack打包工具体验
首先需要初始化文件夹
~~~shell
npm init -y
~~~
然后安装webpack工具
~~~shell
npm i webpack webpack-cli --save-dev
~~~
然后在package.json中进行配置
~~~json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"webpack --mode development --watch"
  },
  // --watch 监听改变
~~~
接下来创建文件目录
~~~shell
├─index.html
├─package-lock.json
├─package.json
├─src
|  ├─index.js
|  └Style.js
├─dist
|  └main.js
~~~
其中index.js为webpack编译时入口文件,Style.文件为模块文件
dist为编译打包后的js文件夹main.js为编译好的文件
~~~javascript
// index.js
import Style from './Style'
new Style().init()
~~~
~~~javascript
// Style.js
export default class Style {
    constructor() {}
    init() {
        document.body.style.backgroundColor = 'red'
    }
}
~~~

# 正则

#### 1.体验正则
~~~javascript
        let pl='plumli2001pl11';
        // console.log(parseInt('a'));
        let nums=[...pl].filter(item=>!Number.isNaN(parseInt(item)));
        console.log(nums.join(''));
        console.log(pl.match(/\d/g).join(''));
~~~
#### 2.字面量创建正则

~~~javascript
        let pl='plumli.xyz';
        // 字面量形式无法操作变量
        let a='u'
        console.log(/a/.test(pl));
        console.log(eval(`/${a}/`).test(pl));
~~~
#### 3.使用对象创建正则表达式
~~~javascript
        let pl='plumli.xyz';
        let reg=new RegExp('u','g');
        console.log(reg); // /u/g
        console.log(reg.test(pl)); // true
~~~
字符替换
~~~javascript
        let con=prompt('请输入要检测的内容,支持正则');
        let reg=new RegExp(con,'g')
        let div=document.querySelector('.content');
        div.innerHTML=div.innerHTML.replace(reg,search=>{
            return `<span style="color:red">${search}</span>`
        })
~~~
#### 4.选择符
| 代表选择,选择 | 两边
() 原子组
~~~javascript
        // | 表示选择两边全部
        let pl = 'plumli';
        console.log(/u|@/.test(pl)); // true
        console.log(/aau|@/.test(pl)); // false
        
        let tel= '010-9999999';
        // 普通
        console.log(/010\-\d{7,8}|020\-\d{7,8}/.test(tel)); // true
        // 原子组
        console.log(/(010|020)\-\d{7,8}/.test(tel)); // true
~~~
#### 5.原子表与原子组中的选择符
match() 找到一个或多个正则表达式的匹配

[] 任选 []中任意一个 只会匹配一个

() | 两边的一个
~~~javascript
        let reg =/[123456]/;
        let pl='131231';
        console.log(pl.match(reg)); // ['1', index: 0, input: '131231', groups: undefined]
        let reg1=/(12|34)/;
        let pl1='1555534222212';
        console.log(pl1.match(reg1)); // (2) ['34', '34', index: 5, input: '1555534222212', groups: undefined]
~~~
#### 6.转义
- /d 代表数字 0-9
- + 一个或多个
- . 除换行外任何字符（优先级最高） . 普通字符点
- ? 问号代表0个或1个
- // 双斜杠代表边界符，需要转义
- 转义 \
使用双反斜杠对斜杠进行转义
普通的正则表达式输出时会转义
 `console.log('\d+\.\d+')==> d+d `
 因此需要再加\来确保转为字符串再转为正则后能正常使用即
 `console.log('\\d+\\.\\d+')==>\d+\.\d+`
~~~javascript
        let price = 23.23;
        console.log('/\d+\.\d+/'); // /d+.d+/
        console.log(/\d+\.\d+/.test(price)); // true
        let reg=new RegExp('\\d+\\.\\d+'); 
        console.log(reg); // /\d+\.\d+/
        console.log(reg.test(price)); // true
        // 网址判断
        let url='https://www.plumli.xyz';
        console.log(/https?:\/\/\w+\.+\w+/.test(url));
~~~
#### 7.字符边界约束
~~~javascript

~~~
#### 
~~~javascript

~~~
#### 
~~~javascript

~~~
#### 
~~~javascript

~~~
#### 
~~~javascript

~~~