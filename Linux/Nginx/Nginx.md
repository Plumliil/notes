### Nginx
Nginx是开源,高性能,可靠的web和反向代理服务器,几乎可以做到7*24小时不间断运行,及试运行几个月也不需要重新启动,还能再不间断服务的情况下堆软件版本进行热更新

#### 安装
首先确保自己连接上了服务器 `ssh 用户名@公网ip` 然后运行
~~~shell
yum list | grep nginx
~~~
接着运行
~~~shell
yum install nginx
~~~
安装好后`nginx -v`可以查看版本信息 `rpm -ql ngixn` 可以查看Nginx被安装到什么地方