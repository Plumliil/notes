

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
ts的函数重载比较特殊,和很多其他后端语言的方法重载相比,多了不少规则,学习函数重载,先要了解什么是函数签名,定义如下:
- 函数签名:函数签名=函数名称+函数参数+函数参数类型+返回值类型四者合成.在ts函数重载中,包含了实现签名和重载签名,实现签名是一种函数签名,重载签名也是一种函数签名
- 不完整模糊的TS函数重载定义:一组具有相同名字,不同参数列表和返回值无关的函数
- 完整函数重载定义:包含了一下规则的一组函数就是TS函数重载
    - 规则一:由一个实现签名+一个或多个重载签名合成
    - 但外部调用函数重载定义的参数时,只能调用重载签名,不能调用实现签名,这看似矛盾的规则其实是TS的规定,实现签名下的函数体是给重载签名扁写的实现签名只是在定义时起到了统领所有重载签名的作用,在执行调用时看不到实现签名
    - 调用重载函数时,会根据传递的参数来判断你调用的是哪一个函数

#### 实现微信消息发送函数
真实需求:
有一个获取微信消息发送接口消息查询函数,根据传入的参数从数组中查找数据,如果入参为数字,就为消息id,然后从后端数据源中找对应id的数据并返回,否则当成类型,返回这一类型的全部消息
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
~~~ts
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

~~~

#### 方法和函数区别,理解方法签名
方法:方法是一种特定场景下的函数,由对象变量,实例变量直接调用的函数都是方法 
比如
- 函数内部用this定义的函数是方法
- TS类中定义的函数是方法
- 接口内部定义的函数是方法(不是函数接口)
- type内部定义的函数是方法(不是type函数)
方法签名:和函数签名一样,方法签名=方法名称+方法参数+方法参数类型+返回值类型四者合成
~~~ts
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

~~~

#### 构造器重载(满足多种传参需求)

##### 再次强化理解this
this其实是一个对象变量,当new出来一个对象时,构造器会隐式返回this给new对象等号左边的对象变量,this和等号左边的对象变量都指向当前正在创建的对象
以后哪一个对象调用TS类方法,那么这个方法中的this都指向当前正使用的对象,this和当前的对象变量中都保存当前对象的首地址

##### TS构造器有返回值吗
尽管TS类构造器会隐式返回this,如果我们非要返回一个值,TS类狗在其只允许返回this,但构造器不需要返回值也能通过编译,更没有返回值类型之说,从这个一一山,TS构造器可以说成是没有返回值这一说的构造函数.(ts构造器和js构造函数关于返回值额说法不完全相同)

##### 构造器重载和函数重载使用基本相同,主要区别是:TS构造器重载签名和实现签名都不需要管理返回值,TS构造器是在对象创建出来后,但是还没有赋值给对象变量之前被执行,一般用来给对象属性赋值

##### 图形面积的两种实现

~~~ts
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
~~~


### 单件设计模式
#### 了解设计模式
设计模式通俗的讲,就是一种更好的编写代码方案

#### 常见设计模式概述
常见的设计模式有单件设计模式,简单工厂设计模式,工厂方法,抽象工厂设计模式,观察者设计模式,装饰设计模式,代理设计模式,MVC,MVP,MVVM架构设计模式.
设计模式虽短小精悍,但是能更好的帮助掌握TS类,类的静态方法,类构造器,类对象的联合运用

#### 单间设计模式的两种定义和定义中存在的陷阱
- 简单:一个类对外有且仅有一个实例,这种编码方案就是单件设计模式
- 完整:如果某个类对外始终只提供一个对象实例,并在该类内部提供了一个外部访问该对象的方法或该对象属性那么这种编写代码方案就是单件设计模式
- 如果哦一个类的任何外部通过访问类提供的某个方法或者某个属性始终只能获取该类的一个对象实例,但是如果该类提供了多个外部可以访问的方法或者属性,那么外部就能访问到该类的多个不同对象,但从实际开发来看,绝大多数情况的应用场景,只提供一个唯一的可以访问的方法或者属性,这样就保证了实例为单个属性

#### 单件设计模式两种实现方式

##### 饿汉式单间设计模式
无论是否用到了对象实例,一开始就建立了这个唯一对象

##### 懒汉式设计模式(延迟使用)
在真正用到是才会创建对象
~~~ts
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
~~~
当外部使用`getInstance`才会创建这个对象
#### 单间设计模式真实应用场景

#### 构建单件设计模式
- 第一步:把构造器设为私有,不允许外部来创建类的实例(对象)
- 第二步:至少应该提供一个外部访问的方法或者属性,外部可以通过这个方法或者属性来得到一个,所以应该把这个方法设为静态方法
- 第三步:外部调用第二步提供的静态方法来获取一个对象
~~~ts
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
      console.log('我是一个undefind静态属性,用来指向一个对象空间的静态属性');
      
    }
    return this.localstorage;
  }
}

console.log(MyLocalStorage.getInstance());
console.log(MyLocalStorage.getInstance());
// ts 单件设计模式静态方法构造器
// 我是一个undefind静态属性,用来指向一个对象空间的静态属性
// 只打印一次
~~~
#### 静态属性,静态方法
##### 1.外部如何调用TS类的静态成员?
答:类名直接调用静态成员，格式:类名.静态属性类名静态方法。
##### 2.TS类的一个静态方法如何调用其他的静态成员?
答:使用this来获取静态成员。
#####　3.静态方法是否可以访问类中原型对象上的方法或对象属性[对象基本类型数据+对象引用属性]，反过来呢?
答:都不能。.
##### 4.对象变量是否可以访问静态成员?
答:不能。
##### 5.一个静态方法改变了某个静态属性，其他静态方法或类外部任何地方访问这个属性都会发生改变。
##### 6.静态成员保存在内存哪里?何时分配的内存空间呢?
答:任何一个TS类中的静态成员存储在内存的静态区，运行一个TS类, TS首先会为静态成员开辟内存空间，静态成员的内存空间分配的时间要早于对象空间的分配，也就是任何一个对象创建之前TS就已经为静态成员分配好了空间。但一个静态方法或静态属性只会分配-个空间，只要当前服务器不重启或控制台程序还没有结束之前(如果是开发期间临时测试，-般用控制台)，那么静态方法或者是静态属性就-直存在内存空间，无论调用多少次这个静态方法或静态属性，都是调用的同一块空间。

总结静态方法，两点:

总结1:无论你是否创建对象，创建多少个对象，是否调用该静态方法或静态属性，TS都会为这个静态方法或
静态属性分配内存空间，注意:静态成员和对象无关。|
总结2:一旦为静态方法或静态属性分配好空间，就-直保存到内存中，直到服务器重启或者控制台程序执行结
束才被释放。


##### 7.何时应该把一个方法定义成静态方法或属性定义为静态属性呢?应用]
答:应用1:单件设计模式就是静态方法和静态属性很好的应用场景之一。当外部不能创建对象， 就只能借助类内部的静态方法来获取类的对象:这时肯定不能把这个方法定义成原型对象属性上的方法。只能定义为类的静态方法，因为如果定义成原型对象属性的方法，就会导致外部无法被访问，因为外部根本不能创建对象，也就无法访问原型对象属性上的方法。而静态方法要访问的属性就只能是静态属性了，这也是静态属性的应用时机。

应用2:当类中某个方法没有任何必要使用任何对象属性时，而且使用了对象属性反而让这个方法的逻辑不正确，那既如此，就应该禁止这个方法访问任何对象属性和其他的对象方法，这时就应该把这个方法定义为静态方法。例如:一个顾客类的购买方法[ buy方法]中肯定要允许访问顾客姓名或其他顾客微信这些对象属性，这样的方法我们就需要定义在原型对象属性上，但如果顾客类中的阅读顾客积分公告方法(readNotice方法)是针对全体顾客的公告方法，就应该定义为静态方法，方法内部就应该禁止出现任何具体的对象属性。如果在这样的方法中使用了顾客的某个属性，比如用了顾客姓名，那么这个方法逻辑就不正确(这个方法就会说:你让我向全体顾客展示公告，你我要知道每个顾客姓名做什么?)。所以我们应该让这样的方法禁止访问对象属性和其他的对象方法，那就应该设置为静态方法。

应用3:当-个类中某个方法只有一个或者1-2个对象属性，而且更重要的是.你创建这个类的对象毫无意义，我们只需要使用这个类的一个或者多方法就可以了.那么这个方法就应该定义为静态方法。常见的工具类中的方法通常都应该定义为静态方法。比如StringUtil,FileUtil 等,我们以FileUtill为例进行讲解思考题定文一个文件工具类[ FileUtil] ，编写一个读取文件方法[readFile方法]方便外部调用，那这样的方法应该定义为静态方法吗?

#### 饿汉式单件设计模式

~~~ts
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
~~~

### 继承
