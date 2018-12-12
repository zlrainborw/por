import * as API from '../'
export default {
    group :params=>{
        return API.GET('group',params) //组合构成
    },
    market :params=>{
        return API.GET('market',params) //市场表现
    },
    rights :params=>{
        return API.GET('rights',params) //右面的表格
    },
    client :params=>{
        return API.GET('client',params) //客户匹配
    },
}