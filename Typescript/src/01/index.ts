// class Person {
//   public name: string = "noname";
//   public age: number = 0;
//   public phone: string = "11111";
//   public address: Array<string> = ["baihe", "wancheng", "wolong"];

//   constructor(name_: string, age_: number, phone_: string) {
//     this.name = name_;
//     this.age = age_;
//     this.phone = phone_;
//   }
//   public doEat(who: string, address: string): void {
//     console.log(`${this.name}和${who}在${address}吃饭`);
//   }
// }

// let zs = new Person("zs", 19, "111911811");

// zs.doEat("ls", "nn");

// console.log(zs);

class Order {
  // public orderId: number = 0;
  // public data: Date = new Date();
  // public custname: string = "nocustname";
  // public phone: string = "111111";
  // // 定义了一个订单详情的Array数组,Array中的每一个元素都是订单详情的元素
  // // 定义了一个引用属性(数组类型的引用属性)
  // public orderDetail: Array<OrderDetail> = [];

  constructor(
    public orderId: number,
    public data: Date,
    custname: string,
    public phone: string,
    public orderDetail: Array<OrderDetail>
  ) {
    // this.orderId = orderId_;
    // this.data = data_;
    // this.custname = custname_;
    // this.phone = phone_;
    // this.orderDetail = orderDetail_;
  }
}

class OrderDetail {
  public orderDetailId: number | undefined;
  public productname: string | undefined;
  public price: number | undefined;
  public count: number | undefined;

  constructor(
    orderDetailId_: number,
    productname_: string,
    price_: number,
    count_: number
  ) {
    // this.orderDetailId = orderDetailId_;
    // this.productname = productname_;
    // this.price = price_;
    // this.count = count_;
  }
}

let orderDetail1 = new OrderDetail(10, "电视机", 5000, 3);
let orderDetail2 = new OrderDetail(10, "微波炉", 1000, 1);
let orderDetailArray: Array<OrderDetail> = [orderDetail1, orderDetail2];
let data = new Date(2023, 10, 17, 5, 20, 0);
// let order = new Order(1, data, "zs", "33333", orderDetailArray);
let order = new Order(1, data, "zs", "33333", [orderDetail1, orderDetail2]);
console.log(order);
