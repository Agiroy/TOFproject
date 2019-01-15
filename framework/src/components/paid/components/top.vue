<template>
        <div class="top">
            <img src="../../../assets/icon_fh@2x.png" @click="handleBack()">
            <span>评价</span>
        </div>
</template>
<script>
export default {
     methods:{
        handleBack(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .top{
        width: 100%;
        height:1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background:rgba(255,217,0,1);;
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
