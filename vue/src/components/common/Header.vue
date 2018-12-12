<template>
    <div class="header">
        <div class="logo"><img class="user-logo" src="../../../static/img/logo.png"></div>
        <div class="tab-box">
            <el-menu :default-active="onRoutes" class="el-menu-demo" mode="horizontal" @select="handleSelect" unique-opened router>
                <el-menu-item index="shouye">首页</el-menu-item>
                <el-menu-item index="Service">智能服务</el-menu-item>
                <el-menu-item index="Wealth">财富管理</el-menu-item>
                
            </el-menu>
            <div class="line"></div>
        </div>
        <div class="demo-input-suffix">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21">
          </el-input>
        </div>
        <div class="email-box">
           <i class="el-icon-message"></i>
        </div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../../static/img/img.jpg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      name: "linxin",
      input21: ''
     // activeIndex: '1',
    };
  },
  computed: {
    username() {
      let username = localStorage.getItem("ms_username");
      return username ? username : this.name;
    },
    onRoutes(){
        return this.$route.path.replace('/','');
    }
  },

  methods: {
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$router.push("/login");
      }
    },
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};


</script>
<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  background: #199ed8;
}
.header .logo {
  float: left;
  width: 250px;
  text-align: center;
  margin-top:10px;
  margin-left:7%;
}
.tab-box{
    width:30%;
    float:left;
    margin-left:5%;
}
.user-info {
  float: right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.user-info .el-dropdown-link {
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
.user-info .user-logo {
  position: absolute;
  left: 0;
  top: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-menu__item {
  text-align: center;
}
.el-menu{
    background-color:#199ed8;
}
.el-menu-item{
    color:#fff;
    padding:0 40px;
}
.el-menu-item:hover{
   background:transparent;
}
.el-menu-item.is-active {
    color: #fff;
    font-size:15px;
    background: transparent;
    border-bottom-color: #fff
}
.el-input,.email-box{
  float:left;
}
.email-box{
  margin-left:2%;
}
.el-input, .el-input__inner{
  width:20%;
}
.user-info[data-v-2799c495]{
  padding-right: 15%;
}
.header[data-v-2799c495]{
  font-size: 30px;
}
</style>
