<template>
    <div class="wealthmore-wrap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="爆款基金" name="first">
                <div class="date-box">
                    <el-select v-model="bkjjvalue" placeholder="请选择" @change="bkjjcurrentSel">
                        <el-option
                            v-for="item in bkjjoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                     <el-table :data="bkjjtableData" style="width: 100%" @sort-change="bkjjsortChange" :default-sort = "{prop: 'earns', order: 'descending'}">
                        <el-table-column prop="fund_code" label="基金代码" align="center">
                        </el-table-column>
                        <el-table-column prop="fund_name" label="基金名称" align="center">
                        </el-table-column>
                        <el-table-column label="评价信息" align="center" sortable='custom'>
                            <template slot-scope="scope">
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                            </template>
                        </el-table-column>
                         <el-table-column prop="earns" label="收益率" align="center" sortable='custom'>
                        </el-table-column>
                         <el-table-column  label="详细信息" align="center">
                             	<div>哈哈哈</div>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            @current-change="bkjjCurrentChange"
                            :current-page.sync="bkjjcurrentPage"
                            :page-size="bkjjpagesize"
                            layout="total, prev, pager, next"
                            :total="bkjjtotal">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="优选基金" name="second">
                 <div class="date-box">
                    <el-select v-model="yxjjvalue" placeholder="请选择" @change="yxjjcurrentSel">
                        <el-option
                            v-for="item in yxjjoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                     <el-table :data="yxjjtableData" style="width: 100%" @sort-change="yxjjsortChange" :default-sort = "{prop: 'earns', order: 'descending'}">
                        <el-table-column prop="fund_code" label="基金代码" align="center">
                        </el-table-column>
                        <el-table-column prop="fund_name" label="基金名称" align="center">
                        </el-table-column>
                        <el-table-column label="评价信息" align="center" sortable='custom'>
                            <template slot-scope="scope">
                               <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                            </template>

                        </el-table-column>
                         <el-table-column prop="earns" label="收益率" align="center" sortable='custom'>
                        </el-table-column>
                         <el-table-column label="详细信息" align="center">
                             	<template scope="scope">
									<el-button style="color:#20a0ff; border:none;"
										@click="Infoclick(scope)">产品详情</el-button>
								</template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            @current-change="yxjjCurrentChange"
                            :current-page.sync="yxjjcurrentPage"
                            :page-size="yxjjpagesize"
                            layout="total, prev, pager, next"
                            :total="yxjjtotal">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="稳健基金" name="third">
                 <div class="date-box">
                    <el-select v-model="wjjjvalue" placeholder="请选择" @change="wjjjcurrentSel">
                        <el-option
                            v-for="item in wjjjoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div>
                     <el-table :data="wjjjtableData" style="width: 100%" @sort-change="wjjjsortChange" :default-sort = "{prop: 'earns', order: 'descending'}">
                        <el-table-column prop="fund_code" label="基金代码" align="center">
                        </el-table-column>
                        <el-table-column prop="fund_name" label="基金名称" align="center">
                        </el-table-column>
                        <el-table-column label="评价信息" align="center" sortable='custom'>
                            <template slot-scope="scope">
                                <i class="el-icon-star-on"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                                <i class="el-icon-star-off"></i>
                            </template>
                        </el-table-column>
                         <el-table-column prop="earns" label="七日年化" align="center" sortable='custom'>
                        </el-table-column>
                        <el-table-column label="详细信息" align="center">
                            <template scope="scope">
                                <el-button style="color:#20a0ff; border:none;"
                                    @click="wjInfoclick(scope)">产品详情</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            @current-change="wjjjCurrentChange"
                            :current-page.sync="wjjjcurrentPage"
                            :page-size="wjjjpagesize"
                            layout="total, prev, pager, next"
                            :total="wjjjtotal">
                        </el-pagination>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import API from "../../api/page/Wealth";
export default {
    data(){
        return{
            activeName: "first",
            bkjjvalue:'1',
            bkjjcurrentPage:1,
            bkjjpagesize:10,
            bkjjtotal:0,
            bkjjoptions:[
                {
                value: "1",
                label: "近一月"
                },
                {
                value: "2",
                label: "近三月"
                },
                {
                value: "3",
                label: "近半年"
                },
                {
                value: "4",
                label: "近一年"
                }
            ],
            bkjjtableData:[],
            yxjjvalue:'1',
            yxjjcurrentPage:1,
            yxjjpagesize:10,
            yxjjtotal:0,
            yxjjoptions:[
                 {
                value: "1",
                label: "近一月"
                },
                {
                value: "2",
                label: "近三月"
                },
                {
                value: "3",
                label: "近半年"
                },
                {
                value: "4",
                label: "近一年"
                }
            ],
            yxjjtableData:[],
            wjjjvalue:'1',
            wjjjcurrentPage:1,
            wjjjpagesize:10,
            wjjjtotal:0,
            wjjjoptions:[
                 {
                value: "1",
                label: "近一月"
                },
                {
                value: "2",
                label: "近三月"
                },
                {
                value: "3",
                label: "近半年"
                },
                {
                value: "4",
                label: "近一年"
                }
            ],
            wjjjtableData:[],
        }
    },
    created() {
         this.bkjjfun();
         this.yxjjfun();
         this.wjjjfun();
         let query = this.$router.history.current.query.name;
         if(query == 'youxuan'){
            this.activeName = 'second';
         }else if(query == 'wenjian'){
            this.activeName = 'third';
         }

    },
    methods:{
        handleClick(tab, event) {  //三个切换
            //console.log("00000" + tab, event);
        },
        wjInfoclick(scope){
            let fcode = scope.row.fund_code;
            this.$router.push({path: '/CurrencyDetails',query: {
                fund_code: fcode,
            }
            })
        },
        Infoclick(scope){
            let fcode = scope.row.fund_code;
            console.log(fcode)
            this.$router.push({path: '/BaseDetails',query: {
                fund_code: fcode,
            }
            })
        },
        bkjjsortChange(column) {
            this.sort_label = column.prop; //当前排序字段
            this.sort_lift = column.order == "ascending" ? 1 : 0;
            this.bkjjfun();
        },
        bkjjfun(){ //爆款基金
            let dateval = this.bkjjvalue;
            let pageval = this.bkjjcurrentPage;
            let sortval = this.sort_lift
            API.fundpopular({
                types:dateval,
                page:pageval,
                sort:sortval
            })
            .then(res => {
                console.log(res);
                this.bkjjtableData = res.data;
                this.bkjjtotal = res.data.length;
            })
            .catch(error => {
                console.log(error);
            });
        },
        bkjjcurrentSel(){
            this.bkjjfun();
        },
        bkjjCurrentChange(){
            this.bkjjfun();
        },
        yxjjsortChange(column){
            this.sort_label = column.prop; //当前排序字段
            this.sort_lift = column.order == "ascending" ? 1 : 0;
            this.yxjjfun();
        },
        yxjjfun(){  //优选基金列表
            let dateval = this.yxjjvalue;
            let pageval = this.yxjjcurrentPage;
            let sortval = this.sort_lift
            API.fundselection({
                types:dateval,
                page:pageval,
                sort:sortval
            })
            .then(res => {
                console.log(res);
                this.yxjjtableData = res.data;
                this.yxjjtotal = res.data.length;
            })
            .catch(error => {
                console.log(error);
            });
        },
        yxjjcurrentSel(){
            this.yxjjfun();
        },
        yxjjCurrentChange(){
            this.yxjjfun();
        },
        wjjjsortChange(column){
            this.sort_label = column.prop; //当前排序字段
            this.sort_lift = column.order == "ascending" ? 1 : 0;
            this.wjjjfun();
        },
        wjjjfun(){ //穩健基金
            let dateval = this.wjjjvalue;
            let pageval = this.wjjjcurrentPage;
            let sortval = this.sort_lift
            API.fundrobust({
                types:dateval,
                page:pageval,
                sort:sortval
            })
            .then(res => {
                console.log(res);
                this.wjjjtableData = res.data;
                this.wjjjtotal = res.data.length;
            })
            .catch(error => {
                console.log(error);
            });
        },
        wjjjcurrentSel(){
            this.wjjjfun();
        },
        wjjjCurrentChange(){
            this.wjjjfun();
        }
    }
}

</script>
<style scope>
.el-icon-star-on{
    color: #ffac12;
}
.wealthmore-wrap{
    background: #fff;
    padding:30px;
}
.wealthmore-wrap .el-tabs__nav {
  width: 30%;
  background: #199ed8;
  left: 35%;
  border-radius: 30px;
}
.wealthmore-wrap .el-tabs__item {
  width: 32.9%;
  color: #fff !important;
  text-align: center;
}
.wealthmore-wrap .el-tabs__item.is-active {
  background: #fff;
  height: 38px;
  margin: 3px;
  border-radius: 30px;
  color: #199ed8 !important;
}

.el-tabs__active-bar {
  background-color: transparent;
}
.wealthmore-wrap .el-tabs__header {
  border-bottom: none;
}
.date-box{
    float:right;
    margin-right:20px;
    width:100px;
    margin-bottom: 30px;
}
</style>
