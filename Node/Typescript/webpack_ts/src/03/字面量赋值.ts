interface IPerson {
    name: string
    age: number
    height: number
}

const info = {
    name: 'why',
    age: 18,
    height: 180,
    address: '广州'
}
// // freshness 擦除
// // 在类型检测这一步擦除属性,如果擦除掉依然满足,既可以赋值
// // 擦除后相同,即可赋值
// const p: IPerson = info 

function printInfo(person:IPerson) {
    console.log(person.name);
    console.log(person.age);
    // console.log(person.adress); 报错,不可取
    
}
printInfo(info)
// console.log(p);

export {}