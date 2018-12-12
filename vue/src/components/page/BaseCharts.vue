<template>
    <section class="switchModule" id="switchModule">
            <div class="switchNavbar" id="switchNavbarId"  :class="searchBarFixed == true ? 'isFixed' :''">
                <div class="navbar__item activity" @click="activity()">
                            <div  :class="{switchAcitve:active=='activity'}">活动介绍</div>
                </div>
                <div class="navbar__item lastest" @click="lastest()">
                        <div  :class="{ switchAcitve:active=='lastest'}">最新配音</div>
                </div>
                <div class="navbar__item rank" @click="rank()">
                        <div  :class="{ switchAcitve:active=='rank'}">排行榜</div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
  data() {
    return {
      active: "activity",
      scroll: "",
      select: -1,
      activeClass: {
        background: "#eee"
      },
      searchBarFixed: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      //滚动监听事件
      window.addEventListener("scroll", this.menu);
    });
  },
  methods: {
    //操作顶部tab
    activity() {
      this.active = "activity";
      var a_h = $("#activityIntro").offset().top;
      $("html,body").animate({ scrollTop: a_h }, 800);
    },
    lastest() {
      this.active = "lastest";
      var l_h = $("#lastestDubbing").offset().top;
      $("html,body").animate({ scrollTop: l_h }, 800);
    },
    rank() {
      this.active = "rank";
      var r_h = $("#rankLlistDetail").offset().top;
      $("html,body").animate({ scrollTop: r_h }, 800);
    }
  },
  //监听滚动的事件
  menu() {
    var _self = this;
    _self.scroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    var menuTop = document.querySelector("#switchModule").offsetTop;
    //console.log(_self.scroll)
    console.log(menuTop);
    //滑动到指定位置菜单吸顶
    if (_self.scroll > menuTop) {
      this.searchBarFixed = true;
    } else {
      this.searchBarFixed = false;
    }
    //滑动到指定位置相应菜单高亮
    var a_h = $("#activityIntro").offset().top;
    var l_h = $("#lastestDubbing").offset().top;
    var r_h = $("#rankLlistDetail").offset().top;
    if (_self.scroll < l_h) {
      this.active = "activity";
    } else if (_self.scroll < r_h) {
      this.active = "lastest";
    } else if (_self.scroll > r_h) {
      this.active = "rank";
    }
  }
};
</script>

<style scoped>
.isFixed {
  position: fixed;
  top: 0;
  z-index: 999;
}
.switchNavbar {
  display: flex;
  position: relative;
  width: 100%;
  background: #fff;
  font-size: 0.307rem;
  color: #333333;
  letter-spacing: 0;
  text-align: justify;
}
</style>