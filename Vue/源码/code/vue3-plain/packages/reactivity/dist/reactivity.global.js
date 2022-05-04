var VueReactivity = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target2, all) => {
    for (var name in all)
      __defProp(target2, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // packages/reactivity/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    effect: () => effect,
    reactive: () => reactive
  });

  // packages/reactivity/src/effect.ts
  function effect() {
  }

  // packages/shared/src/index.ts
  var isObject = (value) => {
    return typeof value === "object" && value !== null;
  };

  // packages/reactivity/src/reactive.ts
  function reactive(target2) {
    if (!isObject(target2)) {
      return;
    }
    const proxy2 = new Proxy(target2, {
      get(target3, key, receiver) {
        return target3[key];
      },
      set(target3, key, value, receiver) {
        target3[key] = value;
        return value;
      }
    });
    return proxy2;
  }
  var target = {
    name: "zs",
    get alias() {
      return this.name;
    }
  };
  var proxy = new Proxy(target, {
    get(target2, key, receiver) {
      console.log(key);
      return Reflect.get(target2, key, receiver);
    },
    set(target2, key, value, receiver) {
      target2[key] = value;
      return true;
    }
  });
  proxy.alias;
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=reactivity.global.js.map
