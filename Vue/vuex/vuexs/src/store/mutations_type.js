export const MUTATIONS_TYPE = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

export default {
    [MUTATIONS_TYPE.INCREASE](state, payload = 1) {
        state.num += payload;
    },
    [MUTATIONS_TYPE.DECREASE](state) {
        state.num--;
    }
}