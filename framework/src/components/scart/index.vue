<template>
    <div class="scart">
        <top-com/>
        <nav-com/>
        <main-com @pay="handlePay"/>
        <bottom-com/>         
        <!-- 灰色背景 -->   
        <div class="mask" v-show="flag"></div>
         <!-- 支付方式 -->
        <transition name="payWay">
            <payWay-gl v-show="flag" @pay="handlePay"></payWay-gl>
        </transition>
    </div>
</template>

<script>
import Top from './components/top';
import Nav from './components/nav';
import Main from './components/main';
import Bottom from './components/bottom';
import PayWay from './components/payWay';
import paySuccess from './components/paysuccess';
export default {
    components:{
    "top-com":Top,
    "nav-com":Nav,
    "main-com":Main,
    "bottom-com":Bottom,
    "payWay-gl":PayWay,
    "paySuccess-gl":paySuccess
    },
    data () {
        return {
        flag:false
        }
    },
    methods:{
        handlePay(){
        this.flag = !this.flag;
        }
    }
}
</script>


<style lang="">
   .scart{
       width:100%;
       height:100%;
   }
   .scart> .mask{
        width:7.5rem;
        height:13.34rem;
        background:rgba(0,0,0,1);
        position:fixed;
        top:0;
        left:0;
        opacity:0.5;
        z-index: 5;
   }
    payWay-gl{
        position: fixed;
        left:0;
        bottom:0;
    }
   .payWay-enter,.payWay-leave-to{
    transform: translateY(100%);
  }
  .payWay-enter-active,
  .payWay-leave-active{
    transition:all 700ms 
  }
</style>