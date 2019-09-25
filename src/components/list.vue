<template>
  <div id="list">
    <div class="container">
      <template v-for="item in ul">
        <div class="position">
          <template v-for="itemmap in item.map">
            <router-link :to="itemmap.to">{{itemmap.m1}}</router-link>&gt;
          </template>
        </div>
        <div class="c_nav">
          <template v-for="itemtitle in item.title">
            <div class="item">
              <span>{{itemtitle.span}}</span>
              <p>
                <template v-for="itemspana in itemtitle">
                  <template v-for="itemaimg in itemspana">
                    <router-link to v-html="itemaimg.aimg"></router-link>
                  </template>
                </template>
              </p>
            </div>
          </template>
        </div>

        <div class="order">
          <a href="#" class="cur">综合排序</a>
          <a href="#">销量</a>
          <a href="#">价格</a>
          <a href="#">评论数</a>
          <span>
            <font>
              共1889件商品
              <strong>
                <b>1</b>/50
              </strong>
            </font>
            <a href="#">&gt;</a>
            <a href="#">&lt;</a>
          </span>
        </div>

        <div class="pro_cont">
          <template v-for="contentMimg in item.contentMimg">
            <router-link :to="'/content/'+contentMimg.id" class="itemaa">
              <!-- <div class="item">
                <dl>
                  <dt>
                    <img :src="contentMimg.Mng" />
                  </dt>
                  <dd>
                    <template v-for="mining in contentMimg.minming">
                      <img :src="mining.mining" />
                    </template>
                  </dd>
                </dl>
                <p class="p01">
                  <font>￥</font>
                  {{contentMimg.conmonye}}
                </p>
                <p class="p02">
                  <a href="#">{{contentMimg.contitle}}</a>
                </p>
                <p class="p03">
                  <span class="sp01">
                    月销量：
                    <b>{{contentMimg.yxs}}</b>
                  </span>
                  <span>
                    评价：
                    <strong>{{contentMimg.pj}}</strong>
                  </span>
                </p>
              </div>-->

              <div class="port-6 effect-3">
                <div class="image-box">
                  <img :src="contentMimg.Mng" alt="Image-2" />
                </div>
                <div class="text-desc">
                  <p class="p01">
                    <font>￥</font>
                    {{contentMimg.conmonye}}
                  </p>
                  <p class="p02">
                    <a href="#">{{contentMimg.contitle}}</a>
                  </p>
                  <p class="p03">
                    <span class="sp01">
                      月销量：
                      <b>{{contentMimg.yxs}}</b>
                    </span>
                    <span>
                      评价：
                      <strong>{{contentMimg.pj}}</strong>
                    </span>
                  </p>
                </div>
              </div>
            </router-link>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import "../css/list.css";
export default {
  data() {
    return {
      ul: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var aid = this.$route.params.aid;

      console.log(aid)

      var api = `/static/listjson/${aid}.json`;
      fetch(api)
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.ul = res;
          // console.log(res)
          // this.ul.shift()

          // Array.from(res).forEach(el => {
          //   console.log(el)
          //   this.ul.push(el)
          //   console.log(this.ul)
          // });
        });
    }
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getData();
  }
};
</script>