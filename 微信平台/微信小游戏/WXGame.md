在微信平台编写小游戏canvas是不可缺少的
context2d的重要方法
由于此次我们开发的小游戏是2D平面游戏，所以均使用context2d对象米进行绘图操作。因此，先来了解一下
context2d都有哪些游戏中经常会用到的方法(函数)。
-  drawlmage(img, sx, sy, s_ width, s. _height, dx, dy, width, height)
绘制图片
img是图片对象
sx、sy、 s_ _width、 s_ height的含义是从图片的(sx, sy)点开始，绘制区域宽s_ width， 高s_ height
dx、dy是 图片绘制在canvas的(dx, dy)坐标上
width、height是图片 在canvas.上的绘制大小
- filRelt(x, y, width, height)
绘制一个被填充的矩形.
注意:在调用该方法前，应该使用context2d对象的llstyle和strokestyle属性为其接下来的绘制设置好填充色
和边框色，lineWidth属 性设置边框线的宽度
- fillText(strx, y)
绘制一个文木，str为 文木显示的内容
使用前可以通过font属性设置字体，fllstyle设置文字颜色。
