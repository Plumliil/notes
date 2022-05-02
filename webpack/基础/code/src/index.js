/* 
  index.js:webpack入口起点文件
  1. 运行指令:
    开发环境指令:webpack ./src/index.js -o ./build/built.js --mode=development
        使用webpack进行打包到 -o 后 --mode指定打包环境
    生产环境指令::webpack ./src/index.js -o ./build/built.js --mode=development
        使用webpack进行打包到 -o 后 --mode指定打包环境
  2.结论:
    1.webpack能处理js资源和json资源,不能处理css/img资源
    2.生产环境和开发环境能将ES模块编译成浏览器能识别的模块
    3.生成环境比压缩环境多一个压缩js代码




*/  

import data from './data.json'
// import './index.css'
console.log(data);
function add(x, y) {
    return x + y;
}
console.log(add(1,2));