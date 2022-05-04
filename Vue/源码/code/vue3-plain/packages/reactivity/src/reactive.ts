import { isObject } from "@vue/shared"
// 将数据转换成响应式数据
export function reactive(target) {
    if (!isObject(target)) {
        return
    }
    // 并没有重新定义属性,只是代理,在取值的时候调用get,
    // 赋值的时候调用set
    const proxy = new Proxy(target, {
        // target 当前对象
        // key 当前取的值的键名
        // value 当前赋的值
        // receiver 当前代理对象
        get(target, key, receiver) {
            return target[key]
        },
        set(target, key, value, receiver) {
            target[key]=value;
            return value;
        }
    })
    return proxy;
}

let target ={
    name:'zs',
    get alias(){
        return this.name
    }
}

const proxy = new Proxy(target, {
    // target 当前对象
    // key 当前取的值的键名
    // value 当前赋的值
    // receiver 当前代理对象
    // Reflect 反射 将原对象this改为代理对象 替代对象完成一些特殊操作
    // 如 属性访问 =赋值 in或with() delete new
    get(target, key, receiver) {
        console.log(key);
        return Reflect.get(target,key,receiver)
    },
    set(target, key, value, receiver) {
        target[key]=value;
        return true;
    }
})

proxy.alias