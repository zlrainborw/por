<template>
     <div class="table">
        <el-table :data="tableDataList" border>
            <el-table-column property="cutname" width="120" align="center" label="客户名">
            </el-table-column>
            <el-table-column property="custid" align="center"  label="客户代码">
            </el-table-column>
            <el-table-column property="netasset" align="center" label="客户净资产">
            </el-table-column>
            <el-table-column property="fee_rate" align="center" label="费率">
            </el-table-column>
            <el-table-column property="fee_rate" align="center" label="客户持仓市值">
            </el-table-column>
            <el-table-column align="center" label="客户信息">
                <template scope="scope">
                    <el-button style="color:#20a0ff; border:none;"
                        @click="ListMiaoDong(scope.$index, scope.row)">秒懂</el-button>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button style="color:#20a0ff; border:none; font-weight:bolder; font-size:20px;"
                    type="primary" plain @click="ListAdd(scope)">+</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- <div class="pagination">
            <el-pagination
                @current-change="znxkhandleCurrentChange"
                :current-page.sync="znxkcurrentPage"
                :page-size="znxkpagesize"
                layout="total, prev, pager, next"
                :total="znxktotal">
            </el-pagination>
        </div> -->
    </div>
</template>
<script>

export default {
     data(){
    	return {
            tableDataList:[
                {
                    cutname:"lalalal",
                    custid:"0909",
                    netasset:"0.9",
                    fee_rate:"cjxijci",
                },
                {
                    cutname:"lalalal",
                    custid:"0909",
                    netasset:"0.9",
                    fee_rate:"cjxijci",
                },
            ],
    	}
    },
    created(){
		
	},
    methods: {
        ListMiaoDong() {  //秒懂
        },
        ListAdd(){  //添加关注

        },
    }, 
}