// 生成模块
declare module 'lodash' {
    export function join(arr: any[]): void
}
// 声明属性
declare let pliName: string
// 声明函数
declare function pliFoo(): void
// 声明类
declare class Person {
    name: string
    age: number
    constructor(name: string, age: number)
}
// 声明文件
declare module '*.jpg'
// 声明命名空间
declare namespace $ {
    export function ajax(settings: any): any
}