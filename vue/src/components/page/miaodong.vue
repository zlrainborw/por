<template>
    <div class="wrap">
        <div class="user-info">
            <el-row>
                <el-col :span="12">
                    <span style="font-size:16px;">王国新</span>
                    <span>男</span>
                </el-col>
                <el-col :span="12">
                    <span class="more-color" style="float:right;">更多></span>
                </el-col> 
            </el-row>
            <el-row>
                <el-col :span="12" class="info-left">
                    <ul>
                        <li><label>资金账户:</label><span>123444</span></li>
                        <li><label>年龄:</label><span>44</span></li>
                        <li><label>费率:</label><span>万2.5</span></li>
                        <li><label>交易次数:</label><span>近3月788</span></li>
                    </ul>
                    <ul>
                        <li><label>手机号:</label><span>12398763456</span></li>
                        <li><label>股龄:</label><span>4年</span></li>
                        <li style="color:#d5aa00"><label>风险级别:</label><span>2</span></li>
                        <li><label>盈亏:</label><span>近一月亏7877</span></li>
                    </ul>
                    <div class="switch-box">
                        <span>两融</span>
                    <el-switch
                            v-model="switch1"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            disabled>
                        </el-switch>

                        <span>港股通</span>
                        <el-tooltip :content="'Switch value: ' + switch2" placement="top"> 
                            <el-switch
                                v-model="switch2"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                disabled>
                            </el-switch>
                        </el-tooltip>
                        <span>股票期权</span>
                        <el-switch
                            v-model="switch3"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                        <span>TS</span>
                        <el-switch
                            v-model="switch4"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </div>
                    <ul style="margin-top:30px;">
                        <li><span>当前资产：</span><strong>1234.90</strong></li>
                        <li><span>日收益：</span><strong style="color:#ff0000">124</strong></li>
                        <li><span>今日仓位：</span><strong>70%</strong></li>
                        <li><span>近一年最大回撤：</span><strong>30%</strong></li>
                    </ul>
                </el-col>
                <el-col :span="12">
                    <div class="mix-echarts" style="height:180px" id="cymix">
                    </div>
                </el-col>
            </el-row>
            <div class="line"></div>
            <p>
                "该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe"
                "该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe该客户承受风险能力强，整体操作激进，喜好的因子包括pe"
            </p>  
        </div>
        <h3>资产状况</h3>
        <div class="zczk-box">
            <el-col :span="12">
                <p>资产分析</p>
                    <el-radio-group v-model="yearsOption" size="small" style="margin-top:20px">
                    <el-radio-button label="1">一月</el-radio-button>
                    <el-radio-button label="2">三月</el-radio-button>
                    <el-radio-button label="3">半年</el-radio-button>
                    <el-radio-button label="4">一年</el-radio-button>
                    </el-radio-group> 
                <div class="mix-echarts">
                    <IEcharts :option="zcfxmix"></IEcharts>
                </div>
                <div class="label-box">总入金:<span>123</span>总出金：<span>2323</span>日均：<span>1222</span>潜力：<span>1222</span></div>
            </el-col>
            <el-col :span="12">
                <p><span class="more-color" style="float:right;">更多></span></p>
                
            </el-col>
        </div>
        <div class="zczk-box">
            <div class="line" style="margin-top:0;"></div>
            <el-col :span="24">
                <p>盈亏分析<span class="more-color" style="float:right;">更多></span></p>
                <el-radio-group v-model="ykfxOption" size="small" style="margin-top:20px">
                    <el-radio-button label="1">一月</el-radio-button>
                    <el-radio-button label="2">三月</el-radio-button>
                    <el-radio-button label="3">半年</el-radio-button>
                    <el-radio-button label="4">一年</el-radio-button>
                </el-radio-group> 
                <div class="mix-echarts">
                    <IEcharts :option="ykfxmix"></IEcharts>
                </div>
            </el-col>
        </div>
        <h3>持仓分析</h3>
        <div class="ccfx-box" style="height:320px;">
            <el-col :span="11">
                <p>客户持仓<span class="more-color" style="float:right">更多></span></p>
                <el-radio-group v-model="khccOption" size="small" style="margin-top:20px">
                <el-radio-button label="1">当前持仓</el-radio-button>
                <el-radio-button label="2">盈利Top5</el-radio-button>
                <el-radio-button label="3">亏损Top5</el-radio-button>
                </el-radio-group> 
                <el-table :data="tableData" border style="width: 100%; margin-top:30px; padding:0">
                    <el-table-column prop="name" label="名称" align="center"></el-table-column>
                    <el-table-column prop="drky" label="当日亏盈" align="center"></el-table-column>
                    <el-table-column prop="ccky" label="持仓亏盈" align="center"></el-table-column>
                    <el-table-column prop="cbj" label="成本价" align="center"></el-table-column>
                    <el-table-column prop="cw" label="仓位" align="center"></el-table-column>
                    <el-table-column prop="jcdate" label="建仓日期" align="center"></el-table-column>
                </el-table>
            </el-col>
            <el-col :span="2"><div class="line-v" style="height:320px"></div></el-col>
            <el-col :span="11">
                <p>持仓偏好<span class="more-color" style="float:right;">更多></span></p>
                <el-row>
                    <el-col :span="4">
                        <p class="ccph-p" style="margin-top:50px;">因子</p>
                        <p class="ccph-p">概念</p>
                        <p class="ccph-p">行业</p>
                    </el-col>
                    <el-col :span="20">
                        <div class="mix-echarts" style="margin-top:0;">
                            <IEcharts :option="ccphmix"></IEcharts>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </div>
        <h3>交易分析</h3>
        <div class="jyfx-box">
            <el-col :span="14">
                <p>业绩归因</p>
                <el-radio-group v-model="yjgyOption" size="small" style="margin-top:20px">
                <el-radio-button label="1">一月</el-radio-button>
                <el-radio-button label="2">三月</el-radio-button>
                <el-radio-button label="3">半年</el-radio-button>
                <el-radio-button label="4">一年</el-radio-button>
                </el-radio-group> 
                <div class="mix-echarts">
                    <IEcharts :option="yjgymix"></IEcharts>
                </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="8" style="float:right;">
                <p><span class="more-color" style="float:right;">更多></span></p>
                <div class="mix-echarts">
                    <IEcharts :option="zfsylmix"></IEcharts>
                </div>
            </el-col>
        </div> 
        <div class="jyfx-box">
            <div class="line" style="margin-top:0;"></div>
            <el-col :span="11">
                <p>交易风格<span class="more-color" style="float:right;">更多></span></p>
                <div class="mix-echarts" style="margin-top:20px;">
                    <IEcharts :option="yjfgmix"></IEcharts>
                </div>
            </el-col>
            <el-col :span="2"><div class="line-v" style="height:320px"></div></el-col>
            <el-col :span="11" style="float:right;">
                <p>识别模式<span class="more-color" style="float:right;">更多></span></p>
                <div class="mix-echarts">
                    <IEcharts :option="mssbmix"></IEcharts>
                </div>
            </el-col>
        </div> 
        <h3>财富管理</h3>
        <div class="cfgl-box">
            <el-col :span="11">
                <p>资产配置<span class="more-color" style="float:right;">更多></span></p>
                <el-radio-group v-model="zcpzOption" size="small" style="margin-top:20px">
                    <el-radio-button label="1">一月</el-radio-button>
                    <el-radio-button label="2">三月</el-radio-button>
                    <el-radio-button label="3">半年</el-radio-button>
                    <el-radio-button label="4">一年</el-radio-button>
                </el-radio-group>
                <div class="mix-echarts" style="margin-top:30px">
                    <IEcharts :option="zcpzmix"></IEcharts>
                </div>
            </el-col>
            <el-col :span="2"><div class="line-v" style="height:400px;"></div></el-col>
            <el-col :span="11">
                <p>资金推荐<span class="more-color" style="float:right;">更多></span></p>
                <div class="zjtj-info">
                    <el-col :span="2">
                        <strong>1</strong>
                    </el-col>
                    <el-col :span="6">
                        <p class="p">+88.9%</p>
                        <p class="pp">成立以来收益率</p>
                    </el-col>
                    <el-col :span="8">
                        <p>泰达宏利中证500指数</p>
                    </el-col>
                    <el-col :span="8">
                        <p>中证500强冠军</p>
                    </el-col>
                </div>
                <div class="zjtj-info">
                    <el-col :span="2">
                        <strong>2</strong>
                    </el-col>
                    <el-col :span="6">
                        <p class="p">+88.9%</p>
                        <p class="pp">成立以来收益率</p>
                    </el-col>
                    <el-col :span="8">
                        <p>泰达宏利中证500指数</p>
                    </el-col>
                    <el-col :span="8">
                        <p>中证500强冠军</p>
                    </el-col>
                </div>
                <div class="zjtj-info">
                    <el-col :span="2">
                        <strong>3</strong>
                    </el-col>
                    <el-col :span="6">
                        <p class="p">+88.9%</p>
                        <p class="pp">成立以来收益率</p>
                    </el-col>
                    <el-col :span="8">
                        <p>泰达宏利中证500指数</p>
                    </el-col>
                    <el-col :span="8">
                        <p>中证500强冠军</p>
                    </el-col>
                </div>
                <div class="zjtj-info">
                    <el-col :span="2">
                        <strong>4</strong>
                    </el-col>
                    <el-col :span="6">
                        <p class="p">+88.9%</p>
                        <p class="pp">成立以来收益率</p>
                    </el-col>
                    <el-col :span="8">
                        <p>泰达宏利中证500指数</p>
                    </el-col>
                    <el-col :span="8">
                        <p>中证500强冠军</p>
                    </el-col>
                </div>
                <div class="zjtj-info">
                    <el-col :span="2">
                        <strong>5</strong>
                    </el-col>
                    <el-col :span="6">
                        <p class="p">+88.9%</p>
                        <p class="pp">成立以来收益率</p>
                    </el-col>
                    <el-col :span="8">
                        <p>泰达宏利中证500指数</p>
                    </el-col>
                    <el-col :span="8">
                        <p>中证500强冠军</p>
                    </el-col>
                </div>
            </el-col>
        </div>
    </div>
</template>
<script>
import IEcharts from "vue-echarts-v3";
var echarts = require("echarts");
require("echarts-wordcloud");
export default {
  data() {
    return {
      switch1: true,
      switch2: false,
      switch3: "100",
      switch4: "100",
      yearsOption: "1", //资产分析
      ykfxOption: "1", //盈亏分析
      khccOption: "1", //客户持仓
      yjgyOption: "1", //业绩归因
      zcpzOption: "1", //资产配置
      zcfxmix: {
        //资产分析
        color: ["#5cacee", "#ee9c48", "#74d8d9", "#cabce6"],
        legend: {
          data: ["", "出金", "入金"]
        },
        grid: {
          left: "8%",
          right: "3%",
          bottom: "10%",
          top: "10%"
        },
        xAxis: {
          data: ["2016-11", "2016-12", "2017-01"]
        },
        yAxis: {
          splitLine: { show: false }
        },
        series: [
          {
            name: "",
            type: "line",
            data: [1500, 2000, 2600]
          },
          {
            name: "出金",
            type: "bar",
            barWidth: 10,
            data: [5000, 3000, 3600]
          },
          {
            name: "入金",
            type: "bar",
            barWidth: 10,
            data: [3500, 4000, 3000]
          }
        ]
      },
      ykfxmix: {
        //盈亏分析
        color: ["#5cacee", "#ee9c48", "#74d8d9", "#cabce6"],
        legend: {
          data: ["证券收益", "基准收益", "亏", "盈"]
        },
        grid: {
          left: "8%",
          right: "3%",
          bottom: "10%",
          top: "10%"
        },
        xAxis: {
          data: [
            "2017-01-01",
            "2017-01-21",
            "2017-01-29",
            "2017-02-1",
            "2017-03-2",
            "2017-05-2",
            "2017-06-2",
            "2017-07-2",
            "2017-08-2",
            "2017-09-2"
          ]
        },
        yAxis: {
          splitLine: { show: true }
        },
        series: [
          {
            name: "证券收益",
            type: "line",
            data: [1500, 2000, 2600, 1500, 2000, 2600, 1500, 2000, 2600, 1500]
          },
          {
            name: "基准收益",
            type: "line",
            data: [1500, 2000, 2600, 5000, 3000, 3600, 5000, 3000, 3600, 5000]
          },
          {
            name: "亏",
            type: "bar",
            barWidth: 10,
            data: [5000, 3000, 3600, 3500, 4000, 3000, 3500, 4000, 3000, 3500]
          },
          {
            name: "盈",
            type: "bar",
            barWidth: 10,
            data: [3500, 4000, 3000, 1500, 2000, 2600, 1500, 2000, 2600, 8700]
          }
        ]
      },
      tableData: [
        {
          name: "浦发银行",
          drky: "-288",
          ccky: "-987",
          cbj: "877",
          cw: "23.87%",
          jcdate: "2016/05/04"
        },
        {
          name: "白云机场",
          drky: "-288",
          ccky: "-987",
          cbj: "877",
          cw: "23.87%",
          jcdate: "2016/05/04"
        },
        {
          name: "微光股份",
          drky: "-288",
          ccky: "-987",
          cbj: "877",
          cw: "23.87%",
          jcdate: "2016/05/04"
        },
        {
          name: "东风汽车",
          drky: "-288",
          ccky: "-987",
          cbj: "877",
          cw: "23.87%",
          jcdate: "2016/05/04"
        },
        {
          name: "中国国贸",
          drky: "-288",
          ccky: "-987",
          cbj: "877",
          cw: "23.87%",
          jcdate: "2016/05/04"
        }
      ],
      ccphmix: {
        //持仓偏好
        
        dataset: {
          source: [
            [ "amount", "product"],
            [ 20, "医药"],
            [ 50, "金融"],
            [ 80, "有色"],
            [ 70, "一带一路"],
            [ 20, "困改"],
            [ 10, "人工智能"],
            [ 40, "低PE"],
            [ 70, "低PB"],
            [ 50, "高ROE"]
          ]
        },
        grid: {
          left: "10%",
          right: "8%",
          bottom: "10%",
          top: "10%"
        },
        xAxis: { name: "" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          show: false,
        //  text: ["High Score", "Low Score"],
          dimension: 0,
          inRange: {
            color: ["#ff9933", "#92d050", "#00b0f0"],
          }
        },
        series: [
          {
            type: "bar",
            barWidth: 10,
            encode: {
              x: "amount",
              y: "product"
            }
          }
        ]
      },
      yjgymix: {
        //业绩归因
        legend: {
          x: "center",
          y: "top",
          top: "3%",
          data: ["超额收益", "市值风格", "行业配置", "股票选择", "沪深300"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "11%",
          top: "10%",
          containLabel: true
        },
        toolbox: {
          show: false
        },
        dataView: {
          show: false
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value",
          name: "收益率(%)",
          splitLine: { show: false }
        },
        series: [
          {
            name: "超额收益",
            type: "line",
            symbol: "none",
            stack: "总量",
            data: [2, 12, 11, 34, 9, 23, 20, 9, 10, -10, 2, 10]
          },
          {
            name: "市值风格",
            type: "line",
            symbol: "none", //这句就是去掉点的
            //  smooth:true,
            stack: "总量",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: "dotted" //'dotted'虚线 'solid'实线
                }
              }
            },
            data: [9, 10, -10, 2, 10, 20, 12, 11, 34, 20, 30, 30]
          },
          {
            name: "行业配置",
            type: "line",
            stack: "总量",
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: "dotted" //'dotted'虚线 'solid'实线
                }
              }
            },
            data: [15, 22, 21, 9, 10, -10, 2, 10, 14, 19, 30, 40]
          },
          {
            name: "股票选择",
            type: "line",
            stack: "总量",
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  type: "dotted" //'dotted'虚线 'solid'实线
                }
              }
            },
            data: [30, 32, 9, 10, -10, 2, 10, 31, 34, 30, 30, 20]
          },
          {
            name: "沪深300",
            type: "line",
            symbol: "none",
            stack: "总量",
            data: [20, 90, 10, -10, 2, 10, 32, 21, 34, 12, 30, 13]
          }
        ]
      },
      zfsylmix: {
        //收益率正负
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: []
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "13%",
          containLabel: true
        },
        xAxis: [
          {
            type: "value",
            show: false,
            splitLine: { show: false }
          }
        ],
        yAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: ["客户收益", "交易能力", "行业配置", "股票选择", "沪深300"]
          }
        ],
        series: [
          {
            name: "利润",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            data: [200, -170, 240, 244, 200]
          }
        ]
      },
      yjfgmix: {
        //交易风格
        legend: {
          y: "bottom",
          data: ["目标客户", "整体客户"]
        },
        grid: {
          position: "center",
          bottom: "15%"
        },
        radar: {
          name: {
            textStyle: {
              color: "#333"
            }
          },
          center: ["50%", "50%"],
          indicator: [
            { name: "抗风险能力"},
            { name: "择时能力" },
            { name: "择股能力"},
            { name: "稳定性"},
            { name: "盈利能力"}
          ],
          splitArea: {
            show: false,
            areaStyle: {
              color: "#fff" // 图表背景的颜色
            }
          }
        },
        color: ["#ff9933", "#00b0f0"],
        series: [
          {
            name: "",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 19000],
                name: "目标客户"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000],
                name: "整体客户"
              }
            ]
          }
        ]
      },
      mssbmix: {  //识别模式
        color: ["#ff9933", "#00b0f0"],
        dataset: {
          source: [
            ["score", "amount", "product"],
            [19.6, 80, "偏好程度"],
            [68.1, 70, "一带右侧买入一路"],
            [89.7, 20, "低pb持股"],
            [50.1, 10, "MACD金叉买入"],
            [74.4, 40, "追涨"],
            [57.1, 70, "下跌加仓"],
            [89.3, 50, "仓位集中"]
          ]
        },
        grid: {
          left: "10%",
          right: "8%",
          bottom: "10%",
          top: "10%"
        },
        xAxis: { name: "" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          show: false,
          // text: ["High Score", "Low Score"],
          dimension: 0,
          inRange: {
            color: ["#00b0f0", "#ff9933"]
          }
        },
        series: [
          {
            type: "bar",
            barWidth: 20,
            encode: {
              x: "amount",
              y: "product"
            }
          }
        ]
      },
      zcpzmix: { //资产配置
        legend: {
          orient: "vertical",
          x: "left",
          show: false,
          data: []
        },
        color: ["#ff8e7b", "#ffd38a", "#4feccc", "#469fde", "#ddb2d8"],
        series: [
          {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "海外", selected: true },
              { value: 679, name: "商品" },
              { value: 1548, name: "债券" },
              { value: 1548, name: "货币" },
              { value: 1548, name: "权益" }
            ]
          },
          {
            name: "",
            type: "pie",
            radius: ["60%", "85%"],
            label: {
              normal: {
                //  formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                rich: {
                  a: {
                    color: "#999",
                    lineHeight: 22,
                    align: "center"
                  },
                  hr: {
                    width: "100%",
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: "#eee"
                  }
                }
              }
            },
            data: [
              { value: 335, name: "华安标普石油指数" },
              { value: 310, name: "易方达标普指数" },
              { value: 234, name: "银华永利债券A" },
              { value: 135, name: "高薪宝" },
              { value: 148, name: "工银医药健康指数A" }
            ]
          }
        ]
      }
    };
  },
  components: {
    IEcharts
  },
  mounted() {
    let chart = echarts.init(document.getElementById("cymix"));
    chart.setOption({
      series: [
        {
          type: "wordCloud",
          shape: "circle",
          left: "center",
          top: "center",
          width: "70%",
          height: "80%",
          right: null,
          bottom: null,
          //  sizeRange: [12, 60],
          rotationRange: [0, 0],
          //  rotationStep: 45,
          gridSize: 8,
          drawOutOfBound: false,
          textStyle: {
            normal: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: function() {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(",") +
                  ")"
                );
              }
            },
            emphasis: {
              //shadowBorder: 1,
              //shadowColor: '#333'
            }
          },
          data: [
            {
              name: "高净值",
              value: 10000
            },
            {
              name: "追涨停",
              value: 6181
            },
            {
              name: "高pe/低pb",
              value: 4386
            },
            {
              name: "仓位集中",
              value: 4055
            },
            {
              name: "高活跃",
              value: 2467
            },
            {
              name: "短线",
              value: 2244
            },
            {
              name: "通信设备",
              value: 1898
            },
            {
              name: "五日线上持股",
              value: 1484
            },
            {
              name: "次新股/高送转",
              value: 1112
            },
            {
              name: "MACD金叉买入/死叉卖出",
              value: 965
            }
          ]
        }
      ]
    });
  }
};
</script>
<style>
.el-table td,
.el-table th {
  padding: 0 !important;
  height: 32px !important;
}
</style>
<style scoped>
.wrap {
  font-size: 14px;
}
.wrap h3 {
  color: #199ed8;
  line-height: 3;
  margin-top: 10px;
  font-weight: 500;
}
.more-color {
  color: #199ed8;
  cursor: pointer;
}
.user-info {
  background: #fff;
  padding: 30px;
}
.info-left {
  margin-top: 35px;
}
.info-left ul {
  display: -webkit-box;
  display: -ms-box;
  display: -o-box;
  display: box;
  width: 100%;
  list-style: none;
}
.info-left ul li {
  width: 25%;
}
.switch-box {
  margin-top: 25px;
}
.switch-box span {
  margin-right: 10px;
  margin-left: 8%;
}
.switch-box span:nth-child(1) {
  margin-left: 0;
}
.line {
  width: 100%;
  height: 1px;
  background: #ccc;
  margin: 35px 0;
}
.wrap h3 {
  color: #199ed8;
  line-height: 3;
  margin-top: 10px;
  font-weight: bold;
}
.zczk-box,
.ccfx-box,
.jyfx-box,
.cfgl-box {
  background: #fff;
  height: 400px;
  padding: 30px;
}
.mix-echarts {
  width: 100%;
  height: 300px;
  margin-top: 20px;
}
.label-box {
  margin-top: 10px;
}
.label-box span {
  margin-right: 30px;
}
.line-v {
  background: #e6e6e6;
  width: 1px;
  height: 380px;
  margin-left: 50%;
}
.ccph-p {
  background: #00b0f0;
  margin-top: 20px;
  padding: 8px 0;
  width: 40%;
  color: #fff;
  text-align: center;
  line-height: 2;
}
.zjtj-info{
    text-align: center;
    border-bottom: 1px solid #ccc;
    height:50px;
    line-height: 2;
    padding-top:15px;
}
.zjtj-info strong{
    font-size:24px;
    color:#aeaeae;
}
.zjtj-info .p{
    color:#ff6600;
    font-weight: bold;
    font-size:18px;
    line-height: 1;
}
.zjtj-info .pp{
    color:#aeaeae;
    font-size:13px;
}
.zjtj-info:last-child{
    border-bottom: none;
}
.zjtj-info:nth-of-type(1){
    background-color: #fffdf8;
    margin-top:50px;
}
.zjtj-info:nth-of-type(1) strong,.zjtj-info:nth-of-type(2) strong,.zjtj-info:nth-of-type(3) strong{
    color:#ff3300;
}
</style>