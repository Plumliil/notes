### 新增特性

- Componsition API (组合式api)
- setup
  - ref和reactive
  - computed和wwatch
  - 新的生命周期函数
  - provide和inject
  - ...
- 新组件
  - Fargment-文档碎片
  - Teleport-瞬移组件的位置
  - Suspense-异步加载组件的loading界面
- 其他API更新
  - 全局api修改
  - 将原来的全局Api抓安逸到应用对象

### Composition API
#### 1.Composition

##### setup

>可以向以前一样定义data和methods但是在vue3中更推荐使用setup函数
- setup是一个函数,只在初始化的时候执行一次
  - 以后大部分代码是在setup中写
- 返回一个对象,对象的属性或者方法模板中可以直接使用
- setup返回的数据和methods进行合并,setup优先级更高
- setup中没有this
  - 以后开发不使用this
- setup不要写成async函数
  - >因为setup函数必须返回一个json对象供模板使用,如果setup是一个async函数,返回的将是promise对象,如果setup是一个async哈桉树,那噶爱组件就成了一个异步组件,需要配合Suspennse组件才能使用.