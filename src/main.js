// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import tandf from './components/topandflood.vue'
// import min from './components/index.vue'
import Mock from 'mockjs';
import store from './store';

Mock.mock("/getGoods", "get", (config) => {
  console.log(config);
  return data;
})

import $ from 'jquery'
// 引用jq
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

import Home from './components/index.vue';
import Login from './components/login.vue';
import Reg from './components/reg.vue';
import Content from './components/Content.vue';
import Show from './components/Show.vue';
import List from './components/list.vue';
import Showcar from './components/showcar.vue';
import Showcar1 from './components/showcar1.vue';



// Vue.prototype.$http = 
const routes = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/reg', component: Reg },
  { path: '/show', component: Show },
  { path: '/list', component: List },
  { path: '/showcar', component: Showcar },
  { path: '/showcar1', component: Showcar1 },

  { path: '/content/:aid', component: Content },   /*动态路由*/
  { path: '/list/:aid', component: List,},   /*动态路由*/

  { path: '*', redirect: '/home' },

]


const router = new VueRouter({
  mode:"history",
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  el: '#App',
  store,
  router,
  render: h => h(App)
})

// 切换路由后自动回到顶部
router.afterEach((to,from,next) => {

  window.scrollTo(0,0);

})