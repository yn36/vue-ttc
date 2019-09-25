<template>
  <div id="min">
    <div class="col-lg-12 lbt">
      <ul>
        <li class="lbt-li active">
          <img src="/static/images/lbt/banner1.jpg" alt />
        </li>
        <li class="lbt-li">
          <img src="/static/images/lbt/banner2.jpg" alt srcset />
        </li>
        <li class="lbt-li">
          <img src="/static/images/lbt/banner3.jpg" alt srcset />
        </li>
        <li class="lbt-li">
          <img src="/static/images/lbt/banner4.jpg" alt srcset />
        </li>
        <li class="lbt-li">
          <img src="/static/images/lbt/banner5.jpg" alt srcset />
        </li>
      </ul>
      <ol class="bar">
        <li class="active"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
      <button class="gopre">&lt;</button>
      <button class="gonext">&gt;</button>
    </div>

    <div class="col-lg-12 xsqg">
      <div class="container idx_ad">
        <div class="rollBox" id="xsqg">
          <dl>
            <dt>
              <b>限时抢购</b>
              <span>让生活精彩不停</span>
              <p>
                <span class="img1" id="img1"></span>
                <span class="img2" id="img2"></span>
              </p>
            </dt>
          </dl>

          <div class="roll-box col-lg-12">
            <div class="list" id="list">
              <ul>
                <template v-for="item in tul">
                  <li class="col-md-6">
                    <p class="p01">{{item.p}}</p>
                    <p class="p02">
                      <font>￥</font>
                      <b>{{item.b}}</b>
                      <br />
                      <span>{{item.span}}</span>
                      <a href="#" class="buy">立即抢购 &gt;</a>
                    </p>
                    <img :src="item.img" />
                  </li>
                </template>
              </ul>
            </div>
            <div class="booox"></div>
            <div class="booox"></div>
            <div class="booox"></div>
            <div class="booox"></div>
          </div>
        </div>
      </div>

      <div class="letfixed">
        <ul>
          <li>
            <a href="#xsqg" class="a01 on" id="idx01">限时抢购</a>
          </li>
          <li>
            <a href="#tts" class="a02" id="idx02"></a>
          </li>
          <li>
            <a href="#xpss" class="a03" id="idx03"></a>
          </li>
          <li>
            <a href="#rxcp" class="a04" id="idx04"></a>
          </li>
          <li>
            <a href="#jpcj" class="a05" id="idx05"></a>
          </li>
          <li>
            <a href="#shfw" class="a06" id="idx06"></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="idx_ad container">
      <img src="/static/images/img_index2.jpg" alt />
    </div>
    <div class="container vhp tts">
      <template v-for="top in ul">
        <!-- {{top}} -->
        <template v-for="item in top.top">
          <div class="idx02">
            <dl :id="item.id">
              <dt>{{item.title}}</dt>
              <dd>
                <!-- big -->
                <template v-for="itmea in top.top">
                  <div class="item" v-for="it in itmea.main">
                    <template v-for="itt1 in it.t1">
                      <!-- +itt1.aid -->
                      <router-link :to="'/content/'+itt1.aid" class="itema">
                        <!-- <a class="itema" href> -->
                        <template v-for="itt1 in it.t1">
                          <a href="#" class="title">{{itt1.tt1}}</a>
                          <p>
                            <font>￥</font>
                            {{itt1.tt2}}
                            <font>{{itt1.tt3}}</font>
                          </p>
                          <a href="#" class="buy"></a>
                          <img :src="itt1.img" />
                        </template>
                        <!-- </a> -->
                      </router-link>
                    </template>
                  </div>
                </template>
                <div class="clear"></div>
              </dd>
            </dl>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.letfixed {
  position: absolute;
  left: 7%;
  top: 0;
  z-index: 999;
  transition: all 0.5s;
  ul li {
    height: 80px;
    border-bottom: 1px solid #d9d9d9;
    a {
      display: inline-block;
      width: 80px;
      height: 80px;
      background-position: center center;
      background-repeat: no-repeat;
      color: #333;
      font-size: 18px;
      text-align: center;
      padding: 15px 15px;
      font-weight: bold;
      background-color: #fff;
      &.on,
      &:hover {
        background-color: #e83426;
        color: #fff;
      }
    }
    .a01 {
      line-height: 26px;
    }
    .a02 {
      background-image: url(/static/images/ico17.png);
      &:hover,
      &.on {
        background-image: url(/static/images/ico17b.png);
      }
    }
    .a03 {
      background-image: url(/static/images/ico18.png);
      &:hover,
      &.on {
        background-image: url(/static/images/ico18b.png);
      }
    }
    .a04 {
      background-image: url(/static/images/ico20.png);
      &:hover,
      &.on {
        background-image: url(/static/images/ico20b.png);
      }
    }
    .a05 {
      background-image: url(/static/images/ico21.png);
      &:hover,
      &.on {
        background-image: url(/static/images/ico21b.png);
      }
    }
    .a06 {
      background-image: url(/static/images/ico23.png);
      &:hover,
      .letfixed ul li .a06.on {
        background-image: url(/static/images/ico23b.png);
      }
    }
  }
}
</style>

<script>
import "../css/index.css";
import ful from "../data/json/tts.json";
import tul from "../data/json/xsqg.json";
import { connect } from "tls";

// 轮播图
function Lbt(id) {
  this.init(id);
}

Lbt.prototype = {
  init(id) {
    let _this = this;
    this.id = document.querySelector(id);
    this.oli = this.id.querySelectorAll("ul li");
    this.index = this.oindex = 0;
    this.btnS = this.id.querySelectorAll("button");
    this.obar = this.id.querySelector(".bar");
    this.bar = this.id.querySelectorAll(".bar li");
    this.item = null;
    // setInterval(() => {
    //   this.obar.style.left =
    //     (document.documentElement.offsetWidth - this.obar.offsetWidth / 2) / 2 +
    //     "px";
    // }, 100);
    this.item = setInterval(() => {
      this.gonext();
    }, 2000);
    this.btnS[0].onclick = () => {
      this.gopre();
    };
    this.btnS[1].onclick = () => {
      this.gonext();
    };
    this.id.onmouseenter = () => {
      clearInterval(this.item);
    };
    this.id.onmouseleave = () => {
      this.item = setInterval(() => {
        this.gonext();
      }, 2000);
    };
    for (var i = 0; i < this.bar.length; i++) {
      this.bar[i].index = i;
      this.bar[i].onclick = function() {
        _this.index = this.index;
        _this.goindex();
      };
    }
  },
  goindex() {
    this.clearAct();
    this.oli[this.index].className = "lbt-li active";
    this.bar[this.index].className = "active";
  },
  clearAct() {
    for (let i = 0; i < this.oli.length; i++) {
      this.oli[i].className = "lbt-li";
      this.bar[i].className = "";
    }
  },
  gonext() {
    if (this.index < 4) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.goindex();
  },
  gopre() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = 4;
    }
    this.goindex();
  }
};

// 轮播图end

// 限时抢购滚动

export default {
  data() {
    return {
      ul: ful,
      tul: tul,
    };
  },
  mounted() {
    var lbt1 = new Lbt(".lbt");
    this.LbMove("list", "img1", "img2", true, "left", true, 390, 1000, 5000, 3);
    this.flix();
  },

  methods: {
    LbMove(
      boxID,
      btn_left,
      btn_right,
      Car,
      direction,
      way,
      moveLengh,
      speed,
      Interval,
      number
    ) {
      var _ID = $("#" + boxID + "");
      var _btn_left = $("#" + btn_left + "");
      var _btn_right = $("#" + btn_right + "");
      var jsq = 0;
      var timer;
      var cj;
      var no_way = 0;
      var no_wayGet = 0;
      var fade = 0;
      var new_time = new Date();

      var ID_liLen, ID_liheight, cbtmBtn;
      ID_liLen = _ID.find("li").length;
      ID_liheight = _ID.find("li").innerHeight();

      if (direction == "left" || direction == "right") {
        _ID.find("ul").width(ID_liLen * moveLengh);
      } else if (direction == "top" || direction == "bottom") {
        _ID.find("ul").height(ID_liLen * moveLengh);
      } else if (direction == "fade") {
        _ID
          .find("ul")
          .width(moveLengh)
          .height(ID_liheight);
        _ID
          .find("li")
          .eq(0)
          .show()
          .siblings()
          .hide();
        _ID.find("li").css({ position: "absolute", left: 0, top: 0 });
      }
      if (way == false) {
        _btn_left.hide();
        _btn_right.hide();
      }

      function Carousel() {
        if (way == false) {
          no_way++;

          if (direction == "left") {
            _ID.find("ul").css({ left: -no_way });
            no_wayGet = parseInt(_ID.find("ul").css("left"));
            if (no_wayGet == -moveLengh) {
              no_way = 0;
              _ID.find("li:first").insertAfter(_ID.find("li:last"));
              _ID.find("ul").css({ left: 0 });
            }
          }

          if (direction == "right") {
            no_wayGet = parseInt(_ID.find("ul").css("left"));
            if (no_wayGet == 0) {
              no_way = -moveLengh;
              _ID.find("li:last").insertBefore(_ID.find("li:first"));
              _ID.find("ul").css({ left: 0 });
            }
            _ID.find("ul").css({ left: no_way });
          }

          if (direction == "top") {
            _ID.find("ul").css({ top: -no_way });
            no_wayGet = parseInt(_ID.find("ul").css("top"));
            if (no_wayGet == -moveLengh) {
              no_way = 0;
              _ID.find("li:first").insertAfter(_ID.find("li:last"));
              _ID.find("ul").css({ top: 0 });
            }
          }

          if (direction == "bottom") {
            no_wayGet = parseInt(_ID.find("ul").css("top"));
            if (no_wayGet == 0) {
              no_way = -moveLengh;
              _ID.find("li:last").insertBefore(_ID.find("li:first"));
              _ID.find("ul").css({ top: 0 });
            }
            _ID.find("ul").css({ top: no_way });
          }
        } else if (way == true) {
          if (direction == "left") {
            _ID.find("ul").animate({ left: -moveLengh }, speed, function() {
              _ID.find("li:first").insertAfter(_ID.find("li:last"));
              _ID.find("ul").css({ left: 0 });
            });
            if (jsq < ID_liLen - 1) {
              jsq++;
            } else {
              jsq = 0;
            }
          }

          if (direction == "right") {
            _ID.find("li:last").insertBefore(_ID.find("li:first"));
            _ID.find("ul").css({ left: -moveLengh });
            _ID
              .find("ul")
              .stop()
              .animate({ left: 0 }, speed);
            if (jsq > 0) {
              jsq--;
            } else {
              jsq = ID_liLen - 1;
            }
          }

          if (direction == "top") {
            _ID.find("ul").animate({ top: -moveLengh }, speed, function() {
              _ID.find("li:first").insertAfter(_ID.find("li:last"));
              _ID.find("ul").css({ top: 0 });
            });
          }

          if (direction == "bottom") {
            _ID.find("li:last").insertBefore(_ID.find("li:first"));
            _ID.find("ul").css({ top: -moveLengh });
            _ID
              .find("ul")
              .stop()
              .animate({ top: 0 }, speed);
          }
          if (direction == "fade") {
            if (fade < ID_liLen - 1) {
              fade++;
            } else {
              fade = 0;
            }
            _ID
              .find("li")
              .eq(fade)
              .fadeIn(speed)
              .siblings()
              .fadeOut(speed);
          }
        }
      }

      if (Car == true) {
        if (ID_liLen > number) {
          timer = setInterval(Carousel, Interval);
        } else {
          clearInterval(timer);
          _btn_left.hide();
          _btn_right.hide();
        }
      } else {
        clearInterval(timer);
      }
      _ID.find("li").hover(
        function() {
          clearInterval(timer);
        },
        function() {
          if (Car == true) {
            if (ID_liLen > number) {
              timer = setInterval(Carousel, Interval);
            } else {
              clearInterval(timer);
              _btn_left.hide();
              _btn_right.hide();
            }
          } else {
            clearInterval(timer);
          }
        }
      );

      _btn_right
        .hover(
          function() {
            clearInterval(timer);
          },
          function() {
            if (Car == true) {
              if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
              } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
              }
            } else {
              clearInterval(timer);
            }
          }
        )
        .click(function() {
          if (new Date() - new_time > 500) {
            new_time = new Date();

            if (direction == "left" || direction == "right") {
              _ID.find("ul").animate({ left: -moveLengh }, speed, function() {
                _ID.find("li:first").insertAfter(_ID.find("li:last"));
                _ID.find("ul").css({ left: 0 });
              });
            }

            if (direction == "top" || direction == "bottom") {
              _ID.find("ul").animate({ top: -moveLengh }, speed, function() {
                _ID.find("li:first").insertAfter(_ID.find("li:last"));
                _ID.find("ul").css({ top: 0 });
              });
            }
            if (direction == "fade") {
              if (fade > 0) {
                fade--;
              } else {
                fade = ID_liLen - 1;
              }
              _ID
                .find("li")
                .stop(true, true)
                .eq(fade)
                .fadeIn(speed)
                .siblings()
                .fadeOut(speed);
            }
            if (jsq < ID_liLen - 1) {
              jsq++;
            } else {
              jsq = 0;
            }
          } else {
          }
        });
      _btn_left
        .hover(
          function() {
            clearInterval(timer);
          },
          function() {
            if (Car == true) {
              if (ID_liLen > number) {
                timer = setInterval(Carousel, Interval);
              } else {
                clearInterval(timer);
                _btn_left.hide();
                _btn_right.hide();
              }
            } else {
              clearInterval(timer);
            }
          }
        )
        .click(function() {
          if (new Date() - new_time > 500) {
            new_time = new Date();

            if (direction == "left" || direction == "right") {
              _ID.find("li:last").insertBefore(_ID.find("li:first"));
              _ID.find("ul").css({ left: -moveLengh });
              _ID
                .find("ul")
                .stop()
                .animate({ left: 0 }, speed);
            }

            if (direction == "top" || direction == "bottom") {
              _ID.find("li:last").insertBefore(_ID.find("li:first"));
              _ID.find("ul").css({ top: -moveLengh });
              _ID
                .find("ul")
                .stop()
                .animate({ top: 0 }, speed);
            }
            if (direction == "fade") {
              if (fade < ID_liLen - 1) {
                fade++;
              } else {
                fade = 0;
              }
              _ID
                .find("li")
                .stop(true, true)
                .eq(fade)
                .fadeIn(speed)
                .siblings()
                .fadeOut(speed);
            }
            if (jsq > 0) {
              jsq--;
            } else {
              jsq = ID_liLen - 1;
            }
          } else {
          }
        });
    },
    flix() {
      $(function() {
        var dv = $(".xsqg").offset().top;
        var dv2 = $("#tts").offset().top;
        var dv3 = $("#xpss").offset().top;
        var dv4 = $("#rxcp").offset().top;
        var dv5 = $("#jpcj").offset().top;
        var dv6 = $("#shfw").offset().top;
        var letfixed = $(".letfixed").offset().top;
        window.onscroll = function() {
          // console.log(letfixed, dv)
          if (letfixed > $(document).scrollTop()) {
            $(".letfixed").css({ position: "absolute", top: "0" });
          } else {
            $(".letfixed").css({ position: "fixed", top: "20%" });
          }

          if (dv < $(document).scrollTop()) {
            $(".letfixed a").removeClass("on");
            $(".letfixed .a01").addClass("on");
          }
          if (dv2 < $(document).scrollTop()) {
            $(".letfixed a").removeClass("on");
            $(".letfixed .a02").addClass("on");
          }
          if (dv3 < $(document).scrollTop()) {
            $(".letfixed a").removeClass("on");
            $(".letfixed .a03").addClass("on");
          }
          if (dv4 < $(document).scrollTop()) {
            $(".letfixed a").removeClass("on");
            $(".letfixed .a04").addClass("on");
          }
          if (dv5 < $(document).scrollTop()) {
            $(".letfixed a").removeClass("on");
            $(".letfixed .a05").addClass("on");
          }
          if (dv6 < $(document).scrollTop()) {
            $(".letfixed a").removeClass("on");
            $(".letfixed .a06").addClass("on");
          }
        };
      });
    }
  }
};
</script>