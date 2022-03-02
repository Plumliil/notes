// 字面量类型的意义,就是必须结合联合类型
// type Alignment = 'left' | 'right' | 'center';
// let align: Alignment = 'left';
// align = 'center'
// console.log(align);

// 字面量推理

type Methods = 'Get' | 'Post';
// type RequestM = {
//     url:string,
//     method:Methods
// }
function request(url:string,method:Methods) {}

// const options:RequestM={
//     url:'',
//     method:'Get'
// }; 
const options={
    url:'',
    method:'Get'
}

request(options.url,options.method as Methods);