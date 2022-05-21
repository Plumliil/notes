import { activeEffect } from "./effect";
export const enum ReactiveFlags {
    IS_REACTIVE = '__v_isReactive'
}


export const mutableHandlers = {
    get(target, key, receiver) {
        // 监控用户设置值
        if (key === ReactiveFlags.IS_REACTIVE) {
            return true;
        }
        return Reflect.get(target.key, receiver)
    },
    set(target, key, value, receiver) {
        // 监控用户取值

        return Reflect.set(target.key, value, receiver);
    }
}