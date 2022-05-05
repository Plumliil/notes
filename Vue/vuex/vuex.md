### vuex
#### vuex是什么
vuex是一个专为vuejs应用程序开发的状态管理模式,它采用集中式管理应用的所有组件状态,并以相应的规则保证状态以一种可预测方式发生变化.vuex也集成到vue官方调试工具devtools extension,提供了诸如零配置time-travel调试,状态快照导入导出等高级调试功能
调试工具:devtools
> vuex就像是眼睛:您自会知道什么时候使用它
#### state 
在store中定义数据,在组件中直接使用
目录:store/index.js
~~~javascript
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {},
  actions: {},
  modules: {}
})
~~~
目录:Home.vue
~~~html
<template>
  <div class="home">
    <h2>Home页面的数字:{{$store.state.num}}</h2>
  </div>
</template>

<script>
export default {
}
</script>
~~~
或者写为
~~~html
<template>
  <div class="about">
    <h2>About页面的数字:{{num}}</h2>
  </div>
</template>

<script>
export default {
  computed:{
    num(){
      return this.$store.state.num;
    }
  }
}
</script>
~~~

相当于组件中的数据data,专门用来存放全局数据
更改state中数据唯一办法是提交mutations


#### getters
getters相当于组件中的computed.区别是getters是全局的,computed是组件内部使用的在外部使用需要`$store.getters.getNums`
将组件中统一使用的computed,放到getters中使用
目录:store/index.js
~~~javascript
export default new Vuex.Store({
  state: {
    num: 0
  },
  getters:{
    getNum(state){
      return state.num;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
~~~
目录:Home.vue
~~~html
<template>
  <div class="home">
    <h2>Home页面的数字:{{ $store.getters.getNum }}</h2>
  </div>
</template>

<script>
export default {}
</script>
~~~

#### mutations
更改store中state数据状态的唯一方法是提交mutation
mutations相当于组件中的methods,但是不能使用异步方法(定时器,axios...)
~~~javascript
export default new Vuex.Store({
  state: {
    num: 0
  },
  getters:{
    getNum(state){
      return state.num;
    }
  },
  mutations: {
    // state store中的state payload是一个形参,如果组件在commit时有传参,
    // 就存在,如果没有传参就为undefined
    increase(state,payload=1){
      state.num+=payload;
    }
  },
  actions: {},
  modules: {}
})
~~~
目录:Btn.vue
~~~html
<template>
  <div>
    <button @click="add">点击+1</button>
  </div>
</template>

<script>
export default {
  methods: {
      add(){
          // 提交mutation
          this.$store.commit('increase',3)
      }
  },
};
</script>
~~~
#### actions
actions是store中专门处理异步的,实际修改状态值的还是mutations
目录:store/index.js
~~~javascript
export default new Vuex.Store({
  state: {
    num: 0
  },
  getters:{
    getNum(state){
      return state.num;
    }
  },
  mutations: {
    // state store中的state payload是一个形参,如果组件在commit时有传参,
    // 就存在,如果没有传参就为undefined
    increase(state,payload=1){
      state.num+=payload;
    },
    decrease(state){
      state.num--;
    }
  },
  // 专门处理异步,支持修改状态值的依然是mutations
  actions: {
    // 点击 -1 按钮 1s 后执行
    decreaseAsync(context){
      context.commit('decrease')
    }
  },
  modules: {}
})
~~~
目录:Btn.vue
~~~html
<template>
  <div>
    <button @click="$store.commit('increase', 3)">点击+1</button>
    <button @click="decrease">点击-1</button>
  </div>
</template>

<script>
export default {
  methods: {
    decrease() {
      setTimeout(() => {
        this.$store.dispatch("decreaseAsync");
      }, 1000);
    },
  },
};
</script>
~~~
#### map* 辅助函数
mapState和mapGetters在组件中都是写在computed里
~~~html
<template>
    <h2>Home页面的数字:{{ num }}</h2>
    <h2>About页面的数字:{{getNum}}</h2>
</template>
<script>
import { mapState,mapGetters } from "vuex";
export default {
  computed:{
    ...mapState(['num']),
    ...mapGetters(['getNum'])
  }
};
</script>
~~~
mapMutations和mapActions在组件中都是写在methods里
~~~html
<template>
  <div>
    <button @click="increase(3)">点击+1</button>
    <button @click="decrease">点击-1</button>
  </div>
</template>

<script>
import { mapMutations,mapActions } from "vuex";
export default {
  methods: {
    decrease() {
      setTimeout(() => {
        this.decreaseAsync()
      }, 1000);
    },
    ...mapMutations(['increase']),
    ...mapActions(['decreaseAsync']),
  },
};
</script>
~~~

#### 拆分写法
store中的每个属性都可以差分成单独的文件
![](https://s2.loli.net/2022/05/05/cdWlF12SPTmQx6G.png)
~~~JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
~~~

#### modules

![](https://s2.loli.net/2022/05/05/spNQBKeX3F695zR.png)

我们的store可以认为是一个主模块,它下边可以分解为很多子模块,子模块都可以单独分离出来写,写完再导入到主模块中.下面以`users`子模块:
users模块也可以分为state,getters,mutations和actions,所有的方法和属性该怎么写就怎么写.
但是users的index.js文件夹中,需要写入`namespace:true`命名空间.然后再store的index.js中引入到modules中.
在组件中获取值的方法:
~~~javascript
$store.state.users.nickName
~~~
在组件中触发mutations的方法:
~~~javascript
methods:{
    ...mapMutations({
        'changeNickName':'users/changeNickName'
    })
}
~~~

#### MUTATIONS_TYPE
用来将mutations所有的方法归纳起来.
目录:mutations_type.js
~~~javascript
export const MUTATIONS_TYPE = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

export default {
    [MUTATIONS_TYPE.INCREASE](state, payload = 1) {
        state.num += payload;
    },
    [MUTATIONS_TYPE.DECREASE](state) {
        state.num--;
    }
}
~~~
目录:store/index.js
~~~javascript
...
import mutations from './mutations_type';
export default new Vuex.Store({
    ...
    mutations,
    ...
})
~~~
组件中
~~~html
<template>
  <div class="about">
    <h2>About页面的数字:{{$store.getters.getNum}}</h2>
    <button @click="increase()">About按钮.点击+1</button>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
// import { mapGetters,mapMutations } from "vuex";
import {MUTATIONS_TYPE} from '../store/mutations_type'
export default {
  computed:{
    ...mapGetters(['getNum'])
  },
  methods: {
    // 方法一:
    // ...mapMutations([MUTATIONS_TYPE.INCREASE]),
    // 方法二:
    increase(){
      this.$store.commit(MUTATIONS_TYPE.INCREASE)
    },
  },
}
</script>

~~~