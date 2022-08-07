// // class Person {
// //     name: string
// //     age: number
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age
// //     }
// //     eating() {
// //         console.log(this.name + 'eating');
// //     }
// // }

// // const p = new Person('pli', 18)
// // p.eating()
// // console.log(p.name);
// // console.log(p.age);

// class Person {
//     name: string = ''
//     age: number = 0
//     constructor(name: string = '', age: number = 0) {
//         this.name = name;
//         this.age = age
//     }
//     eating() {
//         console.log(this.name + '---------' + 'eating');
//     }
// }
// class Student extends Person {
//     sno: number
//     constructor(name: string = '', age: number = 0, sno: number = 0) {
//         super(name, age)
//         this.sno = sno
//     }
//     studying() {
//         console.log('studying');
//     }
//     eating(){
//         super.eating()
//         console.log('student eating');
//     }
// }
// class Teacher extends Person {
//     title: string = ''
//     teaching() {
//         console.log('teaching');
//     }
// }
// const stu = new Student('pli', 18)

// class Animal {
//     action(){
//         console.log('animal action');
//     }
// }
// class Dog extends Animal {
//     action(){
//         console.log('dog running');
//     }
// }
// class Fish extends Animal {
//     action(){
//         console.log('fish swimming');
//     }
// }

// function makeActions(animals:Animal[]) {
//     animals.forEach(animal=>{
//         animal.action()
//     })
// }
// // 父类引用指向子类对象
// // 相同的引用表现出来的形式不一样1,这个过程称为多态(必然会有继承)
// // 多态的目的是为了写出更加具备通用性的代码
// // makeActions写成函数重载或联合类型
// makeActions([new Dog(),new Fish()])

// class Person {
//     public name: string = 'zs' // 都可以访问
//     // 只读属性是可以在构造器中赋值,赋值之后就不可以修改
//     // 属性本身不能被修改,如果它是对象类型,那么对象里的内容可以更改
//     readonly sex: string = '男' // 都可以访问
//     private gfName: string = 'ls' // 只能在内部访问
//     protected children: string = 'ww' // 在类内部和子类中可以访问
//     // 通过内部方法 访问私有属性
//     getName() {
//         return this.gfName
//     }
// }
// class Son extends Person {
//     getChild() {
//         return this.children
//     }
// }
// const s = new Son()
// console.log(s.getChild()); // ww
// const p = new Person()


// class Student {
//     // 静态属性可以通过类直接访问
//     static time: string = '20:00' // 静态属性
//     // 静态方法
//     static attendClass(){
//         console.log('go to school');
//     }
// }
// console.log(Student.time); // 20:00
// Student.attendClass(); // go to school

// 抽象类

// function makeArea(shape: Shape) {
//     return shape.getArea()
// }
// abstract class Shape {
//     // 抽象类的抽象方法子类必须实现
//     abstract getArea():number
// }
// class Rectangle extends Shape {
//     private width: number
//     private height: number
//     constructor(width: number, height: number) {
//         super()
//         this.width = width
//         this.height = height
//     }
//     getArea() {
//         return this.width * this.height
//     }
// }
// class Circle extends Shape {
//     private r: number
//     constructor(r: number) {
//         super()
//         this.r = r
//     }
//     getArea() {
//         return this.r * this.r * 3.14
//     }
// }

// const r = new Rectangle(20, 30);
// const c = new Circle(5);


// console.log(makeArea(r));
// console.log(makeArea(c));

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









export { }