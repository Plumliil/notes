// 类型的参数化

// // 在定义这个函数时,不决定这些函数的1类型1
// // 而是让调用者以参数的形式告知,我这里的函数参数应该是什么类型
// // 接受一个参数
// function sum<Type>(n: Type) {
//     console.log(n);
//     return n
// }
// function foo<T, E, O>(arg1: T, arg2: E, arg3: O) {
//     console.log(arg1, arg2, arg3);
// }

// sum<number>(1)
// sum<{ name: string }>({ name: 'pli' })

// foo<number, string, boolean>(1, 'a', true)


// 泛型接口

// interface IPerson<T1,T2>{
//     name:T1
//     age:T2
// }
// const ps:IPerson<string,number>={
//     name:'pli',
//     age:18
// }

// class Point<T> {
//     x:T
//     y:T
//     z:T
//     constructor(x:T,y:T,z:T) {
//         this.x=x;
//         this.y=y;
//         this.z=z
//     }
// }
// const pt=new Point('1.33.2','2.33.2','3.33.2')

interface ILength{
    length:number
}

function getLen<T extends ILength>(arg:T) {
    console.log(arg.length);
    return arg.length
}
getLen('sasdas');
getLen([1,2,3,54]);

export { }