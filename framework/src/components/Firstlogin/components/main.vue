<template>
    <div class="main">
          <img src="../../../assets/登录 副本_slices/log_1@2x.png" class="banner" >
           <div class="username">
               <div class="pic"><img src="../../../assets/登录 副本_slices/icon_yhm@2x.png" ></div>
               <input type="text" placeholder="用户名/手机号">
           </div>
           <div class="username">
              <div class="pic"><img src="../../../assets/登录 副本_slices/icon_mm@2x.png" alt=""></div> 
               <input type="text" placeholder="请输入密码">
           </div>
           <div class="btn"><router-link :to="{name:'home'}"><button @click="handleClick()">登录</button></router-link></div>
           <div class="foot"><router-link :to="{name:'register'}"><button>注册</button></router-link></div>
        <p><span class="ops"></span><span>其他登录方式</span><span class="ops"></span></p>
        <div class="find">
            <img src="../../../assets/登录 副本_slices/icon_wx@2x.png" alt="">
            <img src="../../../assets/登录 副本_slices/icon_qq@2x.png" alt="">
        </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    methods:{
        handleClick(){
            Toast({
                    message: '登录成功',
                     duration: 1500,
                    iconClass: 'mintui mintui-success'
            });
        }
     }
}
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0
    }
    .main{
        width:7.5rem;
        height:11.8rem;
        background:rgba(255,252,235,1);
        overflow: hidden;
    }
    .main .banner{
        width: 3rem;
        height: 3rem;
        display: block;
        margin: .5rem auto;
        margin-bottom:1rem 
    }
     .main .username{
        width:5.1rem;
        height:0.8rem;
        background:rgba(255,255,255,1);
        border-radius:0.1rem;
        margin: .5rem auto

     }
     .main .username .pic{  
        float: left;
        width:0.8rem;
        height:0.8rem;
        background:rgba(255,217,0,1);
        border-radius:.1rem 0rem 0rem 0.1rem;
        display: flex;
        justify-content: space-around;
        align-items: center
     }
    .main .username .pic img{
        width:0.5rem;
        height:0.5rem;
    }
     .main .username input{
        padding-left: .1rem;
        width:4rem;
        height:100%;
        font-size:0.25rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(114,114,114,1);
        outline: none;
        border: 0
     }
    .main .btn {
        display: flex;
        justify-content: center     
     }
    .main button{
        width:5.1rem;
        height:0.8rem;
        background:rgba(255,217,0,1);
        border-radius:0rem;
        outline: none;
        border: 0;
       font-size:0.25rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(254,254,254,1);
    }
    .main .foot{
        width:5.1rem;
         height:1rem;
        display: flex;
        justify-content: space-between;
        margin-left: 1.2rem;
        line-height:1rem;
        font-size:0.2rem;
        font-family:PingFang-SC-Medium;
        font-weight:700;
        color:rgba(51,51,51,1);
    }
    .main p{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 1rem;
        padding: 0 1rem
    }
    .main p .ops{
        width:1.4rem;
        height:0.01rem;
        border:1px solid rgba(0,0,0,1);
        opacity:0.3;        
    }
     .main .find{
         display: flex;
         justify-content:space-around;
        margin-top: .5rem
     }
    .main .find img{
        width:.7rem;
        height:.7rem;
        background:rgba(255,252,235,1);
    }
</style>