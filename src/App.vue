<template>
  <div id="app">
    <div class="top-gg">
      <div class="container">
        <img src="/static/images/ico_005_02.jpg" alt />
        <div class="gb">
          <svg
            t="1565354059665"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1983"
            width="16"
            height="16"
          >
            <path
              d="M802.6 727.9L591.5 516.8l211.1-211.1c21-21 21-55.4 0-76.5-21-21-55.4-21-76.5 0L515 440.3 303.9 229.2c-21-21-55.4-21-76.5 0-21 21-21 55.4 0 76.5l211.1 211.1-211.1 211.1c-21 21-21 55.4 0 76.5 21 21 55.4 21 76.5 0L515 593.3l211.1 211.1c21 21 55.4 21 76.5 0s21.1-55.4 0-76.5z"
              p-id="1984"
              fill="#8a8a8a"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="ztl container">
      <div class="nav">
        <ul class="nav-ul-l">
          <li class="hy">
            <p>
              <!-- 您好，欢迎光临淘商城！ -->
              <!-- <router-link to="/home">您好，欢迎光临淘商城！</router-link> -->
            <a href="/home">您好，欢迎光临淘商城！</a>
            </p>
          </li>
          <div class="regandlog" v-if="!showname">
            <li>
              <!-- <a href>[登陆]</a> -->
              <router-link to="/login">[登陆]</router-link>
            </li>
            <li>
              <!-- <a href>[注册]</a> -->
              <router-link to="/reg">[注册]</router-link>
            </li>
          </div>
          <span v-if="showname" class="yonghuming">
            {{array}}
            <a class="yonghumingtc" @click="tc">退出</a>
          </span>
        </ul>
        <div class="nav-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-list">
          <li>我的会员中心</li>
          <li>
            <!-- <a href>[注册]</a> -->
            <router-link to="/reg" class="regnew">注册新用户</router-link>
          </li>
          <li>收藏夹</li>
          <li>服务中心</li>
          <li>在线客服</li>

          <li>
            <router-link to="/showcar">
              购物车
              <span id="gwcspan">{{this.$store.state.count}}</span>件
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="ssy container">
      <div class="col-lg-3 col-sm-3">
        <div class="ssy-logo">
          <img class="col-lg-5" src="/static/images/ico_logo.png" alt srcset />
          <p class="col-lg-7">
            淘商城
            <span>TaoShangCheng</span>
          </p>
        </div>
      </div>
      <div class="ssy-ss col-lg-6 col-sm-9 col-xs-12">
        <div class="inp col-lg-12 col-sm-12 col-xs-12">
          <input class="col-lg-10 col-sm-10 col-xs-10" type="text" placeholder="请输入商品关键字" />
          <input type="button" value="搜索" class="col-lg-2 col-sm-2 col-xs-2" />
          <div class="col-xs-12 col-lg-12 col-md-12">
            <ul class="ssy-ul">
              <li>
                <a href>iphone6</a>
              </li>
              <li>
                <a href="iphone6">面膜</a>
              </li>
              <li>
                <a href="iphone6">婚庆床品</a>
              </li>
              <li>
                <a href="iphone6">运动鞋</a>
              </li>
              <li>
                <a href="iphone6">面霜</a>
              </li>
              <li>
                <a href="iphone6">月饼</a>
              </li>
              <li>
                <a href="iphone6">智能手机</a>
              </li>
              <li>
                <a href="iphone6">连衣裙</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="ssy-y col-lg-3">
        <div class="gwcbox" @mouseenter="xsgwc" @mouseleave="oxsgwc">
          <b>我的购物车</b>
          <span class="gwcspan">{{this.$store.state.count}}</span>
          <div class="showcarbox" v-show="showgwc">
            <h4>最新加入的商品</h4>
            <template v-for="(itemaa,i) in jrgwc">
              <template v-for="(itema) in itemaa">
                <router-link class="adb" :to="'/content/'+itema.aid">
                  <div class="showbox-sp">
                    <div class="showimg">
                      <img :src="itema.imgMax" />
                    </div>
                    <div class="showtitle">
                      <a href="javascript:;" class="title" :title="itema.title01">{{itema.title01}}</a>
                    </div>
                    <div class="showinfo">
                      ￥{{itema.money}}×
                      <span>{{itema.num}}</span>
                      <a href="javascritp:;" @click="dele(i)">删除</a>
                    </div>
                  </div>
                </router-link>
              </template>
            </template>
            <div class="showqgwc">
              共
              <span>{{this.$store.state.count}}</span>件商品
              <!-- 共计
              <span></span>-->
              <router-link to="/showcar">去购物车</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="clear"></div>

    <div class="col-sm-12 col-xs-12 daohang">
      <div class="container ovH">
        <ul class="daohang-ul">
          <li class="actqbsp">
            全部商品分类
            <div class="box actqbspBOX">
              <ul class="cp-cu">
                <template v-for="item in ul">
                  <template v-for="ite in item.top">
                    <li class="cp-li">
                      {{ite.title}}
                      <div class="cp-box">
                        <dl v-for="t1 in ite.main">
                          <dt>{{t1.t1}}</dt>
                          <dd>
                            <a href="#" v-for="tt1 in t1.t2">
                              <router-link :to="'/list/'+tt1.id">{{tt1.tt1}}</router-link>
                            </a>
                          </dd>
                        </dl>
                      </div>
                    </li>
                  </template>
                </template>
              </ul>
            </div>
          </li>
          <li class="daohang-li top-nli">
            <router-link to="/home">商城首页</router-link>
          </li>
          <li class="daohang-li top-nli">
            <a href="#tts">淘特色</a>
          </li>
          <li class="daohang-li top-nli">
            <a href="#rxcp">热销产品</a>
          </li>
          <li class="daohang-li top-nli">
            <a href="#xpss">新品上市</a>
          </li>
          <li class="daohang-li top-nli">
            <a href="#jpcj">精品推荐</a>
          </li>
          <li class="daohang-li top-nli">
            <a href="#shfw">生活服务</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>

    <!-- 头部 -->
    <router-view></router-view>

    <!-- 脚部 -->
    <div class="wave-box">
      <div class="marquee-box marquee-up" id="marquee-box">
        <div class="marquee">
          <div class="wave-list-box" id="wave-list-box1">
            <ul>
              <li>
                <img height="60" alt="波浪" src="/static/images/wave_02.png" />
              </li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box2">
            <ul>
              <li>
                <img height="60" alt="波浪" src="/static/images/wave_02.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="marquee-box" id="marquee-box3">
        <div class="marquee">
          <div class="wave-list-box" id="wave-list-box4">
            <ul>
              <li>
                <img height="60" alt="波浪" src="/static/images/wave_01.png" />
              </li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box5">
            <ul>
              <li>
                <img height="60" alt="波浪" src="/static/images/wave_01.png" />
              </li>
            </ul>
          </div>
          <div class="wave-list-box" id="wave-list-box6">
            <ul>
              <li>
                <img height="60" alt="波浪" src="/static/images/wave_01.png" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="auto clearfix">
        <div class="five-superiority">
          <ul class="five-superiority-list clearfix">
            <li class="compensate_ico">
              <a href="#compensate">
                <span class="superiority-icon">
                  <img src="/static/images/23f3ddf914b1b527d0429a3d713cfe3a.png" alt />
                </span>
                <span>品类齐全，轻松购物</span>
              </a>
            </li>
            <li class="retreat_ico">
              <a href="#refund">
                <span class="superiority-icon">
                  <img src="/static/images/23f3ddf914b1b527d0429a3d713cfe3a.png" alt />
                </span>
                <span>多仓直发，极速配送</span>
              </a>
            </li>
            <li class="technology_ico">
              <a class="superiority-text" href="#afterService">
                <span class="superiority-icon">
                  <img src="/static/images/23f3ddf914b1b527d0429a3d713cfe3a.png" alt />
                </span>
                <span>正品行货，精致服务</span>
              </a>
            </li>
            <li class="prepare_ico">
              <a href="#ico">
                <span class="superiority-icon">
                  <img src="/static/images/23f3ddf914b1b527d0429a3d713cfe3a.png" alt />
                </span>
                <span>天天低价，畅选无忧</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-floor1">
          <div class="footer-list">
            <template v-for="item in ful">
              <ul v-for="itemul in item.top">
                <li class="flist-title">{{itemul.title}}</li>
                <li v-for="itema in itemul.li">
                  <a href="#">
                    <strong>{{itema.t1}}</strong>
                  </a>
                </li>
              </ul>
            </template>

            <div class="clear-float"></div>
          </div>
          <div class="footer-right">
            <img src="/static/images/23f3ddf914b1b527d0429a3d713cfe3a.png" alt />
          </div>
          <div class="clear-float"></div>
        </div>
      </div>
      <div class="footer-floor2">
        <div class="container">
          <ul class="floor-ul">
            <li>
              <a href>关于我们</a>
              <a href>帮助中心</a>
              <a href>法律声明</a>
              <a href>用户协议</a>
              <a href>联系我们</a>
              <a href>人才招聘</a>
              <a href>站点地图</a>
            </li>
          </ul>

          <p>
            <br />网络文化经营许可证：粤网文[2015]0295-065号
            <br />© 2015 淘商城科技网络有限公司. 粤ICP备15042543号
          </p>

          <p class="mod">
            <a href="#">可信网站信用评估</a>
            <a href="#">可信网站信用评估</a>
            <a href="#">可信网站信用评估</a>
            <a href="#">可信网站信用评估</a>
            <a href="#">可信网站信用评估</a>
          </p>
        </div>
      </div>
    </div>
    <div class="totop">
      <svg
        t="1566307877216"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2985"
        width="40"
        height="40"
      >
        <path
          d="M752.736 431.063C757.159 140.575 520.41 8.97 504.518 0.41V0l-0.45 0.205-0.41-0.205v0.41c-15.934 8.56-252.723 140.165-248.259 430.653-48.21 31.457-98.713 87.368-90.685 184.074 8.028 96.666 101.007 160.768 136.601 157.287 35.595-3.482 25.232-30.31 25.232-30.31l12.206-50.095s52.47 80.569 69.304 80.528c15.114-1.23 87-0.123 95.6 0h0.82c8.602-0.123 80.486-1.23 95.6 0 16.794 0 69.305-80.528 69.305-80.528l12.165 50.094s-10.322 26.83 25.272 30.31c35.595 3.482 128.574-60.62 136.602-157.286 8.028-96.665-42.475-152.617-90.685-184.074z m-248.669-4.26c-6.758-0.123-94.781-3.359-102.891-107.192 2.95-98.714 95.97-107.438 102.891-107.93 6.964 0.492 99.943 9.216 102.892 107.93-8.11 103.833-96.174 107.07-102.892 107.192z m-52.019 500.531c0 11.838-9.42 21.382-21.012 21.382a21.217 21.217 0 0 1-21.054-21.34V821.74c0-11.797 9.421-21.382 21.054-21.382 11.591 0 21.012 9.585 21.012 21.382v105.635z m77.333 57.222a21.504 21.504 0 0 1-21.34 21.626 21.504 21.504 0 0 1-21.34-21.626V827.474c0-11.96 9.543-21.668 21.299-21.668 11.796 0 21.38 9.708 21.38 21.668v157.082z m71.147-82.043c0 11.796-9.42 21.34-21.053 21.34a21.217 21.217 0 0 1-21.013-21.34v-75.367c0-11.755 9.421-21.299 21.013-21.299 11.632 0 21.053 9.544 21.053 21.3v75.366z"
          fill="#1d73a0"
          p-id="2986"
        />
      </svg>
      返回顶部
    </div>

    <!-- 固定导航 -->
    <div class="flinav">
      <div class="container flpadd">
        <div class="ssy-l">
          <!-- <img class="col-lg-5 ssy-loimg" src="/static/images/ico_logo.png" alt srcset />
          <p class="col-lg-7"></p>-->
          <ul class="daohang-ul">
            <li class="actqbsp flinaul">
              全部商品分类
              <div class="box actqbspBOX">
                <ul class="cp-cu">
                  <template v-for="item in ul">
                    <template v-for="ite in item.top">
                      <li class="cp-li">
                        {{ite.title}}
                        <div class="cp-box">
                          <dl v-for="t1 in ite.main">
                            <dt>{{t1.t1}}</dt>
                            <dd>
                              <a href="#" v-for="tt1 in t1.t2">
                                <router-link :to="'/list/'+tt1.id">{{tt1.tt1}}</router-link>
                              </a>
                            </dd>
                          </dl>
                        </div>
                      </li>
                    </template>
                  </template>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="ssy-ss col-lg-6 col-sm-9 col-xs-12">
          <div class="inp col-lg-12 col-sm-12 col-xs-12">
            <input class="col-lg-10 col-sm-10 col-xs-10" type="text" placeholder="请输入商品关键字" />
            <input type="button" value="搜索" class="col-lg-2 col-sm-2 col-xs-2" />
            <div class="col-xs-12 col-lg-12 col-md-12"></div>
          </div>
        </div>

        <div class="ssy-y col-lg-3">
          <div class="gwcbox" @mouseenter="xsgwc" @mouseleave="oxsgwc">
            <b>我的购物车</b>
            <span class="gwcspan">{{this.$store.state.count}}</span>
            <div class="showcarbox" v-show="showgwc">
              <h4>最新加入的商品</h4>
              <template v-for="(itemaa,i) in jrgwc">
                <template v-for="(itema) in itemaa">
                  <router-link class="adb" :to="'/content/'+itema.aid">
                    <div class="showbox-sp">
                      <div class="showimg">
                        <img :src="itema.imgMax" />
                      </div>
                      <div class="showtitle">
                        <a
                          href="javascript:;"
                          class="title"
                          :title="itema.title01"
                        >{{itema.title01}}</a>
                      </div>
                      <div class="showinfo">
                        ￥{{itema.money}}×
                        <span>{{itema.num}}</span>
                        <a href="javascritp:;" @click="dele(i)">删除</a>
                      </div>
                    </div>
                  </router-link>
                </template>
              </template>
              <div class="showqgwc">
                共
                <span>{{this.$store.state.count}}</span>件商品
                <!-- 共计
                <span></span>-->
                <router-link to="/showcar">去购物车</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import "./css/screen.css";
import "./css/index.css";
import topurl from "./data/json/xxk.json";
import ful from "./data/json/floot.json";
import "./css/style.css";

// import '../js/jquery.min.js'
// import '../js/script.js'

// import a from "./components/a.vue";
// import b from "./components/b.vue";

$(function() {
  // 关闭顶部广告
  $(".gb").click(function() {
    $(".top-gg").slideUp(600);
  });
  // 关闭顶部广告end

  // 回到顶部
  $(".totop").hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".totop").fadeIn();
      $(".flinav").fadeIn();
    } else {
      $(".totop").fadeOut();
      $(".flinav").fadeOut();
    }
  });

  $(".totop").click(function() {
    $("html ,body").animate({ scrollTop: 0 }, 300);
    return false;
  });
  // 回到顶部end
  // 选项卡
  $(".actqbsp").hover(
    function() {
      $(this)
        .children(".box")
        .fadeIn(200);
    },
    function() {
      $(this)
        .children(".box")
        .fadeOut(0);
    }
  );
  $(".cp-li").hover(
    function() {
      $(this)
        .children()
        .fadeIn(200);
    },
    function() {
      $(this)
        .children()
        .fadeOut(0);
    }
  );
  // 选项卡end
  $(".top-nli a").click(function() {
    $("html,body").animate(
      { scrollTop: $($(this).attr("href")).offset().top - 50 },
      1000
    );
  });
  $(".letfixed a").click(function() {
    $("html,body").animate(
      { scrollTop: $($(this).attr("href")).offset().top - 50 },
      1000
    );
  });
});

export default {
  // components: {
  //   "v-a": a,
  //   "v-b": b
  // },
  data() {
    return {
      ul: topurl,
      ful: ful,
      showname: false,
      array: {},
      jrgwc: [],
      list: [],
      showgwc: false
    };
  },
  mounted() {
    if (window.localStorage.userArr) {
      var array = JSON.parse(window.localStorage.userArr);
    } else {
      array = [];
    }
    this.array = array;
    // console.log(array);
    if (window.localStorage.userArr) {
      this.showname = true;
      // console.log(this.showname)
      for (var i = 0; i < array.length; i++) {
        // console.log(array[i].user)
        if (array[i].user) {
          this.array = array[i].user;
        } else {
          this.array = array[i].username;
        }
        console.log(this.array);
      }
    }

    this.list = this.$store.state.list;
    this.jrgwc = this.list;
  },
  methods: {
    tc() {
      if (window.localStorage.userArr) {
        var array = JSON.parse(window.localStorage.userArr);
      } else {
        array = [];
      }
      // var obj = {
      //   showname: showname
      // };
      // array.push(obj);
      // window.localStorage.userArr = JSON.stringify(array);
      console.log(array);
      if (this.showname == true) {
        console.log(this.showname);
        this.showname = false;
      }
    },
    deleteNowGoods(index) {
      this.jrgwc.splice(index, 1);
      // this.$store.state.count - 1
    },
    xsgwc() {
      this.showgwc = true;
    },
    oxsgwc() {
      this.showgwc = false;
    },
    dele(index) {
      // console.log(12346);
      // this.$router.push({ path: "/showcar" });
      this.jrgwc.splice(index, 1);
      this.$store.commit("deles");
      // 全局vuex变量改变
    }
  }
};
</script>

<style lang="scss" scoped>
.totop {
  width: 41px;
  height: 40px;
  /* background: #000; */
  position: fixed;
  bottom: 63px;
  right: 20px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
}
</style>