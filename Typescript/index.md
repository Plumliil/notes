### 原始数据类性和 any

undefined 和 null 是所有类型的子类型

### 数组和元组

Array

```ts
let arrOfNumber: number[] = [1, 2, 3];
let arrOfString: string[] = ["a", "b", "c"];
let arrOfBoolean: boolean[] = [true, false];
```

Tuple

```ts
let user: [string, number] = ["zs", 19];
user.push("男");
```

### interface 接口

对对象的形状(shape)进行描述
对函数类型进行描述
Duck Typing 鸭子类型

```ts
interface IPerson {
  readonly id: number;
  name: string;
  age: number;
  sex?: "男";
}

let user: IPerson = {
  id: 1,
  name: "zs",
  age: 19,
};
```

### Function 函数

- 在 js 中 函数是一等公民

```ts
function add(x: number, y: number, z?: number): number {
  if (typeof z === "number") return x + y + z;
  return x + y;
}
console.log(add(1, 2, 3));
interface ISum {
  (x: number, y: number, z?: number): number;
}
let add2: ISum = add;
```

### 类型推论,联合类型和类型断言

#### 联合类型

```ts
let numOrStr: number | string;
```

只能访问共有方法(交集)

#### 类型断言

使用`as`进行类型断言,使用者清楚知道某个值的详细信息

```ts
function getLength(value: string | number): number {
  const str = value as string;
  if (str.length) return str.length;
  const number = value as number;
  return number.toString().length;
}
```

### 类 Class

类(Class):定义了一起事物的抽象特点
对象(Object):类的实例
面向对象(OOP)三大特征:封装,继承,多态(不同实例不同方法)

- private:私有,自己访问
- public:公开访问
- protected:自己以及子类访问

```ts
class Animal {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected run() {
    return `${this.name} is running`;
  }
}

class Dog extends Animal {
  static color: string[] = ["yellow"];
  constructor(name: string) {
    super(name);
    console.log(this.name);
  }
  run() {
    return "Woo " + super.run();
  }
}
let tiger = new Animal("泰格");
// console.log(tiger.run()); // 属性“run”受保护，只能在类“Animal”及其子类中访问。
// tiger.name='tiger'; // 无法分配到 "name" ，因为它是只读属性。
let dh = new Dog("dahuang");
console.log(dh.run()); // Woo dahuang is running
```

### 类和接口

在 js 中，一个 class 只能继承自另一个 class，若其他类中的方法与属性也想继承，则很麻烦。而在 ts 中可以使用 implements 来实现一些类共有方法属性的提取。

```ts
interface Radio {
  switchRadio(trigger: boolean): void;
}
interface Battery {
  checkBatteryStatus(): void;
}
interface RadioWidthBattery extends Radio {
  checkBatteryStatus(): void;
}
// interface 抽象验证类的属性
// implements 实现方法

class Car implements Radio {
  switchRadio(trigger: boolean) {}
}
class Cellphone implements RadioWidthBattery {
  switchRadio(trigger: boolean) {}
  checkBatteryStatus() {}
}
```

上述两个类都有一个共同的方法，我们可以使用 interface 接口把他提取出来,implements 实现它。此时 car 和 cellphone 两个类中都需要有 switchRadio 方法，不然会报错。

interface 还可以继承，直接用 extends 即可

### 枚举
- 常量值:const number
- 计算值:computed number


```ts
enum Direction {
  Up,
  Down,
  Right,
  Left,
}

console.log(Direction.Up);
console.log(Direction.Left);
console.log(Direction[0]);
```
~~~ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Right = "RIGHT",
  Left = "LEFT",
}

const value = "UP";
if (value === Direction.Up) {
  console.log("go up!");
}

~~~

### 泛型 generics 

泛型是指在定义函数接口和类的时候不指定具体类型,而是在使用的时候指定具体类型特征

类似一个占位符或者变量,在定义的时候传入,原封不动输出

使用表达式无法明确类型绑定,使用泛型可以确定
~~~ts
function echo<T>(arg: T): T {
  return arg;
}

// const result: string = echo(123);
// const str: string = "str";
// const result:number = echo("str"); //不能将类型“string”分配给类型“number”。
const result = echo("str");

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(["string", 123]);
console.log(result2);

~~~

#### 约束泛型
在泛型中使用extends关键值来使传入类型具有约束条件
~~~ts
interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength("str");
const arrA = echoWithLength(["a", "b", "c"]);
const obj = echoWithLength({ length: 10 });
console.log(str); // str
console.log(arrA); // [ 'a', 'b', 'c' ]
console.log(obj); // { length: 10 }

~~~

#### 在接口中的使用

创建一个公有特定类型的容器,类似一个可变参数,用的时候传入,生成一个容器
~~~ts
class Queue<T> {
  private data = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
// queue.push("str");
console.log(queue.pop());


interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1:KeyPair<number,string>={key:1,value:'string'}
let kp2:KeyPair<string,number>={key:'str',value:2}
console.log(kp1);
console.log(kp2);
~~~

### 类型别名,字面量和交叉类型
类型别名
~~~ts
type PlusType = (x: number, y: number) => number;
let sum: PlusType = (x, y) => {
  return x + y;
};
const result = sum(1, 2);
const result2 = sum(2, 3);
console.log(result, result2); // 3 5

type StrOrNumber = string | number;
let result3: StrOrNumber = "123";
result3 = 123;
~~~

字符串字面量
~~~ts
const str: "name" = "name";
const number: 1 = 1;

type Directions = "Up" | "Down" | "Left" | "Right";
let toWhere: Directions = "Left";
~~~
交叉类型
~~~ts
interface IName {
  name: string;
}

type IPerson = IName & { age: number };
let person: IPerson = { name: "zs", age: 19 };

~~~

### 声明文件
TypeScript 作为 JavaScript 的超集，在开发过程中不可避免要引用其他第三方的 JavaScript 的库。虽然通过直接引用可以调用库的类和方法，但是却无法使用TypeScript 诸如类型检查等特性功能。为了解决这个问题，需要将这些库里的函数和方法体去掉后只保留导出类型声明，而产生了一个描述 JavaScript 库和模块信息的声明文件。通过引用这个声明文件，就可以借用 TypeScript 的各种特性来使用库文件了。


### 内置类型
类似Date,RegExp...
~~~ts
const a: Array<number> = [1, 2, 3];
const date = new Date();

console.log(date.getTime());
const reg = /abc/;
console.log(reg.test("abc"));

console.log(Math.pow(2, 2));

let body = document.body;
let allLis = body.querySelectorAll("li");
allLis.length;
body.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault()
});

~~~

- Omit 去除类型中某些项
  - `type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;`
  - Omit会构造一个除类型K外具有T性质的类型
- Pick 选取类型中指定类型
  - `type Pick<T, K extends keyof T> = { [P in K] : T[P]; };`
  - 从T中选择一组属性，将它们在K中联合
- Partial 将类型中所有选项变为可选，即加上？
  - `type Partial<T> = {[P in keyof T]?: T[P];};`
- Required 将类型中所有选项变为必选，去除所有？
  - `type Required<T> = {[P in keyof T]-?: T[P];};`


### 原型问题

#### 原型的基本作用:使用原型解决所有实例上的方法,还有所有实例上的共同属性都可以放到原型上定义,如果不使用原型可能会导致空间浪费

#### 增加或修改原型对象的属性或方法后,所有实例(对象)立即可以访问到的(但创建实例后再覆盖原型除外)

#### 创建实例后再覆盖原型,实例对象无法访问到,为什么

### 通过类创建对象

- 在堆中为类的某个对象分配一个空间
- 调用对应的构造函数(构造器)并把构造器中的各个参数赋值给对象属性
- 把对象赋值给对象变量(实例赋值给实例变量)

### 函数重载或方法重载

#### 优势:

- 结构分明:让代码可读性高,可维护性提升
- 各司其职,自动提示方法和属性
- 更利于功能扩展

#### 定义:

ts 的函数重载比较特殊,和很多其他后端语言的方法重载相比,多了不少规则,学习函数重载,先要了解什么是函数签名,定义如下:

- 函数签名:函数签名=函数名称+函数参数+函数参数类型+返回值类型四者合成.在 ts 函数重载中,包含了实现签名和重载签名,实现签名是一种函数签名,重载签名也是一种函数签名
- 不完整模糊的 TS 函数重载定义:一组具有相同名字,不同参数列表和返回值无关的函数
- 完整函数重载定义:包含了一下规则的一组函数就是 TS 函数重载
  - 规则一:由一个实现签名+一个或多个重载签名合成
  - 但外部调用函数重载定义的参数时,只能调用重载签名,不能调用实现签名,这看似矛盾的规则其实是 TS 的规定,实现签名下的函数体是给重载签名扁写的实现签名只是在定义时起到了统领所有重载签名的作用,在执行调用时看不到实现签名
  - 调用重载函数时,会根据传递的参数来判断你调用的是哪一个函数

#### 实现微信消息发送函数

真实需求:
有一个获取微信消息发送接口消息查询函数,根据传入的参数从数组中查找数据,如果入参为数字,就为消息 id,然后从后端数据源中找对应 id 的数据并返回,否则当成类型,返回这一类型的全部消息

##### 未改进:

```ts
type MessageType = "image" | "audio" | string;
type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};

let messages: Message[] = [
  // let messages: Array<Message> = [
  { id: 1, type: "image", sendmessage: "message1 image" },
  { id: 2, type: "audio", sendmessage: "message2 audio" },
  { id: 3, type: "audio", sendmessage: "message3 audio" },
  { id: 4, type: "image", sendmessage: "message4 image" },
  { id: 5, type: "image", sendmessage: "message5 image" },
];

function getMessage(
  value: number | MessageType
): Message | Array<Message> | undefined {
  if (typeof value === "number") {
    return messages.find((msg) => value === msg.id);
  } else {
    return messages.filter((msg) => value === msg.type);
  }
}

console.log(getMessage("audio"));
// let msg=getMessage(1); // TS无法在运行前根据传递的组织来推导方法最终返回的数据的数据类型
// console.log(msg.type);// 类型“Message | Message[]”上不存在属性“type”。类型“Message[]”上不存在属性“type”。

let msg = <Message>getMessage(1);
console.log(msg.type);
```

##### 改进版实现重载

```ts
function getMessage(id: number): Message; // 重载函数
function getMessage(msgType: MessageType, readRecordCount: number): Message[]; // 重载函数
function getMessage( // 实现函数
  value: any,
  readRecordCount: number = 1
): Message | Array<Message> | undefined {
  if (typeof value === "number") {
    return messages.find((msg) => value === msg.id);
  } else {
    return messages
      .filter((msg) => value === msg.type)
      .splice(0, readRecordCount);
  }
}
```

#### 方法和函数区别,理解方法签名

方法:方法是一种特定场景下的函数,由对象变量,实例变量直接调用的函数都是方法
比如

- 函数内部用 this 定义的函数是方法
- TS 类中定义的函数是方法
- 接口内部定义的函数是方法(不是函数接口)
- type 内部定义的函数是方法(不是 type 函数)
  方法签名:和函数签名一样,方法签名=方法名称+方法参数+方法参数类型+返回值类型四者合成

```ts
// ArrayList

// 对现有数组进行封装
// 提供get方法 remove方法 显示方法(add方法)
// 其中需求中remove方法有两个,在此用方法重载实现

class ArrayList {
  // 定义一个引用属性[]
  constructor(public element: Array<object>) {}
  // 根据索引查询数组中指定元素
  get(index: number) {
    return this.element[index];
  }
  show() {
    this.element.forEach((ele) => {
      console.log(ele);
    });
  }
  remove(value: number): number;
  remove(value: object): object;
  remove(value: any): number | object {
    this.element = this.element.filter((ele, index) => {
      if (typeof value === "number") {
        return value !== index;
      } else {
        return value !== ele;
      }
    });
    return value;
  }
}

let stu1 = { name: "zs", age: 18 };
let stu2 = { name: "ls", age: 20 };
let stu3 = { name: "ww", age: 19 };
let arr = new ArrayList([stu1, stu2, stu3]);
arr.show();

console.log("---------------");
arr.remove(stu1);
console.log("---------------");
// arr.remove(0)
arr.show();
```

#### 构造器重载(满足多种传参需求)

##### 再次强化理解 this

this 其实是一个对象变量,当 new 出来一个对象时,构造器会隐式返回 this 给 new 对象等号左边的对象变量,this 和等号左边的对象变量都指向当前正在创建的对象
以后哪一个对象调用 TS 类方法,那么这个方法中的 this 都指向当前正使用的对象,this 和当前的对象变量中都保存当前对象的首地址

##### TS 构造器有返回值吗

尽管 TS 类构造器会隐式返回 this,如果我们非要返回一个值,TS 类狗在其只允许返回 this,但构造器不需要返回值也能通过编译,更没有返回值类型之说,从这个一一山,TS 构造器可以说成是没有返回值这一说的构造函数.(ts 构造器和 js 构造函数关于返回值额说法不完全相同)

##### 构造器重载和函数重载使用基本相同,主要区别是:TS 构造器重载签名和实现签名都不需要管理返回值,TS 构造器是在对象创建出来后,但是还没有赋值给对象变量之前被执行,一般用来给对象属性赋值

##### 图形面积的两种实现

```ts
// 计算面积
// 传入对象类型
type type_ChartParam = {
  width?: number;
  height?: number;
  radius?: number;
  // .....
};

class Square {
  public width!: number;
  public height!: number;
  public getArea(): number {
    return this.height * this.width;
  }
  constructor(width_: number, height_: number); // 重载签名
  constructor(paramObjOrWidth: type_ChartParam); // 重载签名
  constructor(paramObjOrWidth_: any, height_: number = 0) {
    // 实现签名
    if (typeof paramObjOrWidth_ === "object") {
      this.width = paramObjOrWidth_.width;
      this.height = paramObjOrWidth_.height;
    } else {
      this.width = paramObjOrWidth_;
      this.height = height_;
    }
  }
}

// let square = new Square(40, 50);
// console.log(square.getArea()); // 2000
let chartParamObj: type_ChartParam = { width: 50, height: 90 };
let square = new Square(chartParamObj);
console.log(square.getArea()); // 4500
```

### 单件设计模式

#### 了解设计模式

设计模式通俗的讲,就是一种更好的编写代码方案

#### 常见设计模式概述

常见的设计模式有单件设计模式,简单工厂设计模式,工厂方法,抽象工厂设计模式,观察者设计模式,装饰设计模式,代理设计模式,MVC,MVP,MVVM 架构设计模式.
设计模式虽短小精悍,但是能更好的帮助掌握 TS 类,类的静态方法,类构造器,类对象的联合运用

#### 单间设计模式的两种定义和定义中存在的陷阱

- 简单:一个类对外有且仅有一个实例,这种编码方案就是单件设计模式
- 完整:如果某个类对外始终只提供一个对象实例,并在该类内部提供了一个外部访问该对象的方法或该对象属性那么这种编写代码方案就是单件设计模式
- 如果哦一个类的任何外部通过访问类提供的某个方法或者某个属性始终只能获取该类的一个对象实例,但是如果该类提供了多个外部可以访问的方法或者属性,那么外部就能访问到该类的多个不同对象,但从实际开发来看,绝大多数情况的应用场景,只提供一个唯一的可以访问的方法或者属性,这样就保证了实例为单个属性

#### 单件设计模式两种实现方式

##### 饿汉式单间设计模式

无论是否用到了对象实例,一开始就建立了这个唯一对象

##### 懒汉式设计模式(延迟使用)

在真正用到是才会创建对象

```ts
class MyLocalStorage {
  static localstorage: MyLocalStorage;
  static count: number = 3;
  private setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public static getItem(key: string) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  private constructor() {
    console.log("ts 单件设计模式静态方法构造器");
  }
  //   提供外部获取得到一个对象
  public static getInstance() {
    if (!this.localstorage) {
      this.localstorage = new MyLocalStorage();
      console.log("我是一个undefind静态属性,用来指向一个对象空间的静态属性");
    }
    return this.localstorage;
  }
}
```

当外部使用`getInstance`才会创建这个对象

#### 单间设计模式真实应用场景

#### 构建单件设计模式

- 第一步:把构造器设为私有,不允许外部来创建类的实例(对象)
- 第二步:至少应该提供一个外部访问的方法或者属性,外部可以通过这个方法或者属性来得到一个,所以应该把这个方法设为静态方法
- 第三步:外部调用第二步提供的静态方法来获取一个对象

```ts
class MyLocalStorage {
  static localstorage: MyLocalStorage;
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getItem(key: string) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  private constructor() {
    console.log("ts 单件设计模式静态方法构造器");
  }
  // 提供一个外部访问的方法
  // 通过这个方法来提供外部得到一个对象的方法
  // 1.带static关键字的方法就是一个静态方法
  // 2.静态方法和对象无关,外部的对象变量不能调用静态方法和静态属性
  // 3.外部可以通过类名来调用
  // 静态方法不可以访问实例属性或者实例方法(对象属性或者对象方法)

  public static getInstance() {
    // let localStorage=new MyLocalStorage();
    // return localStorage;
    // return new MyLocalStorage();
    if (!this.localstorage) {
      this.localstorage = new MyLocalStorage();
      console.log("我是一个undefind静态属性,用来指向一个对象空间的静态属性");
    }
    return this.localstorage;
  }
}

console.log(MyLocalStorage.getInstance());
console.log(MyLocalStorage.getInstance());
// ts 单件设计模式静态方法构造器
// 我是一个undefind静态属性,用来指向一个对象空间的静态属性
// 只打印一次
```

#### 静态属性,静态方法

##### 1.外部如何调用 TS 类的静态成员?

答:类名直接调用静态成员，格式:类名.静态属性类名静态方法。

##### 2.TS 类的一个静态方法如何调用其他的静态成员?

答:使用 this 来获取静态成员。 #####　 3.静态方法是否可以访问类中原型对象上的方法或对象属性[对象基本类型数据+对象引用属性]，反过来呢?
答:都不能。.

##### 4.对象变量是否可以访问静态成员?

答:不能。

##### 5.一个静态方法改变了某个静态属性，其他静态方法或类外部任何地方访问这个属性都会发生改变。

##### 6.静态成员保存在内存哪里?何时分配的内存空间呢?

答:任何一个 TS 类中的静态成员存储在内存的静态区，运行一个 TS 类, TS 首先会为静态成员开辟内存空间，静态成员的内存空间分配的时间要早于对象空间的分配，也就是任何一个对象创建之前 TS 就已经为静态成员分配好了空间。但一个静态方法或静态属性只会分配-个空间，只要当前服务器不重启或控制台程序还没有结束之前(如果是开发期间临时测试，-般用控制台)，那么静态方法或者是静态属性就-直存在内存空间，无论调用多少次这个静态方法或静态属性，都是调用的同一块空间。

总结静态方法，两点:

总结 1:无论你是否创建对象，创建多少个对象，是否调用该静态方法或静态属性，TS 都会为这个静态方法或
静态属性分配内存空间，注意:静态成员和对象无关。|
总结 2:一旦为静态方法或静态属性分配好空间，就-直保存到内存中，直到服务器重启或者控制台程序执行结
束才被释放。

##### 7.何时应该把一个方法定义成静态方法或属性定义为静态属性呢?应用]

答:应用 1:单件设计模式就是静态方法和静态属性很好的应用场景之一。当外部不能创建对象， 就只能借助类内部的静态方法来获取类的对象:这时肯定不能把这个方法定义成原型对象属性上的方法。只能定义为类的静态方法，因为如果定义成原型对象属性的方法，就会导致外部无法被访问，因为外部根本不能创建对象，也就无法访问原型对象属性上的方法。而静态方法要访问的属性就只能是静态属性了，这也是静态属性的应用时机。

应用 2:当类中某个方法没有任何必要使用任何对象属性时，而且使用了对象属性反而让这个方法的逻辑不正确，那既如此，就应该禁止这个方法访问任何对象属性和其他的对象方法，这时就应该把这个方法定义为静态方法。例如:一个顾客类的购买方法[ buy 方法]中肯定要允许访问顾客姓名或其他顾客微信这些对象属性，这样的方法我们就需要定义在原型对象属性上，但如果顾客类中的阅读顾客积分公告方法(readNotice 方法)是针对全体顾客的公告方法，就应该定义为静态方法，方法内部就应该禁止出现任何具体的对象属性。如果在这样的方法中使用了顾客的某个属性，比如用了顾客姓名，那么这个方法逻辑就不正确(这个方法就会说:你让我向全体顾客展示公告，你我要知道每个顾客姓名做什么?)。所以我们应该让这样的方法禁止访问对象属性和其他的对象方法，那就应该设置为静态方法。

应用 3:当-个类中某个方法只有一个或者 1-2 个对象属性，而且更重要的是.你创建这个类的对象毫无意义，我们只需要使用这个类的一个或者多方法就可以了.那么这个方法就应该定义为静态方法。常见的工具类中的方法通常都应该定义为静态方法。比如 StringUtil,FileUtil 等,我们以 FileUtill 为例进行讲解思考题定文一个文件工具类[ FileUtil] ，编写一个读取文件方法[readFile 方法]方便外部调用，那这样的方法应该定义为静态方法吗?

#### 饿汉式单件设计模式

```ts
class MyLocalStorage {
  static localstorage: MyLocalStorage = new MyLocalStorage();
  static count: number = 3;
  private setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public static getItem(key: string) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  private constructor() {
    console.log("ts 单件设计模式静态方法构造器");
  }
  //   提供外部获取得到一个对象
  public static getInstance() {
    return this.localstorage;
  }
}
```

### 继承

#### 继承带来的好处

- 子类可以访问父类的实例属性
- 子类可以访问父类原型对象空间中的属性和方法

#### 原型链继承

原型链继承的实现本质是改变 Son 构造函数的原型对象变量的指向(就是 Son.prototype 的指向),Son.prototype=new Parent().那么 Son.prototype 可以访问 Parent 对象空间和方法,所以顺着[proto 属性],Son 类也可以访问 Parent 类的原型对象空间中的所有属性和方法
