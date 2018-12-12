<template>
  <div class="wrap-box">
    <!-- 我的关注编辑弹层 -->
     <el-dialog v-if="isDialog" :visible.sync="dialogType" :before-close="dialogEvt">
        <el-form label-width="100px">
            <el-form-item >
               <textarea autocomplete="off" v-model="textval" placeholder="请输入备注信息" type="text" rows="2" validateevent="true" class="el-input__inner" style="margin: 0px; height: 93px; width: 380px;"></textarea>
            </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEvt">取 消</el-button>
          <el-button type="primary" @click="confirmChange()">确 定</el-button>
      </div>
    </el-dialog>
     <!-- 只能选课点击保存命名弹框 -->
     <el-dialog v-if="isDialog1" :visible.sync="dialogType1" :before-close="dialogEvt1">
        <el-form label-width="100px">
            <el-form-item>
               <el-input v-model="savetype" style="margin:0px;width:380px;"></el-input>
            </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogEvt1">取 消</el-button>
          <el-button type="primary" @click="confirmChange1()">确 定</el-button>
      </div>
    </el-dialog>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="我的关注" name="first">
        <div class="table">
            <el-table :data="tableData1" border @sort-change="sortChange" 
            :default-sort = "{prop: 'netasset', order: 'descending'}">
                <el-table-column prop="cutname" align="center" label="客户名" width="150">
                </el-table-column>
                <el-table-column prop="custid" align="center" label="客户代码">
                </el-table-column>
                <el-table-column prop="netasset" align="center" label="客户净资产" sortable='custom'>
                </el-table-column>
                <el-table-column prop="fee_rate" align="center" label="费率" sortable='custom'>
                </el-table-column>
                <el-table-column prop="mktval" align="center" label="客戶持仓市值" sortable='custom'>
                </el-table-column>
                <el-table-column prop="opendate" align="center" label="开户时长" sortable='custom'>
                </el-table-column>
                <el-table-column label="客户信息" align="center">
                  <template scope="scope">
                    <el-button style="color:#20a0ff; border:none;"
                        @click="guanzhuMiaoDong(scope.$index, scope.row)">秒懂</el-button>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center"> 
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <el-button type="text" size="small" plain @click="MyhandleEdit(scope)" class="editdelbtn"><i class="el-icon-edit"></i>备注</el-button>
                        <el-button type="text" size="small"  plain @click="MyhandleDelete(scope)" class="editdelbtn"><i class="el-icon-delete"></i>删除</el-button>
                          <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">...</el-tag>
                          </div>
                      </el-popover>
                    </template>
                     <!-- <template scope="scope">
                        <el-button type="text" size="small" plain
                        @click="MyhandleEdit(scope)">备注</el-button>
                        <el-button type="text" size="small"  plain
                        @click="MyhandleDelete(scope)">删除</el-button>
                    </template> -->
                </el-table-column>     
            </el-table>
            <div class="pagination">
                <el-pagination
                    @current-change="myhandleCurrentChange"
                    :current-page.sync="mycurrentPage1"
                    :page-size="mypagesize"
                    layout="total, prev, pager, next"
                    :total="mytotal">
                </el-pagination>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane class="el-tab-pane" label="客户分类" name="second">
       <vCsc v-on:isName="vCscName"></vCsc>
    </el-tab-pane>
    <el-tab-pane label="重要待办" name="third">
        <div class="block">
            <span class="demonstration">日期</span>
            <el-date-picker
                  v-model="stratTime"
                  type="date"
                  placeholder="开始日期"
                  @change = 'getStartTime'
                  :picker-options="pickerOptionsStart"
                  value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-date-picker
                  v-model="endTime"
                  type="date"
                  placeholder="结束日期"
                  @change = 'getEndTime'
                  :picker-options="pickerOptionsEnd"
                  value-format="yyyy-MM-dd">
            </el-date-picker>
            <span class="demonstration">事件类型</span>
            <el-select v-model="sjtype" placeholder="枚举"  @change = "selectchange">
              <el-option 
                v-for="item in options2" 
                :key="item.id" 
                :label="item.value" 
                :value="item">
              </el-option>
            </el-select>
            <el-button type="primary" @click="zydbSearch">查询</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData3" border style="width: 100%">
                <el-table-column prop="event_time" label="日期" align="center">
                </el-table-column>
                <el-table-column prop="event_text" label="事件" align="center">
                </el-table-column>
                <el-table-column label="客户信息" align="center" prop="fundid">
                    <template scope="scope">
                        <el-button style="color:#20a0ff; border:none;"
                            @click="zydbMiaoDong(scope.$index, scope.row)">秒懂</el-button>
                    </template>
                </el-table-column>
                <el-table-column label="关注" align="center">
                    <template scope="scope">
                        <el-button style="color:#20a0ff; border:none; font-weight:bolder; font-size:20px;"
                            @click="zydbhandleAdd(scope)">+</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage1"
                    :page-size="pagesize"
                    layout="total, prev, pager, next"
                    :page-count="totalpage"
                    :total="total"
                    >
                </el-pagination>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane label="智能选客" name="fourth">
        <div class="znxk-box">
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">开户时长：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup2">
                  <el-checkbox-button v-for="khsc in khscs" :label="khsc.id" :key="khsc.id">{{khsc.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">年龄：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup3">
                  <el-checkbox-button v-for="age in ages" :label="age.id" :key="age.id">{{age.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">风险等级：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup4">
                  <el-checkbox-button v-for="fxdj in fxdjs" :label="fxdj.id" :key="fxdj.id">{{fxdj.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">资产等级：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup5">
                  <el-checkbox-button v-for="zcdj in zcdjs" :label="zcdj.id" :key="zcdj.id">{{zcdj.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">盈亏水平：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup6">
                  <el-checkbox-button v-for="yksp in yksps" :label="yksp.id" :key="yksp.id">{{yksp.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">活跃水平：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup7">
                  <el-checkbox-button v-for="hysp in hysps" :label="hysp.id" :key="hysp.id">{{hysp.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row class="phhy_box">
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">偏好行业：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup8">
                  <el-checkbox-button v-for="phhy in phhys" :label="phhy.id" :key="phhy.id">{{phhy.label}}</el-checkbox-button>
                </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">偏好概念：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup9">
                  <el-checkbox-button v-for="phgn in phgns" :label="phgn.id" :key="phgn.id">{{phgn.label}}</el-checkbox-button>
                </el-checkbox-group>
                <el-button round style="border:1px solid #199ed8;color:#199ed8; border-radius:25px;">更多</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">偏好因子：</span></el-col>
                <el-col :span="22">
                <el-checkbox-group v-model="checkboxGroup10">
                  <el-checkbox-button v-for="phyz in phyzs" :label="phyz.id" :key="phyz.id">{{phyz.label}}</el-checkbox-button>
                </el-checkbox-group>
                <el-button round style="border:1px solid #199ed8;color:#199ed8; border-radius:25px">更多</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2" style="text-align:right"><span class="demonstration demonstration1">偏好模式：</span></el-col>
                <el-col :span="22">
                  <el-checkbox-group v-model="checkboxGroup11">
                    <el-checkbox-button v-show="index<moreShow" v-for="(phms,index) in phmss" :label="phms.id" :key="index">{{phms.label}}</el-checkbox-button>
                  </el-checkbox-group>
                  <el-button round @click="moreclick(phmss)" style="border:1px solid #199ed8;color:#199ed8; border-radius:25px">{{more}}</el-button>
                </el-col>
            </el-row>
            <div class="phgg-box">
                <span class="demonstration demonstration1">偏好个股：</span>
                <el-input placeholder="请输入代码或名称" v-model="phgginput"></el-input>
            </div>
            <div class="ygdata-box">
                预估<strong>2344</strong>数据
            </div>
            <div class="btns-box">
                <el-button type="primary" round @click="znxkSearch">搜索客户</el-button>
            </div>
            <div v-if="tabletrue">
                <div class="table" style="margin-top:60px;">
                    <el-table :data="tableData4" ref="tableData4" border style="width: 96%; margin-left:2%;" @selection-change="selsChange">
                        <el-table-column align="center" width="80" type="selection" label="多选">
                        </el-table-column>
                        <el-table-column property="user_name" width="120" align="center" label="客户名">
                        </el-table-column>
                        <el-table-column property="fundid" align="center"  label="客户代码">
                        </el-table-column>
                        <el-table-column property="netasset" align="center" label="客户净资产">
                        </el-table-column>
                        <el-table-column property="fee_rate" align="center" label="费率">
                        </el-table-column>
                        <el-table-column align="center" label="客户信息">
                          <template scope="scope">
                              <el-button style="color:#20a0ff; border:none;"
                                  @click="zydbMiaoDong(scope.$index, scope.row)">秒懂</el-button>
                          </template>
                        </el-table-column>
                        <el-table-column label="关注" align="center">
                            <template slot-scope="scope">
                                <el-button style="color:#20a0ff; border:none; font-weight:bolder; font-size:20px;"
                                type="primary" plain @click="znfwAdd(scope)">+</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                    <el-pagination
                        @current-change="znxkhandleCurrentChange"
                        :current-page.sync="znxkcurrentPage"
                        :page-size="znxkpagesize"
                        layout="total, prev, pager, next"
                        :total="znxktotal">
                    </el-pagination>
                </div>
                    <el-button type="primary" style="margin-top:30px;margin-left:40px;" @click="batchAdd" :disabled="this.sels.length === 0">批量添加</el-button>
                </div>

                <div class="btns-box">
                    <el-button round hidden @click="znxkSave">保存条件</el-button>
                </div>
            </div>
      
        </div>
    </el-tab-pane>
</el-tabs>
</div>
</template>
<script>
import API from "../../api/page/Service";  
import vCsc from "./csc/layout";
export default {
  data() {
    return {
      objparams:{},
      currentPage1: 1,
      mycurrentPage1:1, //我的关注默认页数
      znxkcurrentPage:1, //智能选课
      order:1,
      totalpage:0,
      total: 0,
      mytotal:0,
      znxktotal:0,
      pagesize:10,
      mypagesize:10,
      znxkpagesize:10,  //智能选课
      isDialog:false,
      isDialog1:false,
      tabletrue:false,
      textval:"",
      savetype:"",
      sels: [],
      dialogType: true,
      dialogType1: true,
      more:"更多",
      moreShow:9,
      phgginput:'',
      checkboxGroup2:[],
      khscs: [{id: "1", label: '3个月以下'},{id: "2", label: '3-1年'},{id: "3", label: '1-3年'},{id: "4", label: '3年以上'}],
      checkboxGroup3:[],
      ages: [{id: "90", label: '90后'},{id: "80", label: '80后'},{id: "70", label: '70后'},{id: "60", label: '60后'},{id: "50", label: '50后'}],
      checkboxGroup4:[],
      fxdjs: [{id: "1", label: 'C1'},{id: "2", label: 'C2'},{id: "3", label: 'C3'},{id: "4", label: 'C4'},{id: "5", label: 'C5'}],
      checkboxGroup5:[],
      zcdjs: [{id: "1", label: '30万以下'},{id: "2", label: '30-100万'},{id: "3", label: '100-300万'},{id: "4", label: '300-1000万'},{id: "5", label: '1000万以上'}],
      checkboxGroup6:[],
      yksps: [{id: "1", label: '亏损20%以上'},{id: "2", label: '亏损10%-20%'},{id: "3", label: '亏损10%以内'},{id: "4", label: '盈利10%以内'},{id: "5", label: '盈利10%-20%'},{id: "6", label: '盈利20%以上'}],
      checkboxGroup7:[],
      hysps: [{id: "高", label: '高'},{id: "较高", label: '较高'},{id: "中等", label: '中等'},{id: "较低", label: '较低'},{id: "低", label: '低'},{id: "不活跃", label: '不活跃'}],
      checkboxGroup8:[],
      phhys: [{id: "电信服务", label: '电信服务'},{id: "材料", label: '材料'},{id: "公用事业", label: '公用事业'},{id: "能源", label: '能源'},{id: "医疗保健", label: '医疗保健'},{id: "工业", label: '工业'},{id: "可选消费", label: '可选消费'},{id: "信息技术", label: '信息技术'},{id: "金融", label: '金融'}
      ,{id: "日常消费", label: '日常消费'},{id: "房地产", label: '房地产'}],
      checkboxGroup9:[],
      phgns: [{id: "一带一路", label: '一带一路'},{id: "供给侧改革", label: '供给侧改革'},{id: "国改", label: '国改'},{id: "零新售", label: '零新售'},{id: "独角兽", label: '独角兽'}],
      checkboxGroup10:[],
      phyzs: [{id: "PE", label: 'PE'},{id: "PB", label: 'PB'},{id: "MACD", label: 'MACD'},{id: "KDJ", label: 'KDJ'},{id: "流通值", label: '流通值'}],
      checkboxGroup11:[],
      phmss: [{id: "低吸", label: '低吸'},{id: "高抛", label: '高抛'},{id: "打板买入", label: '打板买入'},{id: "近期新高买", label: '近期新高买'},{id: "近期新高卖", label: '近期新高卖'},{id: "近期新低买", label: '近期新低买'},{id: "近期新低卖", label: '近期新低卖'},{id: "多头排列买", label: '多头排列买'},{id: "009", label: '空头排列卖'},{id: "布林带支撑买", label: '布林带支撑买'},{id: "空头排列卖", label: '空头排列卖'},{id: "布林带压力卖", label: '布林带压力卖'},{id: "金叉买", label: '金叉买'},{id: "死叉卖", label: '死叉卖'}],
      stratTime: "", //开始时间
      endTime: "", //結束时间
      sjtype: "", //事件类型
      isCollapse: true,
    //  khflList:[],
      options2: [
        { id: 1, value: "基金赎回到账" ,name:"017"},
        { id: 2, value: "理财产品到期",name:"0" },
        { id: 3, value: "新股中签",name:"0"},
        { id: 4, value: "持仓股票复牌",name:"018"},
        { id: 5, value: "近期生日",name:"0"},
        { id: 6, value: "开户首次入金",name:"004"},
        { id: 7, value: "开户首次交易",name:"0"},
      ],
      pickerOptionsStart: {
        disabledDate: time => {
          if (this.endtime) {
            return (
            time.getTime() > new Date(this.endtime).getTime()
            );
          } else {
            return time.getTime() > Date.now();//限制开始日期不能大于今天
          }
        }
        },
        pickerOptionsEnd: {
        disabledDate: time => {
        if (this.stratTime) {
          return (
            // time.getTime() > Date.now() ||
            time.getTime() < new Date(this.stratTime).getTime() - 1 * 24 * 60 * 60 * 1000
          );
        } else {
           return time.getTime() > Date.now(); 
        }
        }
      },
      activeName: "first",
      labelPosition: "1",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      value1: "",
      tableData1: [],
      tableData2: [
        {
          date: "张三",
          name: "124455",
          address: "235566",
          feilv: "0.78",
          kuisun: "222",
          kslv: "20%",
          tag: "秒懂"
        },
      ],
      tableData3: [],
      tableData4: [],
    };
  },
  components:{
    vCsc
  },
  created() {
    //this.getGuanzhu();
    this.zydbSearch();
    this.confirmChange1();
  },
  computed:{
  },
  methods: {
    vCscName(data){
      this.activeName = data;
    },
    sortChange(column) {
        /**
         * column 三个参数
         *  column 内置对象
         *  prop 类型参数
         *  order 排序类型  descending降序/ascending升序
         */
        /**
         * 功能排序;
         * sort_label :"" 为控制显示字段
         * sort_lift ： 为显示排序顺序字段
         */
        this.sort_label = column.prop;//当前排序字段
        this.sort_lift =  column.order == "ascending" ? 0:1;
        console.log(this.sort_label+'-----'+this.sort_lift)
        this.getGuanzhu();
    },
    //  filterHandler(value, row, column){
    //    console.log("filter",value, row, column);
    // },
    //我的关注数据请求
    getGuanzhu(){ 
      let username = localStorage.getItem("ms_username");
      let mycurrentPage1 = this.mycurrentPage1;
      let sort_label = this.sort_label;
      let lift = this.sort_lift; 
      API.customers({
          manager_name:username, //投顾id
          page:mycurrentPage1,
          sort_label:sort_label,
          lift:lift
      })
      .then(res => {
        console.log(res);
        this.mytotal = res.data.length;
        this.tableData1 = res.data;
        this.mycurrentPage1 = res.data.page_now
        let totlepage = res.data.page_num;
          if(this.mycurrentPage1 < totlepage){
            this.mycurrentPage1++;
          }
      })
      .catch(error => {
        console.log(error);
      });
    },
    myhandleCurrentChange(){  //我的关注翻页
      this.getGuanzhu();
    },
    guanzhuMiaoDong(index,row){
      let custid = row.custid;
      this.$router.push({name: 'miaodong',params:{ custid:custid}});
    },
    dialogEvt() {  //我的关注备注弹层取消
      this.isDialog = false;
    },
    MyhandleEdit(scope){   //我的关注备注
      this.isDialog = true;
      this.custid = scope.row.custid;
      this.textval = scope.row.edit;  //回显值
    },
    confirmChange(){   //我的关注确定
        API.edit({
            custid:this.custid, //投顾id
            messages:this.textval,  //获取用户输入信息
        })
        .then(res => {
          console.log(res)
          this.beizhuList = res.data.edit;
          this.dialogEvt();
        })
        .catch(error => {
          console.log(error);
        });
    },
    MyhandleDelete(scope){ //我的关注删除
      this.$confirm("是否删除该用户", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        API.attentions({
          custid: scope.row.custid, //投顾id
        }).then(res => {
          if (res.success == "True") {
            this.$message.success(res.errMsg);
            this.getGuanzhu();
          } else {
            this.$message.error(res.errMsg);
          }
        });
      })
      .catch(() => {
        this.$message.info("已取消删除");
      });
    },
   
    //重要代办数据请求
    getStartTime(date) {
      this.stratTime = date;//开始日期
    },
    getEndTime(date1) {  
      this.endTime = date1;//结束日期
    },
    selectchange() {
      console.log("ssss" + this.sjtype.value);//事件类型
    },
     
    handleSizeChange(val) {  //重要待办分页
      console.log('sssss'+val);
      this.pagesize = val;
    },
    handleCurrentChange(val) { //点击翻页
      console.log('-------'+val)
      this.zydbSearch();
    },
    zydbSearch() {  //重要代办点击查询
      var strat_Time = this.stratTime;
      var end_Time = this.endTime;
      var sjtype = this.sjtype.name;
      let currentPage1 = this.currentPage1;
      API.events({
        start_time: strat_Time,
        end_time: end_Time,
        event_type: sjtype,
        page_num:currentPage1
      })
      .then(res => {
        console.log(res);
        if(res.success == "False"){
          this.$alert(res.errMsg, {
              confirmButtonText: '确定',
          });
        }else{
          this.totalpage = res.page_num;
          this.tableData3 = res.data;
          this.total = this.totalpage*this.pagesize;
          this.currentPage1 = res.data.page_now;
          let totlepage = res.data.page_num;
          if(this.currentPage1 < totlepage){
            this.currentPage1++;
          }
        }
      })
      .catch(error => {
        console.log(error);
      });
    },
    zydbMiaoDong(index,row) {
      let custid = row.custid;
      console.log(custid);
      this.$router.push({name: 'miaodong',params:{ custid:custid}});
    },
    zydbhandleAdd(scope){ //重要待办添加关注
       API.attentions({
          custid : scope.row.custid,
       }).then(res =>{
         console.log(res);
          if (res.success == "True") {
            this.$message.success(res.errMsg);
          } else {
            this.$message.error(res.errMsg);
          }
       }).catch(error =>{
          this.$message.info("已取消删除");
       })
    },
    moreclick(data) {
      console.log(this.phmss);
      if (this.more=="更多") {
        this.more="收起";
        this.moreShow = data.length;
      } else {
        this.more="更多";
        this.moreShow = 9;
      }
    },
    znxkSearch(){  // 智能选课点击搜索
       this.tabletrue = true;
      // let objparams = this.objparams;
        this.objparams = { 
           open_time : this.checkboxGroup2,
           age : this.checkboxGroup3,
           risk_grade :this.checkboxGroup4,
           asset_class :this.checkboxGroup5,
           profit_loss :this.checkboxGroup6,
           active_levle :this.checkboxGroup7,
           pre_industry :this.checkboxGroup8,
           pre_concept :this.checkboxGroup9,
           pre_factor :this.checkboxGroup10,
           pre_model :this.checkboxGroup11,
           pre_shares :this.phgginput,
           page_num:this.znxkcurrentPage,
        };
        console.log(this.objparams)
        for (var key in this.objparams) {
          if (this.objparams[key].length == 0) {
              delete this.objparams[key];
          }
        } 
        API.search(this.objparams)
        .then(res => {
          console.log(res);
          if (res.success == "False") {
              this.$alert(res.errMsg, {
                  confirmButtonText: '确定',
                });
            } else {
                this.tableData4 = res.data;
                this.znxktotal = res.data.length;
                this.znxkcurrentPage = res.data.page_now;
                let znxktotlepage = res.data.page_num;
                if(this.znxkcurrentPage < znxktotlepage){
                  this.znxkcurrentPage++;
                }
            }
        })
        .catch(error => {
          console.log(error)
        });   
    },
    znxkhandleCurrentChange(){  //智能选课翻页
      this.znxkSearch()
    },
    znfwAdd(scope){ //智能服务添加关注
       API.attentions({
          custid : scope.row.custid,
       }).then(res =>{
         console.log(res);
          if (res.success == "True") {
            this.$message.success(res.errMsg);
          } else {
            this.$message.error(res.errMsg);
          }
       }).catch(error =>{
          this.$message.info("已取消删除");
       })
    },
    selsChange(sels) {
        this.sels = sels;
    },
    batchAdd(){  //智能选课 批量添加
       let custid = this.sels.map(item => item.custid).join()
       API.attentionall({
          custid : custid,
       }).then(res =>{
         console.log(res);
          if (res.success == "True") {
            this.$message.success(res.errMsg);
          } else {
            this.$message.error(res.errMsg);
          }
       }).catch(error =>{
          this.$message.info("已取消删除");
       })
    },
    znxkSave(){   // 智能选课保存条件
      let objparams = this.objparams;
      if(objparams.open_time || objparams.age || objparams.risk_grade || objparams.asset_class || objparams.profit_loss
      || objparams.active_levle || objparams.pre_industry || objparams.pre_concept || objparams.pre_factor || objparams.pre_model
      ||objparams.pre_shares){
        this.isDialog1 = true;
      }else{
        this.isDialog1 = false;
      }     
    },
    confirmChange1(){   //新建分类保存确定
        let class_name = this.savetype;
        let objparams = this.objparams
        API.search({
           objparams,
           class_name
          })
        .then(res => {
          console.log(res)
          if(res.success = "True"){
             this.dialogEvt1();
             this.activeName= "second";
          }else{
            this.$message.error(res.errMsg);
          }
        })
        .catch(error => {
          console.log(error);
        });
     },
    dialogEvt1() {  //我的关注备注弹层取消
      this.isDialog1 = false;
    },
    handleClick(tab, event) {  //四个切换
      console.log("00000" + tab, event);
    },
  }
};
</script>
<style scope>
.el-icon-edit{
  margin-left:10px;
}
.editdelbtn{
  color:#333;
  font-size:14px;
  text-align: center;
  display: block;
  line-height: 2;
}
.el-popover{
  min-width:80px;
  padding-left:20px;
}
.el-tag {
    background-color: #fff;
    color:#20a0ff;
    font-size:20px; 
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 190px;
    min-height: 400px;
}
.el-menu--collapse{
      width:190px;
      height:500px;
}
.znxk-box .el-row {
    margin-bottom: 20px;
}
.wrap-box{
  background: #fff;
  padding:50px;
}
.mt-20 {
  margin-top: 20px;
}
.wrap-box .el-tabs__nav {
  width: 50%;
  background: #199ed8;
  left: 25%;
  border-radius: 30px;
}
.wrap-box .el-tabs__item {
  width: 24.8%;
  color: #fff !important;
  text-align: center;
}
.wrap-box .el-tabs__item.is-active {
  background: #fff;
  height: 38px;
  margin: 3px;
  border-radius: 30px;
  color: #199ed8 !important;
}
.el-tabs__active-bar {
  background-color: transparent;
}
.wrap-box .el-tabs__header {
  border-bottom: none;
} 
.el-checkbox-button__orig-checkbox:checked + .el-checkbox-button__inner {
  border-color: #bfcbd9;
  background-color: #fff;
  color: #199ed8;
  box-shadow:none;
}
.phhy_box {
  min-width: 1400px;
}
.znxk-box div {
  line-height: 50px;
}

.znxk-box .el-checkbox-button__orig-checkbox:checked + .el-checkbox-button__inner {
  border-color: #bfcbd9;
  background-color: #199ed8;
  color: #fff;
  border-radius: 20px;
  margin: 0 12px;
}
.znxk-box .el-checkbox-button__inner,
.znxk-box .el-checkbox-button__orig-checkbox,
.znxk-box .el-checkbox-button:first-child .el-checkbox-button__inner,
.znxk-box .el-checkbox-button:last-child .el-checkbox-button__inner {
  border-radius: 20px;
  margin: 0 12px;
  padding: 10px 20px;
}
.el-checkbox-button--small .el-checkbox-button__inner {
  padding: 11px;
}
.el-tabs__content {
  margin-top: 35px;
}
.el-tag--success {
  background-color: none;
  border-color: none;
  cursor: pointer;
}
.block {
  float: right;
  margin-bottom: 20px;
}
.demonstration {
  margin: 0 10px 0 30px;
}
.khfl-left {
  float: left;
  margin-bottom: 20px;
}
.khfl-right {
  float: right;
  margin-bottom: 20px;
}
.demonstration1 {
  text-align: right;
  display: inline-block;
  margin:0;
}
.label-box {
  display: inline-block;
  width: 78%;
  margin-left: 13%;
}
.phgg-box{
  margin-left:38px;
}
.phgg-box .el-input,
.phgg-box .el-input__inner {
  width: 500px;
  border-radius: 20px;
  margin-left: 8px;
}
.ygdata-box,
.btns-box {
  margin-left: 48%;
  margin-top: 30px;
}
.btns-box{
  margin-left: 47%;
}
.ygdata-box strong {
  color: #199ed8;
  font-size: 20px;
  margin: 0 8px;
}
.btns-box .el-button {
  border-radius: 20px;
  padding: 10px 50px;
}
.el-checkbox-group{
  display: inline;
}
.el-dialog--small{
  width:auto;
}
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 600px;
} */
.el-tabs__content {
  overflow: initial;
}
.clear{ clear:both} 
.el-menu-item-group__title {
  display: none;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-aside {
  width: 14%;
  min-width: 158px;
  float: left;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.el-container {
    width: 85%;
    min-width: 898px;
    float: right;
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;
}
.el-tab-pane {
    overflow: hidden;
}
.parent-el-container {
    border: none !important;
    height: auto;
}
.el-table td {
  padding: 0;
}
.content {
  min-width: 1255px;
}
/* .el-icon-arrow-down:before{
  content:""
} */
.el-icon-arrow-down:before{
  content:""
}
.el-menu{
  background-color:#fff;
}
.el-form-item__content{
  margin-left:8px ! important;
}
</style>