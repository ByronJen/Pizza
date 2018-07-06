// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
//引入vue-resource 它可以通过XMLHttpRequest或JSONP发起请求并处理响应
import VueResource from 'vue-resource'

//引入一级页面组件
import App from './App' 
import Home from './components/Home'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'

//引入二级页面组件
import About from './components/about/About'
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrdingGuide from './components/about/OrdingGuide'

// 引入三级页面组件
import Phone from './components/about/contact/Phone'
import Email from './components/about/contact/Email'

Vue.config.productionTip = false

//使用router
Vue.use(VueRouter)
Vue.use(VueResource)

//配置跳转
const routes = [
  //404跳转
  {path:"*",redirect:"/"},

  //页面路由
  {path:"/",name:"homeLink",component:Home},
  {path:"/menu",name:"menuLink",component:Menu},
  {path:"/admin",name:"adminLink",component:Admin
    // ,beforeEnter:(to,from,next)=>{
    //   //路由独享内守卫方式一    
    //   // alert("非登录状态，禁止访问该页面！");
    //   // next("/login");
    //   // next();//会继续进入该页面
    //   // next(false);//停留在跳转之前的页面
      
    //   //路由独享守卫方式二
    //   if(to.path=="/login"||to.path=="/register"){
    //     next();
    //   }else{
    //     alert("请先登录");
    //     next("/login");
    //   }  
    // }
  },
  {path:"/login",name:"loginLink",component:Login},
  {path:"/register",name:"registerLink",component:Register},    
  {path:"/about",name:"aboutLink",redirect:"/contact",component:About,children:[
    {path:"/contact",name:"contactLink",redirect:"/phone",component:Contact,children:[
      {path:"/phone",name:"phoneLink",component:Phone},
      {path:"/email",name:"emailLink",component:Email},
    ]},
    {path:"/history",name:"historyLink",component:History},
    {path:"/delivery",name:"deliveryLink",component:Delivery},
    {path:"/ordingguide",name:"ordingGuideLink",component:OrdingGuide},
  ]}
]

//配置router
const router = new VueRouter({
  routes,//页面跳转
  mode:"history"// 消除链接中的#
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
