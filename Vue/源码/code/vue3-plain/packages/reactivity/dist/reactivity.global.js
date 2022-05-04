var vueReactivity = (() => {
  // packages/shared/src/index.ts
  var isObject = (value) => {
    return typeof value === "object" && value !== null;
  };

  // packages/reactivity/src/index.ts
  console.log(isObject(false));
})();
//# sourceMappingURL=reactivity.global.js.map
