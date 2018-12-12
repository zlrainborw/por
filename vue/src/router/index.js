import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/shouye',
                    component: resolve => require(['../components/page/Shouye.vue'], resolve)   //首頁
                },
                {
                    path: '/Service',
                    name:'Service',
                    component: resolve => require(['../components/page/Service.vue'], resolve),  //智能服务
                },
                {
                    path: '/miaodong',
                    name:'miaodong',
                    component: resolve => require(['../components/page/miaodong.vue'], resolve)  //秒懂
                },
                {
                    path: '/WealthMore',
                    name:'WealthMore',
                    component: resolve => require(['../components/page/WealthMore.vue'], resolve)  //財富管理更多
                },
                {
                    path: '/BaseDetails',
                    name:'BaseDetails',
                    component: resolve => require(['../components/page/BaseDetails.vue'], resolve)  //財富管理基本详情
                },
                {
                    path: '/CurrencyDetails',
                    name:'CurrencyDetails',
                    component: resolve => require(['../components/page/CurrencyDetails.vue'], resolve)  //財富管理货币详情
                },
                {
                    path: '/Wealth',
                    component: resolve => require(['../components/page/Wealth.vue'], resolve),  //財富管理
                    // children:[
                    //     { 
                    //         path: '/WealthMore',
                    //         name:'WealthMore',
                    //         component: resolve => require(['../components/page/WealthMore.vue'], resolve) 
                    //     },
                    // ]
                },
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                },
                {
                    path: '/vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: '/vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                
                {
                    path: '/basecharts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-echarts-v3组件
                },
                {
                    path: '/mixcharts',
                    component: resolve => require(['../components/page/MixCharts.vue'], resolve)    // vue-echarts-v3组件
                },
                {
                    path: '/WealthDetails',
                    component: resolve => require(['../components/page/WealthDetails.vue'], resolve)    // 详情
                },
                {
                    path: '/miaodong',
                    name:'miaodong',
                    component: resolve => require(['../components/page/miaodong.vue'], resolve)    // 秒懂
                },
                {
                    path: '/Personality',
                    name:'Personality',
                    component: resolve => require(['../components/page/Personality.vue'], resolve)    // 个性定制
                },
                {
                    path: '/Pro',
                    name:'Pro',
                    component: resolve => require(['../components/page/Pro.vue'], resolve)    // 进度条
                },
               
                
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
