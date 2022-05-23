## Pinia

- 直观,像定义components一样定义store
- 完整的typescripy支持
- 去除mutation,只有state,getters,actions
- actions支持同步和异步
- Vue Devtools支持pinia,提供更好的开发体验
- 能够构建多个stores,并实现自动代码拆分
- 轻量(1kb)



简单使用
#### 导入

##### 安装
`npm install pinia -g`

##### 使用
在main.js中
~~~javascrit
import { createApp } from 'vue'
import App from './App.vue'
// 导入
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.mount('#app');
~~~
在store/index.js中
~~~javascript
import { defineStore } from "pinia";

const useStore = defineStore('main', {
    state: () => {
        return {
            count: 10,
            list: [
                {name:'apple',price:3},
                {name:'banana',price:6}
            ]
        }
    }
})

export default useStore
~~~
App.vue
~~~html


~~~

#### 修改

##### 普通修改
~~~javascript
const one = () => {
  count.value++;
};
~~~
##### $patch
> 但是，使用这种语法应用某些突变非常困难或代价高昂：任何集合修改（例如，从数组中推送、删除、拼接元素）都需要您创建一个新集合。 正因为如此，$patch 方法也接受一个函数来批量修改集合内部分对象的情况：

~~~javascript
// 普通修改
store.$patch({
    count:store.count+=5,
})
// 集合修改
store.$patch((state => {
    store.list.push({
      name: 'peach',
      price: 5
    })
}))
// 或者
 store.list.push({
      name: 'peach',
      price: 5
})
store.$patch({
    list: store.list
})
~~~
##### $state将整个store的state进行替换
~~~javascript
function toggleState() {
  store.$state = {
    count: 100,
    list: [
        {name:'plum',price:8}
    ]
  }
}
~~~