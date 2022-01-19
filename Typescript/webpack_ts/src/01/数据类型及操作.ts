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

let sb1: symbol = Symbol('title');
let sb2: symbol = Symbol('title');

let person = {
    [sb1]: 'coder',
    [sb2]: 'teacher'
}
// 当进行类型断言是 as any 先转成 any 再转成其他
// 在不想给某些javascript代码添加数据类型时可以使用any
let a: any = 'Hello world'
a = 1;
a = true;
a = {};

// let u: unknown;
// let m: string = u

// 给参数加类型注解
// 给返回值加类型注解 ():类型注解
// 开发情况下可以不写，会自动推导
// 对参数个数也有限制
function sum(num1: number, num2: number): number {
    console.log(num1 + num2);
    return num1 + num2
}
sum(1, 2)

// 
function handleMsg(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log('string形式处理');
            break;
        case 'number':
            console.log('number形式处理');
            break;
        case 'boolean':
            console.log('boolean形式处理');
            break;
        default:
            const check: never = message
            break;
    }
}

// 数组弊端：当一个数组中有多种元素，不知道元素类型
// let info: any[] = ['plum', 18, 188];
// let name1 = info[0];
// console.log(name1.length);

// let info1:[string,number,number]=['plum',18,188]
// let name1=info1[0]

// function useState<T>(state: T) {
//     let currentState = state;
//     const changeState = (newState: T) => {
//         currentState = newState
//     }
//     const tuple: [T, (newState: T) => void] = [currentState, changeState];
//     return tuple
// }

// const [counter, setCounter] = useState(10);
// const [title, setTitle] = useState('AA');
// const [flag, setFlag] = useState(true);
// setCounter(1000);


// point: x/y -> 对象类型
// 可选类型加问好
// { x: number, y: number, z?: number }
function printPoint(point: { x: number, y: number, z?: number }) {
    console.log(point.x);
    console.log(point.y);
    // console.log(point.z);
}

printPoint({ x: 100, y: 200 })

// 可选类型和联合类型联系
// 一个参数一个可选类型的时候，它其实本质上表示的是这个参数是：类型|undefined 的联合类型
function printId(id?: number | string) {
    console.log('id', id);
}
printId(1)
printId('a')
printId(undefined)

type UnionType = string | number | boolean;
function unionType(arg:UnionType){
    console.log(arg);
}
unionType('a')
unionType(1)
unionType(true)