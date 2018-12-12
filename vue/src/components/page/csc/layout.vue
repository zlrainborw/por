<template >
	<div>
		<!-- 只能选课点击保存命名弹框 -->
		<el-dialog v-if="isDialog2" :visible.sync="dialogType2" :before-close="dialogEvt2">
			<el-form label-width="100px">
				<el-form-item>
				<el-input v-model="savetype2" style="margin:0px;width:380px;"></el-input>
				</el-form-item>
			</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogEvt2">取 消</el-button>
			<el-button type="primary" @click="confirmChange2()">确 定</el-button>
		</div>
		</el-dialog>
		 <div class="khfl-left">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item>客户分类</el-breadcrumb-item>
              <el-breadcrumb-item>{{headerLabel}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="khfl-right">
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click="NewType">新建分类</el-button>
			<span v-if="typestrue">
				<el-button type="text" @click="TypeEdit">编辑</el-button>
				<el-button type="text" @click="TypeRemove" style="color:red">删除</el-button>
			</span> 
			
        </div>
        <div class="clear"></div> 
            <el-row>
                <el-col :span="4" style="text-align:left;">
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                      <el-submenu :index="item.id" v-for="(item,index) in khflList" v-bind:key = "index">
                        <template slot="title">
                          <p v-if="item.havChildren" class="listicon">{{item.name}} <i class="el-icon-arrow-right" style="float:right;margin-top:23px;font-size:12px;"></i></p>
                          <p v-else @click="routerClick(item)" class="listicon">{{item.name}}</p>
                        </template>
                        <el-menu-item-group v-for="(subitem,subindex) in item.children"  v-bind:key = "subindex">
                          <el-menu-item :index="subitem.id" @click="routerClick(subitem)">{{subitem.name}}</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                      <el-submenu index="8" style="padding-bottom:100px;border-bottom:1px solid #ccc;">
                        <template slot="title">
                          <p >自定义分类<i class="el-icon-arrow-right" style="float:right;margin-top:23px;font-size:12px;"></i></p>
                        </template>
                        <el-menu-item-group v-for="(typeitem,typeindex) in typechildren"  v-bind:key = "typeindex">
                          <el-menu-item :index="typeitem.id" @click="typeClick(typeitem)">{{typeitem.name}}</el-menu-item>
                        </el-menu-item-group>
                      </el-submenu>
                    </el-menu>
                </el-col>
                <el-col :span="20">
					<div v-if="khflTable">
						<div class="table">
							<el-table border highlight-current-row :data="tableDataList" style="width: 100%" @sort-change="sortChange" 
							:default-sort = "{prop: 'netasset', order: 'descending'}">
								<template v-for="(col,index) in header" :v-bind="index">
									<el-table-column v-if="col.type==='normal'" :prop="col.prop" :label="col.label" align="center"></el-table-column>
									<el-table-column v-if="col.type==='sort'" :prop="col.prop" :label="col.label" align="center" sortable='custom'></el-table-column>
								</template>
								<el-table-column align="center" label="客户信息">
									<template scope="scope">
										<el-button style="color:#20a0ff; border:none;"
											@click="ListMiaoDong(scope.$index, scope.row)">秒懂</el-button>
									</template>
								</el-table-column>
								<el-table-column label="关注" align="center">
									<template slot-scope="scope">
										<el-button style="color:#20a0ff; border:none; font-weight:bolder; font-size:20px;"
										type="primary" plain @click="ListAdd(scope)">+</el-button>
									</template>
								</el-table-column>
							</el-table>
						</div>
						<div class="pagination">
							<el-pagination
								@current-change="handleCurrentChange"
								:current-page.sync="currentPage"
								:page-size="pagesize"
								layout="total, prev, pager, next"
								:total="total">
							</el-pagination>
						</div>
					</div>
						
			        <!-- <router-view v-if="typeTable"></router-view> -->
					<div v-if="typeTable">
						<el-table :data="typetableDataList" border>
							<el-table-column property="user_name" width="120" align="center" label="客户名">
							</el-table-column>
							<el-table-column property="fundid" align="center"  label="客户代码">
							</el-table-column>
							<el-table-column property="netasset" align="center" label="客户净资产(元)">
							</el-table-column>
							<el-table-column property="fee_rate" align="center" label="费率">
							</el-table-column>
							<el-table-column property="mktval" align="center" label="客户持仓市值(元)">
							</el-table-column>
              <el-table-column property="fee_amt" align="center" label="累计佣金(元)">
							</el-table-column>
							<el-table-column align="center" label="客户信息">
								<template scope="scope">
									<el-button style="color:#20a0ff; border:none;"
										@click="ListMiaoDong(scope.$index, scope.row)">秒懂</el-button>
								</template>
							</el-table-column>
							<el-table-column label="关注" align="center">
								<template slot-scope="scope">
									<el-button style="color:#20a0ff; border:none; font-weight:bolder; font-size:20px;"
									type="primary" plain @click="TypeListAdd(scope)">+</el-button>
								</template>
							</el-table-column>
						</el-table>
            <div class="pagination">
							<el-pagination
								@current-change="typeCurrentChange"
								:current-page.sync="typecurrentPage"
								:page-size="typepagesize"
								layout="total, prev, pager, next"
								:total="typetotal">
							</el-pagination>
						</div>
					</div>
          </el-col>
            </el-row>     
	</div>
</template>
<script>
import API from "../../../api/page/khflList";
export default {
  data() {
    return {
      objitem: {},
      isCollapse: true,
      isDialog2: false,
      dialogType2: true,
      typestrue: false,
      currentPage: 1,
      typecurrentPage: 1,
      sort_label: "netasset",
      sort_lift: 1,
      savetype2: "",
      pagesize: 10,
      typepagesize: 10,
      total: 0,
      typetotal: 0,
      header: [],
      hideinput: "",
      tableDataList: [],
      typetableDataList: [],
      khflTable: true,
      typeTable: false,
      value: "近一个月",
      options: [
        {
          value: "近一个月",
          label: "近一月"
        },
        {
          value: "近三个月",
          label: "近三月"
        },
        {
          value: "近半年",
          label: "近半年"
        },
        {
          value: "近一年",
          label: "近一年"
        }
      ],
      typechildren: [],
      khflList: [
        {
          name: "严重亏损",
          id: "1",
          havChildren: false,
          label: "SeriousLoss"
        },
        {
          name: "高活跃",
          id: "2",
          havChildren: false,
          label: "HighlyActive"
        },
        {
          name: "高净值",
          id: "3",
          havChildren: false,
          label: "HighlyNetWorth"
        },
        {
          name: "近期转账",
          id: "4",
          havChildren: true,
          children: [
            {
              name: "转入",
              label: "Transfer",
              id: "4-1"
            },
            {
              name: "转出",
              label: "TransferOut",
              id: "4-2"
            }
          ]
        },
        {
          name: "异动客户",
          id: "5",
          havChildren: true,
          children: [
            {
              name: "高仓位",
              label: "HighPosition",
              id: "5-1"
            },
            {
              name: "大额转出",
              label: "LargeOut",
              id: "5-2"
            },
            {
              name: "买入ST",
              label: "Buy_st",
              id: "5-3"
            },
            {
              name: "交易减少",
              label: "ReducedTransactions",
              id: "5-4"
            },
            {
              name: "交易增加",
              label: "IncreaseInTransactions",
              id: "5-5"
            }
          ]
        },
        {
          name: "佣金最高",
          id: "6",
          havChildren: false,
          label: "HighestCommission"
        },
        {
          name: "潜在客户",
          id: "7",
          havChildren: true,
          children: [
            {
              name: "期权",
              label: "PotentialCustmers_MF",
              id: "7-1"
            },
            {
              name: "两融时",
              label: "PotentialCustomers_OP",
              id: "7-2"
            }
          ]
        }
      ],
      label: "SeriousLoss",
      headerLabel: "严重亏损"
    };
  },
  computed: {},
  created() {
    //	this.GaunzhuList();
    this.zdytypeList();
    this.tableList();
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    mouseout(item) {
      setTimeout(() => {
        item.isNav = false;
      }, 500);
    },
    tableList() {
      //右侧表格数据请求
      let username = localStorage.getItem("ms_username"); //获取投顾id
      let optionsdata = this.value; //获取下拉框选中的值
      let currentPage = this.currentPage;
      let sort_label = this.sort_label;
      let lift = this.sort_lift;
      let label = this.label;
      console.log(currentPage + "~~" + sort_label + "~~" + lift + "~~" + label);
      API.customerclass({
        manager_name: username, //投顾id
        date: optionsdata,
        page: currentPage,
        label: label,
        sort_label,
        lift
      })
        .then(res => {
          console.log(res);
          this.tableDataList = res.data;
          this.header = res.header; //表头信息渲染
          this.total = res.data.length; //表格数据渲染
          this.currentPage = res.data.page_now;
          let totle = res.data.page_num;
          if (this.currentPage < totle) {
            this.currentPage++;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    routerClick(item) {
      //左侧列表固定值点击请求
      this.khflTable = true;
      this.typeTable = false;
      this.typestrue = false;
      this.headerLabel = item.name;
      let label = item.label; //获取当前点中的值
      let username = localStorage.getItem("ms_username"); //获取投顾id
      let optionsdata = this.value; //获取下拉框选中的值
      let currentPage = this.currentPage;
      let sort_label = this.sort_label;
      let lift = this.sort_lift;
      //  console.log(currentPage + ".." + sort_label + ".." + lift + ".." + label);
      API.customerclass({
        manager_name: username, //投顾id
        date: optionsdata,
        page: currentPage,
        label: label,
        sort_label,
        lift
      })
        .then(res => {
          // console.log(res);
          this.tableDataList = res.data;
          this.header = res.header; //表头信息渲染
          this.total = res.data.length; //表格数据渲染
          this.currentPage = res.data.page_now;
          let totle = res.data.page_num;
          if (this.currentPage < totle) {
            this.currentPage++;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    typeClick(typeitem) {
      this.objitem = typeitem;
      //自定义分类点击跳转
      // this.$router.push({ name: "khflList" ,params:{ type:typeb}});
      this.typestrue = true; //删除编辑显示
      this.khflTable = false; //固定表格隐藏
      this.typeTable = true; //自定义表格显示
      let optionsdata = this.value; //获取下拉框选中的值
      let typename = typeitem.name; //当前点击label
      let typecurrentPage = this.typecurrentPage;
      API.get_search({
        class_name: typename,
        date: optionsdata,
        page_num: typecurrentPage
      })
        .then(res => {
          console.log(res);
          this.typetableDataList = res.data;
          this.typetotal = res.data.length; //表格数据渲染
          this.typecurrentPage = res.data.page_now;
          let typetotle = res.data.page_num;
          if (this.typecurrentPage < typetotle) {
            this.typecurrentPage++;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    typeCurrentChange() {
      this.typeClick(this.objitem);
    },
    ListMiaoDong() {
      //秒懂
    },
    ListAdd(scope) {
      //添加关注
      API.attentions({
        custid: scope.row.custid
      })
        .then(res => {
          console.log(res);
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
    TypeListAdd(scope){
       API.attentions({
         custid: scope.row.fundid
       })
        .then(res => {
          console.log(res);
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
    sortChange(column) {
      this.sort_label = column.prop; //当前排序字段
      this.sort_lift = column.order == "ascending" ? 0 : 1;
      this.tableList();
    },
    filterHandler(value, row, column) {
      console.log("filter", value, row, column);
    },
    handleCurrentChange() {
      //翻页
      this.tableList();
    },
    //客户分类新建分类
    NewType() {
      this.$emit("isName", "fourth");
    },
    TypeEdit() {
      //点击编辑
      this.isDialog2 = true;
    },
    confirmChange2() {
      //自定义命名保存
      console.log(this.savetype2);
      API.get_customizeclass({
        class_name: this.savetype2
      })
        .then(res => {
          console.log(res);
          this.typechildren = res.data;
          this.dialogEvt2();
        })
        .catch(error => {
          console.log(error);
        });
    },
    dialogEvt2() {
      //我的关注备注弹层取消
      this.isDialog2 = false;
    },
    TypeRemove() {
      //点击删除
    },
    ListMiaoDong() {
      //秒懂
    },
   

    zdytypeList() {
      //左侧列表自定义二级
      API.get_customizeclass()
        .then(res => {
          console.log(res);
          if (res.errCode == "0") {
            this.typechildren = res.data;
          } else {
            this.typechildren = res.data;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style type="text/css" scoped>
.el-menu {
  min-height:1000px;
  height:auto;
}
.el-submenu[data-v-8b1a1bec]:nth-child(1){
  border-top:1px solid #ccc;
}
.el-submenu[data-v-8b1a1bec]{
  border-left:1px solid #ccc;
  border-right:1px solid #ccc;
}
</style>