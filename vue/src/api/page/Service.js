import * as API from '../'

export default {
    customers : params => {  //我的关注
        return API.GET('customers', params)
    },
    events: params=>{  //重要代办
        return API.GET('events', params)
    },
    attentions: params=>{
        return API.GET('attentions',params) //添加关注
    },
    edit: params=>{
        return API.GET('edit',params) //我的关注编辑
    },
    search :params=>{
        return API.POST('search',params) //智能选课保存
    },
    // search :params=>{
    //     return API.GET('search',params) //智能选课保存
    // },
    attentionall :params=>{
        return API.GET('attentionall',params) //批量关注
    }
}