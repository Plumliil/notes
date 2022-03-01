import { createNamespacedHelpers, mapState } from 'vuex'
import {useMapper} from './useMapper'

export function useState(moduleName,mapper) {
    let mapperFn=mapState;
    if (typeof moduleName==='string'&&module.length>0) {
        mapperFn=createNamespacedHelpers(moduleName);
    }
    return useMapper(mapper,mapperFn)
}