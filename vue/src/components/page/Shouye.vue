<template>
    <div class="warp_box">
       <div class="header_box" style="text-align:center">
            <el-row v-for="(item,index) in productList" :key={index}> 
                <el-col :span="4"><div class="grid-content bg-purple des_box border_box">
                    <li class="person">{{item.number}}</li>
                    <li style="color:#606060">{{item.customer}}</li>
                    <li style="color: #FA251D;">
                        <span>{{item.percent}}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10px" height="10px" viewBox="0 0 1024 1024" version="1.1"><path fill="#F0AF3A" d="M480 192a32 32 0 0 1 64 0v672a32 32 0 0 1-64 0zM512 205.12l-233.28 233.6a32 32 0 1 1-45.44-45.44l256-256a32 32 0 0 1 45.44 0l256 256a32 32 0 0 1-45.44 45.44z"/></svg>
                    </li>
                </div></el-col>
               <!--  <el-col :span="4"><div class="grid-content bg-purple des_box border_box">
                    <li class="person">230人</li>
                    <li style="color:#606060">新增客户</li>
                    <li style="color: #FA251D;">
                        <span>20%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10px" height="10px" viewBox="0 0 1024 1024" version="1.1"><path fill="#F0AF3A" d="M480 192a32 32 0 0 1 64 0v672a32 32 0 0 1-64 0zM512 205.12l-233.28 233.6a32 32 0 1 1-45.44-45.44l256-256a32 32 0 0 1 45.44 0l256 256a32 32 0 0 1-45.44 45.44z"/></svg>
                    </li>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple des_box border_box">
                    <li class="person">230人</li>
                    <li style="color:#606060">新增客户</li>
                    <li style="color: #FA251D;">
                        <span>20%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10px" height="10px" viewBox="0 0 1024 1024" version="1.1"><path fill="#F0AF3A" d="M480 192a32 32 0 0 1 64 0v672a32 32 0 0 1-64 0zM512 205.12l-233.28 233.6a32 32 0 1 1-45.44-45.44l256-256a32 32 0 0 1 45.44 0l256 256a32 32 0 0 1-45.44 45.44z"/></svg>
                    </li>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple des_box border_box">
                    <li class="person">230人</li>
                    <li style="color:#606060">新增客户</li>
                    <li style="color: #FA251D;">
                        <span>20%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10px" height="10px" viewBox="0 0 1024 1024" version="1.1"><path fill="#F0AF3A" d="M480 192a32 32 0 0 1 64 0v672a32 32 0 0 1-64 0zM512 205.12l-233.28 233.6a32 32 0 1 1-45.44-45.44l256-256a32 32 0 0 1 45.44 0l256 256a32 32 0 0 1-45.44 45.44z"/></svg>
                    </li>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple des_box border_box">
                    <li class="person">230人</li>
                    <li style="color:#606060">新增客户</li>
                    <li style="color: #FA251D;">
                        <span>20%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10px" height="10px" viewBox="0 0 1024 1024" version="1.1"><path fill="#F0AF3A" d="M480 192a32 32 0 0 1 64 0v672a32 32 0 0 1-64 0zM512 205.12l-233.28 233.6a32 32 0 1 1-45.44-45.44l256-256a32 32 0 0 1 45.44 0l256 256a32 32 0 0 1-45.44 45.44z"/></svg>
                    </li>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple des_box">
                    <li class="person">230人</li>
                    <li style="color:#606060">新增客户</li>
                    <li style="color: #FA251D;">
                        <span>20%</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="10px" height="10px" viewBox="0 0 1024 1024" version="1.1"><path fill="#F0AF3A" d="M480 192a32 32 0 0 1 64 0v672a32 32 0 0 1-64 0zM512 205.12l-233.28 233.6a32 32 0 1 1-45.44-45.44l256-256a32 32 0 0 1 45.44 0l256 256a32 32 0 0 1-45.44 45.44z"/></svg>
                    </li>
                </div></el-col> -->
            </el-row>
       </div>
       <h4 class="tit">资产分析</h4>
       <div class="main">
        <div class="main_box">
            <div class="main_left">
                <div class="scbbdate_box" style="margin-left:18px; margin-top:20px;">
                    <el-radio-group v-model="scbxradio" size="small" @change="changeFun()">
                        <el-radio-button label="1">本月</el-radio-button>
                        <el-radio-button label="2">本季</el-radio-button>
                        <el-radio-button label="3">本年</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="mix_echarts">
                    <IEcharts :option="mix" style="height:100%;width: 100%;"></IEcharts>
                </div>
            </div>
            <div class="main_right" style="margin-left: 50px;">
                <div class="mix_echarts" style="height:80%;width: 100%; margin-top: 85px;margin-left: 10px;">
                    <IEcharts :option="mixs" ></IEcharts>
                </div>
            </div>
        </div>
        <div class="mix_echarts" style="height:398px;width:100%; margin-top: 14px">
            <IEcharts :option="mixss" ></IEcharts>
        </div>
       </div>
       <h4 class="tit">盈亏分析</h4>
       <div class="main">
            <div class="main_box">
                <div class="main_left">
                    <div class="scbbdate_box" style="margin-left:18px; margin-top:20px;">
                        <el-radio-group v-model="scbxradio" size="small" @change="changeFun()">
                            <el-radio-button label="1">今日</el-radio-button>
                            <el-radio-button label="2">本月</el-radio-button>
                            <el-radio-button label="3">本季</el-radio-button>
                            <el-radio-button label="4">本年</el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="mix_echarts" style="height:100%;width: 80%;">
                        <IEcharts :option="waning" ></IEcharts>
                    </div>
                </div>
                <div class="main_right" >
                    <div class="mix_echarts" style="height:80%;width: 100%;margin-left: 20px; ">
                        <IEcharts :option="grade"></IEcharts>
                    </div>
                </div>
            </div>
            <div class="mix_echarts" style="height:398px;width:110%; margin-top: 14px">
                <IEcharts :option="all" ></IEcharts>
            </div>
    
       </div>
       <h4 class="tit">持仓分析</h4>
       <div class="main">
            <div class="main_box" style="height:306px;border-bottom:0;display: flex">
                <div class="main_left" style="flex:1">
                        <div class="scbbdate_box" style=" margin-left:18px; margin-top:20px;">
                                <el-radio-group v-model="scbxradio" size="small" @change="changeFun()">
                                    <el-radio-button label="1">重仓</el-radio-button>
                                    <el-radio-button label="2">新建</el-radio-button>
                                    <el-radio-button label="3">盈利</el-radio-button>
                                    <el-radio-button label="4">亏损</el-radio-button>
                                </el-radio-group>
                        </div>
                        <div class="scbbdate_box" style="margin-left:5px">
                                <div class="left-box" style="margin-left:20px;margin-top:14px;background: #F6F6F6;border-right:1px solid #ccc;height: 216px;width: 168px;">
                                    <div style="text-align:center; line-height: 2;border-bottom: 1px solid #ccc;height: 106px;">
                                        <strong style="font-size:26px;color:#FF0B00">13.00</strong>
                                        <p>人均持股数</p>
                                    </div>
                                    <div style="margin-top: 20px;text-align:center; line-height: 2">
                                        <strong style="font-size:26px;color:#FF0B00">63%</strong>
                                        <p>理财人数占比</p>
                                    </div>
                                </div>
                                <div class="left-box" style="margin-top:14px;background: #F6F6F6;height: 216px;width: 168px;">
                                    <div style="text-align:center; line-height: 2;border-bottom: 1px solid #ccc;height: 106px;">
                                        <strong style="font-size:26px;color:#FF0B00">709800</strong>
                                        <p>人均市值</p>
                                    </div>
                                    <div style="margin-top: 20px;text-align:center; line-height: 2">
                                        <strong style="font-size:26px;color:#FF0B00">24%</strong>
                                        <p>空仓人数占比</p>
                                    </div>
                                </div>
                        </div>
                </div>
                <div class="main_right" style="margin-left:30px;height: 214px;margin-top:60px ">
                      <div class="table" style="height: 114px">
                        <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                          prop="date"
                          label="日期"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="姓名"
                          >
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="姓名"
                        >
                      </el-table-column>
                      <el-table-column
                      prop="name"
                      label="姓名"
                      >
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    >
                  </el-table-column>
                        <el-table-column
                          prop="address"
                          label="地址">
                        </el-table-column>
                      </el-table>
                      </div>
                </div>
        </div>
           
       </div>
       <h4 class="tit">模式分析</h4>
       <div class="main" style="height:158px">
            <div class="scbbdate_box" style=" margin-left:18px;">
                <el-radio-group v-model="scbxradio" size="small" @change="changeFun()" style=" margin-top:20px;margin-left: 14px;">
                    <el-radio-button label="2">本月</el-radio-button>
                    <el-radio-button label="3">本季</el-radio-button>
                    <el-radio-button label="4">本年</el-radio-button>
                </el-radio-group>
            </div>
            <div class="header_box" style="margin-left: 14px;">
                    <el-row> 
                        <el-col :span="4"><div class="grid-content bg-purple des_box border_box" style="width:138px">
                            <li class="person">900人</li>
                            <li style="color:#606060">金叉买</li>
                            <li style="color: #FA251D;">
                                <span style="color:#83B2DC;font-size:12px">250</span>
                                <span style="color:#A4A4A2;font-size:12px">/</span>
                                <span style="color:#AACBEA;font-size:12px">200</span>
                                <span style="color:#A4A4A2;font-size:12px">/</span>
                                <span style="color:#FABA94;font-size:12px">150</span>
                                <span style="color:#A4A4A2;font-size:12px">/</span>
                                <span style="color:#FDB682;font-size:12px">300</span>
                            </li>
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple des_box border_box"style="width:138px">
                            <li class="person">230人</li>
                            <li style="color:#606060">新增客户</li>
                            <li style="color: #FA251D;">
                                <span style="color:#83B2DC;font-size: 12px">250</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#AACBEA;font-size: 12px">200</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FABA94;font-size: 12px">150</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FDB682;font-size: 12px">300</span>
                            </li>
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple des_box border_box"style="width:138px" >
                            <li class="person">230人</li>
                            <li style="color:#606060">新增客户</li>
                            <li style="color: #FA251D;">
                                <span style="color:#83B2DC;font-size: 12px">250</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#AACBEA;font-size: 12px">200</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FABA94;font-size: 12px">150</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FDB682;font-size: 12px">300</span>
                            </li>
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple des_box border_box"style="width:138px">
                            <li class="person">230人</li>
                            <li style="color:#606060">新增客户</li>
                            <li style="color: #FA251D;">
                                <span style="color:#83B2DC;font-size: 12px">250</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#AACBEA;font-size: 12px">200</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FABA94;font-size: 12px">150</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FDB682;font-size: 12px">300</span>
                            </li>
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple des_box border_box"style="width:138px">
                            <li class="person">230人</li>
                            <li style="color:#606060">新增客户</li>
                            <li style="color: #FA251D;">
                                <span style="color:#83B2DC;font-size: 12px">250</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#AACBEA;font-size: 12px">200</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FABA94;font-size: 12px">150</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FDB682;font-size: 12px">300</span>
                            </li>
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple des_box"style="width:138px">
                            <li class="person">230人</li>
                            <li style="color:#606060">新增客户</li>
                            <li style="color: #FA251D;">
                                <span style="color:#83B2DC;font-size: 12px">250</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#AACBEA;font-size: 12px">200</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FABA94;font-size: 12px">150</span>
                                <span style="color:#A4A4A2;font-size: 12px">/</span>
                                <span style="color:#FDB682;font-size: 12px">300</span>
                            </li>
                        </div></el-col>
                    </el-row>
               </div>
           
       </div>
       <h4 class="tit">偏好分析</h4>
       <div class="main" style="height:1054px">
            <div class="scbbdate_box" style="margin-left:5px;margin-top:12px;">
                <el-radio-group v-model="scbxradio" size="small" @change="changeFun()" style="margin-top:20px;margin-left: 14px;">
                    <el-radio-button label="2">本月</el-radio-button>
                    <el-radio-button label="3">本季</el-radio-button>
                    <el-radio-button label="4">本年</el-radio-button>
                </el-radio-group>
            </div>
            <div class="style" style="height:330px">
                <div class="style_left">
                    <p style="margin-bottom:78px">整体客户风格偏好</p>
                     <div class="pro_box">
                        <div class="pro">
                            <span  style="padding-right:12px">1</span>
                            <span>高市值</span>
                            <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                            </div>
                            <span style="margin-left:5px">市值</span>
                        </div>
                        <div class="pro">
                                <span  style="padding-right:12px">1</span>
                                <span>高市值</span>
                                <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                </div>
                                <span style="margin-left:5px">市值</span>
                            </div>
                            <div class="pro">
                                    <span  style="padding-right:12px">1</span>
                                    <span>高市值</span>
                                    <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                    </div>
                                    <span style="margin-left:5px">市值</span>
                                </div>
                                <div class="pro">
                                        <span  style="padding-right:12px">1</span>
                                        <span>高市值</span>
                                        <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                            <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                        </div>
                                        <span style="margin-left:5px">市值</span>
                                    </div>
                                    <div class="pro">
                                            <span  style="padding-right:12px">1</span>
                                            <span>高市值</span>
                                            <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                                <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                            </div>
                                            <span style="margin-left:5px">市值</span>
                                        </div>
                     </div>
                    
                </div>
                <div class="style-right">
                    <p style="margin-bottom:78px">整体客户风格偏好</p>
                    <div class="pro_box">
                            <div class="pro">
                                    <span  style="padding-right:12px">1</span>
                                    <span>高市值</span>
                                    <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                    </div>
                                    <span style="margin-left:5px">市值</span>
                                </div>
                                <div class="pro">
                                        <span  style="padding-right:12px">1</span>
                                        <span>高市值</span>
                                        <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                            <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                        </div>
                                        <span style="margin-left:5px">市值</span>
                                    </div>
                                    <div class="pro">
                                            <span  style="padding-right:12px">1</span>
                                            <span>高市值</span>
                                            <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                                <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                            </div>
                                            <span style="margin-left:5px">市值</span>
                                        </div>
                                        <div class="pro">
                                                <span  style="padding-right:12px">1</span>
                                                <span>高市值</span>
                                                <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                                </div>
                                                <span style="margin-left:5px">市值</span>
                                            </div>
                                            <div class="pro">
                                                    <span  style="padding-right:12px">1</span>
                                                    <span>高市值</span>
                                                    <div style="width:260px;margin-left: 14px;margin-top: 5px;">
                                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="80"></el-progress>
                                                    </div>
                                                    <span style="margin-left:5px">市值</span>
                                                </div>
                         </div>
                </div>
            </div>
            <div class="main_box main_boxs">
                <div class="main_left" style="margin-left:12px">
                    <div class="mix_echarts">
                        <IEcharts :option="holld" style="height:50%;width: 70%; margin-top: 35px"></IEcharts>
                    </div>
                </div>
                <div class="main_right" style="margin-left:70px">
                    <div class="mix_echarts">
                        <IEcharts :option="holld" style="height:50%;width: 70%; margin-top: 35px"></IEcharts>
                    </div>
                </div>
            </div>
            <div class="main_boxx">
                <div class="main_left">
                    <div class="mix_echarts">
                        <IEcharts :option="mix" style="height:50%;width: 80%; margin-top: 35px"></IEcharts>
                    </div>
                </div>
                <div class="main_right"style="margin-left:70px">
                    <div class="mix_echarts">
                        <IEcharts :option="mix" style="height:50%;width: 80%; margin-top: 35px"></IEcharts>
                    </div>
                </div>
            </div>
           
    
       </div>
       <h4 class="tit">贡献分析</h4>
       <div class="main" style="display:flex; justify-content: space-between;">
            <div class="main_box" style="height:306px;border-bottom:0;">
                <div class="main_left">
                        <div class="scbbdate_box" style=" margin-left:18px; margin-top:20px;">
                                <el-radio-group v-model="scbxradio" size="small" @change="changeFun()">
                                    <el-radio-button label="1">重仓</el-radio-button>
                                    <el-radio-button label="2">新建</el-radio-button>
                                    <el-radio-button label="3">盈利</el-radio-button>
                                    <el-radio-button label="4">亏损</el-radio-button>
                                </el-radio-group>
                        </div>
                        <div class="scbbdate_box" style="margin-left:5px">
                                <div class="left-box" style="margin-left:20px;margin-top:14px;background: #F6F6F6;height: 216px;width: 156px;">
                                    <div style="text-align:center; line-height: 2;border-bottom: 1px solid #ccc;height: 106px;">
                                        <strong style="font-size:26px;color:#FF0B00">13.00</strong>
                                        <p>人均持股数</p>
                                    </div>
                                    <div style="margin-top: 20px;text-align:center; line-height: 2">
                                        <strong style="font-size:26px;color:#FF0B00">63%</strong>
                                        <p>理财人数占比</p>
                                    </div>
                                </div>
                               
                        </div>
                       
                </div>
                <div class="mix_echarts" style="height:80%;width: 100%;">
                    <IEcharts :option="contribution" ></IEcharts>
                </div>
                <div class="mix_echarts">
                    <IEcharts :option="work" ></IEcharts>
                </div>
            </div>
           
       </div>
       <div class="group_box">
        <div class="mix_echarts">
            <IEcharts :option="group" style="height:100%;width: 100%;"></IEcharts>
        </div>
    </div>
    </div>
</template>

    <script>
            import IEcharts from 'vue-echarts-v3';
            import axios from "axios"
            export default {
                data: function(){
                    return {
                        productList:[],
                        mix:{
                            color:["#7FE07F","#CE91CC","#FF7F50","#87CEFA"],
                            title : {
                                text: '资产结构',
                                left:'20px',
                                top:'20px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            series: [
                                {
                                    name: '资产结构',
                                    type: 'pie',
                                    radius: ['25%', '30%'],  
                                    center: ['44%', '25%'],
                                    left:'94px',
                                    // avoidLabelOverlap: false,
                                    label:{
                                        formatter: '{b}: {d}%',
                                    //     normal: {
                                    //     show: falset,
                                    //     position: 'center'
                                    // },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '16',
                                            fontWeight: 'normal'
                                        }
                                    }
                                    },
                                    data:[
                                        {value:335, name:'证券资产'},
                                        {value:310, name:'OTC资产'},
                                        {value:234, name:'场外基金'},
                                        {value:135, name:'现金及其他'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        },
                        mixs:{
                            color:["#F0B185","#FE9661","#99C6E5","#5E9AD6"],
                            title : {
                                text: '客户分级分布',
                                left:'46px',
                                // top:'40px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            legend: {
                                orient: 'horizontal',
                                right: '5%',
                                top:'12px'
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: false
                                    },
                                    axisLabel:{
                                        interval:0
                                    },
                                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                                }
                            ],
                            yAxis:{
                                type: 'value',
                                name:'客户数',
                                min:0,
                                max:400,
                                interval:100,
                            },
                            series: [
                            {
                                name: "3-50万",
                                type: "bar",
                                right:0,
                                stack: '总量',
                                data: [5, 30, 36, 10, 34, 20,5, 30, 36, 10, 34, 20]
                            },
                            {
                                name: "50-300万",
                                type: "bar",
                                stack: '总量',
                                data: [5, 30, 36, 10, 34, 20,5, 30, 36, 10, 34, 20]
                            },
                            {
                                name: "300-1000万",
                                type: "bar",
                                stack: '总量',
                                data: [35, 40, 30, 50, 60, 40,5, 30, 36, 10, 34, 20]
                            },
                            {
                                name: "1000万以上",
                                type: "bar",
                                stack: '总量',
                                data: [35, 40, 30, 50, 60, 40,5, 30, 36, 10, 34, 20]
                            }]
                        },
                        mixss:{
                            color:["#FF7F50","#E7B3E2","#8CB3E3"],
                            title : {
                                text: '资产趋势',
                                left:'46px',
                                // top:'56px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            legend: {
                                orient: 'horizontal',  
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    data: ['01-01','02-15','04-01','05-15','07-01','04-01','05-15','07-01','04-01','05-15','07-01','04-01','05-15','07-01']
                                }
                            ],
                            yAxis:[{
                                type: 'value',
                                name:'金额（万元）',
                                min:0,
                                max:1500,
                                interval:500
                            },
                            {
                                type: 'value',
                                name:'指数值',
                                min:0,
                                max:1250,
                                interval:250,
                                position: 'right',
                                axisLine: {
                                lineStyle: {
                                    color: '#B2B2B2'
                                    }
                                },
                                axisLabel: {
                                    formatter: '{value} '
                                }
                            }],
                            series: [
                            {
                                name: "交易量",
                                type: "bar",
                                right:0,
                                barWidth : 50,
                                data: [500, 130, 1036, 1000, 340, 200,500,500, 130,500, 130, 1036, 1000, 340]
                            },
                            {
                                name: "客户总资产",
                                type: "line",
                                data: [500, 560, 360, 1000, 340, 200,590,500, 560,500, 130, 1036, 1000, 340           ]
                            },
                            {
                                name: "沪深300",
                                type: "line",
                                data: [350, 400, 300, 590, 600, 490,500,350, 400,500, 130, 1036, 1000, 34]
                            }]
                        },
                        waning:{
                            color:["#E57B55","#8CB3E3"],
                            title : {
                                text: '整体客户盈亏占比',
                                left:'20px',
                                top:'20px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                          
                                series: [
                                {
                                    name: '整体客户盈亏占比',
                                    type: 'pie',
                                    radius: ['30%', '40%'],  
                                    center: ['50%', '40%'],
                                    left:'20%',
                                    // avoidLabelOverlap: false,
                                    label:{
                                        formatter: '{b}: {d}%',
                                    //     normal: {
                                    //     show: false,
                                    //     position: 'center'
                                    // },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '16',
                                            fontWeight: 'normal'
                                        }
                                    }
                                    },
                                    // labelLine: {
                                    //     normal: {
                                    //         show: false
                                    //     }
                                    // },
                                    data:[
                                        {value:335, name:'盈利60%'},
                                        {value:230, name:'亏损40%'},
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                            
                        },
                        grade:{
                            color:["#F8CBAD","#F4B183","#FF9966","#9DC3E6","#5B9BD5","#3C87CC"],
                            title : {
                                text: '分级客户盈亏占比',
                                left:'46px',
                                // top:'40px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'horizontal',
                                x: 'center',
                                bottom:'0' 
                            },
                            xAxis: [
                                {
                                    type: 'value',
                                }
                            ],
                            yAxis:{
                                type: 'category',
                                data: ['3-50万','50-300万','300-1000万','10000万以上','整体客户']
                            },
                            grid: {
                                left: 100
                            },
                            series: [
                                    {
                                        name: '盈利0-5%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [320, 302, 301, 334, 390]
                                    },
                                    {
                                        name: '盈利5-15%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [120, 132, 101, 134, 90]
                                    },
                                    {
                                        name: '盈利15%以上',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [220, 182, 191, 234, 290]
                                    },
                                    {
                                        name: '亏损0-5%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [150, 212, 201, 154, 190]
                                    },
                                    {
                                        name: '亏损5-15%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [820, 832, 901, 934, 1290]
                                    },
                                    {
                                        name: '亏损15%以上',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [820, 832, 901, 934, 1290]
                                    }
                                ]
                           },
                           all:{
                            color:["#E7B3E2","#8CB3E3"],
                            title : {
                                text: '所有客户总盈亏',
                                left:'46px',
                                // top:'56px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: '',
                                left: '90%',
                                y:'center'
                                
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    data: ['01-01','02-15','04-01','05-15','07-01','08-15','10-01','11-15']
                                }
                            ],
                            yAxis:[{
                                type: 'value',
                                name:'收益率(%)',
                                min:0,
                                max:2.50,
                                // interval:5.0
                            },
                            {
                                type: 'value',
                                name:'',
                                position: '',
                                axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                    }
                                },
                                axisLabel: {
                                    formatter: '{value} '
                                }
                            }],
                            series: [
                            {
                                name: "客户总资产",
                                type: "line",
                                data: [0.5, 2.5, 0.6, 0.4, 0.34, 2.0,0.9,0.5, 0.6]
                            },
                            {
                                name: "沪深300",
                                type: "line",
                                data: [0.5, 0.4, 0.3, 0.9, 0.6, 0.7,0.25,0.5, 0.4]
                            }]
                        },
                        style:{
                            color:["#FF7F50","#E7B3E2","#8CB3E3"],
                            title : {
                                text: '整体客户风格偏好',
                                left:'46px',
                                // top:'56px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'horizontal',  
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    data: ['01-01','4月','04-01','10月','07-01','08-15','10-01','11-15','12-15']
                                }
                            ],
                            yAxis:[{
                                type: 'value',
                                name:'金额（万元）',
                                min:0,
                                max:1500,
                                interval:500
                            },
                            {
                                type: 'value',
                                name:'指数值',
                                min:0,
                                max:1250,
                                interval:250,
                                position: 'right',
                                axisLine: {
                                lineStyle: {
                                    color: '#B2B2B2'
                                    }
                                },
                                axisLabel: {
                                    formatter: '{value} '
                                }
                            }],
                            series: [
                            {
                                name: "交易量",
                                type: "bar",
                                right:0,
                                barWidth : 50,
                                data: [500, 130, 1036, 1000, 340, 200,500,500, 130]
                            },
                            {
                                name: "客户总资产",
                                type: "line",
                                data: [500, 560, 360, 1000, 340, 200,590,500, 560]
                            },
                            {
                                name: "沪深300",
                                type: "line",
                                data: [350, 400, 300, 590, 600, 490,500,350, 400]
                            }]
                        },
                        holld:{
                            color:["#FF7F50"],
                            title : {
                                text: '整体客户概念偏好',
                                left:'46px',
                                // top:'56px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        alignWithLabel: true
                                    },
                                    barWidth : 10,
                                    axisLabel:{
                                        interval:0
                                    },
                                    data: ['深圳国资','AI','行业龙头','5g','MSCI','国改','网安','预增','深股通','雄安']
                                }
                            ],
                            yAxis:[{
                                type: 'value',
                                name:'金额（万元）',
                                min:0,
                                max:100,
                                interval:25
                            },
                           ],
                            series: [
                            {
                                name: "交易量",
                                type: "bar",
                                data: [50, 10, 16, 10, 34, 20,50,50, 13,60]
                            },
                            ]
                        },
                        
                        tableData: [{
                            date: '202',
                            name: '王小虎',
                            address: '上海市'
                         },
                         {
                            date: '20',
                            name: '王小虎',
                            address: '上海市'
                        }, {
                            date: '201',
                            name: '王小虎',
                            address: '上海市'
                        },
                        {
                            date: '201',
                            name: '王小虎',
                            address: '上海市'
                        },
                        {
                            date: '23',
                            name: '王小虎',
                            address: '上海'
                        }],
                        contribution:{
                            color:["#F8CBAD","#F4B183","#FF9966","#9DC3E6","#5B9BD5","#3C87CC"],
                            title : {
                                text: '分级客户盈亏占比',
                                left:'46px',
                                // top:'40px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 16,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'horizontal',
                                x: 'center',
                                bottom:'0' 
                            },
                            xAxis: [
                                {
                                    type: 'value',
                                }
                            ],
                            yAxis:{
                                type: 'category',
                                data: ['3-50万','50-300万','300-1000万','10000万以上','整体客户']
                            },
                            grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
                            series: [
                                    {
                                        name: '盈利0-5%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [320, 302, 301, 334, 390]
                                    },
                                    {
                                        name: '盈利5-15%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [120, 132, 101, 134, 90]
                                    },
                                    {
                                        name: '盈利15%以上',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [220, 182, 191, 234, 290]
                                    },
                                    {
                                        name: '亏损0-5%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [150, 212, 201, 154, 190]
                                    },
                                    {
                                        name: '亏损5-15%',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [820, 832, 901, 934, 1290]
                                    },
                                    {
                                        name: '亏损15%以上',
                                        type: 'bar',
                                        stack: '总量',
                                        label: {
                                            normal: {
                                                show: true,
                                                position: 'insideRight'
                                            }
                                        },
                                        data: [820, 832, 901, 934, 1290]
                                    }
                                ]
                           },
                           work:{
                            color:["#7FE07F","#CE91CC","#FF7F50","#87CEFA"],
                            title : {
                                text: '资产结构',
                                left:'20px',
                                top:'20px',
                                  textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                                    fontFamily: 'Arial, Verdana, sans...',
                                    fontSize: 14,
                                    fontStyle: 'normal',
                                    fontWeight: 'normal',
                                },
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            grid: {
                                left: '10%',
                                right: '24%',
                                bottom: '3%',
                                containLabel: true
                            },
                            series: [
                                {
                                    name: '资产结构',
                                    type: 'pie',
                                    radius: ['25%', '30%'],  
                                    center: ['20%', '25%'],
                                    left:'94px',
                                    // avoidLabelOverlap: false,
                                    label:{
                                        formatter: '{b}: {d}%',
                                    //     normal: {
                                    //     show: falset,
                                    //     position: 'center'
                                    // },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '16',
                                            fontWeight: 'normal'
                                        }
                                    }
                                    },
                                    data:[
                                        {value:335, name:'证券资产'},
                                        {value:310, name:'OTC资产'},
                                        {value:234, name:'场外基金'},
                                        {value:135, name:'现金及其他'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        },
                    }
                },
                mounted(){
                  this.getList()
                },
                methods:{
                     getList(){
                    axios.get("https://www.easy-mock.com/mock/5b62c2e33469e27da6596a54/example/guest").then((res)=>{
                        console.log(res);
                        this.productList = res.data;
                        console.log(res.data)
                    })
                  },
                    changeFun() {
                        console.log(111111111)
                    },
                },
                components: {
                    IEcharts
                }
            }
        </script>
<style scoped>
    *{
        margin: 0;
        padding:0;
        list-style: none;
        text-decoration: none;
    }
    .warp_box{
        overflow: hidden;
    }
    .header_box{
        height: 112px;
        background: #fff;
        line-height: 1.5
    }
    .des_box{
        margin: 12px 20px 0px 15px;
        position: relative;
        font-size: 16px;
        color: #9C9C9C;
    }
    .border_box::after{
        content: '';
        display: block;
        width: 1px;
        height: 58px;
        border-right:1px solid #ccc;
        position: absolute;
        top:12px;
        right:-0px;
    }
    .person{
        font-weight: 800;
        font-size: 24px;
        color: #FA251D;
    }
    .tit{
        color: #00A8DF;
        margin: 20px 0px 18px;
    }

    .main{
        background: #fff;
    }
    .main_box{                   
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        height: 360px;
    }
   
    .mix_echarts{
        width:560px;
        height:600px
    }
    .main_left{
       position: relative;
       width: 45%;
    }
    .main_right{
       flex:1
    }
    .main_boxs{
        border-top:1px solid #ccc;
        border-bottom:0;
    }
    .scbbdate_box{
        display: flex;
    }
    .main_lefts{
        width: 30%;
    }
    .table{
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5;
        display: table;
        border-collapse: separate;
        border-spacing: 2px;
        border-color: #000;
    }
    thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
    }
    
    .dex_boxs tr{
        text-align: center;
    }
    .style{
        display: flex;
    }
    .style_left,.style-right{
        margin-left: 46px;
        margin-top: 15px;
    }
    .pro{
        display: flex;
        line-height: 2;
        text-align: center;
    }
    .style-right{
        flex:1;
        margin-left: 50px;
    }
    .main_boxx{
        display: flex
    }
    .el-table .cell {
        max-height: 94px !important;overflow: auto !important;
    }
    .el-table__row{
    height: 30px;
    }
</style>