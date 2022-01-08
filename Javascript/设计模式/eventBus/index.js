
class EventBus {
    constructor() {
        this.callbacks = {
            // eventName:callback
        }
    }
    // 绑定
    on(eventName, callback) {
        if (this.callbacks[eventName]) {
            this.callbacks[eventName].push(callback);
        } else {
            this.callbacks[eventName] = [callback];
        }
    }
    // 分发
    emit(eventName, data) {
        if(this.callbacks[eventName]&&this.callbacks[eventName].length>0){
            this.callbacks[eventName].forEach(callback=>{
                callback(data)
            })
        }
    }
    // 解绑
    off(eventName) {
        if(this.callbacks[eventName]){
            this.callbacks[eventName]=[]
        }
    }
}

let e = new EventBus()

e.on('bus', data => {
    console.log(data.name);
});
e.on('event', data => {
    console.log(data.name);
});
e.emit('bus', {
    name: 'bus'
});
e.emit('event', {
    name: 'event'
});
// e.off('bus')