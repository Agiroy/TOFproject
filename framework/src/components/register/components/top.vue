<template>
    <div class="top">
            <router-link to="" class="backHome"><img src="../../../assets/icon_fh@2x.png" class="back" @click="handleClick()"></router-link>
            <span>注册</span>
            <router-link :to="{name:'login'}">登录</router-link>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .top{
        width: 100%;
        height:0.88rem;
        background:rgba(255,217,0,1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0  0.3rem;
    }
    .top .back{
        width:0.17rem;
        height:0.3rem;
    }
    .top span{
        font-size:0.34rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(41,41,41,1);
        line-height:0.15rem;
    }
    .top a{
        font-size:0.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(41,41,41,1);
        line-height:0.15rem;
    }
</style>
