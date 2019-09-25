<template>
  <div id="showcar">
    <div class="container">
      <div class="position">
        <router-link to="/home">首页</router-link>&gt;
        <a href="#">购物车</a>
      </div>

      <div class="shopcar">
        <div class="shop_lc">
          <span class="sp01">我的购物车</span>
          <span class="sp02">填写提交信息表单</span>
          <span class="sp03">在线支付</span>
        </div>
        <dl>
          <template>
            <dt>
              <span>我的购物车</span>
            </dt>
            <dd>
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr class="tr_t">
                    <td width="4%">
                      <input type="checkbox" @click="selectAll(isSelectAll)" />
                    </td>
                    <td width="4%">全选</td>
                    <td width="35%">商品</td>
                    <td width="26%">单价</td>
                    <td width="6%">数量</td>
                    <td width="14%">小计</td>
                    <td width="11%">操作</td>
                  </tr>
                  <template v-for="(itemaa,i) in jrgwc">
                    <template v-for="(itema) in itemaa">
                      <tr class="tr_c">
                        <td>
                          <!-- {{itema.selected}} -->
                          <input type="checkbox" class="c_input" v-model="itema.selected" />
                        </td>
                        <td colspan="2">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td width="15%">
                                  <img :src="itema.imgMax" />
                                </td>
                                <td width="85%">
                                  <a href="javascript:;" class="title">{{itema.title01}}</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td class="price">￥{{itema.money}}</td>
                        <td :key="i">
                          <span class="jian" @click="shuliangjian(i)">-</span>
                          <input type="text" :value="itema.num" />
                          <span class="jia" @click="shuliangadd(i)">+</span>
                        </td>
                        <td class="price">￥{{itema.money*itema.num}}</td>
                        <td>
                          <a href="javascritp:;" @click="deleteNowGoods(i)">删除</a>
                        </td>
                      </tr>
                    </template>
                  </template>

                  <tr class="tr_d">
                    <td colspan="7">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td width="63%">
                              <span class="del">
                                <a href="javascript:;" @click="deleteGoods">删除选中商品</a>
                              </span>
                            </td>
                            <td width="11%">
                              已选商品
                              <strong>{{ getGoodsNums.goodsNum }}</strong> 件
                            </td>
                            <td width="14%" class="all_price">
                              合计：
                              <font>{{ getGoodsNums.goodsPrice }}</font>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="clear"></div>
            </dd>
          </template>
        </dl>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="go_tb">
          <tbody>
            <tr>
              <td width="20%">
                <!-- <a href="#" class="go_buy">继续购物</a> -->
                <router-link to="/home" class="go_buy">继续购物</router-link>
              </td>
              <td width="63%">&nbsp;</td>
              <td width="17%" align="right">
                <a href="#" class="code">结 算</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../css/showcar.css";
import Bus from "./bus";
import { connect } from "tls";
export default {
  data() {
    return {
      name: "",
      shuliang: 1,
      xiaojie: 0,
      checked: false,
      andsp: 0,
      heji: 0,
      list: [],
      jrgwc: []
    };
  },
  created() {
    // var vm = this;

    // console.log(23);
    var _this = this;
    // 用$on事件来接收参数

    Bus.$on("msg", e => {
      // console.log(e);

      // console.log(_this)
      _this.name = e;
      // _this.list = e
    });
  },
  mounted() {
    this.list = this.$store.state.list;
    this.jrgwc = this.list;
    console.log(this.jrgwc);
  },
  methods: {
    // 全选
    selectAll(e) {
      for (var i = 0; i < this.jrgwc.length; i++) {
        this.jrgwc[i][0].selected = !e;
        // console.log(e);
      }
    },
    // 删除选中
    deleteGoods() {
      //过滤没有被选中的的商品重新赋值到购物车列表
      this.jrgwc = this.jrgwc.filter(function(e) {
        return !e[0].selected;
      });

      // console.log(this.jrgwc);
    },
    // 加数
    shuliangadd(index) {
      // console.log(this.jrgwc)
      this.jrgwc[index][0].num++;
    },
    // 减数cd
    shuliangjian(index) {
      this.jrgwc[index][0].num--;
      if (this.jrgwc[index][0].num <= 0) {
        this.jrgwc[index][0].num = 0;
      }
    },
    // 单条删除
    deleteNowGoods(index) {
      this.jrgwc.splice(index, 1);
      this.$store.commit("deles");
    },
    sele() {
      for (var i = 0; i < this.jrgwc.length; i++) {
        // console.log(this.jrgwc[i][0].selected);
        if (this.jrgwc[i][0].selected) {
          // console.log(this.jrgwc[i][0].selected);
        } else {
          // console.log(this.jrgwc[i][0].selected);
        }
      }
    }
  },
  computed: {
    isSelectAll() {
      return this.jrgwc.every(function(e) {
        return e[0].selected;
      });
    },
    getGoodsNums: function(e) {
      //已选中商品
      var goods = this.jrgwc.filter(function(e) {
        return e[0].selected;
        // console.log(e)
      });
      // console.log(goods)
      //已选中商品总价格
      var totalGoodsPrice = 0;
      for (var i = 0; i < goods.length; i++) {
        // console.log(goods[i][0])
        totalGoodsPrice += goods[i][0].money * goods[i][0].num;
      }
      return {
        goodsNum: goods.length,
        goodsPrice: totalGoodsPrice
      };
    }
  }
};
</script>