import { computed } from 'vue'
import { mapState,useStore } from 'vuex'


export function useState(mapper) {
    // 拿到store独享
    const store = useStore(); // store对象相当于optionApi中的this.$store
    const storeStateFns = mapState(mapper); // 进行遍历,获取数据的函数
    // key:function 对数据进行转换
    const storeState = {}; // 生命空对象存值
    Object.keys(storeStateFns).forEach(fnKey => {
        const fn = storeStateFns[fnKey].bind({ $store: store }); // bind改变this指向,指向store对象
        storeState[fnKey] = computed(fn); // 通过计算属性 同步值
    })
    // 返回生产的数据对象
    return storeState
}