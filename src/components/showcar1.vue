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
          <dt>
            <span>我的购物车</span>
          </dt>
          <dd>
            <tr class="tr_t">
              <td style="width:11%">
                <input type="checkbox" v-on:click="selectAll(isSelectAll)" />
                <label for="all">全选</label>
              </td>
              <td width="38%">商品</td>
              <td width="26%">单价</td>
              <td width="6%">数量</td>
              <td width="14%">小计</td>
              <td width="11%">操作</td>
            </tr>
            <tbody>
              <template v-for="(itema) in list">
                <template v-for="(item,index) in itema">
                  <tr class="tr_c" :key="item.id">
                    <!-- {{item}} -->
                    <td :key="item.id" style="width:10px">
                      <!-- {{item.selected}} -->
                      <input type="checkbox" name id class="c_input" v-model="item.selected" />
                    </td>
                    <td colspan="1">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                          <tr>
                            <td width="15%">
                              <img :src="item.imgMax" />
                            </td>
                            <td width="85%">
                              <a href="javascript:;" class="title">{{item.title01}}</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td class="price">￥{{ item.money }}</td>
                    <td>
                      <span class="jian" @click="shuliang--">-</span>
                      <input type="text" v-model="shuliang" />
                      <span class="jia" @click="shuliang++">+</span>
                    </td>
                    <td>{{ item.money * shuliang }}</td>
                    <td>
                      <span v-on:click="deleteNowGoods(index)">删除</span>
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
            <tfoot>
              <tr class="tr_d">
                <td colspan="7">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td width="63%">
                          <span class="del">
                            <a href="javascipt:;" @click="deleteGoods">删除选中商品</a>
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
            </tfoot>
          </dd>
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
      </div>
    </div>
  </div>
</template>

<script>
import "../css/showcar.css";
import Bus from "./bus";
export default {
  data() {
    return {
      list: [],
      shuliang: 0
    };
  },
  methods: {
    selectAll: function(e) {
      // console.log(e, this.list.length);
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].selected = !e;
        console.log(this.list[i].selected)
      }
    },
    deleteGoods: function() {
      //过滤没有被选中的的商品重新赋值到购物车列表
      this.list = this.list.filter(function(e) {
        return !e.selected;
      });
      console.log(this.list);
    },
    //删除单条商品
    deleteNowGoods: function(index) {
      //根据索引删除list的记录
      this.list.splice(index, 1);
      console.log(this.list);
    }
  },
  computed: {
    isSelectAll: function() {
      return this.list.every(function(e) {
        return e.selected;
      });
    },
    getGoodsNums: function(e) {
      //已选中商品
      var goods = this.list.filter(function(e) {
        return e.selected;
      });
      //已选中商品总价格
      var totalGoodsPrice = 0;
      for (var i = 0; i < goods.length; i++) {
        totalGoodsPrice += goods[i].price * goods[i].num;
      }
      return {
        goodsNum: goods.length,
        goodsPrice: totalGoodsPrice
      };
    }
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
  mounted: function() {
    this.list = this.$store.state.list;
  }
};
</script>