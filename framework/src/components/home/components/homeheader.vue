<template>
    <div class="home-header">
        <div class="home-logo"><img src="@/assets/食令已改1 副本_slices/log@2x.png"></div>
        <div class="home-search">
 
            <router-link :to="{name:'search'}">
 
     
 
                <img src="@/assets/食令已改1 副本_slices/biaoti@2x.png">
            </router-link>
        </div>
        <div class="home-message">
            <router-link to="">
 
                <img src="@/assets/首页_slices/b2.png">
 
                <img src="@/assets/食令已改1 副本_slices/log@2x.png">
 
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .home-header{

        width:100%;

        width:7.5rem;

        height:2.81rem;
        background:rgba(249,225,115,1);   
        display: flex;
    }
    .home-header>.home-logo>img{
        width:.69rem;
        height:.38rem;
        margin:.65rem 0 0 .32rem;
    }
    .home-header>.home-search img{
        width:1.94rem;
        height:.27rem;
        margin:.7rem 0 0 .19rem;
    }
    .home-header>.home-message img{
        width:.46rem;
        height:.35rem;
        margin: .67rem 0 0 3.42rem;
    }
</style>
