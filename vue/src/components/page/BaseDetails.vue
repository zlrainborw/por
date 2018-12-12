<template>
    <div class="base-wrap">
        <h3>基本信息</h3>
        <div class="baseinfo-box">
            <h4>{{fundname}}</h4>
            <h5>近一年收益率</h5>
            <ul>
                <li>
                    <strong>{{RRInSingleYear}}</strong>
                </li>
                <li>
                    <p>日涨跌幅</p>
                    <p style="color:#ff6600">{{dailyreturn}}</p>
                </li>
                <li>
                    <p>单位净值({{enddate}}更新)</p>
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
                         <p class="title-box2" style="margin-left:50px;">业绩表现</p>
                         <el-table :data="yjbxtableData" style="width: 100%; margin-top:35px; line-height:50px;margin-left:40px;">
                            <el-table-column prop="earns" label="时间区间" align="center"></el-table-column>
                            <!-- <el-table-column prop="rank" label="涨跌幅" align="center"></el-table-column> -->
                            <el-table-column label="涨跌幅">
                                <template slot-scope="scope">
                                  <span style="margin-left: 10px">{{ scope.row.rank}}%</span>
                                </template>
                              </el-table-column>
                            <el-table-column prop="fundall" label="同类排名" align="center"></el-table-column>
                        </el-table>
                    </el-col>
                </el-row>
            </div>
            <h3>持仓信息</h3>
            <div class="ccxx-box">
               <p style="line-height:5; text-indent:30px; color:#444444;">资产分布</p>
               <el-row :gutter="20">
                    <el-col :span="12">
                        <div class="zcfbleft-box">
                            <h5>{{bond}}</h5>
                            <p>总价值(亿元)</p>
                            <!-- <h4>{{bond}}<br><span>总价值(亿元)</span></h4> -->
                            <!-- <h4 style="left:58%;">{{cashpct}}<br><span>现金(亿元)</span></h4> -->
                            <h6>{{cashpct}}<br><span>现金(亿元)</span></h6>
                            <h6 style="left:27%;">{{monetarypct}}<br><span>货币基金市值(亿元)</span></h6>
                            <h6 style="left:56%;">{{stockpct}}<br><span>股票市值(亿元)</span></h6>
                            <h6 style="left:80%;">{{otherpct}}<br><span>其他市值(亿元)</span></h6>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="mix-echarts" style="margin-left:40px;">
                            <IEcharts :option="zcfbpie"></IEcharts>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="cgfb-box" style="heoght:400px;">
                <p style="text-indent:30px; color:#444444;">持股分布</p>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="mix-echarts">
                            <IEcharts :option="cgfbhxmix"></IEcharts>
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div class="mix-echarts" style="margin-left:40px;">
                            <IEcharts :option="cgfbvxmix"></IEcharts>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="czfb-box">
                <p style="line-height:5;text-indent:30px; color:#444444;">持债分布</p>
                <div class="mix-echarts">
                    <IEcharts :option="czfbxmix"></IEcharts>
                </div>
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
                                <li v-for="item in list_earns"><span>{{item.name}}</span><span style="color:#333;font-weight:bold;">{{item.value}}</span></li>
                                <!-- <li><span>择时能力</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>选证能力</span><span style="color:#333;font-weight:bold;">0.90</span></li>
                                <li><span>夏普指数(Sharpe)</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>索提诺比例(Sortino)</span><span style="color:#333;font-weight:bold;">0.78</span></li>
                                <li><span>特雷诺指数(Treynor)</span><span style="color:#333;font-weight:bold;">0.78</span></li> -->
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
             <el-button type="text" @click="openClick" style="font-weight:bolder">{{detialtext}}</el-button>
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
var colorList = [
  "#56aaff",
  "#0099cc",
  "#976dc6",
  "#3cb23c",
  "#ff7f00",
  "#ea6262"
];
export default {
  data() {
    return {
      list_earns:[],
      fundsfee: [], // 基金费率信息
      startnum: 5,
      kongNum: 0,
      halfTrue: true,
      starts: ["1", "2", "3", "4", "5"],
      scbxradio: "1",
      containertrue: false,
      detialtext: "基金详情 ↓",
      RRInSingleYear: "",
      dailyreturn: "",
      enddate: "",
      fundmanager: "",
      unitnav: "",
      setupdate: "",
      investtype: "",
      fundscale: "",
      fundname: "",
      star: "",
      fundcorp: "",
      bond:"",
      cashpct:'',
      stockpct:'',
      otherpct:'',
      monetarypct:'',
      currentPage:1,
      pagesize:10,
      total:0,
      tableData: [
      ],
      scbxmix: {},
      yjbxtableData: [
      ],
      zcfbpie: {
        
      },
      cgfbhxmix: { },
      cgfbvxmix: { },
      czfbxmix: {},
        // legend: {
        //   show: false
        // },
        // series: [
        //   {
        //     type: "pie",
        //     radius: ["25%", "65%"],
        //     roseType: "radius",
        //     clockwise: false,
        //     z: 10,
        //     itemStyle: {
        //       normal: {
        //         color: function(params) {
        //           return colorList[params.dataIndex];
        //         },
        //         shadowBlur: 20,
        //         shadowColor: "rgba(0, 0, 0, 0.3)"
        //       }
        //     },
        //     labelLine: {
        //       normal: {
        //         length: 50,
        //         length2: 50,
        //         lineStyle: {
        //           width: 2
        //         }
        //       }
        //     },
        //     data: [
        //       { value: 300, name: "未公布" },
        //       { value: 351, name: "国开" },
        //       { value: 300, name: "15世贸" },
        //       { value: 200, name: "18国开" },
        //       { value: 100, name: "16通辽" },
        //       { value: 250, name: "国开1702" }
        //     ]
        //   },
        //   // 中心的圆圈
        //   {
        //     radius: ["10%", "14%"],
        //     type: "pie",
        //     label: {
        //       normal: {
        //         show: false
        //       },
        //       emphasis: {
        //         show: false
        //       }
        //     },
        //     labelLine: {
        //       normal: {
        //         show: false
        //       },
        //       emphasis: {
        //         show: false
        //       }
        //     },
        //     tooltip: {
        //       show: false
        //     },
        //     data: [
        //       {
        //         value: 100,
        //         itemStyle: {
        //           normal: {
        //             color: "#ccc"
        //           }
        //         }
        //       }
        //     ],
        //     animation: false
        //   },
        //   // 边框的设置
        //   {
        //     radius: ["80%", "80.3%"],
        //     type: "pie",
        //     label: {
        //       normal: {
        //         show: false
        //       },
        //       emphasis: {
        //         show: false
        //       }
        //     },
        //     labelLine: {
        //       normal: {
        //         show: false
        //       },
        //       emphasis: {
        //         show: false
        //       }
        //     },
        //     tooltip: {
        //       show: false
        //     },
        //     data: [
        //       {
        //         value: 100,
        //         itemStyle: {
        //           normal: {
        //             color: "#ccc"
        //           }
        //         }
        //       }
        //     ],
        //     animation: false
        //   }
        // ]
      
      fxzbxmix: {
        tooltip: {
           
        },
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
              formatter: "[{value}]",
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
            name: "雷达图",
            type: "radar",
            itemStyle: {
              emphasis: {
                lineStyle: {
                  width: 2
                }
              }
            },
            data: [
              {
                value: [100, 8, 0.4, -80, 2000, 100, 8, 0.4, -80, 90],
               // name: "图一",
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
    };
  },
  created() {
    this.FundInfo();
    this.Fundsfee();
    this.Fundcode();
    this.assetalloction();
    this.czfbFun();  //持债分布
    this.ppkhfun();
    this.scbxfun();  //市場表現
    this.cgfbfun();  //持股分布
    this.jjpjfun();  //基金评价
    
  },
  methods: {
    openClick(){
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
          this.dailyreturn = res.data.daily_return; //日涨跌幅
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
      API.fundsfee({
        fundcode: query
      })
        .then(res => {
          this.fundsfee = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    assetalloction(){ //资产分布
        let query = this.$router.history.current.query.fund_code;
        API.assetalloction({
            fundcode: query
        })
        .then(res => {
            this.bond = res.data.bond;//总价值
            this.cashpct = res.data.cash_pct;  //现金
            this.monetarypct = res.data.monetary_pct;  //货币市值
            this.stockpct = res.data.stock_pct;   //股票市值
            this.otherpct = res.data.other_pct;  //其他市值
            let newArr = [];
            for(var key in res.data.list_pct){ 
                var obj = {}; 
                obj.value =res.data.list_pct[key].pct_change;
                obj.name = res.data.list_pct[key].list_name;
                newArr.push(obj);
            } 
            this.zcfbpie ={
               tooltip: {
                  trigger: "item",
                  formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                  show: false
                },
                color: ["#4d7bf3", "#ffc176", "#4eccff", "#fb497b", "#b6f290"],
                series: [
                  {
                    type: "pie",
                    radius: "65%",
                    center: ["50%", "40%"],
                    data:newArr,
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.3)"
                      }
                    },
                   
                  }
                ]
            }
        })
        .catch(error => {
            console.log(error);
        });
    },
    cgfbfun(){   //持股分布
      let query = this.$router.history.current.query.fund_code;
      let ydata = ['1111\n话都','222\n暗淡','333\n安徽'];
      let arr = [], numArr = [], chineseArr = [];
      for (var i = 0;i < ydata.length;i++) {
          arr = ydata[i].split('\n');
          numArr.push(parseInt(arr[0]));
          chineseArr.push(arr[1]);
      }
      var arrA = numArr;
      var arrB = chineseArr;
      var info = {};
      function ArrayToObj(arrA, arrB) {
        for(var i = 0; i < arrA.length; i++ ) {
          info[arrA[i]] = arrB[i];
        } 
        return info;
      }
      ArrayToObj(arrA, arrB);
       console.log(info);
      for(var key in info){    
        console.log(info[key])
      }  
      
      API.stockdistribution({ fundcode:query})
        .then(res => {
          this.cgfbhxmix = {
            color: ["#55a7fd"],
            grid: {
              left: "3%",
              right: "6%",
              bottom: "3%",
              containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            yAxis: [
              {
                type: "category",
                data: ["1", "2", "3"],
                inverse: true,
                axisTick: {
                  alignWithLabel: true
                },
                axisLabel: {
                  margin: 10,
                  textStyle: {
                    fontSize: 12,
                    color: "#53a8fa"
                  },
                 
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                }
              }
            ],
            xAxis: [
              {
                type: "value",
                splitLine: { show: false },
                axisLabel: {
                  margin: 10,
                  formatter: function() {
                    return "";
                  },
                  textStyle: {
                    fontSize: 12,
                    color: "#53a8fa"
                  }
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                }
              }
            ],
            series: [
              {
                type: "bar",
                barWidth: 20,
                data:numArr,
                label: {
                  normal: {
                    formatter: function(params){
                      return params.value+'%\n'+info[key];
                    },
                    show: true,
                    position: "right",
                    textStyle: {
                      color: "#333" 
                    }
                  },
                },
                itemStyle: {
                  normal: {
                    barBorderRadius: [8, 8, 8, 8],
                    shadowColor: "rgba(0,0,0,0.1)",
                    shadowBlur: 3,
                    shadowOffsetY: 3
                  }
                }
              }
            ]
          }
          this.cgfbvxmix = {
              color: ["#55a7fd"],
              tooltip: {
                trigger: "axis",
                formatter:function(params){
                  return params[0].name+":"+params[0].data+"%";
                },
                axisPointer: {
                  type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
              },
              xAxis: [
                {
                  type: "category",
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                 
                  data:res.data.liststk_name,
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis: [
                {
                  type: "value",
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      type: "dashed",
                      color: ["#c9ddf2"]
                    }
                  }
                }
              ],
              series: [
                {
                  type: "bar",
                  barWidth: 20,
                 // data: [52, 200, 334, 390, 330, 220, 200, 334, 390, 234]
                  data:res.data.liststk_pct
                }
              ]
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    jjpjfun(){ //基金评价
      let query = this.$router.history.current.query.fund_code;
      API.fundpj({
         fundcode:query
       })
      .then(res => {
         this.list_earns = res.data.list_earns;
      })
      .catch(error => {
        console.log(error)
      });
    },
    BaseMiaoDong() {},
    BaseAdd(scope) {
      API.attentions({
         custid: scope.row.custid
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
    scbxfun(){   //市場表現
     let query = this.$router.history.current.query.fund_code;
       API.fundshow({types:this.scbxradio,fundcode: query})
        .then(res => {
          this.scbxmix = {
            tooltip: {
              trigger: "axis",
              formatter:function(params){
                return params[0].name+"<br>"+params[0].seriesName+":"+params[0].data+"%"+"<br>"+params[1].seriesName+":"+params[1].data+"%";
              }
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
              type: "value",
              axisLabel:{formatter:'{value} %'}
            },
            color: ["#00c0ff", "#ff6600"],
            series: [
              {
                name: "本产品",
                type: "line",
                stack: "总量",
                smooth: true,
                symbol: "none",
                data: res.data.RRInSingleYear,
              },
              {
                name: "中证指数500",
                type: "line",
                stack: "总量",
                smooth: true,
                symbol: "none",
                data:res.data.threeindex,
              }
            ]
          };
        })
        .catch(error => {
          console.log(error);
        });
    },
    changeFun() {
      this.scbxfun();
    },
    Fundcode(){
      let query = this.$router.history.current.query.fund_code;
       API.fundcode({
        fundcode: query
      })
        .then(res => {
          this.yjbxtableData = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    czfbFun(){  //持债分布
        let query = this.$router.history.current.query.fund_code;
        API.bonddistribution({
            fundcode:query
        })
        .then(res => {
            let newArr = [];
            for(var key in res.data.bondinfo){ 
                var obj = {}; 
                obj.value =res.data.bondinfo[key].pct_occupy_bond;
                obj.name = res.data.bondinfo[key].bondname;
                newArr.push(obj);
            } 
            this.czfbxmix = {
              legend: {
                show: false
              },
              tooltip: {
                trigger: "item",
                formatter: "{b} : {c} ({d}%)"
              },
              series: [
                {
                  type: "pie",
                  radius: ["25%", "65%"],
                  roseType: "radius",
                  clockwise: false,
                  z: 10,
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        return colorList[params.dataIndex];
                      },
                      shadowBlur: 20,
                      shadowColor: "rgba(0, 0, 0, 0.3)"
                    }
                  },
                  labelLine: {
                    normal: {
                      length: 50,
                      length2: 50,
                      lineStyle: {
                        width: 2
                      }
                    }
                  },
                  data: newArr
                },
                // 中心的圆圈
                {
                  radius: ["10%", "14%"],
                  type: "pie",
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  tooltip: {
                    show: false
                  },
                  data: [
                    {
                      value: 100,
                      itemStyle: {
                        normal: {
                          color: "#ccc"
                        }
                      }
                    }
                  ],
                  animation: false
                },
                // 边框的设置
                {
                  radius: ["80%", "80.3%"],
                  type: "pie",
                  label: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  tooltip: {
                    show: false
                  },
                  data: [
                    {
                      value: 100,
                      itemStyle: {
                        normal: {
                          color: "#ccc"
                        }
                      }
                    }
                  ],
                  animation: false
                }
              ] 
            }
        })
        .catch(error => {
            console.log(error);
        });
    },
    ppkhfun(){ //匹配客戶
      let query = this.$router.history.current.query.fund_code;
      API.fundmatcgcustmoer({
            fundcode:query,
            page:this.currentPage
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
  },
  components: {
    IEcharts
  }
};
</script>
<style scope>
@import '/static/css/star.css';
.el-icon-star-on {
  color: #ffac12;
}
.el-row{
  margin-bottom:0 !important;
}
.ppkh-box {
  background: #fff;
  padding: 30px;
}
.line-v {
  background: #e6e6e6;
  width: 1px;
  margin-left: 49%;
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

.jjpj-box {
  background-color: #fff;
  padding: 20px 0;
}

.cgfb-box,
.czfb-box {
  background-color: #fff;
}
.zcfbleft-box {
  width: 80%;
  min-width: 590px;
  height: 300px;
  background: url("../../../static/img/zcfbbg.png") no-repeat;
  background-size: cover;
  margin-left: 10%;
  text-align: center;
  padding-top: 20px;
  position: relative;
}
.zcfbleft-box h5 {
  color: #f72024;
  font-size: 20px;
  line-height: 2;
}
.zcfbleft-box h4 {
  position: absolute;
  left: 25%;
  top: 46%;
  font-weight: normal;
  font-size: 20px;
}
.zcfbleft-box h4 span {
  font-size: 14px;
  color: #444444;
}
.zcfbleft-box h6 {
  position: absolute;
  left: 5%;
  top: 80%;
  font-weight: normal;
  font-size: 20px;
}
.zcfbleft-box h6 span {
  font-size: 14px;
  color: #444444;
}
.ccxx-box {
  background-color: #fff;
}
.el-table tr:last-child{
  border-bottom: none;
}
.scbx-box .el-table .cell {
  line-height: 41px;
}
.title-box2 {
  color: #444444;
  margin-top: 26px;
}
ul li {
  list-style: none;
}
.base-wrap {
  min-width: 1300px;
  font-size: 14px;
}
.base-wrap h3 {
  color: #199ed8;
  line-height: 3;
  cursor: pointer;
}
.baseinfo-box {
  background-color: #fff;
  padding: 30px;
}
.baseinfo-box h4 {
  color: #646464;
  font-size: 16px;
  font-weight: normal;
}
.baseinfo-box h5 {
  color: #c1c1c1;
  font-weight: normal;
  margin-top: 20px;
  font-size: 14px;
}
.baseinfo-box ul {
  margin-top: 10px;
}
.baseinfo-box ul li {
  float: left;
  width: 25%;
}
.baseinfo-box ul li strong {
  font-size: 36px;
  color: #ff6600;
}
.baseinfo-box ul li p {
  line-height: 1.5;
  color: #a4a4a4;
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
.rate-box ul li {
  display: -webkit-box;
  display: box;
  width: 100%;
}
.rate-box ul li p {
  width: 20%;
  color: #444444;
  line-height: 1.5;
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
.mix-echarts {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}
</style>
