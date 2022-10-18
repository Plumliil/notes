路由组成：http协议-域名-端口(地址)

### 后端路由：
    输入url>请求发送至服务器>服务器解析路径>拿到对应页面>返回出去



### 前端路由：不需要后台服务器进行解析，前端进行解析，vue-router是实现前端路由的一种方法
    输入url>js解析地址>找到对应的地址界面>执行页面产生的js>看到页面




### vue-router工作原理

- 1.url改变
- 2.触发监听事件
- 3.改变vue-router中current变量
- 4.vue监视current的监视者
- 5.获取到新的组件
- 6.Render新组件
- 1-3vue-router4-6vue

### hash和history

hash
 - #后面就是hash内容
 - 可以通过location.hash拿到
 - 可以通过onhashchange监听hash的改变

history
 - history即正常路径
 - 可以通过location.pathname拿到
 - 可以使用onpopstate监听history的变化

### vue.use
用于注册插件，默认执行install方法，如果没有install方法，触发插件本身方法


### 内容
- 创建router-link和router-view两个全局组件