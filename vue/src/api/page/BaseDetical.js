import * as API from '../'

export default {
    fundinfo :params=>{
        return API.GET('fundinfo',params) //财富管理基本信息 
    },
    fundsfee :params=>{
        return API.GET('fundsfee',params) //财富管理基金费率
    },
    fundshow :params=>{
        return API.GET('fundshow',params) //财富管理市场表现曲线
    },
    fundcode :params=>{
        return API.GET('fundcode',params) //财富管理业绩表现
    },
    assetalloction :params=>{
        return API.GET('assetalloction',params) //财富管理资产分布
    },
    bonddistribution :params=>{
        return API.GET('bonddistribution',params) //财富管理持债分布
    },
    fundmatcgcustmoer :params=>{
        return API.GET('fundmatcgcustmoer',params) //财富管理匹配客戶
    },
    attentions :params=>{
        return API.GET('attentions',params) //财富管理匹配客戶关注   
    },
    stockdistribution :params=>{
        return API.GET('stockdistribution',params) //财富管理持股分布
    },
    fundpj :params=>{
        return API.GET('fundpj',params)  //财富管理基金评价
    }
}