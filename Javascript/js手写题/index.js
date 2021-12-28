// 1.数据类型判断
// typeof可以正确识别：undefined，boolean，number，string，symble，function等类型的数据，
// 但对于其他的都会认为是object 所以通过typeof来判断数据类型不准确，但是可以使用Object.prototype.toString来实现
function typeOf(obj){
    let res=Object.prototype.toString.call(obj).split(' ')[1];
    res=res.slice(0,-1).toLowerCase()
    return res
}
// console.log(typeOf([]));
// 2.原型链的继承
// 原型链继承存在的问题
// 原型中包含的引用类型属性将被所有实例共享
// 字类在实例化的时候不能给父类构造函数传参
function Animal() {
    this.color = ['black', 'white']
}
// 在Animal的原型上添加getColor方法
Animal.prototype.getColor=function(){
    console.log(this.color);
}
function Dog(){}
// 使Dog的原型对象是Animal
Dog.prototype=new Animal()
let dog=new Dog();
dog.getColor(); // [ 'black', 'white' ]
// 新实例化出的dog可以使用原型上的方法
// 3.使用构造函数实现继承
function Plant(name){
    this.name=name;
    this.getName=function(){
        return this.name
    }
}
function Tree(name){
    // 使用call函数使Tree使用Plant方法，从而实现继承
    Plant.call(this,name)
}
Tree.prototype=new Plant()
let willow=new Tree('willow')
console.log(willow.getName()); // willow