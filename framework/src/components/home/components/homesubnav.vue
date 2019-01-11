<template>
    <div class="homesubnav">
        <img class="home-navi" src="@/assets/首页_slices/xiaolab@2x.png">
        <div class="homes"></div>
        <div class="hotbox">
            <div class="swiper-container nav-container" ref="subnav">
                <div class="swiper-wrapper subnav-box">
                    <div class="swiper-slide subnav-list">
                         <router-link class="subnav-lista" to="">这么香的烤鹅，隔壁家小孩都馋哭了...</router-link>
                    </div>
                    <div class="swiper-slide subnav-list">
                        <router-link class="subnav-lista" to="">孩子更爱吃土鸡蛋,蛋先生新鲜土鸡蛋(每日最新土鸡蛋)</router-link>
                    </div>
                    <div class="swiper-slide subnav-list">
                        <router-link class="subnav-lista" to="">霸王防脱,你的防脱秘籍</router-link>
                    </div>
                </div>
            </div>
        </div>
            <img class="home-navg" src="@/assets/首页_slices/qianwang@2x.png">
    </div>
</template>
<script>
import Swiper from "swiper";
export default {
    mounted(){
        setTimeout(()=>{
            new Swiper(this.$refs.subnav,{
                loop:true,
                autoplay: {
                    //操作swiper后不关autoplay
                    disableOnInteraction: false,
                },
                //防止触摸时跳转
                preventClicks : false,
                pagination: {
                    el: '.banner-pagination',
                },
                direction: 'vertical',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            }) 
        },100)
    }
}
</script>
<style>
.homesubnav{
    width: 100%;
    height:1rem;
    display: flex;
    border:.01rem solid rgba(228, 228, 228, 1);
    background:linear-gradient(0deg,rgba(247,247,247,1),rgba(255,249,249,1));
}
.homes{
    width:.01rem;
    height:.62rem;
    background:rgba(174,174,174,1);
    margin:.23rem 0 0 .25rem;
}
.hotbox{
    width: 4rem;
    height: 1rem;
}
.home-navi{
    width: .57rem;
    height:.51rem;
    margin: .29rem 0 0 .56rem;
}

.home-navg{
    width: .17rem;
    height: .32rem;
    margin:.39rem 0 0 1.2rem;
}
.sub-list .subnav-lista{
    font-family:PingFang-SC-Regular;
    font-weight:400;   
    color:rgba(99,90,91,1);
    font-size:.32rem;
    width:4rem;
    height: 0.64rem;
}
.nav-container{
    width: 4.7rem;
    height: .35rem;
    margin: .4rem 0 0 .15rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 20em;
}

</style>