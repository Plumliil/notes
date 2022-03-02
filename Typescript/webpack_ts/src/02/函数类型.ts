// 1.函数作为参数时,在参数中如何编写类型
// function fn() {

// }
// type FnType = () => void;
// function bar(fn: FnType) {
//     fn()
// }
// bar(fn)

// 2.定义常量时,编写函数的类型
// type AddFnType = (num1: number, num2: number) => number;
// const add: AddFnType = (num1: number, num2: number) => {
//     return num1 + num2
// }

// console.log(add(1, 2));

// function fn(params:type) {

// }

// function calc(n1: number, n2: number, fn: (n1: number, n2: number) => number) {
//     return fn(n1, n2)
// }

// let r1 = calc(20, 30, function (a1, a2) {
//     return a1 + a2
// });
// let r2 = calc(20, 30, function (a1, a2) {
//     return a1 - a2
// })
// console.log(r1,r2);

// function fn(x: number, y?: number) {
//     if (y) {
//         return x + y
//     }else{
//         return x
//     }
// }
// console.log(fn(20));

// function fn(x: number=30, y: number) {
//     return x+y
// }
// console.log(fn(undefined,20));


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

