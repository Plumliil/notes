# mongoDB

## 环境搭建

```
在一个数据库软件中可以包含多个数据仓库，每个数据仓库可以包含多个数据集合，每个数据集合可以包含多条具体数据
```


|    术语    |                         解释说明                         |
| :----------: | :--------------------------------------------------------: |
|  database  |       数据库，mongoDB数据库软件可以建立多个数据库       |
| collection |    集合，一组数据的集合，可以理解为javascript中的数组    |
|  document  |    文档，一条具体的数据，可以理解为javascript中的对象    |
|   field   | 字段，文档中的属性名称，可以理解为javascript中的对象属性 |

## 基本指令

```shell
show dbs
show database
// 显示当前所有数据库
```

```shell
use 数据库名 // 进入到指定的数据库中
```

```shell
db // 显示当前数据库
```

````shell
show collections // 显示数据库中所有集合
````

## 数据库CRUD操作

-向数据库中插入文档

```shell
插入文档
db.collection..insert(doc)
    -向集合中插入文档
    -例如，向test数据库中的stus集合中插入一个新的学生对象
        {name:"小明",age:18,gender:"男"}
        db.test.insert({name:"小明",age:18,gender:"男"})
        当插入文档时，如果没有指定id则数据库会为文档自动添加id，该属性用来作为文档唯一表示
        id值可以自己指定，数据库不会自动添加，但必须确保id的唯一性
db.collection.insertOne() // 插入一个
db.collection..insertMany() // 插入多个
```

```shell
查询文档
db.collection..find() // 返回数组
    find()查询集合中符合条件的文档
    find()可以接收一个对象作为条件参数
    find().count()查询文档数量
        {}查询集合中所有文档
        {_id:"hello"}查询id为hello的文档
db.collection..findOne // 返回对象 后可接属性
    findOne()查询集合中符合条件的第一个文档
  
```

```shell
修改文档
db.collection.update(查询条件，新对象)
    updata()默认使用新对象替换旧对象
    如果需要修改指定属性而不是替换，需要使用修改操作符来修改
    $set 可以用来修改某一属性
    $unset 删除某一属性
db.test.update(
    {"_id":ObjectId("611cb3b14424dff2c9c6e884")},
    {$set:{
    name:"qianba"
        },
    }
)
db.collection.updataOne()
db.collection.updataMany()
```

```shell
删除
db.collection.remove() // 删除一个或多个，默认删除多个
db.collection.remove({xxx},true) // 删除一个
db.collection.remove({}) // 清空集合，一个一个删
db.collection.removeOne() // 删除一个
db.collection.removeMany() // 删除多个

db.collection.drop() // 删除集合
db.dropDatabase() // 删除数据库
```

## 增删改查

### 创建集合

```
创建集合分为两步，一是对集合设定规则，二是创建集合，创建mongoose.Schema构造函数的实例即可创建集合
```

```javascript
//设定集和规则
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean
})

//创建集合并应用规则
const Course=mongoose.model('Course',courseSchema)
```

### 创建文档

创建文档实际上就是相机和中插入数据

分为两步

1. 创建集合实例
2. 调用实例对象下的save方法将数据保存到数据库中

   创建集合实例

   ```javascript
   //创建集合并应用规则
   const Course=mongoose.model('Course',courseSchema);

   const course=new Course({
       name:'node.js基础',
       author:'黑马',
       isPublished:true
   })
   // 向集合中插入文档
   course.save();
   ```

   create方法：返回promise对象（异步）支持异步函数语法

   ```javascript
   //创建集合并应用规则
   const Course=mongoose.model('Course',courseSchema);

   Course.create({name:'English',author:'hason',isPublished:true},(err,result)=>{
       // 错误对象
       console.log(err);
       // 当前插入的文档
       console.log(result);
   })

   // 异步 Promise
   Course.create({name:'化学',author:'赵六',isPublished:true})
   .then(result=>{
       console.log(result);
   })
   .catch(err=>{
       console.log(err);
   })


   ```

   ## mongoDB数据库导入数据

   mongoimport -d 数据库名称 -c 集合名称 -file 要导入的文件

## 数据库中查询文档

### find

```javascript
// 查询文档
//设定集和规则
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean
})
// 应用规则
const Course=mongoose.model('Course',CourseSchema);
//  查询用户集合中所有文档
//  Course.find({_id:'60a46a43ea1a6c3838655fdf'}).then(result=>console.log(result);})
//  通过下划线_id字段来查找文档
 Course.find({_id:'60a46a43ea1a6c3838655fdf'}).then(result=>{
     console.log(result);
 })
 .catch(err=>{
     console.log(err);
 })
```

### findOne

```javascript
// 返回一条文档，默认返回集合中的第一条文档
// Course.findOne({name:'李四'}).then(result=>{console.log(result);})
Course.findOne({name:'李四'})
.then(result=>{
    console.log(result);
})
```

### 匹配大于小于 $gt  $lt

```javascript
// 大于小于 $gt 大于 $lt小于
// User.findOne({age:{$gt:17,$lt:20}}).then(result=>{console.log(result);})
User.findOne({age:{$gt:17,$lt:20}})
.then(result=>{
    console.log(result);
})
```

### 匹配包含 $in  （做网站搜索，做搜索关键字，在文档里查询）

```javascript
//包含
//User.find({hobbies:{$in:[敲代码]}}).then(result=>{console.log(result);})
User.findOne({hobbies:{$in:['踢球']}})
    .then(result=>{
        console.log(result);
    })
```

### 选择要查询字段 -后边表示不想查询的字段   （查询字段）

```javascript
User.find().select('name age -_id')
    .then(result=>{
        console.log(result);
    })
  
```

### 将数据按照年龄排序 降序用-  （将数据排序）

```javascript
User.find().sort('age')
    .then(result=>{
        console.log(result);
    })
```

跳过数据，限制查询数量   （网站分页）

```javascript
User.find().skip(2).limit(3)
    .then(result=>{
        console.log(result);
    })
```

## 删除文档

### 删除单个

```javascript
// 查找到一条文档并删除
// 返回删除的文档
// 如果查询匹配到多个文档 那么将会删除第一个文档
User.findOneAndDelete({_id:'60a4cc4fce929341005a2a9c'})
    .then(result=>{
        console.log(result);
    })
```

### 删除多个文档

```javascript
// 删除多个文档
// 返回值{ n: 6, ok: 1, deletedCount: 6 } n：代表删除了几条数据 ok：代表删除成功
User.deleteMany({})
    .then(result=>{
        console.log(result);
    })
```

## 更新文档

### 更新单个

```javascript
// User.updateOne({查询条件},{要更改的值}).then(result=>{console.log(result);})
// 返回值 { n: 1, nModified: 1, ok: 1 } n：代表更新几条数据 ok：代表更新成功
User.updateOne({name:'王二'},{name:'张三'})
    .then(result=>{
        console.log(result);
    })
```

### 更新多个

```javascript
// 更新集合中多个文档
User.updateMany({}, { age: 27 })
    .then(result => {
        console.log(result);
    })
```

## mongoose验证

在创建集合规则时，可以设置当前字段的验证规则，验证失败则输入验证失败

自定义错误信息

- require：true 必传字段
- minlength：3字符串最小长度
- maxlength：3字符串最大长度
- min：2数值最小为2
- max：100数值最大为100
- enum：['html','css','javascript','node.js']
- trim：true 自动去除字符串两边的空格
- validate：自定义验证器
- default：默认值

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('连接数据库成功');
    })
    .catch(err => {
        console.log(err, '连接数据库失败');
    });
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请传入文章标题'],
        minlength: [2, '文章长度不能小于2'],
        maxlength: [, '文章长度不能大于5'],
    },
    age: {
        type: Number,
        minlength: 18,
        maxlength: 100
    },
    publishData: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: {
            values:['html', 'css', 'javascript', 'node.js'],
            message:'分类要在一定的范围内'
        }
    },
    author: {
        type: String,
        validate: {
            validator: (v) => {
                // 返回布尔值
                // true 成功
                // false 失败
                // v 要验证的值
                return v && v.length > 4;
            },
            // 自定义错误信息
            message:'传入的值不符合规则',
        }
    }
})
const Post = mongoose.model('Post', postSchema);

Post.create({ title: 'aaaaa', age: 50, category: 'C#',author:'a'})
.then(result => {
    console.log(result);
})
.catch(error=>{
    // 获取错误信息对象
    const err=error.errors;
    for(let attr in err){
        console.log(err[attr]['message']);
    }
})
```

## 集合关联

通常不同集合的数据之间是有关系的，例如文章信息和用户信息储存在不同的集合中，但文章是某个用户发表的，要查询的文章的所有信息包括发表用户，就需要用到集合关联

- 使用id对集合进行关联
- 使用方法进行关联集合查询

  ```javascript
  // 需求：将文章与作者关联

  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true,useUnifiedTopology:true })
      .then(() => {
  console.log('数据库连接成功');
      })
      .catch(err => {
          console.log(err,'数据库连接失败');
      })
  // 用户集合规则
  const userSchema = new mongoose.Schema({
      name: {
          type: String,
          require: true
      }
  });
  // 文章集合规则
  const postSchema = new mongoose.Schema({
      title: {
          type: String
      },
      author:{
          // 存储下划线id地址
          // id具有特殊的类型
          type:mongoose.Schema.Types.ObjectId,
          ref:'User'
      }
  });

  const User = mongoose.model('User', userSchema);

  const Post = mongoose.model('Post', postSchema);

  //创建用户
   User.create({name:'一个用户'})
       .then(result=>{
           console.log(result);
       })
  // 创建文章
   Post.create({title:'123',author:'60a52939d0dc740f009c0e0f'})
       .then(result=>{
           console.log(result);
       })
  // 查询
  Post.find().populate('author')
      .then(result=>{
      console.log(result);
  })
  ```

  ## 案例：用户信息增删改查

  1.搭建网站服务器，实现客户端与服务器端的通信
  2.连接数据库， 创建用户集合，向集合中插入文档
  3.当用户访问/list时,将所有用户信息查询出来
  4.将用户信息和表格HTML进行拼接并将拼接结果响应回客户端
  5.当用户访问/add时， 呈现表郸面，并实现添加用户信息功能
  6.当用户访问/modify时， 呈现修改页面，并实现修改用户信息功能
  7.当用户访问/delete时, 实现用户删除功能

## 第三方模块 router

功能：实现路由

使用步骤：

1. ```
   获取路由对象
   ```
2. ```
   调用路由对象提供的方法创建路由
   ```
3. ```
   启用路由，使路由生效
   ```

```javascript
const getRouter=require('router');
const router=getRouter();
router.get('/add',(req,res)=>{
	res.end('hello world');
})
sever.on('request',(req,res)=>{
    router(req,res);
})
```

## 第三方模块server-static

功能：实现静态资源访问服务

步骤：

1. ```
   引入server-static模块获取创建静态资源服务功能的方法
   ```
2. ```
   调用方法创建静态资源并指定静态资源服务目录
   ```
3. ```
   启用静态资源服务功能
   ```

```javascript
const serverStatic=require('server-static');
const serve=serveStatic('public');
sever.on('request',(req,res)=>{
    server(req,res);
})
sever.listen(3000);
```
