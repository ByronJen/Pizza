// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
//引入vue-resource 它可以通过XMLHttpRequest或JSONP发起请求并处理响应
import VueResource from 'vue-resource'
//引入入口组件
import App from './App' 

//引入roter.js
import { routes } from './router'

Vue.config.productionTip = false

//使用router
Vue.use(VueRouter)
Vue.use(VueResource)


//配置router
const router = new VueRouter({
  routes,//页面跳转
  mode:"history",// 消除链接中的#
  scrollBehavior(){
    
  }
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path=="/login"||to.path=="/register"){
//     next();
//   }else{
//     alert("请先登录");
//     next("/login");
//   }
// });

//后置钩子
router.afterEach((to,from)=>{
  // alert("每次进入组件后都会执行router.afterEach后之钩子");
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})