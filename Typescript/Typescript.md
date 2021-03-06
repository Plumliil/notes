

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

如果能够使用联合类型实现的逻辑尽量使用联合类型
~~~ts
// 联合类型实现
function getLength(args:string|any[]) {
    return args.length
}
console.log(getLength('asd'));
console.log(getLength([1,2,3,4,5,6,7]));
// 函数重载实现
function getLength(args: string): number;
function getLength(args: any[]): number;
function getLength(args: any): number {
    return args.length
}
console.log(getLength('asd'));
console.log(getLength([1,2,3,4,5,6,7]));
~~~

### 类的使用
在早期的javascript中需要通过函数和原型链来实现类和继承,从es6
开始,引入class关键字,可以更加方便的定义和使用类
~~~ts
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
    eating() {
        console.log(this.name + 'eating');
    }
}
const p = new Person('pli', 18)
p.eating()
console.log(p.name);
console.log(p.age);
~~~
#### 类的继承
+ 面向对象的其中一大特性就是继承,继承不仅仅可以减少我们的代码量,也是多态的使用前提。
+ 我们使用extends关键字来实现继承,子类中使用super来访问父类。
+ 我们来看一-下Student类继承自Person :
  - Student类可以有自己的属性和方法,并且会继承Person的属性和方法;
  - 在构造函数中,我们可以通过super来调用父类的构造方法,对父类中的属性进行初始化;
~~~ts
class Person {
    name: string = ''
    age: number = 0
    constructor(name: string = '', age: number = 0) {
        this.name = name;
        this.age = age
    }
    eating() {
        console.log(this.name + '---------' + 'eating');
    }
}
class Student extends Person {
    sno: number
    constructor(name: string = '', age: number = 0, sno: number = 0) {
        super(name, age)
        this.sno = sno
    }
    studying() {
        console.log('studying');
    }
    eating(){
        super.eating()
        console.log('student eating');
    }
}
class Teacher extends Person {
    title: string = ''
    teaching() {
        console.log('teaching');
    }
}
const stu = new Student('pli', 18)
~~~
#### 类的多态
~~~ts
class Animal {
    action(){
        console.log('animal action');
    }
}
class Dog extends Animal {
    action(){
        console.log('dog running');
    }
}
class Fish extends Animal {
    action(){
        console.log('fish swimming');
    }
}

function makeActions(animals:Animal[]) {
    animals.forEach(animal=>{
        animal.action()
    })
}
// 父类引用指向子类对象
// 相同的引用表现出来的形式不一样1,这个过程称为多态(必然会有继承)
// 多态的目的是为了写出更加具备通用性的代码
// makeActions写成函数重载或联合类型
makeActions([new Dog(),new Fish()])
~~~

#### 类的成员修饰符
+ 在TypeScript中,类的属性和方法支持三种修饰符: public. private、 protected
  - public修饰的是在任何地方可见、公有的属性或方法,默认编写的属性就是public的;
  - private修饰的是仅在同- -类中可见、私有的属性或方法;
  - protected修饰的是仅在类自身及子类中可见、受保护的属性或方法;
~~~ts
class Person {
    public name: string = 'zs' // 都可以访问
    private gfName: string = 'ls' // 只能在内部访问
    protected children: string = 'ww' // 在类内部和子类中可以访问
    // 属性本身不能被修改,如果它是对象类型,那么对象里的内容可以更改
    readonly sex: string = '男' // 都可以访问
    // 通过内部方法 访问私有属性
    getName() {
        return this.gfName
    }
}
class Son extends Person {
    getChild() {
        return this.children
    }
}
const s = new Son()
console.log(s.getChild()); // ww
const p = new Person()
console.log(p.name); // zs
// p.sex='女'; 报错
console.log(p.getName()); // ls
console.log(p.gfName); // 无法访问
~~~
#### readonly
- 只读属性是可以在构造器中赋值,赋值之后就不可以修改
- 属性本身不能被修改,如果它是对象类型,那么对象里的内容可以更改

#### getter/setter
~~~ts
class Person {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    set name(newName) {
        this._name = newName
    }
    get name() {
        return 'this._name'+'-----'+this._name
    }
}

const p = new Person('pli');
p.name = 'plumli';
console.log(p.name); // this._name-----plumli
~~~


#### 类的静态成员

~~~ts
class Student {
    // 静态属性可以通过类直接访问
    static time: string = '20:00' // 静态属性
    // 静态方法
    static attendClass(){
        console.log('go to school');
    }
}
console.log(Student.time); // 20:00
Student.attendClass(); // go to school
~~~

#### 抽象类abstract
我们知道,继承是多态使用的前提。
  - 所以在定义很多通用的调用接口时，我们通常会让调用者传入父类,通过多态来实现更加灵活的调用方式。
  - 但是,父类本身可能并不需要对某些方法进行具体的实现,所以父类中定义的方法，,我们可以定义为抽象方法。
~~~ts
function makeArea(shape: Shape) {
    return shape.getArea()
}
abstract class Shape {
    // 抽象类的抽象方法子类必须实现
    abstract getArea():number
}
class Rectangle extends Shape {
    private width: number
    private height: number
    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
    }
    getArea() {
        return this.width * this.height
    }
}
class Circle extends Shape {
    private r: number
    constructor(r: number) {
        super()
        this.r = r
    }
    getArea() {
        return this.r * this.r * 3.14
    }
}
const r = new Rectangle(20, 30);
const c = new Circle(5);
console.log(makeArea(r)); // 600
console.log(makeArea(c)); // 78.5
~~~

#### 类的类型
~~~ts
class Person {
    name: string = '123'
}
const p = new Person();
// 类类型
const p1: Person = {
    name:'xxx'
}
console.log(p1.name); // xxx 
function  printPerson(p:Person) {
    console.log(p.name);
}
printPerson(new Person());// 123
printPerson({name:'zs'});// zs
~~~

### 接口
#### 接口基本使用

~~~ts
// 通过类型(type)别名来声明对象类型
// type InfoType={name:string,age:number}

// 另外一种方式声明对象类型: 接口interface
interface IInfoType {
     name: string,
     age?: number ,
     friend:{
         name:string
     }
    }
const info: IInfoType = {
    name: 'pli',
    age: 18,
    friend:{
        name:'zz'
    }
}
console.log(info);
// { name: 'pli', age: 18, friend: { name: 'zz' } }
~~~
#### 索引类型
~~~ts
// 通过interface来定义索引类型
interface IIndexLang {
    [index: number]: string
    // [index:string]:number
}

const frontLang: IIndexLang = {
    0: 'HTML',
    1: 'CSS',
    2: 'Javascript',
    3: 'Vue'
}
console.log(frontLang);
// { '0': 'HTML', '1': 'CSS', '2': 'Javascript', '3': 'Vue' }
~~~
#### 函数类型
~~~ts
// type CalcFn = (n1: number, n2: number) => number;
// 可调用接口
interface CalcFn {
    (n1:number,n2:number):number
}

function calc(n1: number, n2: number, calcFn: CalcFn) {
    return calcFn(n1, n2)
}
const add: CalcFn = (n1, n2) => {
    return n1 + n2
}
console.log(calc(10,20,add));// 30
~~~

#### 接口的继承
~~~ts
interface ISwim {
    swimming: () => void,
}
interface IFly {
    flying: () => void,
}
// 接口继承 支持多继承
interface IAction extends ISwim,IFly {}
const action: IAction = {
    swimming() { },
    flying() { }
}
~~~

#### 交叉类型
~~~ts
// 联合类型
type PliType = number | string;
type DicType = 'l' | 'r' | 't' | 'b';
// 交叉类型 & 既符合 a 又符合 b
type PType = number & string

interface ISwim {
    swimming: () => void,
}
interface IFly {
    flying: () => void,
}

type MyType1 = ISwim & IFly;
type MyType2 = ISwim | IFly;

// 接口继承 支持多继承
interface IAction extends ISwim, IFly { }
const action: IAction = {
    swimming() { },
    flying() { }
}
~~~
#### 接口的实现

~~~ts
interface IEat {
    eating: () => void
}
interface ISwim {
    swimming: () => void
}

class Animal {

}

// 继承:只能实现单继承
// 实现: 实现接口,类可以实现多个接口

class Fish extends Animal implements ISwim, IEat {
    swimming() {
        console.log('Fish Swimming');
    }
    eating() {
        console.log('Fish Eating');
    }
}
// 编写一些公共API:面向接口编程
// 所有实现接口的类都可以传入作为参数
function swimAction(swimable: ISwim) {
    swimable.swimming()
}
swimAction(new Fish())
swimAction({ 
    swimming(){
        console.log('i can swimming');
    }
})
~~~

#### 字面量赋值
通过字面量复制可以进行多余属性的擦除
freshness 擦除
在类型检测这一步擦除属性,如果擦除掉依然满足,既可以赋值
擦除后相同,即可赋值

~~~ts
interface IPerson {
    name: string
    age: number
    height: number
}

const info = {
    name: 'why',
    age: 18,
    height: 180,
    address: '广州'
}
// // freshness 擦除
// // 在类型检测这一步擦除属性,如果擦除掉依然满足,既可以赋值
// // 擦除后相同,即可赋值
// const p: IPerson = info 

function printInfo(person:IPerson) {
    console.log(person.name);
    console.log(person.age);
    // console.log(person.adress); 报错,不可取
    
}
printInfo(info)
~~~

### 枚举类型
#### 类型用法

~~~ts
// 有值 默认从0开始
// 可以更改值 数字或字符串常量
enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

function turnDirection(direction:Direction) {
    console.log(direction);
}
turnDirection(Direction.LEFT); // 0
turnDirection(Direction.RIGHT); // 1
turnDirection(Direction.TOP); // 2
~~~

### 泛型
#### 认识泛型
+ 软件工程的主要目的是构建不仅仅明确和一致的API ,还要让你的代码具有很强的可重用性:
  - 比如我们可以通过函数来封装-些API ,通过传入不同的函数参数,让函数帮助我们完成不同的操作; .
  - 但是对于参数的类型是否也可以参数化呢?
+ 什么是类型的参数化?
  - 我们来提一个需求:封装一个函数,传入-个参数,并且返回这个参数;
如果我们是TypeScript的思维方式,要考虑这个参数和返回值的类型需要一致:

#### 类型参数化
+ 虽然any是可以的,但是定义为any的时候,我们其实已经丢失了类型信息:
  - 比如我们传入的是一个number ,那么我们希望返回的可不是any类型,而是number类型;
  - 所以,我们需要在函数中可以捕获到参数的类型是number ,并且同时使用它来作为返回值的类型;
+ 我们需要在这里使用一种特性的变量-类型变量( type variable)，它作用于类型,而不是值:
+ 这里我们可以使用两种方式来调用它:
  - 方式一: 通过<类型>的方式将类型传递给函数;
  - 方式二:通过类型推到，自动推到出我们传入变量的类型:
  - 在这里会推导出它们是字面量类型的,因为字面量类型对于我们的函数也是适用的
~~~ts
// 在定义这个函数时,不决定这些函数的1类型1
// 而是让调用者以参数的形式告知,我这里的函数参数应该是什么类型
// 接受一个参数
function sum<Type>(n: Type) {
    console.log(n);
}
function foo<T, E, O>(arg1: T, arg2: E, arg3: O) {
    console.log(arg1, arg2, arg3);
}
sum<number>(1)
sum<{ name: string }>({ name: 'pli' })
foo<number, string, boolean>(1, 'a', true)
~~~
#### 泛型基本补充
传入多个类型
~~~ts
function foo<T, E, O>(arg1: T, arg2: E, arg3: O) {
    console.log(arg1, arg2, arg3);
}
~~~
+ 平时在开发中可能会看到的一些名称
  - T:Type的缩写,类型
  - K,V:key和value的缩写,键值对
  - E:Element的缩写,元素1
  - O:Object的缩写,对象

#### 泛型接口
~~~TS
interface IPerson<T1,T2>{
    name:T1
    age:T2
}
const ps:IPerson<string,number>={
    name:'pli',
    age:18
}

class Point<T> {
    x:T
    y:T
    z:T
    constructor(x:T,y:T,z:T) {
        this.x=x;
        this.y=y;
        this.z=z
    }
}
const pt=new Point('1.33.2','2.33.2','3.33.2')
~~~

#### 泛型的类型约束
如示例,要求传入的值有length属性
~~~ts
interface ILength{
    length:number
}

function getLen<T extends ILength>(arg:T) {
    console.log(arg.length);
    return arg.length
}
getLen('sasdas');
getLen([1,2,3,54]);
~~~

### 模块化开发
+ TypeScript支持两种方式来控制我们的作用域:
  - 模块化:每个文件可以是一个独立的模块,支持ES Module ,也支持CommonJS ;
  - 命名空间:通过namespace来声明一个命名空间
~~~ts
export namespace time {
    export function format(time: string) {
        return '2022-02-02'
    }
    export function fn() {

    }
    export const name: string = 'zs'
}
namespace price {
    export function format(time: string) {
        return '99.9'
    }
}

// 命名空间内东西想要使用1需要导出
// 命名空间在其他模块使用也需要使用export导出
time.format
price.format
~~~

### 类型查找

如果模块被声明过,那么使用时就不会被报错
+ 之前我们所有的typescript中的类型，几乎都是我们自己编写的，但是我们也有用到一些其他的类型:
+ 大家是否会奇怪,我们的HTMLImageElement类型来自哪里呢?甚至是document为什么可以有getElementByld的方
法呢?
  - 其实这里就涉及到typescrip对类型的管理和查找规则了。
+ 我们这里先给大家介绍另外的一种typescript文件: .d.ts文件
  - 我们之前编写的typescript文件都是.ts文件,这些文件最终会输出js文件,也是我们通常编写代码的地方;
  - 还有另外一种文件.d.ts 文件,它是用来做类型的声明(declare)。它仅仅用来做类型检测 ,告知typescript我们有哪
些类型;
+ 那么typescript会在哪里查找我们的类型声明呢?
  - 内置类型声明;
  - 外部定义类型声明;
  - 自己定义类型声明;

#### 内置声明
- 内置类型声明是typescript自带的、帮助我们内置了JavaScript运行时的一 些标准化API的声明文件;
- 包括比如Math、Date等内置类型 ,也包括DOM API ,比如Window. Document等 ;
内置类型声明通常在我们安装typescript的环境中会带有的;

#### 外部类型声明和自定义声明
- 外部类型声明通常是我们使用一-些库(比如第三方库)时,需要的一些类型声明。
- 这些库通常有两种类型声明方式:
- 方式一:在自己库中进行类型声明(编写.d.ts文件) , 比如axios
- 方式二:通过社区的一个公有库DefinitelyTyped存放类型声明文件
  - 该库的GitHub地址: https:/qithub.com/DefinitelyTyped/DefinitelyTyped/
  - 该库查找声明安装方式的地址: https://www.typescriptlang.org/dt/search?search=
  - 比如我们安装react的类型声明: npm i @types/react --save-dev

- 自定义声明
~~~ts
declare module 'lodash' {
    export function join(arr: any[]): void
}
~~~
- 声明文件常见类型
~~~ts
// 生成模块
declare module 'lodash' {
    export function join(arr: any[]): void
}
// 声明属性
declare let pliName: string
// 声明函数
declare function pliFoo(): void
// 声明类
declare class Person {
    name: string
    age: number
    constructor(name: string, age: number)
}
// 声明文件
declare module '*.jpg'
// 声明命名空间
declare namespace $ {
    export function ajax(settings: any): any
}
~~~