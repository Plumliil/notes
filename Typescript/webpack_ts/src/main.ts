import {mathFn} from './math'


const msg: string = 'hello world';
const num: number = 20010502;

// string: TypeScript中字符串类型
// String: JavaScript的字符串包装类的类型

// eslint => js代码规范
// tslint => ts代码规范

// 默认情况下赋值时，沪江赋值的类型，作为前边标识符的类型
// 这个过程称之为类型推断(类型推导)
// foo无类型注解
let foo='foo';

mathFn()
console.log(msg);
console.log(num);

