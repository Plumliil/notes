// 发布订阅模式

// 各有优劣
// 数组形式可以中途删除事件，而对象形式不是很可以
// 对象事件可以按时间名删除事件，数组形式不可以

// 数组实现 只添加方法 可能遗留问题 数组塌陷
class Sub {
    constructor() {
        this.pond = [];
    }
    // 向事件池中追加方法(重复处理)
    add(func) {
        if (!this.pond.includes(func)) return this.pond.push(func);
    }
    // 从事件池中移除方法
    remove(func) {
        if (this.pond.includes(func)) {
            this.pond = this.pond.filter(fn => {
                return fn !== func;
            });
        }
    }
    // 通知事件池种方法，按顺序执行
    fire(...args) {
        this.pond.forEach(fn => {
            fn.call(this, ...args)
        })
    }
}

// 对象实现，方法事件一起添加
class PubSub {
    constructor() {
        this.id = 1;
        this.callbacks = {

        };
    }
    publish(eventName, data) {
        if (this.callbacks[eventName]) {
            Object.keys(this.callbacks[eventName]).forEach(key => {
                this.callbacks[eventName][key](data);
            })
        }
    }
    subscribe(eventName, callback) {
        let token = 'token_' + this.id++;
        if (this.callbacks[eventName]) {
            this.callbacks[eventName][token] = callback;
        } else {
            this.callbacks[eventName] = {
                [token]: callback
            }
        }
    }
    unSubscribe(eventName) {
        if (eventName) {
            delete this.callbacks[eventName];
        } else {
            this.callbacks = {}
        }
    }
};

let p = new PubSub();

let p2 = new Sub();

let fn1=function(v){
    console.log(v+'-----'+1);
}
let fn2=function(v){
    console.log(v+'-----'+2);
}
let fn3=function(v){
    console.log(v+'-----'+3);
}
let fn4=function(v){
    console.log(v+'-----'+4);
}

p.subscribe('print', data => {
    console.log('status' + '---------' + data.status);
})
p.subscribe('print', data => {
    console.log('Ready' + '---------' + data.event);
})
p.publish('print', {
    event: 'print',
    status: 'success'
})

p2.add(data => {
    console.log('status' + '---------' + data.status);
})
p2.add(data => {
    console.log('Ready' + '---------' + data.event);
})
p2.fire({
    event: 'print2',
    status: 'success2'
})

// p.subscribe('p',fn1)
// p.subscribe('p',fn2)
// p.subscribe('p',fn3)
// p.subscribe('p',fn4)
// p2.add(fn1)
// p2.add(fn2)
// p2.add(fn3)
// p2.add(fn4)
// p.publish('p','p')
// p2.fire('p2')

