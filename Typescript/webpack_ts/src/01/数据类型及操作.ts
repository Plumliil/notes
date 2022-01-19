let num1: number = 100;
let num2: number = 0b100;
let num3: number = 0o100;
let num4: number = 0x100;

let flag: boolean = true;

let msg: string = 'hello world'

msg = `num1:${num1}--flag:${flag}--msg${msg}`

let arr: Array<string> = []; // 不推荐
let arr2: string[] = []; // 推荐

let obj: object = {
    name: 'plumli',
    age: 18,
    height: 1.88
}
// 无法改值
// obj['name'] = 'plum';
// console.log(obj.name);

let n1: null = null;

let u1: undefined = undefined;