class Dep {
    constructor() {
        this.subscribes = new Set();
    }
    // addEffect(effect) {
    //     this.subscribes.add(effect);
    // }
    depend() {
        if (activeEffect) {
            this.subscribes.add(activeEffect)
        }
    }
    notify() {
        this.subscribes.forEach(effect => effect())
    }
}
let activeEffect = null;
function watchEffect(effect) {
    activeEffect = effect;
    effect();
    activeEffect = null;
}

const targetMap = new WeakMap();
function getDep(target, key) {
    // 根据target对象取出对于map对象
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target,depsMap);
    }
    // 取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep()
        depsMap.set(key, dep)
    }
    return dep
}

// vue2数据劫持
// function reactive(raw) {
//     Object.keys(raw).forEach(key => {
//         const dep = getDep(raw, key);
//         let value = raw[key];
//         Object.defineProperty(raw, key, {
//             get() {
//                 dep.depend()
//                 return value
//             },
//             set(newValue) {
//                 value=newValue;
//                 dep.notify()
//             }
//         })
//     })
//     return raw
// }
function reactive(raw) {
    return new Proxy(raw,{
        get(target,key){
            const dep=getDep(target,key);
            dep.depend();
            return target[key]
        },
        set(target,key,newValue){
            const dep=getDep(target,key);
            target[key]=newValue;
            dep.notify()
        }
    })
}

// 响应式系统

// const info = reactive({ counter: 100, name: 'zs' });
// // info.counter=1231;
// console.log(info);
// const foo = reactive({ hight: 1.80 })
// const dep = new Dep();

// watchEffect(function () {
//     console.log('effect1',info.counter * 2, info.name);
// })
// watchEffect(function () {
//     console.log('effect2',info.counter * info.counter);
// })
// watchEffect(function () {
//     console.log('effect3',info.counter + 10, info.name);
// })
// watchEffect(function(){
//     console.log('effect4',foo.hight);
// })
// // info.counter++;
// // info.name = 'ls';
// foo.hight=1.78;