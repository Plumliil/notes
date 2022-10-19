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

#### ref
- 作用:定义响应式数据
- 语法:`const xxx=ref(xxx)`;
  - 创建一个包含响应式数据的引用(reference)对象
  - js中修改数据:`xxx.value=otherValue`
  - 模板中显示数据:不需要`.value`直接使用`{{xxx}}`
- 一般定义原始类型响应式数据

#### reactive
- 作用:定义响应式数据
  - >如果ref定义对象数组,内部会自动将对象数组转化为reactive对象
- 语法:`const xxx=reactive(xxx)`:接受一个普通对象法案会该对象的响应式代理器对象
- js中修改数据不需要使用`.value`操作

#### toRefs
- 将响应式对象中所有属性包装为ref对象,并返回1包含这些ref对像的普通对象
- 应用:对reactive定义的对象进行toRefs包装,包装后对象每个属性都是响应式的


#### vue2和vue3响应式差别

#### vue2响应式
- 核心:
  -  对象:通过defineProperty对对象1已有属性值的读取和修改进行劫持(监视/拦截)
  ~~~js
  /*
  const vm=new Vue({
    el:'app',
    data:{
      name:'zs',
      age:18
    }
  })
  */
  // 假设vm是vue实例
  const vm={}
  const data={
    name:'zs',
    age:18
  }
  // 遍历data,将data属性绑定到vm上,对属性的读取和修改进行拦截
  Object.entries(data).forEach(([prop,value])=>{
    let initValue=value;
    Object.defineProperty(vm,prop,{
      get(){
        console.log('执行get')
        return initValue
      },
      set(newValue){
        console.log('执行set');
        initValue=newValue
      }
    })
  })

  console.log(vm.name); // 执行get zs
  vm.name='ls'; // 执行set
  console.log(vm.name); // 执行get ls
  vm.sex='男'; // 不会执行set方法
  console.log(vm.sex); // 不会执行get方法
  ~~~
  - 数组:通过重写数组更新数组一系列更新元素的方法来试下按元素的修改劫持
  - >数组的push,pop,splice等法昂发之所以能正常使用,其实是被vue重写
  ~~~js
  // 将方法放对象里面
  const obj={
    push(){},
    pop(){},
    shift(){},
    unshift(){},
    splice(){},
    sort(){},
    reverse(){}
  }
  // 遍历obj,使用defineProperty监听
  Object.keys(obj).forEach(key=>{
    Object.defineProperty(obj,key,{
      value:function(...args){
        return Array.prototype[key].call(this,...args)
      }
    })
  })
  const arr=[]

  // arr.push(1); // obj.push(1)
  // arr.__prroto__= Array.prototype;

  arr.__proto__=obj; // 将数组的隐式原型指向obj
  // 我们知道arr.__proto__等于它的构造函数的原型,也就是Array.prototype,所以arrr可以执行push,pop等方法,但是现在arr.__proto__又等于obj了,所以arr.push相当于obj.push用defineProperty进行监听,执行obj.push()就会执行value函数
  ~~~

#### vue3响应式
- 核心:
  - 通过Proxy(代理):拦截对对象本身的操作,包括属性值的读写,属性的添加,属性的删除等...
  - 通过Reflect(反射):动态对被代理对象的相应属性进行特定操作
  ~~~js
  const user={
    name:'zs',
    age:18
  }

  const proxyUser=new Proxy(user,{
    get(target,prop){
      console.log('劫持get()',prop);
      return Reflect.get(target,prop)
    },
    set(target,prop,val){
      console.log('劫持set()',prop,val);
      return Reflect.set(target,prop,val)
    },
    deleteProperty(target,prop){
      console.log('劫持delete',prop);
      return Reflect.deleteProperty(target,prop)
    },
  })

  // 读取属性值
  console.log(proxyUser===user);
  console.log(proxyUser.name); // 劫持get() name zs
  // 设置属性值
  proxyUser.name='ls'; // 劫持set() name ls
  proxyUser.age=19;
  console.log(user);
  // 添加属性
  proxyUser.sex='男'; // 劫持set() sex 男
  console.log(user);
  // 删除属性
  delete proxyUser.sex; // 劫持delete sex
  console.log(user);
  ~~~

 >>> 总结:正是由于vue3使用proxy代理的方式拦截对象本身,所以在vue3中添加/删除属性都是响应式的,通过下标修改数组也是响应式

#### setup参数
- props-接受父组件传入的props并声明
- context-是一个对象,结构出来包含
  - attrs:接收父组件传入的没有通过props声明过的属性,相当于this.$attrs
  - slots:接收父组件传入的插槽内容的对象,相当于this.$slots
  - emit:用来分发自定义时间的函数,相当于this.$emit



#### 计算属性

##### vue2中
~~~js
computed:{
  // 只有getter
  fullName(){
    return this.firstName+""+this.lastName;
  }
  // 有getter和setter
  fullName2(){
    get(){
      return this.firstName+""+this.lastName;
    },
    set(val){
      const names=value.split(" ");
      this.firstName=names[0]
      this.lastName=names[1]
    }
  }
}
~~~
##### vue3中
- 用法和vue2类似不过需要先引入computed
~~~js
const user = reactive({
  firstName: "zhang",
  lastName: "san",
});
const fullName = computed(() => {
  return user.firstName + "" + user.lastName;
});
// get set
const user = reactive({
  firstName: "zhang",
  lastName: "san",
});
const fullName = computed({
  get() {
    return user.firstName + "" + user.lastName;
  },
  set(value: String) {
    const names = value.split(" ");
    user.firstName = names[0];
    user.lastName = names[1];
  },
});
const update = () => {
  fullName.value = "li si";
};
~~~

#### 侦听属性

##### vue2
~~~js
watch:{
  obj(newValue,oldValue){
    console.log(newValue,oldValue)
  },
  // 立即监听,深度监听
  obj:{
    handelr(newValue,oldValue){
      console.log(newValue,oldValue)
    },
    immediate:true, // 初始化立即执行一次
    deep:true // 深度监视
  },
  // 监听对象上属性
  'obj.a'(newValue,oldValue){
    console.log(newValue,oldValue)
  },
}
~~~

##### vue3
- watch:指定监听数据
  - 监视指定的一个或者多个响应式数据,一旦数据变化,就自动执行监视回调
    - 如果是监听reactive对象中的属性,必须通过函数来指定
    - 监听多个数据,使用数组来指定
  - 默认初始时不执行回调,但可以通过配置immediate为true,来指定初始立即执行第一次
  - 通过配置deep为true,来制定深度监视
- watchEffect不指定监听数据
  - 不用直接指定要监视的数据,回调函数中使用的哪些响应式数据就监视哪些响应式数据
  - 默认初始会执行一次
>需要时需要先要引入watch和watchEffect
~~~js
const user = reactive({
  firstName: "zhang",
  lastName: "san",
});
const str = ref('abc')
watch(
  [str, () => user.firstName],
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
  }
);

// 更好用
watchEffect(() => {
  fullName.value = user.firstName + " " + user.lastName;
});

~~~

#### 生命周期
| vue2写法   |  vue3写法  | 
| ---------: | :---------- |
|beforeCreate  |      setup      |
|created       |      setup      |
|beforeMount   |  onBeforeMount  |
|mounted       |    onMounted    |
|beforeUpdate  | onBeforeUpdate  |
|update        |  onUpdated      |
|beforeDestroy | onBeforeUnmount |
|destroy       |   onUnmounted   |

>注意:beforeDestroy和destroy已经被废弃,如果想继续使用vue2写啊,对应的api是beforeUnmount和unMounted


#### ref获取dom元素
nextTick

~~~js
setup() {
    const iptRef = ref<HTMLElement | null>(null);
    onMounted(() => {
      nextTick(() => {
        iptRef.value && iptRef.value.focus();
      });
    });
    return {
      iptRef,
    };
  },
~~~

#### 自定义hook函数
> hook翻译成中文就是钩子函数(并不是生命周期钩子函数).其实之前学过的所有api,比如ref,reaactive,computed,waatch,onBeforeMount(等等都是钩子函数,只不过他们都是vue内部hook函数,夏安在为我们要学怎么自定义一个hook函数)
+ 创建一个函数,函数名称必须use开头
+ 函数必须return一些数据

需求 1:收集用户鼠标移动时在页面上的坐标
~~~js
function useMousePosition() {
  // 初始化坐标数据
  const x = ref(-1);
  const y = ref(-1);

  // 用于收集点击事件坐标函数
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  // 挂载后绑定点击监听
  onMounted(() => {
    document.addEventListener("mousemove", updatePosition);
  });

  // 卸载前解绑事件监听
  onUnmounted(() => {
    document.removeEventListener("mousemove", updatePosition);
  });

  return { x, y };
}
~~~


#### shallowReactive和shallowRef
- 它们都表示浅响应式
  - shallowReactive只能修改第一层
  - shallowRef只能修改整体数据时才生效
~~~vue
<template>
  <h3>m1 : {{ m1 }}</h3>
  <h3>m2 : {{ m2 }}</h3>
  <button @click="update">update</button>
</template >
  <script lang="ts">
    import {
      defineComponent,
      shallowReactive,
      shallowRef,
} from "vue";
export default defineComponent({
  setup() {
    const m1 = shallowReactive({a: 1, b: {c: 2 } });
    const m2 = shallowRef({a: 1, b: {c: 2 } });
    const update = () => {
      // m1.a += 1; // 有效
      m1.b.c += 1; // 无效
    };
    return {
      m1,
      m2,
      update,
    };
  },
});
</script>
~~~

#### readOnly与shallowReadonly
- 他们都表示只读代理对象
- readonly:
  - 深度只读
  - 设置readonly后,修改响应式数据会报错
- shallowReadonly
  - 浅只读
  - 设置shallowReadonly后,修改响应式数据的第一层属性会报错
- 应用场景:
  - 在某些特定情况下,我们不希望对数据进行更新操作,那就可以包装成一个只读代理对象来读取数据,而不能修改或删除

#### toRaw和markRaw
- toRaw:
  - 返回reactive或者readonly对象的原始数据
  - 这是一个还原方法,可以用于临时读取,得到的数据不具有响应式
- markRaw
  - 标记一个对象,使其不具有响应式
  - 应用场景:
    - 有些指不应设置为响应式的,例如复杂的第三方类实例或者Vue组件对象
    - 当渲染具有不可变数据源的大列表时,跳过代理转换可以提高性能
~~~vue
<template>
  <h3>state : {{ state }}</h3>
  <button @click="testToRaw">toRaw测试</button>
  <button @click="testMarkRaw" > markRaw测试</button >
</template >
  <script lang="ts">
    import {defineComponent, reactive, toRaw, markRaw} from "vue";
export default defineComponent({
      name: "Home",
  setup() {
    const state = reactive<any>({
      name: "zs",
      age: 20,
    });
    const testToRaw = () => {
      const user = {...toRaw(state)};
      user.age += 1;
      console.log(user);
      console.log(state);
    };
    const testMarkRaw = () => {
      const likes=['a','b'];
      // state.likes=likes;
      state.likes=markRaw(likes);
      setTimeout(() => {
        state.likes.push('c')
      }, 1000);
    };
    return {
        state,
        testToRaw,
        testMarkRaw,
    };
  },
});
</script>
~~~

#### toRef
- 为响应式对象上的某个属性创建一个ref引用,更新时引用对象会同步更新
- 区别:ref:拷贝了一份新的数据值单独操作,更新世相互不影响

~~~vue
<template>
  <h3>state : {{ state }}</h3>
  <h3>foo : {{ foo }}</h3>
  <h3>foo2 : {{ foo2 }}</h3>
  <button @click="update">update</button>
</template>
<script lang="ts">
import { defineComponent, toRef, reactive} from "vue";
export default defineComponent({
  setup() {
    const state = reactive({
      foo:1,
      bar:2
    });
    const foo=toRef(state,'foo');
    const foo2=ref(state.foo);
    const update=()=>{
      // state.foo++;
      // foo.value++;
      foo2.value++; // foo和state中数据不会更新
    }
    return {
      state,
      foo,
      foo2,
      update
    };
  },
});
</script>
~~~


#### customRef
- 用于自定义有一个ref,可以显式的控制依赖追踪和触发反应
- 接受一个工厂函数,两个参数分别是用于追踪的track与用于触发相应的trigger,并返回一个带有get和set属性对象
- 需求:使用customRef实现防抖函数
~~~vue
<template>
  <input type="text" v-model="keyword" placeholder="'请输入关键字..." />
  {{keyword}}
</template>
<script lang="ts">
import {
  defineComponent,
  customRef,
} from "vue";
export default defineComponent({
  name: "Home",
  setup() {
    function useDebounceRef<T>(value: T, delay: 2000) {
      let timeout: number;
      return customRef((track: any, trigger: any) => {
        return {
          get() {
            // 告诉vue追踪数据
            track();
            return value;
          },
          set(newValue: T) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              value = newValue;
              // 告诉vue触发页面更新
              trigger();
            }, delay);
          },
        };
      });
    }
    const keyword = useDebounceRef("",2000);
    return {
      keyword,
    };
  },
});
</script>
~~~

#### provide与inject
- provide和inject提供依赖注入,功能类似2.x的provide/inject
- 实现跨层级组件间通信


#### 响应式数据的判断
- isRef
- isReactive
- isReadonly
- isProxy


### 手写API

#### 手写reactive和shallowReactive
~~~js
const handler = {
  get(target, prop) {
    console.log("劫持get()", prop);
    return Reflect.get(target, prop);
  },
  set(target, prop, val) {
    console.log("劫持set()", prop, val);
    return Reflect.set(target, prop, val);
  },
  deleteProperty(target, prop) {
    console.log("劫持delete", prop);
    return Reflect.deleteProperty(target, prop);
  },
};
function reactive(obj) {
  if (obj && typeof obj === "object") {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") {
        obj[key] = reactive(value);
      }
    });
    return new Proxy(obj, handler);
  }
}
function shallowReactive(obj) {
  if (obj && typeof obj === "object") {
    return new Proxy(obj, handler);
  }
}
~~~

#### 手写ref和shallowRef
~~~js
const handler = {
  get(target, prop) {
    console.log("劫持get()", prop);
    return Reflect.get(target, prop);
  },
  set(target, prop, val) {
    console.log("劫持set()", prop, val);
    return Reflect.set(target, prop, val);
  },
  deleteProperty(target, prop) {
    console.log("劫持delete", prop);
    return Reflect.deleteProperty(target, prop);
  },
};
function reactive(obj) {
  if (obj && typeof obj === "object") {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "object") {
        obj[key] = reactive(value);
      }
    });
    return new Proxy(obj, handler);
  }
}
function shallowReactive(obj) {
  if (obj && typeof obj === "object") {
    return new Proxy(obj, handler);
  }
}
function ref(target) {
  if (target && typeof target === "object") {
    target = reactive(target);
  }
  return {
    _value: target,
    get value() {
      console.log("获取ref", this._value);
      return this._value;
    },
    set value(val) {
      console.log("设置ref", val);
      return this._value = val;
    },
  };
}
function shallowRef(target) {
  return {
    _value: target,
    get value() {
      console.log("获取ref", this._value);
      return this._value;
    },
    set value(val) {
      console.log("设置ref", val);
      return this._value = val;
    },
  };
}
~~~

#### isRef,isReactive,isReadonly
- 判断是否为对象和是否为__v_isRef



### 其他组件API