import * as API from '../'

export default {
    fundcos :params=>{
        return API.GET('fundcos',params) //财富管理基金列表
    },
    fundpopular :params=>{
        return API.GET('fundpopular',params) //爆款基金列表
    },
    fundselection :params=>{
        return API.GET('fundselection',params) //优选基金列表
    },
    fundrobust :params=>{
        return API.GET('fundrobust',params) //穩健基金列表
    }
}