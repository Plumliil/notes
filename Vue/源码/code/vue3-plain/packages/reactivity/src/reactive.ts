/* 
    reactive:
    条件:
        传入的值必须是一个对象,可以创建代理
    解决主要问题:
        1.对象被重复代理:使用weakmap收集
            const state1 = reactive(data);
            const state2 = reactive(data);
        2.代理已经代理过的对象:使用关键字,来命中靶向
            const state1 = reactive(data);
            const state2 = reactive(state1);
*/

import { isObject } from "@vue/shared";
import { mutableHandlers, ReactiveFlags } from "./baseHandler";
// 将数据转换成响应式数据
const reactiveMap = new WeakMap();
// 实现同一个对象代理多次,返回同一个代理
// 代理对象再次被代理可以直接被返回 
export function reactive(target) {
    if (!isObject(target)) return;
    if (target[ReactiveFlags.IS_REACTIVE]) {
        return target;
    }
    // 检查是否已经代理(使用reactive(target))过
    let exisitingProxy = reactiveMap.get(target);
    if (exisitingProxy) {
        return exisitingProxy;
    }

    // 普通对象代理通过new Proxy代理一次

    // 下一次传递是proxy 可以检查一下有没有被代理过,
    // 如果访问这个proxy由get方法时说明已经被访问过
    const proxy = new Proxy(target, mutableHandlers)
    reactiveMap.set(target, proxy);
    return proxy;
}












// reactive只能做对象的代理

// import {
//     isObject
// } from "@vue/shared";

// const reactiveMap = new WeakMap(); // key只能是对象
// const enum ReactiveFlags {
//     IS_REACTIVE = '__V_isReactive';
// }

// export function reactive(target) {
//     if (!isObject(target)) return;
//     if (target[ReactiveFlags.IS_REACTIVE]) {
//         return target
//     }
//     let exisitingProxy = reactiveMap.get(target);

//     if (exisitingProxy) {
//         return exisitingProxy
//     }
//     // 没有重新定义，只是代理，取值的时候调用get，赋值的时候调用set
//     const proxy = new Proxy(target, {
//         get(target, key, receiver) {
//             if (key === ReactiveFlags.IS_REACTIVE) {
//                 return true;
//             }
//             return Reflect.get(target, key, receiver)
//         },
//         set(target, key, value, receiver) {
//             return Reflect.set(target, key, value, receiver)
//         }
//     })
//     reactiveMap.set(target, proxy);
//     return proxy;
// }