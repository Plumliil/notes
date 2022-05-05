export default {
    // 专门处理异步,支持修改状态值的依然是mutations
    // 点击 -1 按钮 1s 后执行
    decreaseAsync(context) {
        context.commit('decrease')
    }
}