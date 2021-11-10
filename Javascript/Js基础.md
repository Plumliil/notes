
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

