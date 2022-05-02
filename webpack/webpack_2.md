## webpack5

#### webpack5个核心概念

##### Entry
入口指示 以那个文件为入口七点开始打包,分析构建内部依赖图
##### Output
输出指示 webpack打包后资源bundles输出到哪里,以及如何命名
##### Loader
Loader让webpack能够去处理那些非javascript资源(webpack自身只能理解javascript)
##### Plugins
插件可以用于执行范围更广的1任务,插件的范围包括从打包到优化和压缩,一直到重新定义环境变量
##### Mode
模式Mode指示webpack执行相应1的模式配置
|选项|描述|特点|
|----|----|---|
|development|会将process.env.NODE_ENV的值设置为development</br>自动启用NamedChunksPlugin和NamedModulesPlugin|能让代码本地调试|
|production|会将process.env.NODE_ENV的值设置为production</br>自动启用各种plugin|能让代码优化上线运行的环境|

