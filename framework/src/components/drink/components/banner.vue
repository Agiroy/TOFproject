<template>
    <div class="banner">

   	<img class="back" src="../../../assets/ico_fh2@2x.png"  @click="handlelead()">




  <div class="swiper-container" ref="goodsbanner">
    <div class="swiper-wrapper">
     
      <div class="swiper-slide"><img src="@/assets/goods_banner/shicai 15@2x.png" alt=""></div>
       <div class="swiper-slide"><img src="@/assets/goods_banner/haishen@2x.png" alt=""></div>
       <div class="swiper-slide"><img src="@/assets/goods_banner/shicai@2x.png" alt=""></div>
      <div class="swiper-slide"><img src="@/assets/goods_banner/shicai14@2x.png" alt=""></div>
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
        setTimeout(()=>{
            new Swiper(this.$refs.goodsbanner,{
              pagination: {
        el: '.swiper-pagination',
      },
                centeredSlides:true,
                slidesPerView : 1.08,
                loopAdditionalSlides:1,
                  slidesPerView : 1,
                  slidesPerGroup : 1,
                loop:true,
                autoplay: {
                    //操作swiper后不关autoplay
                    disableOnInteraction: false,
                },
                //防止触摸时跳转
                preventClicks : false,
           
            }) 
        },100)
    },
     	methods:{
 	handlelead(){
  	this.$router.push("/home");
 	}
 	}
}
</script>
<style lang="" scope>
    .banner{width:100%;
position: relative;
height:4.1rem;
 ;} 
.back{position:absolute; top: 0.3rem;
left :0.2rem;
z-index: 3;
width:0.27rem;
height:0.47rem;}
.swiper-container{   width: 100%;height: 100%;      }
.swiper-slide{width: 100%;height: 100%;}
.swiper-slide img{width: 100%;height: 100%;}
.swiper-wrapper{ width: 100%;height: 100%; }
.swiper-pagination {width: 100%;}
.swiper-pagination::after {clear: both;content: "";display: block}
.swiper-pagination-bullet{opacity:.6;background: #fff;}
.swiper-pagination-bullet-active{opacity:1;background: #fff;}

</style>