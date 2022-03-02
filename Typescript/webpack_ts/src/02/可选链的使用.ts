type Person={
    name:string,
    friend?:{
        name:string,
        age?:number
    }
}
const info:Person={
    name:'ls',
    friend:{
        name:'zs'
    }
}
console.log(info.friend?.name);
