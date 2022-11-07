let data = { name: "zs", age: 19 };
const reactiveState = new WeakMap();
const enum ReactiveFlags {
  IS_REACTIVE = "__v_isReactive",
}

function reactive(obj: any) {
  if (typeof obj !== "object") return;
  // 避免重复代理
  if (obj[ReactiveFlags.IS_REACTIVE]) {
    return obj;
  }

  let exisitingProxy = reactiveState.has(obj);
  if (exisitingProxy) return reactiveState.get(obj);
  const proxy = new Proxy(obj, {
    get(target, key, receiver) {
      if (key === ReactiveFlags.IS_REACTIVE) {
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
