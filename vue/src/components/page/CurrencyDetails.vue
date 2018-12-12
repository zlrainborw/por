<template>
    <div class="currency-wrap">
         <h3>基本信息</h3>
          <div class="baseinfo-box1">
            <h4>{{fundname}}</h4>
            <h5>七日年化</h5>
            <ul class="info-box">
                <li>
                    <strong>{{RRInSingleYear}}</strong>
                </li>
                <li>
                    <p>万份收益({{enddate}}更新)</p>
                    <p style="color:#ff6600">{{unitnav}}</p>
                </li>
            </ul>
            <div style="clear:both;"></div>
            <div class="fundtype-box">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <p>基金类型：<span>{{investtype}}</span></p>
                        <p>成立日期：<span>{{setupdate}}</span></p>
                    </el-col>
                    <el-col :span="6">
                        <p>基金规模：<span>{{fundscale}}</span></p>
                        <p>基金评级：<span>
                            <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<startnum"></i>
                            <i class="el-icon-star-half" v-if="halfTrue"></i>
                            <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index< kongNum"></i>
                        </span></p>
                    </el-col>
                    <el-col :span="6">
                        <p>管理费：<span>1.5%</span></p>
                        <p>基金经理：<span>{{fundmanager}}</span></p>
                    </el-col>
                    <el-col :span="6">
                        <p>起购金额：<span>1000元</span></p>
                        <p>基金管理人：<span>{{fundcorp}}</span></p>
                    </el-col>
                </el-row>
            </div>
            <div class="line"></div>
            <!-- <div class="rate-box1">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <h4>买入费率</h4>
                        <ul v-for="item in (fundsfee.subscribe)" :key="item.id">
                            <li><span>买入金额</span><span>费率</span></li>
                            <li><span>买入金额＞0</span><span>免手续费</span></li>
                        </ul>
                    </el-col>
                    <el-col :span="6">
                        <h4>卖出费率</h4>
                        <ul>
                            <li><span>基金持有期限</span><span>费率</span></li>
                            <li><span>持有期限＞0</span><span>免手续费</span></li>
                        </ul>
                    </el-col>
                    <el-col :span="6">
                        <h4>收益计算时间</h4>
                        <ul>
                            <li><span>买入时间</span><span>份额</span><span>查看收益</span></li>
                            <li><span>T日</span><span>T+1日</span><span>T+2日</span></li>
                        </ul>
                    </el-col>
                     <el-col :span="6">
                        <h4>资金到账时间</h4>
                        <ul>
                            <li><span>买入时间</span><span>确认份额</span><span>查看收益</span></li>
                            <li><span>T日</span><span>T+1日</span><span>T+2日</span></li>
                        </ul>
                    </el-col>
                </el-row>
                <p style="margin-top:30px; color:#a4a4a4">注：如遇节假法定日，确认份额、查看收益、确认卖出金额、资金到账时间将顺延。</p>
            </div> -->
             <div class="rate-box">
                <el-row :gutter="20">
                    <el-col :span="9">
                        <h4>申购费率</h4>
                        <ul>
                            <li v-for="item in (fundsfee.subscribe)" :key="item.id">
                                <p style="width:40%;">{{item.amount_down_limit}}{{item.units}}购买金额 ＜ {{item.amount_up_limit}}{{item.units}}</p>
                                <p style="text-decoration:line-through">{{item.fee_ratio}}</p>
                                <p style="color:#ff6600">{{item.discount}}</p>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="9">
                        <h4>认购金额</h4>
                        <ul>
                            <li v-for="item in fundsfee.subscription" :key="item.id">
                                <p style="width:40%;">{{item.amount_down_limit}}{{item.units}}购买金额 ＜ {{item.amount_up_limit}}{{item.units}}</p>
                                <p style="text-decoration:line-through">{{item.fee_ratio}}</p>
                                <p style="color:#ff6600">{{item.discount}}</p>
                            </li>
                        </ul>
                    </el-col>
                    <el-col :span="6">
                        <h4>赎回费率</h4>
                        <ul>
                            <li v-for="sitem in fundsfee.redemption" :key="sitem.id">
                                <p style="width:40%;">{{sitem.period_down_limit}}{{sitem.units}}-{{sitem.period_up_limit}}{{sitem.units}}</p>
                                <p>{{sitem.fee_ratio}}</p>
                            </li>
                        </ul>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="container" v-if="containertrue">
            <h3>市场表现</h3>
            <div class="scbx-box">  
                <el-row :gutter="20">
                    <el-col :span="16">
                         <div class="scbbdate-box" style="margin-left:78%; margin-top:20px;">
                            <el-radio-group v-model="scbxradio" size="small" @change="changeFun()">
                                <el-radio-button label="1">一月</el-radio-button>
                                <el-radio-button label="2">三月</el-radio-button>
                                <el-radio-button label="3">半年</el-radio-button>
                                <el-radio-button label="4">一年</el-radio-button>
                            </el-radio-group>
                        </div>
                        <div class="mix-echarts">
                            <IEcharts :option="scbxmix"></IEcharts>
                        </div>
                    </el-col>
                    <el-col :span="6">
                         <p class="title-box2" style="margin-left:50px;margin-top:26px;">业绩表现</p>
                         <el-table :data="yjbxtableData" style="width: 100%; margin-top:35px; line-height:50px;margin-left:50px;overflow-y:auto;">
                            <el-table-column prop="earns" label="时间区间" align="center"></el-table-column>
                            <el-table-column prop="rank" label="涨跌幅" align="center"></el-table-column>
                            <el-table-column prop="fundall" label="同类排名" align="center"></el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </div>
            <h3>基金评价</h3>
            <div class="jjpj-box">
                 <el-row :gutter="20">
                    <el-col :span="10">  
                        <div class="left-box">
                            <strong>95分</strong>
                            <p style="border-bottom:1px solid #ccc;padding-bottom:30px;">易方达消费行业基金总分</p>
                            <strong style="color:#333;">85%</strong>
                            <p>基金表现超过全市场同类基金</p>
                        </div>
                        <div class="right-box">
                            <h4>投资能力指标</h4>
                            <ul>
                                <li><span>择时能力</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>选证能力</span><span style="color:#333;font-weight:bold;">0.90</span></li>
                                <li><span>夏普指数(Sharpe)</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>索提诺比例(Sortino)</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>特雷诺指数(Treynor)</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                            </ul>
                        </div>
                    </el-col>
                    <el-col :span="2"><div class="line-v"></div></el-col>
                    <el-col :span="12">
                        <div class="right-box" style="float:left; width:20%;">
                            <h4>风险类指标</h4>
                            <ul>
                                <li><span>尾随风险</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>日下行风险</span><span style="color:#333;font-weight:bold;">0.90</span></li>
                                <li><span>月下行风险</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>下行贝塔风险</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                            </ul>
                        </div>
                        <div style="float:right; width:75%; margin-left:30px;">
                            <div class="mix-echarts" style="height:220px;width:100%;">
                                <IEcharts :option="fxzbxmix"></IEcharts>
                            </div>
                        </div>
                    </el-col>
                </el-row>
             </div>
        </div>
        <div class="open-box">
             <el-button type="text" @click="openClick" style="font-weight:bolder">{{detialtext}} </el-button>
        </div>
        <h3>匹配客户</h3>
        <div class="ppkh-box">   
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="custname" label="客户名" align="center">
                </el-table-column>
                <el-table-column prop="custid" label="客户号" align="center">
                </el-table-column>
                <el-table-column prop="recommen_level" label="风险等级" align="center">
                </el-table-column>
                <el-table-column prop="netasset" label="客户净资产" align="center">
                </el-table-column>
                <el-table-column prop="opentime" label="开户时长" align="center">
                </el-table-column>
                <el-table-column prop="match_rate" label="匹配度" align="center">
                </el-table-column>
                <el-table-column align="center" label="信息">
                    <template scope="scope">
                        <el-button style="color:#20a0ff; border:none;"
                            @click="BaseMiaoDong(scope.$index, scope.row)">秒懂</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="关注" align="center">
                    <template slot-scope="scope">
                        <el-button style="color:#20a0ff; border:none; font-weight:bolder; font-size:20px;"
                        type="primary" plain @click="BaseAdd(scope)">+</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    @current-change="CurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="pagesize"
                    layout="total, prev, pager, next"
                    :total="total">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import IEcharts from "vue-echarts-v3";
import API from "../../api/page/BaseDetical";
//import {starFun} from '../../../static/js/star.js' 
 export default {
    data(){
         return {
            fundsfee:[],
            pagesize:10,
            total:0,
            currentPage:1,
            detialtext: "基金详情 ↓",
            containertrue: false,
            startnum: '',
            kongNum: 0,
            halfTrue: true,
            starts: ["1", "2", "3", "4", "5"],
            fundname: "",
            RRInSingleYear:'',
            unitnav:'',
            unitnav:'',
            setupdate:'',
            setupdate:'',
            fundmanager:'',
            fundcorp:'',
            enddate:'',
            fundscale:"",
            investtype:'',
            scbxradio: "1",
            tableData: [ ],
            yjbxtableData: [],
            scbxmix:{
            },
            fxzbxmix: {
                radar: [
                {
                    indicator: [
                        { text: "择时能力" },
                        { text: "选证能力" },
                        { text: "夏普指数(Sharpe)" },
                        { text: "索提诺比例(Sortino)" },
                        { text: "特雷诺指数(Treynor)" },
                        { text: "尾随风险" },
                        { text: "日下行风险" },
                        { text: "月下行风险" },
                        { text: "下行贝塔风险" }
                    ],
                    center: ["45%", "50%"],
                    radius: 80,
                    startAngle: 30,
                    splitNumber: 4,
                    shape: "circle",
                    name: {
                    formatter: "【{value}】",
                    textStyle: {
                        color: "#72ACD1"
                    }
                    },
                    splitArea: {
                    areaStyle: {
                        color: [
                        "rgba(173, 213, 255, 0.8)",
                        "rgba(190, 220, 255, 0.8)",
                        "rgba(208, 230, 254, 0.8)",
                        "rgba(230, 242, 255, 0.8)"
                        ],
                        shadowColor: "rgba(36, 138, 48, 0.2)",
                        shadowBlur: 5
                    }
                    },
                    axisLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                    },
                    splitLine: {
                    lineStyle: {
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                    }
                }
                ],
                series: [
                {
                  //  name: "雷达图",
                    type: "radar",
                    itemStyle: {
                    emphasis: {
                        lineStyle: {
                        width: 4
                        }
                    }
                    },
                    data: [
                    {
                        value: [100, 8, 0.4, -80, 2000, 100, 8, 0.4, -80, 90],
                      //  name: "图一",
                        symbol: "rect",
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                type: "solid"
                            }
                        }
                    }
                    ]
                }
                ]
            }
         }
     },
    components: {
        IEcharts
    },
    created() {
        this.FundInfo();
        this.Fundcode();
        this.ppkhfun();
        this.scbxfun();
        this.Fundsfee();
    },
    methods: {
        starFun() {
            if (typeof this.startnum === 'number' && this.startnum%1 === 0) {
                this.startnum = this.startnum;
                this.kongNum = 5 - this.startnum;
                this.halfTrue = false;
            } else {
                this.startnum = this.startnum - 0.5;
                this.kongNum = 4 - this.startnum;
                this.halfTrue = true;
            }
        },
        openClick() {
            if (this.detialtext == "基金详情 ↓") {
                this.containertrue = true;
                this.detialtext = "收起 ↑";
            } else {
                this.containertrue = false;
                this.detialtext = "基金详情 ↓";
            }
        },
        FundInfo() { //基本信息
            let query = this.$router.history.current.query.fund_code;
            API.fundinfo({
                fundcode: query
            })
                .then(res => {
                this.RRInSingleYear = res.data.RRInSingleYear; //近一年收益
                this.enddate = res.data.end_date; //净值日期
                this.fundcorp = res.data.fund_corp; // 基金管理人
                this.fundmanager = res.data.fund_manager; //基金经理
                this.unitnav = res.data.unit_nav; //基金净值
                this.setupdate = res.data.setup_date; //成立日期
                this.investtype = res.data.invest_type; //基金类型
                this.fundscale = res.data.fundscale; //基金规模
                this.fundname = res.data.fund_name; // 基金名称
                this.startnum = res.data.star;
                this.starFun()
                })
                .catch(error => {
                console.log(error);
                });
        },
        Fundsfee() { //基金费率
            let query = this.$router.history.current.query.fund_code;
            API.fundsfee({ fundcode: query})
            .then(res => {
                if(res.data == null){
                    this.fundsfee = '暂无信息';
                }else{
                    this.fundsfee = res.data;
                }
            })
            .catch(error => {
            console.log(error);
            });
        },
        changeFun() {
            this.scbxfun();
        },
        scbxfun(){   //市場表現
            let query = this.$router.history.current.query.fund_code;
            API.fundshow({types:this.scbxradio,fundcode: query})
                .then(res => {
                    console.log(res);
                this.scbxmix = {
                    tooltip: {
                    trigger: "axis"
                    },
                    legend: {
                    x: "left"
                    },
                    grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                    },
                    toolbox: {
                    show: false
                    },
                    xAxis: {
                    type: "category",
                    boundaryGap: false,
                    axisLine: {
                        //x轴
                        show: false
                    },
                    axisTick: {
                        //x轴刻度线
                        show: false
                    },
                    data: res.data.dcdate
                    },
                    yAxis: {
                    type: "value"
                    },
                    color: ["#00c0ff", "#ff6600"],
                    series: [
                    {
                        name: "本产品",
                        type: "line",
                        stack: "总量",
                        smooth: true,
                        symbol: "none",
                        data: res.data.earns.RRInSingleYear,
                    },
                    {
                        name: "中证指数500",
                        type: "line",
                        stack: "总量",
                        smooth: true,
                        symbol: "none",
                        data: res.data.earns.threeindex,
                    }
                    ]
                };
                })
            .catch(error => {
                console.log(error);
            });
        },
        Fundcode(){
            let query = this.$router.history.current.query.fund_code;
            API.fundcode({fundcode: query})
            .then(res => {
            this.yjbxtableData = res.data;
            })
            .catch(error => {
            console.log(error);
            });
         },
        ppkhfun(){ //匹配客戶
            let query = this.$router.history.current.query.fund_code;
            API.fundmatcgcustmoer({
                page:this.currentPage,
                fundcode: query
            })
            .then(res => {
                this.tableData = res.data;//总价值
                this.total = res.data.length;
            })
            .catch(error => {
            console.log(error);
            });
        },
        CurrentChange() {
            this.ppkhfun();
        },
        BaseAdd(scope) {
            API.attentions({
                custid: scope.row.custid,
            })
            .then(res => {
            if (res.success == "True") {
                this.$message.success(res.errMsg);
            } else {
                this.$message.error(res.errMsg);
            }
            })
            .catch(error => {
            this.$message.info("已取消删除");
            });
        },
    }
 }
</script>
<style scope>
@import '/static/css/star.css';
.ppkh-box {
  background: #fff;
  padding: 30px;
}
ul{
    list-style:none;
}
.el-icon-star-on {
  color: #ffac12;
}
.currency-wrap {
  min-width: 1300px;
  font-size: 14px;
}
.currency-wrap h3 {
  color: #199ed8;
  line-height: 3;
  cursor: pointer;
}
.baseinfo-box1 {
  background-color: #fff;
  padding: 30px;
}
.baseinfo-box1 h4 {
  color: #646464;
  font-size: 16px;
  font-weight: normal;
}
.baseinfo-box1 h5 {
  color: #c1c1c1;
  font-weight: normal;
  margin-top: 20px;
  font-size: 14px;
}
.info-box {
  margin-top: 10px;
}
.info-box li {
  float: left;
  width: 25%;
}
.info-box strong {
  font-size: 36px;
  color: #ff6600;
}
.fundtype-box {
  margin-top: 30px;
}
.fundtype-box p {
  color: #a4a4a4;
  line-height: 2;
}
.fundtype-box p span {
  color: #444444;
}
.line {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 35px 0;
}
.rate-box1 ul{
    border:1px solid #ccc;
    margin-top:30px;
}
.rate-box1 ul li{
    line-height: 2;
    text-align: center;
    width:100%;
}
.rate-box1 ul li span{
    display: inline-block;
    width:30%;
    border-right:1px solid #ccc;
}
.rate-box1 ul li:nth-child(1){
    border-bottom:1px solid #ccc;
}
.rate-box1 ul li span:last-child{
    border-right:none;
}
.open-box {
  background-color: #fff;
  border: 1px solid #ccc;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.open-box {
  background-color: #fff;
  border: 1px solid #ccc;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.scbx-box {
  background: #fff;
  height: 500px;
}
.jjpj-box {
  background-color: #fff;
  padding: 20px 0;
}
.line-v {
  background: #e6e6e6;
  width: 1px;
  margin-left: 50%;
  height: 200px;
  margin-top: 40px;
}
.left-box {
  background-color: #f7f7f7;
  width: 40%;
  padding: 30px 0;
  margin-left: 20px;
  text-align: center;
  float: left;
}
.right-box {
  float: right;
  width: 50%;
}
.right-box h4 {
  font-size: 14px;
  text-align: right;
  line-height: 4;
}
.right-box ul li {
  line-height: 2;
  width: 100%;
  text-align: right;
}
.right-box ul li span {
  display: inline-block;
  text-align: right;
  color: #6b6b6b;
}
.right-box ul li span:nth-child(1) {
  width: 70%;
  margin-right: 10%;
}
.left-box strong {
  color: #f84236;
  font-size: 24px;
  line-height: 2;
}
.mix-echarts {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}
.rate-box ul{
    margin-top:20px;
}
.rate-box ul li {
  display: -webkit-box;
  display: box;
  width: 100%;
  line-height:1.5;
}
.rate-box ul li p {
  width: 20%;
  color: #444444;
  line-height: 1.5;
}
</style>
