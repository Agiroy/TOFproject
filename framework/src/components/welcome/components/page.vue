<template>
<div class="page">
    <div class="swiper-container" ref="welcomepage">
    <div class="swiper-wrapper">
     
      <div class="swiper-slide"><img src="../../../assets/欢迎页/page1.png" alt=""></div>
       <div class="swiper-slide"><img src="../../../assets/欢迎页/page2.png" alt=""></div>
       <div class="swiper-slide"><img src="../../../assets/欢迎页/page3.png" alt=""><router-link :to="{name:'Firstlogin'}"><button>开启美食之旅</button></router-link></div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
     
</div>

</div>
</template>
<script>
import Swiper from "swiper"
export default {
    mounted(){
            new Swiper(this.$refs.welcomepage,{
                pagination: {
                el: '.swiper-pagination',
                }
            }) 
    }
} 
</script>
<style>
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }
     .swiper-slide button{
         position: absolute;
         bottom:3rem ;
         left: 2.25rem;
         width: 3rem;
         height:1rem;
         background: orange;
         outline: none;
         border: 0;
         color: azure;
         font-weight: 700;
         border-radius:0.1rem;
     }
</style>
