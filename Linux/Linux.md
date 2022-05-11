### Linux

#### 文件
文件颜色:
- 蓝色:表示文件夹
- 灰色:表示普通文件
- 绿色:表示可执行文件
- 红色:表示压缩文件
- 天蓝色:表示链接文件
常用目录作用:
- bin:存放普通用户可执行的指令
- dev:设备目录,所有的硬件设备以及周边均放置在这个设备目录中
- boot:开机引导目录,包括linux内核文件与开机所需要的文件
- home:这里主要存放个人数据,具体每个用户的蛇者文件,用户桌面文件夹,还有用户的数据都放在折柳,每个用户都有自己的用户目录,位置为/home/用户名,当然root用户除外
- usr:应用程序放置目录
- lib:开机时常用的动态链接库,bin及sbin指令也会调用对应的lib库
- tmp:临时文件存放目录

基本命令:
- touch:创建文件
- vi:编辑文件

vi命令:
vi index.js 进入文件
cat index.js 查询写入内容
:setnum 显示行号

#### 杀死进程
- ps -ef查询端口
- kill -1 2233 正常杀死进程
- kill -9 2233 强制杀死

#### ssh上传/下载文件
SSH可以通过scp命令来上传文件,时linux系统下基于ssh登录进行安全的远程文件拷贝命令,scp是secure copy的简写,它可以使用它上传本地文件夹到远程服务器,也可以从远程服务器下载到本地

`scp -P port -r XXXX` 上传文件到远程服务器
scp -r ./ root@xxx.xxx.xxx.xxx:/home
`scp -P port -r username@servername:/xxxx` 从远程服务器下载文件
scp -r ./ root@xxx.xxx.xxx.xxx:/home ./

-r 参数i傲视递归复制,即复制该目录下文件和目录,如果要上传单个文件,只需要把-r删除,大写P表示端口,如果还是默认的SSH端口22没有更改则不需要-P
[][https://www.bilibili.com/video/BV1vQ4y1f7LF?p=6&spm_id_from=pageDriver]