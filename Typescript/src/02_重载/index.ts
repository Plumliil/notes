// type MessageType = "image" | "audio" | string;
// type Message = {
//   id: number;
//   type: MessageType;
//   sendmessage: string;
// };

// // let msgobj: Message = { id: 23, type: '11', sendmessage: "abc" };
// // let obj = { username: "zs", age: 18 };

// let messages: Message[] = [
//   // let messages: Array<Message> = [
//   { id: 1, type: "image", sendmessage: "message1 image" },
//   { id: 2, type: "audio", sendmessage: "message2 audio" },
//   { id: 3, type: "audio", sendmessage: "message3 audio" },
//   { id: 4, type: "image", sendmessage: "message4 image" },
//   { id: 5, type: "image", sendmessage: "message5 image" },
// ];
// function getMessage(id: number): Message;
// function getMessage(msgType: MessageType, readRecordCount: number): Message[];
// function getMessage(
//   value: any,
//   readRecordCount: number = 1
// ): Message | Array<Message> | undefined {
//   if (typeof value === "number") {
//     return messages.find((msg) => value === msg.id);
//   } else {
//     return messages
//       .filter((msg) => value === msg.type)
//       .splice(0, readRecordCount);
//   }
// }

// // console.log(getMessage(1));
// // let msg=getMessage(1); // TS无法在运行前根据传递的组织来推导方法最终返回的数据的数据类型
// // console.log(msg.type);// 类型“Message | Message[]”上不存在属性“type”。类型“Message[]”上不存在属性“type”。
// // let msg: Message | Array<Message> = getMessage("image", 4);
// // console.log(msg);

/* --------------------------------------------------------------------------------------------- */

// ArrayList

// 对现有数组进行封装
// 提供get方法 remove方法 显示方法(add方法)
// 其中需求中remove方法有两个,在此用方法重载实现

// class ArrayList {
//   // 定义一个引用属性[]
//   constructor(public element: Array<object>) {}
//   // 根据索引查询数组中指定元素
//   get(index: number) {
//     return this.element[index];
//   }
//   show() {
//     this.element.forEach((ele) => {
//       console.log(ele);
//     });
//   }
//   remove(value: number): number;
//   remove(value: object): object;
//   remove(value: any): number | object {
//     this.element = this.element.filter((ele, index) => {
//       if (typeof value === "number") {
//         return value !== index;
//       } else {
//         return value !== ele;
//       }
//     });
//     return value;
//   }
// }

// let stu1 = { name: "zs", age: 18 };
// let stu2 = { name: "ls", age: 20 };
// let stu3 = { name: "ww", age: 19 };
// let arr = new ArrayList([stu1, stu2, stu3]);
// arr.show();

// console.log("---------------");
// arr.remove(stu1);
// console.log("---------------");
// // arr.remove(0)
// arr.show();

/* --------------------------------------------------------------------------------------------- */

// 计算面积

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
