<template>
        <div class="top">
            <router-link :to="{name:'home'}"><img src="../../../assets/icon_fh@2x.png" alt=""></router-link>
            <span>登录</span>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .top{
        width: 100%;
        height:1.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background:rgba(255,252,235,1);
    }
    .top img{
        width:0.17rem;
        height:0.3rem;
        margin-left: 0.4rem
    }
    .top span{
        padding-right: .5rem;
        display: block;
        width:7.5rem;
        height:1rem;
        font-size:0.36rem;
        font-family:PingFang-SC-Bold;
        color:rgba(51,51,51,1);
        line-height: 1rem;
        text-align: center
    }
</style>
