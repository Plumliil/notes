### vue解决跨域问题
vue.config.js

~~~JavaScript
module.exports = {
  devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      //以上的ip和端口是我们本机的;下面为需要跨域的
      proxy: {//配置跨域
          '/api': {
              target: 'https://lab.isaaclin.cn/nCoV',//这里后台的地址模拟的;应该填写你们真实的后台接口
              ws: true,
              changOrigin: true,//允许跨域
              pathRewrite: {
                  '^/api': ''//请求的时候使用这个api就可以
              }
          }
          
      }
  }
~~~

Vue.app
~~~javascript
import axios from "axios";
const clickMe = async () => {
  const { data: data } = await axios.get('/nCoV/api/area')
  console.log(data);
}
~~~
### 命令行无法启动vue
`Cannot find module 'C:\Users\22584\Desktop\@vue\cli-service\bin\vue-cli-service.js' `
文件夹目录中包含&，替换掉即可，webpack无法运行同理
