import { computed } from 'vue'
import { useStore } from 'vuex'
export function useMapper(mapper, mapFn) {
    console.log(mapper, mapFn);

    // 拿到store独享
    console.log(111);
    const store = useStore(); // store对象相当于optionApi中的this.$store
    // console.log(store);
    const mapStateFns = mapFn(mapper); // 进行遍历,获取数据的函数
    console.log(mapStateFns);
    // key:function 对数据进行转换
    const mapState = {}; // 生命空对象存值
    Object.keys(mapStateFns).forEach(fnKey => {
        const fn = mapStateFns[fnKey].bind({ $store: store }); // bind改变this指向,指向store对象
        mapState[fnKey] = computed(fn); // 通过计算属性 同步值
    })
    // 返回生产的数据对象
    return mapState
}