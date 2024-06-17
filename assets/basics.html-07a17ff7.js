const l=JSON.parse('{"key":"v-5f569923","path":"/note/MySql/basics.html","title":"基础篇","lang":"en-US","frontmatter":{"description":"库,表,数据三者关系 什么是库 库是用来存放 n 张表 什么是表 表可以存放数据,由字段,数据类型(字符串 varchar,整数 int bigint,小数 float,日期 Date 等)组成 什么是数据 表中的信息:文本,视频,图片,音频等 数据类型,库,表操作 数据类型 常见数据类型: varchar(n),float,int(n),bigint...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/note/MySql/basics.html"}],["meta",{"property":"og:site_name","content":"Plumliil-Docs"}],["meta",{"property":"og:title","content":"基础篇"}],["meta",{"property":"og:description","content":"库,表,数据三者关系 什么是库 库是用来存放 n 张表 什么是表 表可以存放数据,由字段,数据类型(字符串 varchar,整数 int bigint,小数 float,日期 Date 等)组成 什么是数据 表中的信息:文本,视频,图片,音频等 数据类型,库,表操作 数据类型 常见数据类型: varchar(n),float,int(n),bigint..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-17T06:28:19.000Z"}],["meta",{"property":"article:author","content":"Plumliil"}],["meta",{"property":"article:modified_time","content":"2024-06-17T06:28:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-17T06:28:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Plumliil\\",\\"url\\":\\"https://plumliil.cn\\"}]}"]]},"headers":[{"level":2,"title":"库,表,数据三者关系","slug":"库-表-数据三者关系","link":"#库-表-数据三者关系","children":[{"level":3,"title":"什么是库","slug":"什么是库","link":"#什么是库","children":[]},{"level":3,"title":"什么是表","slug":"什么是表","link":"#什么是表","children":[]},{"level":3,"title":"什么是数据","slug":"什么是数据","link":"#什么是数据","children":[]}]},{"level":2,"title":"数据类型,库,表操作","slug":"数据类型-库-表操作","link":"#数据类型-库-表操作","children":[{"level":3,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":3,"title":"创建库","slug":"创建库","link":"#创建库","children":[]},{"level":3,"title":"删除库","slug":"删除库","link":"#删除库","children":[]},{"level":3,"title":"创建表","slug":"创建表","link":"#创建表","children":[]},{"level":3,"title":"删除表","slug":"删除表","link":"#删除表","children":[]}]},{"level":2,"title":"数据的增删改查","slug":"数据的增删改查","link":"#数据的增删改查","children":[{"level":3,"title":"增","slug":"增","link":"#增","children":[]},{"level":3,"title":"删","slug":"删","link":"#删","children":[]},{"level":3,"title":"改","slug":"改","link":"#改","children":[]},{"level":3,"title":"查","slug":"查","link":"#查","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"数据库备份与还原","slug":"数据库备份与还原","link":"#数据库备份与还原","children":[]},{"level":2,"title":"高级 SQL 查询","slug":"高级-sql-查询","link":"#高级-sql-查询","children":[{"level":3,"title":"查询多条数据","slug":"查询多条数据","link":"#查询多条数据","children":[]},{"level":3,"title":"分组查询(group by 分类字段)","slug":"分组查询-group-by-分类字段","link":"#分组查询-group-by-分类字段","children":[]},{"level":3,"title":"分页查询","slug":"分页查询","link":"#分页查询","children":[]},{"level":3,"title":"多表查询","slug":"多表查询","link":"#多表查询","children":[]},{"level":3,"title":"表设计以及三表查询","slug":"表设计以及三表查询","link":"#表设计以及三表查询","children":[]}]},{"level":2,"title":"存储过程与函数","slug":"存储过程与函数","link":"#存储过程与函数","children":[{"level":3,"title":"聚合函数与常见函数","slug":"聚合函数与常见函数","link":"#聚合函数与常见函数","children":[]}]},{"level":2,"title":"视图","slug":"视图","link":"#视图","children":[{"level":3,"title":"创建视图","slug":"创建视图","link":"#创建视图","children":[]},{"level":3,"title":"查询某一视图中数据","slug":"查询某一视图中数据","link":"#查询某一视图中数据","children":[]},{"level":3,"title":"删除视图中某一条数据","slug":"删除视图中某一条数据","link":"#删除视图中某一条数据","children":[]},{"level":3,"title":"删除视图","slug":"删除视图","link":"#删除视图","children":[]},{"level":3,"title":"向视图中插入一条数据","slug":"向视图中插入一条数据","link":"#向视图中插入一条数据","children":[]},{"level":3,"title":"修改视图数据","slug":"修改视图数据","link":"#修改视图数据","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"数据库建模(powerDesigner)","slug":"数据库建模-powerdesigner","link":"#数据库建模-powerdesigner","children":[]},{"level":2,"title":"事务","slug":"事务","link":"#事务","children":[{"level":3,"title":"什么是事务","slug":"什么是事务","link":"#什么是事务","children":[]},{"level":3,"title":"事务四大特性","slug":"事务四大特性","link":"#事务四大特性","children":[]},{"level":3,"title":"事务过程","slug":"事务过程","link":"#事务过程","children":[]}]},{"level":2,"title":"存储过程","slug":"存储过程","link":"#存储过程","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"存储过程之 Case","slug":"存储过程之-case","link":"#存储过程之-case","children":[]},{"level":3,"title":"存储过程之 While","slug":"存储过程之-while","link":"#存储过程之-while","children":[]},{"level":3,"title":"存储过程之 Loop","slug":"存储过程之-loop","link":"#存储过程之-loop","children":[]}]}],"git":{"createdTime":1718605699000,"updatedTime":1718605699000,"contributors":[{"name":"plumliil.li","email":"plumliil.li@elitesland.com","commits":1}]},"readingTime":{"minutes":15.52,"words":4657},"filePathRelative":"note/MySql/basics.md","localizedDate":"June 17, 2024","autoDesc":true}');export{l as data};
