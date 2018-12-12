<template>
    <div class="wealth-wrap">
        <h3>重点基金</h3>
        <div class="zdjj-box">
            <el-row :gutter="20">
                <el-col :span="8" v-for="item in fundcos.fundmax" :key="item.id">
                    <div class="bkjj-box2">
                        <div v-bind:class="item.bgimg"></div>
                        <h4>{{item.fund_name}}</h4>
                        <h2>{{item.earns}}</h2>
                        <p>近一年收视率</p>
                        <el-button type="primary" round @click="scrollclick">产品详情</el-button>
                    </div>
                </el-col>
                <!-- <el-col :span="8">
                    <div class="bkjj-box2">
                        <div class="yxjj-img"></div>
                        <h4>申万菱信沪深300价值指数</h4>
                        <h2>1.67%</h2>
                        <p>近一月收视率</p>
                        <el-button type="primary" round>产品详情</el-button>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bkjj-box2">
                        <div class="wjjj-img"></div>
                        <h4>申万菱信沪深300价值指数</h4>
                        <h2>1.67%</h2>
                        <p>近一月收视率</p>
                        <el-button type="primary" round>产品详情</el-button>
                    </div>
                </el-col> -->
            </el-row>
        </div>
        <h3>爆款基金<span @click="wealthMore">更多 ></span></h3>
        <div class="bkjj-box" style='position:relative'>
            <ul>
                <li class="bkjj-box3" v-for="item in fundcos.popular" :key="item.id">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <h5>{{item.earns}}</h5>
                            <h6>近一年收益率</h6>
                        </el-col>
                        <el-col :span="5">
                            <p>{{item.fund_name}}</p>
                        </el-col>
                        <el-col :span="5">
                            <p>{{item.risk_level}}</p>
                        </el-col>
                        <!-- <el-col :span="5"> -->
                            <!-- <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<bkjjStar[index].startnum"></i>
                            <i class="el-icon-star-half" v-if="bkjjStar[index].halfTrue"></i>
                            <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index<bkjjStar[index].kongNum"></i> -->
                        <!-- </el-col> -->
                        <el-col :span="5" style='float:right'>
                            <el-button type="primary" round @click="DeticalCLick(item)">产品详情</el-button>   
                        </el-col>
                    </el-row>
                </li>
            </ul>
            <ul style='position:absolute;top:15px;right:25%;width:20%'>
                <li style='width:100%;height:81px;line-height:81px;text-align:center' v-for="(starItem,ind) in bkjjStar" :key="starItem.id">
                    <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<bkjjStar[ind].startnum"></i>
                    <i class="el-icon-star-half" v-if="bkjjStar[ind].halfTrue"></i>
                    <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index<bkjjStar[ind].kongNum"></i>
                </li>
            </ul>   
        </div>
        <h3>优选基金<span @click="youxuanMore">更多 ></span></h3>
        <div class="bkjj-box" style='position:relative'>
            <ul>
                <li class="bkjj-box3"  v-for="item in fundcos.selction" :key="item.id">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <h5>{{item.earns}}</h5>
                            <h6>近一年收益率</h6>
                        </el-col>
                        <el-col :span="5">
                            <p>{{item.fund_name}}</p>
                        </el-col>
                        <el-col :span="5">
                            <p>{{item.risk_level}}</p>
                        </el-col>
                        <!-- <el-col :span="5"> -->
                            <!-- <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<startnum"></i> -->
                            <!-- <i class="el-icon-star-half" v-if="halfTrue"></i> -->
                            <!-- <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index< kongNum"></i> -->
                        <!-- </el-col> -->
                        <el-col :span="5" style='float:right'>
                            <el-button type="primary" round @click="DeticalCLick(item)">产品详情</el-button>
                        </el-col>
                    </el-row>
                </li>
            </ul>
            <ul style='position:absolute;top:15px;right:25%;width:20%'>
                <li style='width:100%;height:81px;line-height:81px;text-align:center' v-for="(starItem,ind) in yxjjStar" :key="starItem.id">
                    <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<yxjjStar[ind].startnum"></i>
                    <i class="el-icon-star-half" v-if="yxjjStar[ind].halfTrue"></i>
                    <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index<yxjjStar[ind].kongNum"></i>
                </li>
            </ul>   
        </div>
         <h3>稳健基金<span @click="wenjianMore">更多 ></span></h3>
         <div class="bkjj-box" style='position:relative'>
            <ul>
                <li class="bkjj-box3"  v-for="item in fundcos.robust" :key="item.id">
                    <el-row :gutter="20">
                        <el-col :span="4">
                            <h5>{{item.earns}}</h5>
                            <h6>近一年收益率</h6>
                        </el-col>
                        <el-col :span="5">
                            <p>{{item.fund_name}}</p>
                        </el-col>
                        <el-col :span="5">
                            <p>{{item.risk_level}}</p>
                        </el-col>
                        <!-- <el-col :span="5"> -->
                            <!-- <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<startnum"></i> -->
                            <!-- <i class="el-icon-star-half" v-if="halfTrue"></i> -->
                            <!-- <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index< kongNum"></i> -->
                        <!-- </el-col> -->
                        <el-col :span="5" style='float:right'>
                            <el-button type="primary" round @click="currencyCLick(item)">产品详情</el-button>
                        </el-col>
                    </el-row>
                </li>
            </ul> 
            <ul style='position:absolute;top:15px;right:25%;width:20%'>
                <li style='width:100%;height:81px;line-height:81px;text-align:center' v-for="(starItem,ind) in wjjjStar" :key="starItem.id">
                    <i class="el-icon-star-all" v-for="(star,index) in starts" :key="index" v-if="index<wjjjStar[ind].startnum"></i>
                    <i class="el-icon-star-half" v-if="wjjjStar[ind].halfTrue"></i>
                    <i class="el-icon-star-kong" v-for="(star,index) in starts" :key="index+5" v-if="index<wjjjStar[ind].kongNum"></i>
                </li>
            </ul>  
        </div>
    </div>
</template>
<script>
import API from "../../api/page/Wealth";
    export default {
        data(){
            return{
                fundcos:[],
                bkjjStar:[],
                yxjjStar:[],
                wjjjStar:[],
                starts: ["1", "2", "3", "4", "5"],
                }
        },
        created() {
            this.Fundcos();
        },
        mounted () {
        },
        methods:{
            scrollclick(){
               
            },
            wealthMore(){
                this.$router.push({ name: "WealthMore"});
            },
             youxuanMore(){   //点击优选更多
                this.$router.push({ 
                    name: "WealthMore",
                    query: {
                        name:"youxuan"
                    }
                });
            },
            wenjianMore(){  //点击稳健更多
                 this.$router.push({ 
                    name: "WealthMore",
                    query: {
                        name:"wenjian"
                    }
                });
            },
            DeticalCLick(item){
                let fcode = item.fund_code;
                this.$router.push({
                    path: '/BaseDetails', 
                    name: 'BaseDetails',
                    query: {
                        fund_code: fcode, 
                    }
                })
            },
            currencyCLick(item){
                 let fcode = item.fund_code;
                 this.$router.push({
                    path: '/CurrencyDetails', 
                    name: 'CurrencyDetails',
                    query: {
                        fund_code: fcode, 
                    }
                })
            },
            Fundcos(){
                API.fundcos()
                .then(res => {
                    console.log(res);
                    console.log(res.data.cake_list);
                    this.fundcos = res.data;  
                    function common(jjObj,jjArr) {
                        for (var i = 0;i < jjObj.length;i ++) {
                            var starObj = {};
                            starObj.startnum = jjObj[i].star;
                            starObj.kongNum = 0;
                            starObj.halfTrue = true;
                            if (typeof starObj.startnum === 'number' && starObj.startnum%1 === 0) {
                                    starObj.startnum = starObj.startnum;
                                    starObj.kongNum = 5 - starObj.startnum;
                                    starObj.halfTrue = false;
                                } else {
                                    starObj.startnum = starObj.startnum - 0.5;
                                    starObj.kongNum = 4 - starObj.startnum;
                                    starObj.halfTrue = true;
                                }
                                jjArr.push(starObj);
                        }
                    }
                    common(res.data.popular,this.bkjjStar);
                    common(res.data.selction,this.yxjjStar);
                    common(res.data.robust,this.wjjjStar);
                    console.log(this.bkjjStar);
                    console.log(this.yxjjStar);
                    console.log(this.wjjjStar);
                })
                .catch(error => {
                    console.log(error);
                });
            },
        }
    }
</script>
<style scope>
@import '/static/css/star.css';
.el-icon-star-on{
    color: #ffac12;
}
.wealth-wrap {
  font-size: 14px;
}
ul li{
    list-style: none;
}
.wealth-wrap h3 {
  color: #199ed8;
  line-height: 3;
  cursor: pointer;
}
.wealth-wrap h3 span{
    float: right;
    font-size:14px;
    margin-top:10px;
    font-weight: normal;
}
.zdjj-box,.bkjj-box{
    background-color: #fff;
    height:400px;
    padding:20px;
}
.bkjj-box2{
    border:1px solid #ccc;
    padding-bottom: 30px;
}
 .bgimg1{
    width:100%; 
    height:150px;
     background: url('../../../static/img/bkjj.jpg') no-repeat; 
    background-size: cover;
} 

.bgimg2{
    width:100%;
    height:150px;
    background: url('../../../static/img/yxjj.jpg') no-repeat;
    background-size: cover;
}
.bgimg3{
    width:100%;
    height:150px;
    background: url('../../../static/img/wjjj.jpg') no-repeat;
    background-size: cover;
}
.bkjj-box2 h4{
    color: #444444;
    text-align: center;
    line-height: 4;
    font-weight: normal;
    font-size:18px;
}
.bkjj-box2 h2{
    font-size: 32px;
    color:#fe6400;
    text-align: center
}
.bkjj-box2 p{
    color:#b1b1b1;
    text-align: center;
}
.bkjj-box2 button{
    width:50%;
    margin-left:25%;
    margin-top:25px;
    border-radius: 30px;
}
.bkjj-box3{
    text-align: center;
    border-bottom: 1px solid #ccc;
    
    padding: 15px 0;
}

.bkjj-box3:last-child{
    border-bottom: none;
}
.bkjj-box3 h5{
    font-size:26px;
    color:#fe6400;
    font-weight: normal;
}
.bkjj-box3 h6{
    color:#b1b1b1;
    font-weight: normal;
    font-size: 14px;
}
.bkjj-box3 p{
    color: #444444;
    line-height: 3;
}
.bkjj-box3 i{
    line-height: 3;
}
.bkjj-box3 button{
     border-radius: 30px;
     width:50%;
     margin-top:8px;
}
</style>
