//引入一级页面组件
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

//配置跳转
export const routes = [
    //404跳转
    {path:"*",redirect:"/"},

    //页面路由
    // {path:"/",name:"homeLink",component:Home},
    {path:"/",name:"homeLink",components:{
        default:Home,
        'ordingGuide':OrdingGuide,
        'history':History,
        'delivery':Delivery
    }},
    {path:"/menu",name:"menuLink",component:Menu},
    {path:"/admin",name:"adminLink",component:Admin
        ,beforeEnter:(to,from,next)=>{
        //   //路由独享内守卫方式一    
        //   // alert("非登录状态，禁止访问该页面！");
        //   // next("/login");
        //   // next();//会继续进入该页面
        //   // next(false);//停留在跳转之前的页面
        
          //路由独享守卫方式二
          if(to.path=="/login"||to.path=="/register"){
            next();
          }else{
            alert("请先登录");
            next("/login");
          }  
        }
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