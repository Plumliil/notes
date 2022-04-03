# Git学习Ⅰ

#### 1.配置作者信息

```shell
$ mkdir git  创建文件夹
```

```shell
$ ll 显示 目录列表
```

```shell
$ pwd 看当前在那个文件夹 
```

```shell
$ cd 会文件夹目录
```

```shell
$ cd ..后退
```

```shell
$ ls -a 看见隐藏文件
```

```shell
$ git config --global user.email "xxx@xxx.com"
```

```shell
$ git config --global user.name "xxx"
```

```shell
$ rm -rm 删除文件夹
```

```shell
$ git clone https://github.com/xxx/xxx.git 克隆存在的项目
```



#### 2.流水线操作

![image-20210716202644090](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210716202644090.png)

#### 3.使用命令完成流水操作

```shell
$ touch xxx.txt 创建文件
```

```shell
$ git add xxx.txt 将文件放入小推车（暂存）
```

```shell
$ git status 查看库的文件状态
```

```shell
$ git add .传入所有文件
```

```shell
$ git commit -m 'xxx' 向git库传入文件并说明
```

#### 4.gitignore详解控制版本库文件管理

在gitignore中控制上传文件（.gitignore中是忽略文件）

```shell
$ git .gitignore
```

![image-20210716210833953](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210716210833953.png)

#### 5.从版本库中删除资源

```shell
$ git rm file 删除库中及本第文件
```

```shell
$ git rm --cached file 仅仅删除本地文件
```

#### 6.版本库中修改资料名称

```shell
$ git mv xxx.txt changeName.txt 修改名字
```

```shell
$ git commit -m 'add file' 上传暂存区的文件
```

```shell
$ git mv indexController.txt IndexController.txt 已存在文件的名字修改
```

在文件夹中修改名称也需要重新提交

![image-20210716213618526](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210716213618526.png)

#### 07.使用log日志查看历史记录

```shell
$ git log -p 显示文件变动
```

```shell
$ git log --name-only 只显示名字
```

```shell
$ git log -p -1  显示行数
```



#### 08.使用amend修改最新一次提交事件

```shell
$ git commit --amend
```

进入vim界面修改日志信息

i：insert 插入信息

esc：退出插入

:wq：保存编辑并推出Vim

#### 9.管理暂存区中的文件



```shell
$ git rm --cached xxx.txt  文件没有提交 从暂存区撤回
```

```shell
$ git reset xxx.txt  文件已经提交 从暂存区撤销
```

```shell
$ git checkout -- xxx.txt 返回上一次修改内容 回到最初状态
```

```shell
$ cat xxx.txt  查看文件内容
```



#### 10.alias命令别名提高操作效率

使用alias重新定西提交

```shell
[alias]
	a = add .
	c = commit
	l = log
	s = status 
```

#### 11.git分支branch存在的意义

提交点之间的切换

![image-20210717095303769](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210717095303769.png)



#### 12.实例讲解分支branch基本操作

$ git branch xxx 创建分支

$ git checkout xxx 切换分支

$ git branch 查看分支

$ git checkout -b xxx 创建并切换分支

创建新功能要创建并切换到新的分支，不污染主分支



#### 13.分支的合并

$ git master xxx 合并分支

$ git branch -d xxx 删除分支



#### 14.正确处理分支冲突实例

对一个资源多方想用时产生的问题

![image-20210717102559496](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210717102559496.png)

#### 15.分支管理 --merged 和 --no-merged 及分支强制删除操作

 $ git branch --merged 查看合并分支

$ git branch --no-merged 查看未合并分支

$ git branch -d xxx 删除分支

$ git branch -D xxx 强制删除分支



#### 16.标准的分支操作工作流

![image-20210717105541895](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210717105541895.png)





#### 17.stash临时储存区实例讲解

当需要跳到其他分支去完成任务时，如果当前文件不需要提交，可以将当前文件放入暂存区

```shell
$ git stash
```

```shell
$ git stash list 查看暂存区文件
```

```shell
$ git stash pop 删除暂存区
```

```
$ git stash apply stash@{1} 恢复第一个文件，切换某一个文件存储状态
```

#### 18.git的Tag标签

稳定版

```shell
$ git tag 查看标签
```

```shell
$ git tag v1.0 打标签
```

#### 19.生成zip代码压缩包

```shell
$ git archive master --prefix='lyh' --form=zip > xxx.zip  创建压缩包
```

#### 20.使用系统别名定义git全局指令

```shell
alias gs="git status"
alias gc="git commit -m"
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit  "
alias gb="git branch"
alias gb="git branch"
alias ga="git add"
alias go="git checkout"
```



#### 21.合并分支产生的实际问题

![image-20210718110122869](C:\Users\22584\AppData\Roaming\Typora\typora-user-images\image-20210718110122869.png)

分为两钟

​	第一种合并方式 master向后移 快速合并

​	第二种jiangmaster拿出来与本地进行合并（冲突在master上产生，希望子分支作者维护）

#### 22.rebase合理的优化分支合并

rebase使日志整洁

把子分支记录往后挪 再把子分支指令再走一遍

如果从主分支分出来一个分支，然后主分支没有任何变化，那么这时进行合并时不会产生提交记录

rebase 把子分支的提交点移动到主分支新的提交点就不会产生提交记录

```shell

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (ask)
$ gl
commit 7b0b6c1c33f76fd2fe833c9548416892b3ae9398 (HEAD -> ask)
Author: xxxx
Date:   Sun Jul 18 11:07:48 2021 +0800

    ask commit

commit d60154f187e3c643c402fb0 (master)
Author: xxxx
Date:   Sun Jul 18 11:07:11 2021 +0800

    master commit

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (ask)
$ go master
Switched to branch 'master'

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (master)
$ touch m2.txt

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (master)
$ ga .

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (master)
$ gc 'm2 commit'
[master 9fed7cd] m2 commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 m2.txt

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (master)
$ go ask
Switched to branch 'ask'

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (ask)
$ gl
commit 7b0b6c1c92b3ae9398 (HEAD -> ask)
Author: xxxx
Date:   Sun Jul 18 11:07:48 2021 +0800

    ask commit

commit d60154f62f64cb01e0433951187e3c643c402fb0
Author: xxxx
Date:   Sun Jul 18 11:07:11 2021 +0800

    master commit

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (ask)
$ git rebase master
Successfully rebased and updated refs/heads/ask.

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (ask)
$ gl
commit b8342fe5f2c1727d (HEAD -> ask)
Author: xxxx
Date:   Sun Jul 18 11:07:48 2021 +0800

    ask commit

commit 9fed7cd0172891ac39af42 (master)
Author: xxxx
Date:   Sun Jul 18 11:08:52 2021 +0800

    m2 commit

commit d60154f62f64cbc643c402fb0
Author: xxxx
Date:   Sun Jul 18 11:07:11 2021 +0800

    master commit

PlumLi@LAPTOP-5F4B004L MINGW64 ~/Desktop/Git/22 (ask)
$

```

#### 23.国内国外托管平台介绍及在github上创造项目

xxx

#### 24.使用ssh与远程github库进行关联

当与github库连不上时，进入.ssh文件 讲过known_hosts里的东西全删掉 然后重新操作known_hosts缓存数据

#### 25.本地仓库主动使用remote与远程github库进行关联

```shell
$ git init
$ touch readme.md
$ git add .
$ git commit -m 'xxx'
$ git remote add origin ssh地址
```

```shell
$ git remote -v 查看与远程服务器关联
```

```shell
$ git push -u origin master 推送到远程仓库的master分支
```

####  26.本地分支与GitHub远程分支同步

```shell
$ git push --set-upstream origin master
```

#### 27.新入职员参与开发时分支使用

```shell
$ git push --set-upstream orgin ask
```

#### 28.Github远程分支的合并

```shell
$ git pull 更新状态
```

```shell
$ git merge xxx
```

#### 29.远程分支删除

项目开发完成不需要分支，进行分支删除时

```shell
$ git push origin --delete ask
```

```shell
$ git branch -a 查看分支
```

```shell
$ git branch -d 删除本地分支
```

#### 30.commit message修改

提交信息写错但是还没有推(push)此时可以使用
~~~shell
git commit --amend --only -m 'xxxx'
~~~
来更改提交信息.