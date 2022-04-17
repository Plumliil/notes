## canvas

#### canvas三要素
- id：作为唯一标识
- width：画布内容宽度像素大小（与style像素有区别）
- height：高度
canvas仅仅是一个画布，要绘制内容需要使用js
#### 画布，画笔

| 属性 | 描述|
| ----------- | -----------|
| clearRect()| 清除画布 |



~~~javascript
        // 1.找到画布对象
        let cvs=document.querySelector('#cvs');
        // 2.上下文画笔
        let ctx=cvs.getContext('2d');
        // 3.绘制路径
        ctx.rect(50,50,200,200);
        // 4.填充
        ctx.fillStyle='aqua';
        ctx.fill();
        // 5.路径渲染，描边
        ctx.lineWidth=20;
        ctx.strokeStyle='red';
        ctx.stroke();
~~~

#### 绘制圆和文本

##### 路径
| 方法      | 作用 |
| ----------- | -----------|
| strokeStyle | 定义路径颜色      |
| stroke()      | 绘制已定义路径|
| moveTo()      | 设置起始点|
| lineTo()      | 设置下一个点位置|
| beginPath()   | 设置开始路径|
| closePath()   | 设置结束路径(关闭路径,不形成连笔)|


| 属性 | 描述|
| ----------- | -----------|
| lineCap   | 设置或返回线条的结束样式        |
| lineJoin   | 设置或返回线段交互出样式        |
| lineWidth   | 设置或返回当前线条的宽度        |
| miterLimit   | 设置或返回最大斜切长度        |

##### 绘制路径
~~~javascript
// 1.找到画布对象
let cvs = document.querySelector('#cvs');
// 2.上下文画笔
let ctx = cvs.getContext('2d');
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(300, 250);
ctx.closePath();

ctx.lineCap = 'round'
ctx.miterLimit = 1;
ctx.strokeStyle = 'white';
ctx.lineWidth = 20;
ctx.stroke();
~~~
![](https://s2.loli.net/2022/04/17/KX8OZV59bjWpUrw.png)

##### 绘制圆

| 属性 | 描述|
| ----------- | -----------|
| arc   | 前两个参数x,y坐标第三个参数绘制出圆的直径,第四个参数圆的弧度,第五个参数,顺逆时针绘制圆         |

~~~javascript
        // 1.找到画布对象
        let cvs = document.querySelector('#cvs');
        // 2.上下文画笔
        let ctx = cvs.getContext('2d');
        // 默认false顺时针,true为逆时针,最后一个参数,是否为逆时针
        // ctx.arc(300,200,100,0,Math.PI,false);
        ctx.arc(300,200,100,0,2*Math.PI,true);
        ctx.lineWidth=10;
        ctx.lineCap="round";
        ctx.strokeStyle="white";
        ctx.fillStyle="white";
        ctx.fill();
        ctx.stroke();
~~~

##### 绘制文本

| 属性 | 描述|
| ----------- | -----------|
| font   | 设置字体大小及样式 |
|  shadowBlur  | 设置阴影模糊度  |
|  shadowColor  | 设置阴影颜色  |
|  shadowOffsetX  | 设置阴影偏移  |
|  shadowOffsetY  | 设置阴影偏移  |
|  fillText  | 设置实体文字填充  |
|  strokeText  | 设置镂空文字填充  |


弹幕效果
~~~javascript
let cvs = document.querySelector('#cvs');
let ctx = cvs.getContext('2d');
console.log(ctx);
ctx.font = '30px 微软雅黑';
// 设置阴影
ctx.shadowBlur = 20;
ctx.shadowColor = 'rgba(0,0,0,1)';
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
let x = 600;
setInterval(() => {
  // 清空画布
  ctx.clearRect(0, 0, 600, 600)
  x -= 1;
  if (x < -100) x = 600;
  ctx.fillText('Plumli', x, 100)
  ctx.strokeText('Hello World', x, 200);
}, 16)
ctx.stroke();
~~~

##### 绘制图片
| 参数 | 描述|
| ----------- | -----------|
|img	 |规定要使用的图像、画布或视频。   |
|sx	 |可选。开始剪切的 x 坐标位置。   |
|sy	 |可选。开始剪切的 y 坐标位置。   |
|swidth	 |可选。被剪切图像的宽度。   |
|sheight |	可选。被剪切图像的高度。   |
|x	 |在画布上放置图像的 x 坐标位置。   |
|y	 |在画布上放置图像的 y 坐标位置。   |
|width	 |可选。要使用的图像的宽度。（伸展或缩小图像）   |
|height	 |可选。要使用的图像的高度。（伸展或缩小图像）   |

~~~javascript
let cvs = document.querySelector('#cvs');
let ctx = cvs.getContext('2d');
// 绘制图像ctx.drawImage
// ctx.drawImage(图片对象,图像裁剪位置x,y,图片裁剪宽高,图片位置x,y,宽度,高度)
let img = new Image();
img.src = './PC.jfif';
img.onload = () => {
    ctx.drawImage(img, 100, 0, 300, 250, 0, 0, 400, 250);
    ctx.fillStyle = 'white'
    ctx.fillText('plumli', 10, 20);
    console.log(img);
}
~~~