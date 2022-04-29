### mixin
局部混入:
方法会进行覆盖,但是生命周期函数会合并执行,先执行mixin中的生命周期函数内容再执行组件生命周期内容
一个组件中改变了mixin组件中的数据,另一个组件不受影响
~~~javascript
// mixin.js
export const mixins={
    data(){
        return {
            msg:'mixin'
        }
    },
    computed:{},
    created() {
        console.log('mixin create');
    },
    mounted() {
        console.log('mixin mounted');
    },
    methods: {
        clickMe(){
            console.log('mixin click')
        }
    },
}
~~~
~~~javascript
// App.vue
import { mixins } from "./mixin";
export default {
  mixins: [mixins],
  methods: {
    clickMe(){
      console.log('vue click')
    }
  },
  created() {
    console.log('created vue')
  },
};
~~~
全局混入:
在main.js中引用
~~~javascript
import {mixins} from './mixin'
Vue.mixin(mixins)
~~~
谨慎使用全局混入,因为他会影响每个单独创建的vue实例包括第三方组件.大多数情况下之应当应用于自定义选项,就像上面的事例一样,推荐将其作为插件发布,以免避免重复应用混入


选项合并:
1.先执行mixin生命周期函数,再执行组件中生命周期函数
2.如果data里面有冲突,优先使用组件中的数据
3.方法也是优先使用组件方法


mixin优缺点:
1.提高代码复用性
2.无需传递状态
3.维护方便,只修改一个地方即可
缺点:
1.命名冲突
2.滥用mixin后期不易维护
3.不好溯源,排查问题困难
4.不能轻易的重复代码