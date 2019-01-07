import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home";
import Classify from "../components/classify";
import Scart  from "../components/scart";
import My from "../components/my";
import Err from "../components/error/err.vue";
import Login from "../components/login/login";
import Register from "../components/register/register";

import Money from "../components/my/components/money";
import Setting from "../components/my/components/setting";
import Info from "../components/my/components/info";
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        //tab栏的显示
        flag:true,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path:"/classify",
      name:"classify",
      component:Classify,
      meta:{
        //tab栏的显示
        flag:true,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path:"/scart",
      name:"scart",
      component:Scart,
      meta:{
        //tab栏的显示
        flag:true,
        //路由守卫
        requireAuth:true
      }
    },
    {
      path:"/my",
      name:"my",
      component:My,
      meta:{
        //tab栏的显示
        flag:true,
        //路由守卫
        requireAuth:true
      }
    },
		{
		  path:"/money",
		  name:"money",
		  component:Money,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
		},
		{
		  path:"/info",
		  name:"info",
		  component:Info,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
		},
		{
		  path:"/setting",
		  name:"setting",
		  component:Setting,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
		},
    {
      path:"/login",
      name:"login",
      component:Login,
      meta:{
        flag:false
      }
    },
    {
      path:"/register",
      name:"register",
      component:Register,
      meta:{
        flag:false
      }
    },
    {
      path:"**",
      component:Err
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.requireAuth){
//     //用户是否登陆成功
//     if(false){
//       //工作当中这里面需要做token的验证
//       next();
//     }else{
//       next("/login")
//     }
//   }else{
//     next();
//   }
// })

export default router;