// 使用es6导入语法
import $ from 'jquery'
// 导入样式（再webpack中一切皆模块，都可以通过es6语法进行导入使用）
// 如果某个模块中使用from接收到的成员是undefined 则没必要接收
import './css/index.css'
import './css/xxx.less'

// 导入src/js/test/info.js
import './js/test/info'
// 导入图片得到图片文件
import logo from './images/logo.png'

console.log(logo)
// 给img的src动态赋值
$('.box').attr('src',logo)
// 定义jquery入口函数
$(function (){
    // 3.实现隔行变色
    $('li:odd').css('background-color','pink')
    $('li:even').css('background-color','yellow')

})

// // 定义一个装饰器函数
// function info(target){
//     target.info='Person info'
// }
// // 定义一个普通的类
// @info
// class Person{}
//
// console.log(Person.info)
