## canvas

#### canvas三要素
- id：作为唯一标识
- width：画布内容宽度像素大小（与style像素有区别）
- height：高度
canvas仅仅是一个画布，要绘制内容需要使用js
#### 画布，画笔

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