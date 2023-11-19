import{_ as s,W as a,X as e,a1 as n}from"./framework-1dfc2d2d.js";const l={},o=n(`<h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1><p>Docker是容器的一种实现 和虚拟机不同的是不需要运行一个完整的操作系统 一个物理服务器上可能只会运行几个虚拟机,但是可能会运行上百个docker容器</p><p>docker是使用Client Server架构模式</p><p>docker client和docker daemon之间通过socket或者restful api进行通信,docker daemon是服务端守护进程,负责管理docker的各种资源 docker client负责向docker daemon发送请求,docker daemon接收到请求后进行处理,然后将结果返回给docker client,这里的docker deamon是一个后台进程,用来接收并处理来自docker客户端的请求,然后将结果返回给客户端,终端中输入的命令都是通过docker 客户端发送给docker daemon,docker daemon进行处理然后将结果返回给客户端,就可以在终端中看到结果</p><h2 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h2><p>镜像是一个只读的模板,可以用来创建容器</p><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2><p>容器是docker的运行实例,提供了一个独立的可移植的环境,可以在环境中运行应用程序</p><p>镜像和容器的关系像是类和实例的关系</p><p>镜像是类</p><p>容器是实例</p><h3 id="容器化和dockerfile" tabindex="-1"><a class="header-anchor" href="#容器化和dockerfile" aria-hidden="true">#</a> 容器化和Dockerfile</h3><p>Dockerfile是一个文本文件,里边包含了一条条指令来告诉docker如何来构建镜像,镜像中包含了应用程序执行的所有命令(各种依赖,配置环境等等)</p><p>一般情况下在目录根文件下创建该文本文件</p><ul><li>创建一个Dockerfile 来告诉docke构建应用程序镜像所需要的步骤和配置</li><li>使用Dockerfile构建镜像</li><li>使用镜像创建和运行容器</li></ul><h2 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h2><p>docker仓库用于存放docker镜像</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>在hellodocker文件夹下创建一个简单的js文件index.js,并创建配置文件Dockerfile</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;hello docker&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">FROM</span><span style="color:#ABB2BF;"> node:14-alpine</span></span>
<span class="line"><span style="color:#61AFEF;">COPY</span><span style="color:#ABB2BF;"> index.js /index.js</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># CMD [ &quot;node&quot;,&#39;/index.js&#39; ]</span></span>
<span class="line"><span style="color:#61AFEF;">CMD</span><span style="color:#ABB2BF;"> node /index.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 构建镜像</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">build</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-t</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">hellodocker</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查看构建的镜像</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">images</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">ls</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 运行镜像</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">run</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">hello-docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 登录docker hub</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">login</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 对镜像tag标记并容器转镜像 镜像id docker images查看</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">tag</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{镜像ID号}{dockerhub用户名}/{仓库名}:{tag}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 提交容器 docker ps -a 显示容器信息</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">commit</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{容器ID号}{dockerhub用户名}/{仓库名}:{tag}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 推送镜像到远程dockerhub仓库</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{dockerhub用户名}/{仓库名}:{tag}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 拉取镜像</span></span>
<span class="line"><span style="color:#ABB2BF;">docker </span><span style="color:#98C379;">pull</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">{dockerhub用户名}/{仓库名}:{tag}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29),i=[o];function c(r,d){return a(),e("div",null,i)}const t=s(l,[["render",c],["__file","basics.html.vue"]]);export{t as default};
