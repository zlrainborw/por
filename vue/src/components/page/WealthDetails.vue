<template>
    <div class="warps_box">
        <div class="header_title" style="position:relative">
            <p style="font-size:22px;text-align: center;padding-top:24px">基于智能算法的资产配置</p>
            <p style="line-height: 2;padding:28px 32px 0px 40px">系统将智能识别您的交易偏好、风险偏好，为您推荐合适的资产配置组合。我们的组合沿用华尔街的资产配置框架，应用性能强大的优化器，多种智能</p>
            <p style="padding:0px 32px 0px 40px">算法为您提供优质的组合服务,系统将智能识别您的交易偏偏好、风险偏好,为您推荐合适的资产配置组合。系统将智能识别弄得交易偏好。</p>
            <el-button type="text" @click="open" class="btn">个性定制</el-button>
            <a href="#" style="display:block;position: absolute;top:10px;right:10px;color: #00a8df">
                <span>了解更多</span>
            </a>     
        </div> 
        <h3 class="titles">组合构成</h3>
        <div class="group_box">
            <div class="group_left" style="position:relative">
                <div class="mix_echarts">
                    <IEcharts :option="group" style="height:100%;width: 100%;"></IEcharts>
                </div>
                <div>
                    <div class="text-box" style="margin-left:78px;margin-top: -100px;">
                        <p>平衡2号&nbsp&nbsp&nbsp&nbsp历史年化收益率：<span>9.24%</span>&nbsp&nbsp&nbsp&nbsp波动率：<span>5.3%</span></p>
                    </div>
                    <div class="type-box" style="margin-left:58px;margin-top:60px;">
                        <span>保守型</span>
                        <span style="padding-left:240px">激进型</span>
                    </div>
                    <!-- 进度条 -->
                    <div class="box">
                        <div class="top"></div>
                        <div class="ww">
                                    <div class="cen" ref="line" v-on:click="Cen">
                        </div> <p class="p" ref="p"></p>
                        </div>
                        <div class="num" ref="nums"></div>
                        <div class="botton"></div>
                        
                    </div>


                    <!-- <div class="mix_echarts" style="position:absolute;left:-30px;top:-35px">
                        <IEcharts :option="pro" style="height:100%;width: 100%;"></IEcharts>
                    </div> -->
                    <!-- <div style="position:absolute;left:50px;top:354px;color: #999;">
                        <span style="padding-left:16px;" @click="click()">1.0</span>
                        <span style="padding-left:14px">2.0</span>
                        <span style="padding-left:12px">3.0</span>
                        <span style="padding-left: 12px">4.0</span>
                        <span style="padding-left: 12px">5.0</span>
                        <span style="padding-left: 12px">6.0</span>
                        <span style="padding-left: 12px">7.0</span>
                        <span style="padding-left: 12px">8.0</span>
                        <span style="padding-left: 12px">9.0</span>
                        <span style="padding-left:9px">10.0</span> 
                    </div> -->
                </div>
            </div>
            <div class="group_right">
                <div class="table_boxs">
                    <table cellspacing="0" cellpadding="0">
                            <thead>
                                <tr>
                                    <th width="100px">资产类别</th>
                                    <th width="100px">基金代码</th>
                                    <th width="120px">基金名称 </th>
                                    <th width="100px">占比</th>
                                </tr>
                            </thead>
                            <tbody v-for="(item,index) in rightList" :key={index}>
                                
                                <tr> 
                                    <td width="100px">{{item.name}}</td> 
                                    <td width="100px">{{item.code}}</td>
                                    <td width="120px">{{item.hold}}</td>
                                    <td width="100px">{{item.people}}%</td>
                                </tr> 
                                <!-- <tr> 
                                   <td width="100px">股票类</td> 
                                    <td width="100px">112240</td>
                                    <td width="120px">工银医药健康股票A</td>
                                    <td width="100px">13%</td>
                                </tr>
                                <tr> 
                                    <td width="100px">股票类</td>
                                    <td width="100px">112240</td>
                                    <td width="120px">工银医药健康股票A</td>
                                    <td width="100px">13%</td>
                                </tr>
                                <tr> 
                                    <td width="100px">股票类</td>
                                    <td width="100px">112240</td>
                                    <td width="120px">工银医药健康股票A</td>
                                    <td width="100px">13%</td>
                                </tr>
                                <tr> 
                                    <td width="100px">股票类</td>
                                    <td width="100px">112240</td>
                                    <td width="120px">工银医药健康股票A</td>
                                    <td width="100px">13%</td>
                                </tr> -->
                            </tbody>
                        </table>
                </div>
            </div>

        </div>
        <h3 class="titles">市场表现</h3>
        <div class="market_box">
            <div class="mix_echart">
                <IEcharts :option="market" style="height:80%;width:900px;"></IEcharts>
            </div>
        </div>
        <h3 class="titles">匹配客户</h3>
        <div class="client_box">
                <div class="table_box">
						<table cellspacing="0" cellpadding="0">
							<thead>
								<tr>
									<th>客户名</th>
									<th>客户号</th>
									<th>风险等级 </th>
									<th>客户净资产</th>
									<th>开户时长</th>
									<th>信息</th>
									<th>添加至关注客户</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(item,index) in clientList" :key={index}> 
									<td>{{item.name}}</td>
									<td>{{item.code}}</td>
									<td>{{item.hold}}</td>
									<td>{{item.people}}</td>
									<td>{{item.open}}天</td>
									
                                    <td @click="go()" style="color:#00a8df">秒懂</td>
                                    
									<td @click="add()">+</td>
								</tr>
								<!-- <tr>
									<td>张向西</td>
									<td>11112240</td>
									<td>C4</td>
									<td>6666</td>
									<td>300天</td>
									<a href="#miaodong" style="color:#00a8df">
                                        <td>秒懂</td>
                                    </a>
									<td>+</td>
								</tr>
								<tr>
									<td>张向西</td>
									<td>11112240</td>
									<td>C4</td>
									<td>6666</td>
									<td>300天</td>
									<a href="#miaodong" style="color:#00a8df">
                                        <td>秒懂</td>
                                    </a>
									<td>+</td>
								</tr>
								<tr>
									<td>张向西</td>
									<td>11112240</td>
									<td>C4</td>
									<td>6666</td>
									<td>300天</td>
									<a href="#miaodong" style="color:#00a8df">
                                        <td>秒懂</td>
                                    </a>
									<td>+</td>
								</tr>
								<tr>
									<td>张向西</td>
									<td>11112240</td>
									<td>C4</td>
									<td>6666</td>
									<td>300天</td>
                                    <a href="#miaodong" style="color:#00a8df">
                                        <td>秒懂</td>
                                    </a>
									<td>+</td>
								</tr> -->
							</tbody>
						</table>
                        <div class="block">
                            <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage4"
                              :page-sizes="[5,10, 15, 20, 25]"
                              :page-size="5"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="23">
                            </el-pagination>
                        </div>
				</div>
        </div>
    </div>
  
</template>
<script>
     import IEcharts from 'vue-echarts-v3';
     import axios from "axios"
     import API from "../../api/page/details.js";

     export default {
            data:function(){
                return{
                    timeLineData : [],
                    n : 1,
                    //组合
                    group:{
                //         color:["#8FBEF6","#FEAB75","#B2E4FB","#ED9CEB","#4CE392"],
                // //         title : {
                // //             text: '组合构成',
                // //             left:'21px',
                // //             top:'20px',
                // //               textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                // //                 fontFamily: 'Arial, Verdana, sans...',
                // //                 fontSize: 14,
                // //                 fontStyle: 'normal',
                // //                 fontWeight: 'normal',
                // //             },
                // //         },
                //         tooltip : {
                //             trigger: 'item',
                //             formatter: "{a} <br/>{b} : {c} ({d}%)"
                //         },
                //         series: [
                //             {
                //                 name: '组合结构',
                //                 type: 'pie',
                //                 radius: ['45%', '50%'],  
                //                 center: ['50%', '40%'],
                //                 left:'94px',
                //                 label:{
                //                     formatter: '{b}: {d}%',
                //                     emphasis: {
                //                         show: true,
                //                         textStyle: {
                //                             fontSize: '16',
                //                             fontWeight: 'normal'
                //                         }
                //                     }
                //                 },
                //                 data:[
                //                     {value:335, name:'货币类'},
                //                     {value:310, name:'商品类'},
                //                     {value:234, name:'海外类'},
                //                     {value:135, name:'权益类'},
                //                     {value:135, name:'债券类'}
                //                 ],
                //                 itemStyle: {
                //                     emphasis: {
                //                         shadowBlur: 10,
                //                         shadowOffsetX: 0,
                //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
                //                     }
                //                 }
                //             }
                //         ]
                    },
                    //市场
                    market:{
                    //         color:["#E7B3E2","#8CB3E3"],
                    // //         title : {
                    // //             text: '所有客户总盈亏',
                    // //             left:'46px',
                    // //             // top:'56px',
                    // //               textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    // //                 fontFamily: 'Arial, Verdana, sans...',
                    // //                 fontSize: 16,
                    // //                 fontStyle: 'normal',
                    // //                 fontWeight: 'normal',
                    // //             },
                    // //         },
                    //         tooltip : {
                    //             trigger: 'axis'
                    //         },
                    //         grid:{
                    //             top:'20%'
                    //         },
                    //         legend: {
                    //             orient: 'horizontal',
                    //             top:'5%'   
                    //         },
                    //         xAxis: [
                    //             {
                    //                 type: 'category',
                    //                 axisTick: {
                    //                    show:false
                    //                 },
                    //                 axisLine:{
                    //                     show:false
                    //                 },
                    //                 // splitLine:{
                    //                 //     show:false
                    //                 // },
                    //                 data: ['01-01','02-15','04-01','05-15','07-01','08-15','10-01','11-15']
                    //             }
                    //         ],
                    //         yAxis:[{
                    //             type: 'value',
                    //             name:'收益率(%)',
                    //             min:-41.39,
                    //             max:4.07,
                    //             axisTick:{
                    //                 show:false
                    //             },
                    //             splitLine:{
                    //                 show:true
                    //             },
                    //             axisLine:{
                    //                 show:false
                    //             }
                    //             // interval:5.0
                    //         }],
                    //         // {
                    //         //     type: 'value',
                    //         //     name:'',
                    //         //     position: '',
                    //         //     axisLine: {
                    //         //     lineStyle: {
                    //         //         color: '#fff'
                    //         //         }
                    //         //     },
                    //         //     axisLabel: {
                    //         //         formatter: '{value} '
                    //         //     }
                    //         // }
                    //         series: [
                    //         {
                    //             name: "本产品",
                    //             symbol:'none',
                    //             smooth:'true',
                    //             type: "line",
                    //             data: [0.5, 2.5, 0.6, 0.4, 0.34, 2.0,0.9,0.5, 0.6]
                    //         },
                    //         {
                    //             name: "中证500指数",
                    //             symbol:'none',
                    //             smooth:'true',
                    //             type: "line",
                    //             data: [0.5, 0.4, 0.3, 0.9, 0.6, 0.7,0.25,0.5, 0.4]
                    //         }]
                        },
                        pro:{},
                        //进度条
                        
                }

            },
            mounted() {
                this.groupData()
                this.marketData()
                this.rightsData()
                this.clientData()
                let nhtml=''
        for (var i=0;i<10;i++)
        {
            nhtml += `<span class="nspan" style=" width : 45px ;">${i+1}</span>`
        }
        this.$refs.nums.innerHTML=nhtml;

        let chtml=''
        for (var i=0;i<10;i++)
        {
            chtml += `<span class="cspan" style=" color : #fff ; width : 45px ; height : 30px">${i+1}</span>`
        }
        this.$refs.line.innerHTML=chtml;
            },
            methods:{
                //进度条
                Cen:function(e){
                   console.log(e.target.innerHTML)
                   this.n=e.target.innerHTML
                   let m = this.n * 40-12
                   this.$refs.p.style.left=m + 'px';
                   console.log(this.n,'----n')
                   //传
                   this.$emit('Censd',this.n)
       },
                // proData(){
                //    var timeLineData = ['1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0'];
                //    for(var i =0; i < timeLineData.length; i++){
                //        console.log('i..',i)
                //     //    this.pro.baseOption.timeline.data.push(timeLineData[i])
                //    }
                //      console.log('timeLineData...',this.timeLineData)
                // this.pro={
                //             baseOption: {
                //                 timeline: {
                //                     loop: false,
                //                     axisType: 'category',
                //                     show: true,
                //                     autoPlay: false,
                //                     data:timeLineData,
                //                     controlStyle: {
                //                         show: false
                //                     },
                //                     lineStyle: {
                //                         width: 15,
                //                         color: '#dcdcdc'
                //                     },
                //                     itemStyle: {
                //                         color: '#ececec',
                //                         borderColor: '#cbcbcb',
                //                         opacity: 0
                //                     },
                //                     checkpointStyle: {
                //                         symbol: 'rect',
                //                         symbolSize: [15, 28],
                //                         color: '#ececec',
                //                         borderWidth: 1,
                //                         borderColor: '#cbcbcb'
                //                     },
                //                     label: {
                //                         position: 19
                //                     }
                //                 },
                //                 title: {
                //                     subtext: '',
                //                     subtextStyle: {
                //                         align: 'center'
                //                     }
                //                 },
                //                 tooltip: {},
                //                 legend: {
                //                     x: 'right',
                //                     data:['货币类', '商品类', '海外类', '权益类', '债券类'],
                //                     selectedMode: 'single'
                //                 },
                //                 calculable: true,
                //                 series: [{
                //                     type: 'pie',
                //                     center: ['50%', '40%'],
                //                     radius: '60%'
                //                 }]
                //             },
                //             options: []
                //         }
                // },
                //点击个性定制
                open() {
                    // this.$prompt('请输入邮箱', '提示', {
                    // confirmButtonText: '确定',
                    // cancelButtonText: '取消',
                    // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                    // inputErrorMessage: '邮箱格式不正确'
                    // }).then(({ value }) => {
                    // this.$message({
                    //     type: 'success',
                    //     message: '你的邮箱是: ' + value
                    // });
                    // }).catch(() => {
                    // this.$message({
                    //     type: 'info',
                    //     message: '取消输入'
                    // });       
                    // });
                    this.$router.push({name:'Personality'})
                },
                //点击秒懂
                go(){
                    this.$router.push({name:'miaodong'})
                },
                //点击关注
                add(){
                    alert(1)
                },
                //组合构成
                groupData(){
                    API.group()
                    .then(res=>{
                        console.log('组合构成',res)
                        this.group = {
                        color:["#8FBEF6","#FEAB75","#B2E4FB","#ED9CEB","#4CE392"],
                //         title : {
                //             text: '组合构成',
                //             left:'21px',
                //             top:'20px',
                //               textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                //                 fontFamily: 'Arial, Verdana, sans...',
                //                 fontSize: 14,
                //                 fontStyle: 'normal',
                //                 fontWeight: 'normal',
                //             },
                //         },
                        tooltip : {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        series: [
                            {
                                name: '组合结构',
                                type: 'pie',
                                radius: ['45%', '50%'],  
                                center: ['50%', '40%'],
                                left:'94px',
                                label:{
                                    formatter: '{b}: {d}%',
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '16',
                                            fontWeight: 'normal'
                                        }
                                    }
                                },
                                data:res.data.list,
                                // data:[
                                //     {value:335, name:'货币类'},
                                //     {value:310, name:'商品类'},
                                //     {value:234, name:'海外类'},
                                //     {value:135, name:'权益类'},
                                //     {value:135, name:'债券类'}
                                // ],
                                itemStyle: {
                                    emphasis: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    } 
                    })
                },
                //市场表现
                marketData(){
                    API.market()
                    .then(res=>{
                        console.log('市场表现',res)
                        this.market ={
                            color:["#E7B3E2","#8CB3E3"],
                            tooltip : {
                                trigger: 'axis'
                            },
                            grid:{
                                top:'20%'
                            },
                            legend: {
                                orient: 'horizontal',
                                top:'5%'   
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                       show:false
                                    },
                                    axisLine:{
                                        show:false
                                    },
                                    // splitLine:{
                                    //     show:false
                                    // },
                                    data:res.list
                                    //data: ['01-01','02-15','04-01','05-15','07-01','08-15','10-01','11-15']
                                }
                            ],
                            yAxis:[{
                                type: 'value',
                                name:'收益率(%)',
                                min:-41.39,
                                max:4.07,
                                axisTick:{
                                    show:false
                                },
                                splitLine:{
                                    show:true
                                },
                                axisLine:{
                                    show:false
                                }
                                // interval:5.0
                            }],
                            series: [
                            {
                                name: "本产品",
                                symbol:'none',
                                smooth:'true',
                                type: "line",
                                data:res.data1
                                //data: [0.5, 2.5, 0.6, 0.4, 0.34, 2.0,0.9,0.5, 0.6]
                            },
                            {
                                name: "沪深300",
                                symbol:'none',
                                smooth:'true',
                                type: "line",
                                data:res.data2
                                //data: [0.5, 0.4, 0.3, 0.9, 0.6, 0.7,0.25,0.5, 0.4]
                            }]
                        }
                    })
                },
                //右面的表格
                rightsData(){
                    API.rights()
                    .then(res=>{
                        console.log('表格',res)
                        this.rightList=res.data
                        console.log('this.rightList',this.rightList)
                    })
                },
                //客户匹配
                clientData(){
                    API.client()
                    .then(res=>{
                        console.log('客户匹配',res)
                        this.clientList =res.data
                        console.log('this.clientList...',this.clientList)
                    })
                },
                click(){
                    alert(1)

                }
            },
            components:{
                IEcharts
            }
     }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        font-size: 12px;
        list-style: none;
    }
    .warps_box{
        overflow: hidden;
    }
    .header_title{ 
        height:198px;
        background: #fff; 
        position: relative; 
    }
    .btn{
        border: none;
        outline:none;
        color: #fff;
        padding:12px 80px;
        text-align: center;
        display: block;
        margin: 20px auto;
        background: #00a8df; 
        border-radius: 20px;
    }
    .more{
        position: absolute;
        right:12px;
        top:12px;
    }
    .titles{
        font-size: 16px;
        margin: 22px 0px 18px 5px;
        color:#00a8df;
    }
    .group_box{
        height:470px;
        background: #fff;
        display: flex;
        position: relative;  
    }
    .text_box {
	width: 100%;
	position: absolute;
	top: 330px;
	left: 160px;
	color: #585858;
    }
    .text_box span {
        color: #656565;
        font-size: 14px;
    }
    .type_box {
        font-size: 12px;
        color: #989898;
        margin-top: 5px;
        margin-left: 110px;
        width: 100%;
    }
    .type_box span {
        width: 45%;
        display: inline-block;
    }

    .type_box span:nth-child(2) {
        text-align: right;
    }
    .market_box{
        height: 554px;
        background: #fff; 
    }
    .client_box{
        height:288px; 
        background: #fff;  
    }
    .table_box {
        width: 96%;
        padding:22px;
    }
    .table_boxs {
        width: 100%;
        padding-top:36px;
        margin-right: 28px;
    }
    
    .table_box table {
        width: 100%;
        border: 1px solid #eeeeee;
    }
    .table_boxs table {
        width: 96%;
        border: 1px solid #eeeeee;
    }

    .table_box table thead tr {
        background-color: #f6f6f6;
    }
    .table_boxs table thead tr {
        background-color: #f6f6f6;
    }
    .table_box table thead tr {
        height: 34px;
        line-height: 34px;
        text-align: center;
        color: #5e5e5e;
    }
    .table_boxs table thead tr {
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #5e5e5e;
    }
    .table_box table tbody tr {
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #999;
    }
    .table_boxs table tbody tr {
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #999;
    }


    .table_box table tbody tr:nth-child(even) {
        background-color: #f6f6f6;
    }
    .table_boxs table tbody tr:nth-child(even) {
        background-color: #f6f6f6;
    }

    .table_box table tbody tr td:nth-child(7) {
        color: #00a8df;
    }
    .table_boxs table tbody tr td:nth-child(7) {
        color: #00a8df;
    }

    .table_box table tbody tr td:nth-child(8) {
        color: #00a8df;
        font-size: 18px;
        font-weight: bolder;
        cursor: pointer;
    }
    .table_boxs table tbody tr td:nth-child(8) {
        color: #00a8df;
        font-size: 18px;
        font-weight: bolder;
        cursor: pointer;
    }

    .block {
        width: 96%;
        margin-right: 20px;
        margin-top: 24px;
        text-align: right;
    }

    .page_box span {
        color: #5e5e5e;
        display: inline-block;
        margin: 0 3px;
        height: 25px;
        line-height: 25px;
        cursor: pointer;
    }

    .page_box span:nth-child(2),
    .page_box span:nth-child(3),
    .page_box span:nth-child(4),
    .page_box span:nth-child(5),
    .page_box span:nth-child(8) {
        border: 1px solid #bababa;
        width: 25px;
        height: 25px;
        text-align: center;
        border-radius: 2px;
    }

    .page_on {
        background-color: #b6b6b6;
        border: 1px solid #929292;
        color: #fff !important;
    }

    .span_input input {
        width: 35px;
        height: 25px;
        border-radius: 2px;
    }
    .mix_echarts{
        width:500px;
        height:400px
    }
    .mix_echart{
        width:560px;
        height:600px
    }
    .box{
    width: 350px;
    height: 30px;
    margin-top: -66px;
    margin-left: 48px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}
.top{
    height: 20px;
    width: 100%;
    background: #eee;
}
/* .top,.botton{
    width: 100%;
    background: #eee;
    height: 20px;
} */
.cspan{
    display: block;

    height: 30px;
    color: red;
}
.cen{
    width: 450px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.ww{
    position: relative;
    width: auto;
    height: auto;
}
.p{
    position: absolute;
    top:-16px;
    left:44px;
    width: 10px;
    height: 20px;
    background: #999;
    border-radius: 2px;
    z-index: 900;
}
.num{
    width: 350px;
    height: 10px;
    display: flex;
    margin-top: -20px;
    justify-content: space-around;
    align-items: center;
}
</style>