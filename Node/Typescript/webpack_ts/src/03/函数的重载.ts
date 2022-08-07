// 没有函数体
function add(a1: number, a2: number): number;
function add(a1: string, a2: string): string;
// 执行下边的函数体
function add(a1: any, a2: any): any {
    if (typeof a1 === 'string') {
        return a1.length + a2.length
    }
    return a1 + a2
}
const res = add(1, 2);
const res1 = add('111', "222");
// console.log(res);
// console.log(res1);

// 在函数的重载中,实现的函数是不能被调用的
// add({ name: 'zs' }, { name: 'ls' })

// // 联合类型实现
// function getLength(args:string|any[]) {
//     return args.length
// }
// console.log(getLength('asd'));
// console.log(getLength([1,2,3,4,5,6,7]));
// // 函数重载实现
// function getLength(args: string): number;
// function getLength(args: any[]): number;
// function getLength(args: any): number {
//     return args.length
// }
// console.log(getLength('asd'));
// console.log(getLength([1,2,3,4,5,6,7]));
export { }