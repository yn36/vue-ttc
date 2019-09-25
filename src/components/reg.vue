<template>
  <div id="reg">
    <div class="rOneHP">
      <div class="container">
        <div class="rmfzc">
          <div class="Centerend nr_mfzc">
            <div class="mfzc_lr">
              <h1>免费注册</h1>
              <form onsubmit="return false;">
                <div class="sjzc">
                  <p>昵称:</p>
                  <input type="text" name="user" id="user" autocomplete="off" />
                  <span></span>
                </div>
                <div class="sjzc">
                  <p>
                    <i>*</i>用户名/手机号:
                  </p>
                  <input type="text" name="username" id="username" autocomplete="off" />
                  <span></span>
                </div>
                <div class="sjzc">
                  <p>
                    <i>*</i>请设置密码:
                  </p>
                  <input type="password" name="password" id="password" autocomplete="off" />
                  <span></span>
                </div>
                <div class="sjzc">
                  <p>
                    <i>*</i>请确认密码:
                  </p>
                  <input type="password" name="password2" id="password2" autocomplete="off" />
                  <span></span>
                </div>
                <div class="queryd">
                  <input type="checkbox" name="qryd" id="qryd" /> 我已阅读并同意
                  <span>
                    <a href="#">&lt;&lt;易易城注册协议 &gt;&gt;</a>
                  </span>
                </div>
                <input id="ljzc" type="submit" value="立即注册" @click="fu()" />
              </form>
            </div>
            <div class="rljdl">
              <p>
                我已注册，马上
                <!-- <a href="login.html">登录</a> -->
                <router-link to="/login">登录</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/reg.css";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      oa1: false,
      oa2: false,
      oa3: false,
      ofive: false
    };
  },
  methods: {
    oonblur() {
      var othis = this;
      var username = document.getElementById("username");
      var password = document.getElementById("password");
      var password2 = document.getElementById("password2");
      var yuedu = document.getElementById("qryd");
      var a1 = false,
        a2 = false,
        a3 = false,
        five = false;
      // 失去焦点
      username.onblur = function() {
        if (
          /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.value) ||
          /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
            this.value
          )
        ) {
          this.nextElementSibling.innerHTML = "格式正确";
          this.nextElementSibling.className = "right";
          a1 = true;
        } else {
          this.nextElementSibling.innerHTML = "格式错误";
          this.nextElementSibling.className = "wrong";
          a1 = false;
        }
        othis.oa1 = a1;
        othis.oa2 = a2;
        othis.oa3 = a3;
        yuedu.checked = false;
      };

      password.onblur = function() {
        if (/^[a-zA-Z].{5,17}$/.test(this.value)) {
          this.nextElementSibling.innerHTML = "格式正确";
          this.nextElementSibling.className = "right";
          a2 = true;
        } else {
          this.nextElementSibling.innerHTML = "格式错误";
          this.nextElementSibling.className = "wrong";
          a2 = false;
        }
        othis.oa1 = a1;
        othis.oa2 = a2;
        othis.oa3 = a3;
        yuedu.checked = false;

        // console.log(othis.oa2);
      };
      password2.onblur = function() {
        if (/^[a-zA-Z].{5,17}$/.test(this.value)) {
          this.nextElementSibling.innerHTML = "格式正确";
          this.nextElementSibling.className = "right";

          if (this.value == password.value) {
            this.nextElementSibling.innerHTML = "输入正确";
            this.nextElementSibling.className = "right";
            a3 = true;
          } else {
            this.nextElementSibling.innerHTML = "密码不一致";
            this.nextElementSibling.className = "wrong";
            a3 = false;
          }
        } else {
          this.nextElementSibling.innerHTML = "格式错误";
          this.nextElementSibling.className = "wrong";
          a3 = false;
        }
        othis.oa1 = a1;
        othis.oa2 = a2;
        othis.oa3 = a3;
        yuedu.checked = false;

        // console.log(othis.oa3);
      };
    },
    fu() {
      // this.oonblur();
      // console.log("a1" + this.oa1);
      // console.log("a2" + this.oa2);
      // console.log("a3" + this.oa3);
      // console.log("ofive" + this.ofive);
      var yuedu = document.getElementById("qryd");
      var user = document.getElementById("user");
      var five = false;
      var othis = this;
      // console.log(yuedu.checked);
      yuedu.onblur = function() {
        if (yuedu.checked) {
          five = true;
        } else {
          five = false;
        }
        othis.ofive = five;
      };
      if (yuedu.checked == false) {
        alert("请阅读注册协议");
      } else if (othis.oa1 && othis.oa2 && othis.oa3 && othis.ofive) {
        if (window.localStorage.userArr) {
          var array = JSON.parse(window.localStorage.userArr);
        } else {
          array = [];
        }
        for (var i = 0; i < array.length; i++) {
          if (username.value == array[i].username) {
            alert("该账号已注册请登陆");
            return;
          }
        }
        var obj = {
          username: username.value,
          password: password.value,
          user: user.value,
          score: 0
        };
        array.push(obj);
        window.localStorage.userArr = JSON.stringify(array);
        alert("用户注册成功");
        setTimeout(() => {
          location.href = "/login";
        }, 1000);
        // console.log(array);
      } else {
        yuedu.checked = false;
        alert("请重新检查一遍是否正确?");
      }
    }
  },
  mounted() {
    this.oonblur();
  }
};
</script>