/* 
    副作用函数:fn可以根据状态变化重新执行,effect可以嵌套
*/

// 定义一个全局变量
export let activeEffect = undefined;

class ReactiveEffect {
    // 这里表示在实例上新增active属性
    public active = true; // effect默认激活状态
    public parent = null;
    // 记录effect收集的属性
    public deps = [];
    constructor(public fn ) {
        // 用户传递参数放到this上
    }
    // 执行effect,默认执行一次
    run() {
        // 如果非激活状态只需要执行函数 不需要进行依赖收集
        if (!this.active) {
            return this.fn()
        };

        // 依赖收集 核心是将当前effect和稍后渲染属性关联在一起
        try {
            debugger
            this.parent = activeEffect;
            activeEffect = this;
            return this.fn(); // 稍后调用取值操作时可以渠道这个全局activeEffect
        } finally {
            activeEffect = this.parent;
            this.parent = null
        }
    }
}


export function effect(fn) {
    const _effect = new ReactiveEffect(fn);
    _effect.run();
}

const targetMap=new WeakMap();


export function track(target,type,key){
    debugger
    if(!activeEffect) return;
    let depsMap=targetMap.get(target);
    if(!depsMap){
        targetMap.set(target,(depsMap=new Map()))
    }
    let dep=depsMap.get(key);
    if(!dep){
        depsMap.set(key,(dep=new Set()))
    }
    let shouldTrack=!dep.has(activeEffect); // 去重
    if(shouldTrack){
        dep.add(activeEffect);
        debugger
        // 稍后清理时用到
        activeEffect.deps.push(dep)
    }
}

// 单向记录，属性记录effect
// 反向记录，effect被哪些属性收集过






// export function effect(){

// }