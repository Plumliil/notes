// 函数的参数类型 参数和返回值

// 给参数加上类型注释: num1:number,num2:number
// 给返回值加上类型注释: (): number
// 在卡法中1通常可以不写返回值类型(自动推导1)
function sum(num1: number, num2: number): number {
    return num1 + num2
}

console.log(sum(1, 2));

// 匿名函数的参数类型
// 通常情况下,在定义函数时,都给参数加上类型注释
function foo(msg:string) {
    
}

const names = ['zs', 'ls', 'ww'];
// item根据上下文环境推导出
// 上下文中的函数: 可以不添加类型注解
names.forEach((item:string)=>{
    console.log(item);
    
})