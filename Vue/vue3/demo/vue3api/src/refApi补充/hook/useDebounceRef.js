import { customRef } from 'vue'
// 自定义ref
export default function (value) {
    let timer = null;
    return customRef((track, trigger) => {
        // track 什么时候收集
        // trigger 什么时候更新
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                if(timer) clearTimeout(timer);
                timer=setTimeout(() => {
                    value = newValue
                    trigger();
                }, 1000);
            }
        }
    })
}