function createApp(rootCompontent) {
    console.log(rootCompontent);
    return {
        mount(selector) {
            const container = document.querySelector(selector);
            let isMounted = false;
            let oldVNode = null;
            watchEffect(() => {
                if (!isMounted) {
                    mount(rootCompontent.rander(), container);
                    isMounted = true;
                } else {
                    const newVNode = rootCompontent.rander();
                    oldVNode = newVNode;
                    patch(oldVNode, newVNode);
                    
                    console.log('old',oldVNode);
                }
            })
        }
    }
}