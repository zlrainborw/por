import * as API from '../'

export default {
    get_customizeclass :params=>{
        return API.GET('get_customizeclass',params) //客户分类左侧列表
    },
    customerclass :params=>{
        return API.GET('customerclass',params) //客户分类表格
    },
    attentions :params=>{
        return API.GET('attentions',params) //客户分类添加关注
    },
    attentions :params=>{
        return API.GET('attentions',params) //客户分类添加关注
    },
    get_search :params=>{
        return API.GET('get_search',params) //客户分类自定义分类数据请求
    }
}