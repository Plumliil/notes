

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

##### Symbol类型
在es5中，如果我们是不可以再对象中添加相同属性名称的，比如下面的做法:
~~~typescript
let person={
    title:'coder',
    title:'teacher'
}
~~~
通常我们的做法是定义两个不同的属性名字:比如identity1和identity2
但是我们也可以通过symbol来定义相同的名称，因为symbol返回的是不同的值
~~~typescript
let sb1: symbol = Symbol('title');
let sb2: symbol = Symbol('title');

let person = {
    [sb1]: 'coder',
    [sb2]: 'teacher'
}
~~~

##### any
在某些情况下，我们无法确定一个变量的类型，并且它可能会发生一些变化，这个时候我们可以使用any类型(类似dart语言中的dynamic类型)

~~~typescript
// 当进行类型断言是 as any 先转成 any 再转成其他
// 在不想给某些javascript代码添加数据类型时可以使用any
let a: any = 'Hello world'
a = 1;
a=true;
a={};
~~~

如果对于某些情况的处理过于频繁不希望添加规定的类型注解，或者在引入一些第三方库时，缺失了类型注解，这个时候我们可以使用any
  - 包括在vue源码中也会使用any来进行某些属性的适配  

##### unknown类型
用于描述不确定变量

不确定类型不能赋值给确定类型
~~~typescript
// 不可行
let u: unknown;
let m: string = u
// 可行
let u: any;
let m: string = u
~~~

##### void类型
void类型通常来指定一个函数没有返回值的，那么它的类型就是void类型
我们可以将null和undefined赋值给void类型，也就是函数可以返回null和undefined

##### never
表示永远不会发生值的类型，比如一个函数：
  - 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗
  - 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型
~~~typescript
function fn(): never {
    // Infinite loop
    while (true) {

    }
}

function bar(): never {
    throw new Error()
}
~~~
never应用场景:进行验证
~~~typescript
function handleMsg(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log('string形式处理');
            break;
        case 'number':
            console.log('number形式处理');
            break;
        case 'boolean':
            console.log('boolean形式处理');
            break;
        default:
            const check: never = message
            break;
    }
}
~~~
##### typle类型 元组类型
多种元素的组合
~~~typescript
let info1:[string,number,number]=['plum',18,188]
let name1=info1[0]
~~~

应用场景
~~~typescript
function useState<T>(state: T) {
    let currentState = state;
    const changeState = (newState: T) => {
        currentState = newState
    }
    const tuple: [T, (newState: T) => void] = [currentState, changeState];
    return tuple
}

const [counter, setCounter] = useState(10);
const [title, setTitle] = useState('AA');
const [flag, setFlag] = useState(true);typescript

~~~

##### 函数的参数类型及返回值类型
~~~typescript
// 给参数加类型注解
// 给返回值加类型注解 ():类型注解
// 开发情况下可以不写，会自动推导
// 对参数个数也有限制
function sum(num1: number, num2: number): number {
    console.log(num1 + num2);
    return num1 + num2
}
sum(1, 2)
~~~
#### 匿名函数参数类型

~~~typescript
const names = ['abc', 'cba', 'aaa'];
// 根据上下文环境推导，可以不添加类型注解
names.forEach((item)=>{
    console.log(item);
    
})
~~~

##### 对象类型及可选类型
`{ x: number, y: number, z: number }`
~~~typescript
// point: x/y -> 对象类型
// 可选类型加问好
// { x: number, y: number, z?: number }
function printPoint(point: { x: number, y: number, z?: number }) {
    console.log(point.x);
    console.log(point.y);
    // console.log(point.z);
}

printPoint({ x: 100, y: 200})
~~~

##### 联合类型
typescript类型允许我们使用多种运算符，从现有类型中构建新的类型
我们来使用第一种组合类型的方法 :联合类型( Union Type )
  - 联合类型是由两个或者多个其他类型组成的类型;
  - 表示可以是这些类型中的任何一个值;
  - 联合类型中的每一个类型被称之 为联合成员( union's members) ;

~~~typescript
// 使用联合类型时需要小心
function printId(id: number | string) {
    console.log('id',id);
}
printId(1)
printId('a')
~~~
##### 可选类型和联合类型的联系

~~~typescript
// 可选类型和联合类型联系
// 一个参数一个可选类型的时候，它其实本质上表示的是这个参数是：类型|undefined 的联合类型
function printId(id?: number | string) {
    console.log('id',id);
}
printId(1)
printId('a')
printId(undefined)
~~~

##### 类型别名
使用关键字type来给类型起别名
~~~typescript
type UnionType = string | number | boolean;
function unionType(arg:UnionType){
    console.log(arg);
}
unionType('a')
unionType(1)
unionType(true)
~~~

#### 类型断言 as
通过类型断言将一个比较普遍的类型转化为具体类型

~~~typescript
const el = document.querySelector('#pl') as HTMLImageElement;
el.src='xxx' // 可以赋值
~~~
在类方法中使用类型断言
~~~typescript
class Person{}
class Student extends Person{
    studying(){
        console.log('studying');
    }
}
function sayHello(p:Person) {
    (p as Student).studying()
}
const stu=new Student();
sayHello(stu)
~~~
不建议使用
~~~typescript
const message = 'hello world';
const num: number = (message as unknown) as number
~~~

#### 非空类型断言
当我们编写下面的代码时,在执行ts的编译阶段会报错:
  - 这是因为传入的message有可能是为undefined的,这个时候是不能执行方法的;
~~~typescript
function printMsgLen(msg?: string) {
    console.log(msg.length);
}
~~~
但是,我们确定传入的参数是有值的,这个时候我们可以使用非空类型断言:
  - 非空断言使用的是! , 表示可以确定某个标识符是有值的,跳过ts在编译阶段对它的检测;
~~~typescript
function printMsgLen(msg?: string) {
    console.log(msg!.length);
}
~~~

#### 可选链的使用
+ 可选链事实上并不是TypeScript独有的特性,它是ES11 (ES2020)中增加的特性:
  - 可选链使用可选链操作符?. ;
  - 它的作用是当对象的属性不存在时,会短路,直接返回undefined ,如果存在,那么才会继续执行; 
  - 虽然可选链操作是ECMAScript提出的特性,但是和TypeScript-起使用更版本;
~~~typescript
type Person={
    name:string,
    friend?:{
        name:string,
        age?:number
    }
}
const info:Person={
    name:'ls',
    friend:{
        name:'zs'
    }
}
console.log(info.friend?.name);
~~~

#### ??和!!
+ !!操作符
  - 将一个其他类型1转化为布尔类型boolean
  - 类似于Boolean(变量)的方式
~~~typescript
const message ='hello world';
const flag=!!message;
console.log(flag); // true
~~~
+ ??操作符
  - 它是ES11增加的属性
  - 空值合并操作符(??)是一个逻辑操作符,当操作符的做测试null或者undefined时,返回其右侧操作数,否则返回左侧操作数
~~~typescript
// 类似于三目运算符
let message: string | null = 'hello world';
const content = message ?? 'content';
console.log(content);
~~~

#### 字面量类型
![](https://raw.githubusercontent.com/Plumliil/images/main/img/20220302152208.png)
字面量类型的意义,就是必须结合联合类型
~~~typescript
// 字面量类型的意义,就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center';
let align: Alignment = 'left';
align='center'
console.log(align);
~~~
~~~typescript
// 字面量推理
type Methods = 'Get' | 'Post';
// type RequestM = {
//     url:string,
//     method:Methods
// }
function request(url:string,method:Methods) {}
// const options:RequestM={
//     url:'',
//     method:'Get'
// }; 
const options={
    url:'',
    method:'Get'
}
request(options.url,options.method as Methods);
~~~

#### 类型缩小
+ 什么是类型缩小呢?
  - 类型缩小的英文是Type Narrowing ;
 - 我们可以通过类似于typeof padding == = "number"的判断语句，来改变TypeScript的执行路径; .
  - 在给定的执行路径中,我们可以缩小比声明时更小的类型,这个过程称之为缩小;:
  - 而我们编写的typeof padding === "number可以称之为类型保护( type guards) ;
+ 常见的类型保护有如下几种:
  - typeof
  - 平等缩小(比如===、!== )
  - instanceof
  - in
  - 等等..
~~~ts
// typeof
type IDType = number | string;
function printID(id: IDType) {
    if (typeof id === 'string') {
        console.log(id);
    } else {
        console.log(id);
    }
}
printID(1);
printID('1');
// ===
type Direction = 'left' | 'right' | 'top' | 'bottom';
function printDirection(direction: Direction) {
    switch (direction) {
        case 'left':
            console.log(direction);
            break;
        case 'right':
            console.log(direction);
            break;
        case 'top':
            console.log(direction);
            break;
        case 'bottom':
            console.log(direction);
            break;
        default:
            break;
    }
}
printDirection('top') // top
// instanceof
function printTime(time: string | Date) {
    if (time instanceof Date) {
        console.log(time.toUTCString());
    } else {
        console.log(time);
    }
}
printTime(new Date()) // Wed, 02 Mar 2022 13:22:44 GMT
// instanceof
class Stu {
    studying() {
        console.log('i am a student');
    }
}
class Tea {
    teaching() {
        console.log('i am a teacher');
    }
}
function work(p: Stu | Tea) {
    if (p instanceof Stu) {
        p.studying()
    } else {
        p.teaching()
    }
}
work(new Stu()) // i am a student
// in
type Fish={
    swimming:()=>void
}
type Dog={
    running:()=>void
}

function walk(animal:Fish|Dog) {
    if('swimming' in animal){
        animal.swimming()
    }else{
        animal.running()
    }
}
const fish:Fish={
    swimming(){
        console.log('fish swimming');
    }
}
const dog:Dog={
    running(){
        console.log('dog running');
    }
}
walk(fish)
~~~
#### typescript 函数类型
在javascript开发中,函数是重要组成部分,并且函数可以作为一等公民(可以作为参数,也可以作为返回值进行传递
##### 类型解析
+ 在上面的语法中(num1: number, num2: number) => void ,代表的就是一 个函数类型
  - 接收两个参数的函数: num1和num2 ,并且都是number类型;
  - 并且这个函数是没有返回值的,所以是void ;
在某些语言中,可能参数名称num1和num2是可以省略,但是TypeScript是不可以的:

~~~ts
// 1.函数作为参数时,在参数中如何编写类型
function fn() {}
type FnType = () => void;
function bar(fn: FnType) {
    fn()
}
bar(fn)
// 2.定义常量时,编写函数的类型
type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (num1: number, num2: number) => {
    return num1 + num2
}
console.log(add(1, 2));
~~~
案例
~~~ts
function calc(n1: number, n2: number, fn: (n1: number, n2: number) => number) {
    return fn(n1, n2)
}
let r1 = calc(20, 30, function (a1, a2) {
    return a1 + a2
});
let r2 = calc(20, 30, function (a1, a2) {
    return a1 - a2
})
console.log(r1,r2); // 50 -10
~~~
##### 函数参数的可选类型
- 我们可以指定某个参数是可选的
- 这个时候这个参数y依然是有类型的,它是什么类型number|undefined
- 另外可选类型被须在必传参数的后面
~~~ts
function fn(x: number, y?: number) {
    if (y) {
        return x + y
    }else{
        return x
    }
}
console.log(fn(20));
~~~

##### 参数的默认值
必传 -> 有默认值参数 -> 可选参数
~~~ts
function fn(x: number, y: number = 100) {
    return x+y
}
console.log(fn(20)); // 120
function fn(x: number=30, y: number) {
    return x+y
}
console.log(fn(undefined,20)); // 50
~~~


##### 函数的剩余参数

~~~ts
function sumNum(initalNum:number,...nums:number[]) {
    let total=initalNum;
    for(const num of nums){
        total+=num
    }
    return total
}
console.log(sumNum(20,30));
console.log(sumNum(20,30,40));
console.log(sumNum(20,30,40,50));
~~~

#### 可推导的this类型
~~~ts
type ThisType = { name: string };
function eating(this: ThisType) {
    console.log(this.name + 'eating');
}
const pl = {
    name: 'pl',
    eating: eating
}
pl.eating();
eating.call({ name: 'zs' }/*this指向1*/)
export { };
~~~


#### 函数的重载
函数的名称相同,但参数不同的几个函数,就是函数的重载
~~~ts
// 没有函数体
function add(a1: number, a2: number): number;
function add(a1: string, a2: string): string;
// 执行下边的函数体
function add(a1: any, a2: any): any {
    if (typeof a1 === 'string') {
        return a1.length + a2.length
    }
    return a1 + a2
}
const res = add(1, 2);
const res1 = add('111', "222");
console.log(res);
console.log(res1);
// 在函数的重载中,实现的函数是不能被调用的
// add({ name: 'zs' }, { name: 'ls' })
~~~