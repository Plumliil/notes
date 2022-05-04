class Dep {
    constructor() {
        this.subscribes = new Set();
    }
    addEffect(effect) {
        this.subscribes.add(effect);
    }
    notify(){
        this.subscribes.forEach(effect=>effect())
    }
}

// 响应式系统

const info = { counter: 100 }

const dep = new Dep();

dep.addEffect(doubleCounter)
dep.addEffect(powerCounter)

function doubleCounter() {
    console.log(info.counter * 2);
}
function powerCounter() {
    console.log(info.counter * info.counter);
}

info.counter++;

dep.notify()