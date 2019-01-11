import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home";
import Classify from "../components/classify";
import Scart  from "../components/scart";
import Settled  from "../components/scart/components/settled/settled"
import GoodList from "../components/scart/components/settled/goodList"
import PaySuccess from '../components/scart/components/settled/components/paysuccess'
import My from "../components/my";
import Err from "../components/error/err.vue";
import Login from "../components/login/login";
import Register from "../components/register/register";
import Firstlogin from "../components/Firstlogin/Firstlogin";
import Search from "../components/home/components/search";
import Message from "../components/my/components/message";
import Welcome from "../components/welcome";

import Money from "../components/my/components/money";
import Setting from "../components/my/components/setting";
import Info from "../components/my/components/info";
import Integral from "../components/my/components/integral";
import Infochange from "../components/my/components/infochange";
import News from "../components/my/components/news";
import Address from "../components/my/components/address";
import Addaddress from "../components/my/components/addaddress";
import Nickname from "../components/my/components/nickname";
import Advise from "../components/my/components/advise";

 
 

import Remain from "../components/my/components/remain";
import Addressmanage from "../components/my/components/addressmanage";

 

import Delivery from "../components/my/components/delivery";
import Pay from "../components/my/components/pay";
import Nologin from "../components/my/components/nologin";


import All from "../components/all/all";
import Food from "../components/food/food";
import Light from "../components/light/light";
import Drink from "../components/drink/drink";
import Goods_detail from "../components/goods_detail/goods_detail";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
			name:"welcome",
			component:Welcome,
			meta:{
        //tab栏的显示
        flag:false,
        requireAuth:false
      }
    },
    {
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        //tab栏的显示
        flag:true,
        requireAuth:true
      }
    },
    {
		  path:"/all",
		  name:"all",
		  component:All,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
    },
		{
		  path:"/remain",
		  name:"remain",
		  component:Remain,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
		},
		{
		  path:"/addressmanage",
		  name:"addressmanage",
		  component:Addressmanage,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
		},
    {
		  path:"/food",
		  name:"food",
		  component:Food,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
    },
    {
		  path:"/light",
		  name:"light",
		  component:Light,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
    },
    {
		  path:"/drink",
		  name:"drink",
		  component:Drink,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    //路由守卫
		    requireAuth:true
		  }
		},
    {
      path:"/search",
      name:"search",
      component:Search,
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
        requireAuth:true
      }
    },
		{
		  path:"/pay",
		  name:"pay",
		  component:Pay,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    requireAuth:true
		  }
		},
		{
		  path:"/nologin",
		  name:"nologin",
		  component:Nologin,
		  meta:{
		    //tab栏的显示
		    flag:true,
		    requireAuth:false
		  }
		},
		{
		  path:"/delivery",
		  name:"delivery",
		  component:Delivery,
		  meta:{
		    //tab栏的显示
		    flag:false,
		    requireAuth:true
		  }
		},
	{
	  path:"/advise",
	  name:"advise",
	  component:Advise,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	{
	  path:"/order",
	  name:"order",
	  component:Order,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	{
	  path:"/service",
	  name:"service",
	  component:Service,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	 {
	  path:"/nickname",
	  name:"nickname",
	  component:Nickname,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	{
	  path:"/news",
	  name:"news",
	  component:News,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	{
	  path:"/address",
	  name:"address",
	  component:Address,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	{
	  path:"/addaddress",
	  name:"addaddress",
	  component:Addaddress,
	  meta:{
	    //tab栏的显示
	    flag:false,
	    //路由守卫
	    requireAuth:true
	  }
	},
	{
	  path:"/infochange",
	  name:"infochange",
	  component:Infochange,
	  meta:{
	    //tab栏的显示
	    flag:false,
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
      path:"/settled",
      name:"settled",
      component:Settled,
      meta:{
        //tab栏的显示
        flag:true,
        //路由守卫
        requireAuth:true
      }
		},
		{
			path:"/paysuccess",
			name:'paysuccess',
			component:PaySuccess,
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
		  path:"/integral",
		  name:"integral",
		  component:Integral,
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
        flag:false,
				requireAuth:false
      }
    },
    {
      path:"/register",
      name:"register",
      component:Register,
      meta:{
        flag:false,
				requireAuth:false
      }
    },
		 {
		  path:"/evaluation",
		  name:"evaluation",
		  component:Evaluation,
		  meta:{
		    flag:false,
				requireAuth:true
		  }
		},
    {
      path:"/Firstlogin",
      name:"Firstlogin",
      component:Firstlogin,
      meta:{
        flag:false,
				requireAuth:false
      }
		},
		{
			//商品列表GoodList
      path:"/GoodList",
      name:"GoodList",
      component:GoodList,
      meta:{
        flag:false,
				requireAuth:false
      }
		},
		
		{
     //我的消息
			path:"/message",
      name:"message",
      component:Message,
      meta:{
        flag:false
      }
		},
		{
      path:"/goods_detail/:id",
      name:"goods_detail",
      component:Goods_detail,
      meta:{
        flag:false,
				requireAuth:false
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