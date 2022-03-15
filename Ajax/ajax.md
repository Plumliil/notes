#### http协议请求的常用方法
- get:获取数据
- post:提交数据
- put:修改数据
- delete:删除数据
#### http状态码
- 100-199:信息状态码HTTP/1.1向协议中引入了1信息状态码
- 200-299:成功状态码
- 300-399:重定向状态码
- 400-499:客户端状态码
- 500-599:服务器状态码

#### ajax

~~~javascript
const xhr = new XMLHttpRequest();
xhr.open('get','localhost:3000/fruits');
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&xhr.status===200){
        alert(xhr.responseText)
    }
}
~~~

封装
~~~javascript
// 普通
document.querySelector('h1').addEventListener('click', () => {
    myAjax('get','/fruits',function (res) {
        alert(res)
    })
})
function myAjax(methods, url, next) {
    const xhr = new XMLHttpRequest();
    xhr.open(methods, url);
    xhr.send();
    let result = '';
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            next(xhr.responseText);
        }
    }
}
// promise
document.querySelector('h1').addEventListener('click', () => {
    myAjax('get', '/fruits').then(res => {
        console.log(res);
    })
})
function myAjax(methods, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(methods, url);
        xhr.send();
        let result = '';
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            }
        }
    })
}
~~~

#### ajax第三方库->axios
文档介绍
[axios][https://www.axios-http.cn/docs/intro]
