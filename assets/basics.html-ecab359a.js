import{_ as s,W as a,X as n,a1 as e}from"./framework-b3a1bbcf.js";const l={},r=e(`<h1 id="基础篇" tabindex="-1"><a class="header-anchor" href="#基础篇" aria-hidden="true">#</a> 基础篇</h1><h2 id="配置管理" tabindex="-1"><a class="header-anchor" href="#配置管理" aria-hidden="true">#</a> 配置管理</h2><h3 id="查询当前文件加下提交代码作者" tabindex="-1"><a class="header-anchor" href="#查询当前文件加下提交代码作者" aria-hidden="true">#</a> 查询当前文件加下提交代码作者</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">show</span></span>
<span class="line"><span style="color:#ABB2BF;">Author:xxx &lt;</span><span style="color:#98C379;">youremail@email.co</span><span style="color:#ABB2BF;">m&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局修改提交代码邮箱" tabindex="-1"><a class="header-anchor" href="#全局修改提交代码邮箱" aria-hidden="true">#</a> 全局修改提交代码邮箱</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">config</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--global</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">user.email</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;youremail@email.com&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除本地分支" tabindex="-1"><a class="header-anchor" href="#删除本地分支" aria-hidden="true">#</a> 删除本地分支</h3><p>如果该分支包含未合并的修改和未推送的提交，-d 标志将不允许删除该本地分支 此时应该使用 -D</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branchname</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支" aria-hidden="true">#</a> 删除远程分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--delete</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">branchname</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><h3 id="撤回上一次已-commit-但未-push-的代码" tabindex="-1"><a class="header-anchor" href="#撤回上一次已-commit-但未-push-的代码" aria-hidden="true">#</a> 撤回上一次已 commit 但未 push 的代码</h3><h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">reset</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--soft</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">HEAD~</span><span style="color:#D19A66;">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查询当前分支是从哪个分支拉取以及分支操作记录-提交记录-merge-记录" tabindex="-1"><a class="header-anchor" href="#查询当前分支是从哪个分支拉取以及分支操作记录-提交记录-merge-记录" aria-hidden="true">#</a> 查询当前分支是从哪个分支拉取以及分支操作记录(提交记录,merge 记录)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">reflog</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">show</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">分支名</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="标签管理" tabindex="-1"><a class="header-anchor" href="#标签管理" aria-hidden="true">#</a> 标签管理</h2><h3 id="为当前分支打上tag" tabindex="-1"><a class="header-anchor" href="#为当前分支打上tag" aria-hidden="true">#</a> 为当前分支打上tag</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">tag</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-a</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">v1.</span><span style="color:#D19A66;">0.0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">“标签说明”</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将tag推到远程仓库" tabindex="-1"><a class="header-anchor" href="#将tag推到远程仓库" aria-hidden="true">#</a> 将tag推到远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">v1.</span><span style="color:#D19A66;">0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除本地tag" tabindex="-1"><a class="header-anchor" href="#删除本地tag" aria-hidden="true">#</a> 删除本地tag</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">tag</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-d</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">v1.</span><span style="color:#D19A66;">0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除远程" tabindex="-1"><a class="header-anchor" href="#删除远程" aria-hidden="true">#</a> 删除远程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">:refs/tags/v1.</span><span style="color:#D19A66;">0.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分支重命名" tabindex="-1"><a class="header-anchor" href="#分支重命名" aria-hidden="true">#</a> 分支重命名</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">branch</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">-m</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">oldBranch</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">newBranch</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除远程分支-1" tabindex="-1"><a class="header-anchor" href="#删除远程分支-1" aria-hidden="true">#</a> 删除远程分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--delete</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">oldBranch</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="推送本地分支到远端" tabindex="-1"><a class="header-anchor" href="#推送本地分支到远端" aria-hidden="true">#</a> 推送本地分支到远端</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">push</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">newBranch</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将本地仓库与远程仓库关联起来" tabindex="-1"><a class="header-anchor" href="#将本地仓库与远程仓库关联起来" aria-hidden="true">#</a> 将本地仓库与远程仓库关联起来</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">git </span><span style="color:#98C379;">remote</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">add</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">origin</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">xxxx</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的origin是对远程仓库的命名，默认情况下，大部分Git项目都会把主远程仓库命名为origin。xxxx代表远程仓库的URL</p><ul><li>添加远程: 在你的本地Git仓库中添加一个远程仓库的引用。</li><li>命名远程: 给这个远程仓库指定了一个名字，即origin，这个名字是后续推送（push）、拉取（pull）等操作时使用的默认名称。</li><li>设置URL: 指定了远程仓库的URL，以便Git知道从哪里推送或拉取代码。</li></ul>`,36),o=[r];function i(c,d){return a(),n("div",null,o)}const t=s(l,[["render",i],["__file","basics.html.vue"]]);export{t as default};
