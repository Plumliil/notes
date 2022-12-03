特点:
- 免安装
- 接近原生的app操作基于微信卡爱法案,使用微信提供的api开发
- 必须在微信使用
优缺点:
- 方便快捷
- 速度快,不占内容
- 安全稳定,保密性强
- 功能场景丰富
- 开发周期短


目录结构:
- app.js 必须 小程序逻辑
- app.json 必须 小程序公共配置
    - pages(数组):小程序页面,数组第一个元素为小程序展示页面[https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html]
    - window(对象):设置小程序的状态栏,导航条,标题,窗口颜色[https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window]
- 