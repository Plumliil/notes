import '../css/index.css'
import './print'
console.log('HMR');
console.log('HMR-ESLINT');


// function add(a, b) {
//     return a + b;
// }

const add = (a, b) => a + b;

console.log(add(1, 2));


console.log(222)();

if(module.hot){
    // 一旦module.hot为true,说明开启了HMR功能.--->让HMR功能代码生效
    module.hot.accept('./print.js',function(){
        // 方法会监听11print.js文件变化,一旦发生变化,其他模块不会重新打包构建
        // 会执行下面会掉函数
        print()
    })
}