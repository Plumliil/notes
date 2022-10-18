// 通过类型(type)别名来声明对象类型
// type InfoType={name:string,age:number}

// 另外一种方式声明对象类型: 接口interface
// interface IInfoType {
//      name: string,
//      age?: number ,
//      friend:{
//          name:string
//      }
//     }
// const info: IInfoType = {
//     name: 'pli',
//     age: 18,
//     friend:{
//         name:'zz'
//     }
// }
// console.log(info);
// // { name: 'pli', age: 18, friend: { name: 'zz' } }

// 通过interface来定义索引类型
// interface IIndexLang {
//     [index: number]: string
//     // [index:string]:number
// }

// const frontLang: IIndexLang = {
//     0: 'HTML',
//     1: 'CSS',
//     2: 'Javascript',
//     3: 'Vue'
// }
// console.log(frontLang);
// { '0': 'HTML', '1': 'CSS', '2': 'Javascript', '3': 'Vue' }
// type CalcFn = (n1: number, n2: number) => number;
// 可调用接口
// interface CalcFn {
//     (n1:number,n2:number):number
// }

// function calc(n1: number, n2: number, calcFn: CalcFn) {
//     return calcFn(n1, n2)
// }
// const add: CalcFn = (n1, n2) => {
//     return n1 + n2
// }
// console.log(calc(10,20,add));// 30


// // 联合类型
// type PliType = number | string;
// type DicType = 'l' | 'r' | 't' | 'b';
// // 交叉类型 & 既符合 a 又符合 b
// type PType = number & string

// interface ISwim {
//     swimming: () => void,
// }
// interface IFly {
//     flying: () => void,
// }

// type MyType1 = ISwim & IFly;
// type MyType2 = ISwim | IFly;

// // 接口继承 支持多继承
// interface IAction extends ISwim, IFly { }
// const action: IAction = {
//     swimming() { },
//     flying() { }
// }

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
    swimming() {
        console.log('i can swimming');
    }
})


// 接口名相同,接口内类型合并
// type 不可以这么做 type不能合并 使用上最根本的区别
interface IFoo {
    name: string
}
interface IFoo {
    age: number
}
const foo: IFoo = {
    name:'zs',
    age:18
}


export { }