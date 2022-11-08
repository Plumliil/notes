"use strict";
let data = { name: "zs", age: 19 };
const reactiveState = new WeakMap();
function reactive(obj) {
    if (typeof obj !== "object")
        return;
    // 避免重复代理
    if (obj["__v_isReactive" /* ReactiveFlags.IS_REACTIVE */]) {
        return obj;
    }
    let exisitingProxy = reactiveState.has(obj);
    if (exisitingProxy)
        return reactiveState.get(obj);
    const proxy = new Proxy(obj, {
        get(target, key, receiver) {
            if (key === "__v_isReactive" /* ReactiveFlags.IS_REACTIVE */) {
                return true;
            }
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            return Reflect.set(target, key, value, receiver);
        },
    });
    reactiveState.set(obj, proxy);
    return proxy;
}
const state1 = reactive(data);
const state2 = reactive(state1);
console.log(state1);
console.log(state2);
console.log(state1 === state2);
