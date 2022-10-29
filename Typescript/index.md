

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
