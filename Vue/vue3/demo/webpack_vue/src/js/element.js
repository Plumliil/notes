import '../css/style.css'
import '../css/image.css'
import img1 from '../img/1.jpg'
const divEl=document.createElement('div');
divEl.className="title";
divEl.innerHTML="Hello World"

// 设置背景图片
const bgDivEl=document.createElement('div');
bgDivEl.className="image-bg";
// 设置img元素src
const imgEl=document.createElement('img');
imgEl.src=img1
document.body.appendChild(divEl)
document.body.appendChild(bgDivEl)
document.body.appendChild(imgEl)