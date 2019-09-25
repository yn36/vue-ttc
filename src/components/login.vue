<template>
  <div id="login">
    <div class="OneHP login_Box">
      <div class="login_box">
        <div class="nr_box">
          <h1 class="fl">会员登陆</h1>
          <div class="mfzc fr">
            <img src="/static/images/fankui.png" />
            <span>
              <!-- <a href="reg.html">免费注册</a> -->
              <router-link to="/reg">免费注册</router-link>
            </span>
          </div>
          <form class="loginForm" onsubmit="return false;">
            <div class="zhm">
              <div class="zhm_ico fl">
                <img src="/static/images/u.png" />
              </div>
              <input
                class="fl"
                type="text"
                name="username"
                id="username"
                autocomplete="off"
                placeholder="账号名"
              />
            </div>
            <div class="zhm zhm_ico02">
              <div class="zhm_ico fl">
                <img src="/static/images/pass.png" />
              </div>
              <input
                class="fl"
                type="password"
                name="password"
                id="password"
                autocomplete="off"
                placeholder="密码"
              />
            </div>

            <div class="dl">
              <input class="zddl" type="checkbox" name="remember" id="remember" />
              <label for="remember">记住密码</label>
              <p>
                忘记密码？ 点击
                <span>
                  <a href="#">找回密码</a>
                </span>
              </p>
            </div>
            <input class="ljdl" type="submit" value="登陆" @click="login" />
          </form>

          <p class="hzsj">
            使用合作网站账号登陆：
            <img src="/static/images/wc.png" />
            <img src="/static/images/tb.png" />
            <img src="/static/images/wb.png" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/login.css";
export default {
  data() {
    return {};
  },
  methods: {
    logblur() {
      var username = document.getElementById("username");
      var password = document.getElementById("password");
      var a1 = false,
        a2 = false,
        a3 = false;
      // 失去焦点
      username.onblur = function() {
        if (/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(this.value)) {
          a1 = true;
        } else {
          a1 = false;
        }
      };

      password.onblur = function() {
        if (/^[a-zA-Z].{5,17}$/.test(this.value)) {
          a2 = true;
        } else {
          a2 = false;
        }
      };
    },
    login() {
      if (window.localStorage.userArr) {
        var array = JSON.parse(window.localStorage.userArr);
      } else {
        array = [];
      }
      var isHad = false;
      var index = 0;
      for (var i = 0; i < array.length; i++) {
        if (username.value == array[i].username) {
          isHad = true;
          index = i;
        }
      }
      if (isHad) {
        if (password.value == array[index].password) {
          alert("登录成功");
          location.href = "/home"
        } else {
          alert("密码错误");
        }
      } else {
        alert("账号不存在或输入错误");
      }
    }
  },
  mounted() {
    this.logblur();
  }
};
</script>