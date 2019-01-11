<template>
    <div class="home-banner">
        <div class="swiper-container banner-container" ref="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide banner-img">
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> zhouyuying
>>>>>>> 86e31528cff207f706fdc3df6651f95bd975c399
                    <img src="@/assets/首页_slices/图层 1@2x.png">
                </div>
                <div class="swiper-slide banner-img">
                    <img src="@/assets/首页_slices/riyuguang@2x.png">
                </div>
              <div class="swiper-slide banner-img">
                    <img src="@/assets/首页_slices/bannerpangxie@2x.png">
<<<<<<< HEAD
                </div>
                <div class="swiper-slide banner-img">
                    <img src="@/assets/首页_slices/riyuguang@2x.png">
=======
<<<<<<< HEAD
                </div>
=======
                    <!-- <img src="@/assets/商品详情界面 副本_slices/san@2x.png"> -->
                </div>
               <!--   <div class="swiper-slide banner-img">
                    <img src="@/assets/商品详情界面 副本_slices/si@2x.png">
>>>>>>> 86e31528cff207f706fdc3df6651f95bd975c399
                </div>
                <div class="swiper-slide banner-img">
                    <img src="@/assets/商品详情界面 副本_slices/yi@2x.png">

<<<<<<< HEAD
                </div>
=======
                </div> -->
>>>>>>> zhouyuying
>>>>>>> 86e31528cff207f706fdc3df6651f95bd975c399
            </div>
            <!-- <div class="swiper-pagination"></div> -->
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    mounted(){
        setTimeout(()=>{
            new Swiper(this.$refs.banner,{
                // pagination: {
                //      el: '.swiper-pagination',
                //  },
                centeredSlides:true,
                slidesPerView : 1.08,
                loopAdditionalSlides:1,
                loop:true,
                autoplay: {
                    //操作swiper后不关autoplay
                    disableOnInteraction: false,
                },
                //防止触摸时跳转sdasdassdasd
                preventClicks : false,
                pagination: {
                    el: '.banner-pagination',
                },
            }) 
        },100)
    }
}
</script>

<style>
    .banner-container{
        width:100%;
        top:39%;
        left:0;
        margin-top:-1.58rem;
    }
    .banner-container .swiper-slide{
        box-sizing:border-box;
        padding:0 2%;
        height: 3.78rem;
    }
     .banner-container .swiper-slide img{
        border-radius: .4rem;   
         width: 6.68rem;
        height: 3.78rem;
        box-shadow:0rem .06rem .24rem 0rem rgba(225, 217, 217, 0.35);
    }

</style>