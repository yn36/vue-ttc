<template>
  <div id="content">
    <div class="container product">
      <template v-for="(item,i) in ul">
        <div class="position">
          <!-- <a href="#">首页</a> -->
          <router-link to="/home">首页</router-link>
          <template v-for="(ia,index) in item.tmp">
            <!-- {{ia.kk}} -->
           &gt;<router-link :to="ia.sur">{{ia.kk}}</router-link>
          </template>
        </div>

        <div class="one">
          <div class="left">
            <div class="pro_detail">
              <div class="pro_detail_left">
                <div class="jqzoom">
                  <div class="box jqzoombox">
                    <div class="moswp mask" @mousemove="fdj()" @mouseout="yc"></div>
                    <div class="lebox" id="lebox">
                      <template>
                        <img :src="BigImg" id="midimg" />
                        <div class="swp"></div>
                      </template>
                    </div>
                    <div class="rigbox">
                      <template>
                        <img :src="BigImg" class="bigImg" />
                      </template>
                    </div>
                  </div>
                </div>
                <span>
                  <ul class="imgList">
                    <li
                      v-for="(itemimg,index) in imgArr"
                      :key="index"
                      @click="changeImg(index)"
                      :class="{on:cuindex===index}"
                    >
                      <img :src="itemimg.imgMin" />
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div class="showright">
            <div class="title">{{item.title01}}</div>
            <div class="info">{{item.title02}}</div>

            <div class="price">
              <table width="100%" height="61" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    <td width="8%">售价：</td>
                    <td width="41%">
                      <b>{{item.money}}</b>
                    </td>
                    <td width="7%">原价：</td>
                    <td width="44%">
                      <del>￥6599.00</del>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="send">
              <!-- <small>配送至：</small>
              <input value="北京朝阳区三环以内" name />
              <span>
                由
                <u>奥凡尼旗舰店</u>从广东佛山市发货，并提供售后服务。
              </span>-->
            </div>
            <template v-for="(banben,k) in item.banben">
              <div class="size">
                <small v-html="banben.xzbb"></small>
                <p>
                  <span
                    @click="changeIndex(index)"
                    v-for="(nr,index) in banben.nr"
                    :class="{on:currentIndex===index}"
                  >{{nr.bt}}</span>
                </p>
              </div>
            </template>

            <div class="number">
              <small>数量：</small>
              <input type="text" class="num" :value="item.num" />
              <span class="jian" @click="shuliangadd(i)"></span>
              <span class="jia" @click="shuliangjian(i)"></span>
              <div class="ku">
                <p>件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;库存694件</p>
              </div>
              <div class="clear"></div>
            </div>
            <div class="sale">
              <small>销量：</small>
              <span class="on">21212</span>
              <div class="clear"></div>
            </div>
            <div class="sub">
              <a href class="btn01"></a>
              <!-- <a href="javascipt:;" class="btn02" @click="add()"></a> -->
              <button class="btn02" @click="add"></button>
            </div>
          </div>
        </div>

        <div class="two">
          <div class="showtleft">
            <dl>
              <dt>相关产品</dt>
              <dd>
                <div class="item">
                  <ul>
                    <li>
                      <img
                        src="/static/images/ico36.jpg"
                        width="160"
                        height="160"
                        data-bd-imgshare-binded="1"
                      />
                    </li>
                    <li class="title">
                      <a href="#">西铁城citizen石英表</a>
                    </li>
                    <li class="price">￥6542.00</li>
                  </ul>
                </div>
                <div class="item">
                  <ul>
                    <li>
                      <img
                        src="/static/images/ico36.jpg"
                        width="160"
                        height="160"
                        data-bd-imgshare-binded="1"
                      />
                    </li>
                    <li class="title">
                      <a href="#">西铁城citizen石英表</a>
                    </li>
                    <li class="price">￥6542.00</li>
                  </ul>
                </div>
                <div class="item">
                  <ul>
                    <li>
                      <img
                        src="/static/images/ico36.jpg"
                        width="160"
                        height="160"
                        data-bd-imgshare-binded="1"
                      />
                    </li>
                    <li class="title">
                      <a href="#">西铁城citizen石英表</a>
                    </li>
                    <li class="price">￥6542.00</li>
                  </ul>
                </div>
                <div class="item">
                  <ul>
                    <li>
                      <img
                        src="/static/images/ico36.jpg"
                        width="160"
                        height="160"
                        data-bd-imgshare-binded="1"
                      />
                    </li>
                    <li class="title">
                      <a href="#">西铁城citizen石英表</a>
                    </li>
                    <li class="price">￥6542.00</li>
                  </ul>
                </div>
                <div class="item">
                  <ul>
                    <li>
                      <img
                        src="/static/images/ico36.jpg"
                        width="160"
                        height="160"
                        data-bd-imgshare-binded="1"
                      />
                    </li>
                    <li class="title">
                      <a href="#">西铁城citizen石英表</a>
                    </li>
                    <li class="price">￥6542.00</li>
                  </ul>
                </div>
              </dd>
            </dl>
          </div>
          <div class="showtright">
            <dl>
              <dt class="ofshowr">
                <a class="cur">商品详情</a>
                <a href="#ggcs">规格参数</a>
                <a href="#jlpj">
                  累计评价
                  <font>（2654）</font>
                </a>
                <!-- <a href="javascript:;">售后保障</a>
                <a href="#fxgz">淘商场消费返现规则</a>-->
              </dt>
              <dd id="ggcs">
                <a name="a01"></a>
                <ul>
                  <template v-for="itemli in item.SPXQ">
                    <li :title="itemli.li">{{itemli.li}}</li>
                  </template>
                </ul>
              </dd>
              <div class="pro-info">
                <template v-for="itemshow in item.sp">
                  <div class="video">
                    <video
                      :src="itemshow.mp4"
                      preload="auto"
                      autoplay
                      controls
                      controlslist="nodownload"
                    ></video>
                  </div>
                </template>

                <template v-for="itemshow in item.spxqimg">
                  <img :src="itemshow.showimg" />
                </template>
              </div>
            </dl>
            <dl id="jlpj">
              <dd class="dd02">
                <div class="dd02_t">累计评价</div>

                <div class="rate-header rate-header-tags">
                  <div class="rate-score">
                    <h4>与描述相符</h4>
                    <strong>4.8</strong>
                    <p>
                      <span class="s48"></span>
                    </p>
                  </div>
                  <div class="rate-tag-box">
                    <div class="rate-tag-label">
                      <span>大家都写到</span>
                    </div>
                    <div class="rate-tag-list" style="height: 70px;">
                      <div class="rate-tag-inner">
                        <span class="tag-posi">很舒服(189)</span>
                        <span class="tag-posi">整体不错(160)</span>
                        <span class="tag-posi">面料好(92)</span>
                        <span class="tag-posi">尺码很准(52)</span>
                        <span class="tag-posi">版式好(45)</span>
                        <span class="tag-posi">颜色很好(36)</span>
                        <span class="tag-posi">颜色一般(20)</span>
                        <span class="tag-posi">尺码很准(52)</span>
                        <span class="tag-posi">版式好(45)</span>
                        <span class="tag-posi">颜色很好(36)</span>
                        <span class="tag-posi">颜色一般(20)</span>
                      </div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </dd>
              <dd class="dd03">
                <div class="pj_list">
                  <div class="pj_one">
                    <dl>
                      <dt>
                        <a class="cur" href="javascript:;">
                          全部
                          <font>（2654）</font>
                        </a>
                        <a href="javascript:;">
                          好评
                          <font>（2154）</font>
                        </a>
                        <a href="javascript:;">
                          中评
                          <font>（2654）</font>
                        </a>
                        <a href="javascript:;">
                          差评
                          <font>（16）</font>
                        </a>
                        <a href="javascript:;">
                          有图评价
                          <font>（919）</font>
                        </a>
                      </dt>
                    </dl>
                    <div class="clear"></div>
                  </div>
                  <div class="pj_two">
                    <div class="pj_item">
                      <div class="two1">
                        初次评价：
                        <br />06.16
                      </div>
                      <div class="two2">
                        <p>燕窝已经收到了，包装的很精美，品相非常不错，而且每盏都有溯源码，比商城买的实惠，发货速度很给力，炖煮后有淡淡的蛋清味，吃完后再来追评哈</p>
                        <p>
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                        </p>
                      </div>
                      <div class="two3">
                        s******88(匿名)
                        <br />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="pj_item">
                      <div class="two1">
                        初次评价：
                        <br />06.16
                      </div>
                      <div class="two2">
                        <p>燕窝已经收到了，包装的很精美，品相非常不错，而且每盏都有溯源码，比商城买的实惠，发货速度很给力，炖煮后有淡淡的蛋清味，吃完后再来追评哈</p>
                        <p>
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                        </p>
                      </div>
                      <div class="two3">
                        s******88(匿名)
                        <br />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="pj_item">
                      <div class="two1">
                        初次评价：
                        <br />06.16
                      </div>
                      <div class="two2">
                        <p>燕窝已经收到了，包装的很精美，品相非常不错，而且每盏都有溯源码，比商城买的实惠，发货速度很给力，炖煮后有淡淡的蛋清味，吃完后再来追评哈</p>
                        <p>
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                        </p>
                      </div>
                      <div class="two3">
                        s******88(匿名)
                        <br />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="pj_item">
                      <div class="two1">
                        初次评价：
                        <br />06.16
                      </div>
                      <div class="two2">
                        <p>燕窝已经收到了，包装的很精美，品相非常不错，而且每盏都有溯源码，比商城买的实惠，发货速度很给力，炖煮后有淡淡的蛋清味，吃完后再来追评哈</p>
                        <p>
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                        </p>
                      </div>
                      <div class="two3">
                        s******88(匿名)
                        <br />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                      </div>
                      <div class="clear"></div>
                    </div>
                    <div class="pj_item">
                      <div class="two1">
                        初次评价：
                        <br />06.16
                      </div>
                      <div class="two2">
                        <p>燕窝已经收到了，包装的很精美，品相非常不错，而且每盏都有溯源码，比商城买的实惠，发货速度很给力，炖煮后有淡淡的蛋清味，吃完后再来追评哈</p>
                        <p>
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                          <img src="/static/images/ico36.jpg" data-bd-imgshare-binded="1" />
                        </p>
                      </div>
                      <div class="two3">
                        s******88(匿名)
                        <br />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                        <img src="/static/images/ico37.jpg" data-bd-imgshare-binded="1" />
                      </div>
                      <div class="clear"></div>
                    </div>

                    <div class="page">
                      <a href="#">上一页</a>
                      <a href="#" class="on">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">4</a>
                      <a href="#">5</a>
                      <a href="#">6</a>
                      <a href="#">7</a>
                      <a href="#">7</a>
                      <a href="#">...</a>
                      <a href="#">下一页</a>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>

            <div class="shenmin">
              <p>
                <b>安全提示：</b>交易中请勿使用阿里旺旺以外的聊天工具沟通，不要接收可疑文件和不要点击不明来源的链接，支付前核实好域名和支付详情。 淘宝不会以订单有问题，让您提供任何银行卡、密码、手机验证码！遇此情况请终止通话或举报到淘宝网 常见骗术
                <br />推荐安全软件： 阿里钱盾阿里钱盾 UC浏览器UC浏览器 腾讯电脑管家腾讯电脑管家 360网盾360网盾 安全软件中心
              </p>

              <p>
                <b>内容申明：</b>淘宝为第三方交易平台及互联网信息服务提供者，淘宝（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。淘宝提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；淘宝存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向淘宝举报并提供有效线索。
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>


<script>
import "../css/show.css";
import Bus from "./bus";
export default {
  data() {
    return {
      ul: [],
      title: "",
      BigImg: "",
      imgArr: [],
      currentIndex: 0,
      cuindex: 0
    };
  },
  mounted() {
    // console.log(this.$route.params.aid); /*获取动态路由传值*/
    var aid = this.$route.params.aid;

    //调用请求数据的方法
    var api = `/static/xqyjson/${aid}.json`;
    // console.log(api);

    fetch(api)
      .then(res => {
        return res.json();
      })
      .then(res => {
        // var a = res[0];
        this.ul = res;
        this.BigImg = res[0].imgMax;
        this.imgArr = res[0].img;
        this.title = res;
        // console.log(res[0].title01);
        // this.ul = Array.from(a);
        // console.log(this.ul);
      });
    // this.qiehuan();
  },
  created() {},
  methods: {
    fdj() {
      var box = document.querySelector(".jqzoombox");
      var lebox = document.querySelector(".lebox");
      var rigbox = document.querySelector(".rigbox");
      var moswp = document.querySelector(".moswp");
      var swp = document.querySelector(".swp");
      var Bingimg = document.querySelector(".rigbox img");
      rigbox.style.display = "block";
      swp.style.display = "block";
      var offsetX = event.pageX - box.offsetLeft;
      var offsetY = event.pageY - box.offsetTop;
      var x = event.offsetX - swp.offsetHeight / 2;
      var y = event.offsetY - swp.offsetWidth / 2;
      if (x < 0) {
        x = 0;
      }
      if (x > box.offsetWidth - swp.offsetWidth) {
        x = box.offsetWidth - swp.offsetWidth;
      }
      if (y < 0) {
        y = 0;
      }
      if (y > box.offsetHeight - swp.offsetHeight) {
        y = box.offsetHeight - swp.offsetHeight;
      }
      swp.style.left = x + "px";
      swp.style.top = y + "px";

      var bl =
        (Bingimg.offsetWidth - rigbox.offsetWidth) /
        (box.offsetWidth - swp.offsetWidth);

      Bingimg.style.left = -bl * x + "px";
      Bingimg.style.top = -bl * y + "px";
    },
    changeImg(index) {
      // console.log(this.imgArr[index]);
      this.BigImg = this.imgArr[index].imgMin;
      this.cuindex = index;
    },
    add() {
      // console.log(12346);
      // this.$router.push({ path: "/showcar" });
      this.$store.commit("jrgwc", this.title);
      this.$store.commit("add");

      // console.log(this.ul)
      // 全局vuex变量改变
    },
    yc() {
      var rigbox = document.querySelector(".rigbox");
      var swp = document.querySelector(".swp");
      rigbox.style.display = "none";
      swp.style.display = "none";
    },
    // 加数
    shuliangadd(index) {
      // console.log(this.jrgwc)
      this.ul[0].num++;
    },
    // 减数cd
    shuliangjian(index) {
      this.ul[0].num--;
      if (this.ul[0].num <= 1) {
        this.ul[0].num = 1;
      }
    },
    changeIndex(index) {
      this.currentIndex = index;
    }
  },
  destroyed() {
    Bus.$emit("msg", this.title);
  }
};
</script>
<style lang="">
</style>