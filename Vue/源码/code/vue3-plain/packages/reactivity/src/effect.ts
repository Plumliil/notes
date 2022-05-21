/* 
    副作用函数:fn可以根据状态变化冲洗执行,effect可以嵌套
*/

export let activeEffect = undefined;

class ReactiveEffect {
    // 这里表示在实例上新增active属性
    public active = true; // effect默认激活状态
    public fn = null;
    constructor(fn) { // 用户传递参数放到this上
    }
    // 执行effect,默认执行一次
    run() {
        // 如果非激活状态只需要执行函数
        if (!this.active) { this.fn() };

        // 依赖收集 核心是将当前effect和稍后渲染属性关联在一起
        try {
            activeEffect = this;
            this.fn(); // 稍后调用取值操作时可以渠道这个全局activeEffect
        } finally {
            activeEffect = undefined;
        }
    }
}


export function effect(fn) {
    const _effect = new ReactiveEffect(fn);
    _effect.run();
}