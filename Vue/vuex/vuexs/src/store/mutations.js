export default {
    // state store中的state payload是一个形参,如果组件在commit时有传参,
    // 就存在,如果没有传参就为undefined
    increase(state, payload = 1) {
        state.num += payload;
    },
    decrease(state) {
        state.num--;
    }
}