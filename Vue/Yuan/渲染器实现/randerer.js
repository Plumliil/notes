// 返回一个vnode
const h = (tag, props, children) => {
    return {
        tag,
        props,
        children
    }
}
const mount = (vnode, container) => {
    // 创建出真实元素，并在vnode上保留el
    const el = vnode.el = document.createElement(vnode.tag);
    console.log(el);
    // 处理props
    if (vnode.props) {
        for (const key in vnode.props) {
            const value = vnode.props[key]
            if (key.startsWith('on')) {
                // 事件监听的判断
                // console.log(key.toLowerCase());
                el.addEventListener(key.slice(2).toLowerCase(), value)
                // el.setAttribute(key, value)
                // console.log(el);
            } else {
                el.setAttribute(key, value)
            }

        }
    }
    // 处理children
    console.log(vnode.children);
    if (vnode.children) {
        if (typeof vnode.children === 'string') {
            el.textContent = vnode.children;
        } else {
            vnode.children.forEach(item => {
                mount(item, el)
            })
        }
    }
    // 将el挂载到container中
    container.appendChild(el)
}

const patch = (n1, n2) => {
    console.log(n1);
    console.log(n2);
    if (n1.tag !== n2.tag) {
        const n1ElParent = n1.el.parentElement;
        n1ElParent.removeChild(n1.el)
        mount(n2, n1ElParent)
    } else {
        console.log(n1.el);
        // 1.取出element对象,并n2中保存
        const el = n2.el = n1.el;
        // 2.处理props
        const oldProps = n1.props || {};
        const newProps = n2.props || {};
        // 2.1获取所有newProps添加到el
        for (const key in newProps) {
            const oldValue = oldProps[key];
            const newValue = newProps[key];
            if (newValue !== oldValue) {
                if (key.startsWith('on')) {
                    // 事件监听的判断
                    el.addEventListener(key.slice(2).toLowerCase, newValue)
                } else {
                    el.setAttribute(key, newValue)
                }
            }
        }
        // 2.2删除旧的props
        for (const key in oldProps) {
            if (!(key in newProps)) {
                if (newValue !== oldValue) {
                    if (key.startsWith('on')) {
                        // 事件监听的判断
                        const value = oldProps[key]
                        el.removeEventListener(key.slice(2).toLowerCase, value)
                    } else {
                        el.removeAttribute(key)
                    }
                }
            }
        }
        // 处理children
        const oldChildren = n1.children;
        const newChildren = n2.children;
        if (typeof newChildren === 'string') {
            // 边界判断 (edge case)
            if (typeof oldChildren === 'string') {
                if (newChildren !== oldChildren) {
                    el.textContent = newChildren
                }
            }
            else {
                el.innerHTML = newChildren;
            }
        } else {
            // newChildren不是string而是数组
            if (typeof oldChildren === 'string') {
                el.innerHTML = '';
                newChildren.forEach(item => {
                    mount(item, el)
                })
            } else {
                // 前面有相同节点的进行patch操作
                const commonLength = Math.min(oldChildren.length, newChildren.length);
                for (let i = 0; i < commonLength; i++) {
                    patch(oldChildren[i], newChildren[i])
                }
                // newChildren.length > oldChildren.length
                if (newChildren.length > oldChildren.length) {
                    newChildren.slice(oldChildren.length).forEach(item => {
                        mount(item, el)
                    })
                }
                // newChildren.length < oldChildren.length
                if(newChildren.length < oldChildren.length){
                    oldChildren.slice(newChildren.length).forEach(item=>{
                        el.removeChild(item.el)
                    })
                }
                console.log(commonLength);
            }
        }
    }
}