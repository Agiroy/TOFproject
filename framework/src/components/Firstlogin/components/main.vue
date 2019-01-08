<template>
    <div class="main">
           <img src="../../../assets/登录 副本_slices/log_1@2x.png" class="banner">
           <div class="username">
               <div class="pic"><img src="../../../assets/登录 副本_slices/icon_yhm@2x.png" alt=""></div>
               <input type="text" placeholder="用户名/手机号">
           </div>
           <div class="username">
              <div class="pic"><img src="../../../assets/登录 副本_slices/icon_mm@2x.png" alt=""></div> 
               <input type="text" placeholder="请输入密码">
           </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    *{
        margin: 0;
        padding: 0
    }
    .main{
        width:7.5rem;
        height:13.34rem;
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
        border-radius:0rem;
        margin: .5rem auto

     }
     .main .username .pic{  
        float: left;
         width:0.8rem;
        height:0.8rem;
        background:rgba(255,217,0,1);
        border-radius:0rem 0rem 0rem 0rem;
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
        font-size:0.2rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(114,114,114,1);
        outline: none;
        border: 0
     }

</style>