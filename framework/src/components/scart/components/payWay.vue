<template>
    <div class="pay_way">
        <div class="box">
            <div class="pay_title">
                <img @click="handleBack()" src="./../../../../static/images/classify/icon_fh.png" alt="">
                <span>选择付款方式</span>
            </div>
            <div class="hr"></div>
            <div class="pay_others">
                <img class="wx" src="./../../../../static/images/classify/icon_wx.png" alt="">
                <span>微信</span>
            </div>
            <div class="hr"></div>
            <div class="pay_others">
                <img src="./../../../../static/images/classify/icon_zfb.png" alt="">
                <span>支付宝</span>
            </div>
            <div class="hr"></div>
            <div class="pay_others">
                <img src="./../../../../static/images/classify/icon_zgyh.png" alt="">
                <span>中国银行储蓄卡(0584)</span>
            </div>
            <div class="hr"></div>
            <div class="pay_others">
                <img src="./../../../../static/images/classify/icon_zgjs.png" alt="">
                <span>中国建设银行储蓄卡(1234)</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleBack(){
            
            this.Observer.$emit("pay")
        }
    }
}
</script>
<style scoped>
    .pay_way{
        width:7.5rem;
        height:5.65rem;
        background:rgba(253,253,253,1); 
        position: fixed;
        bottom:0;
        left:0;
        z-index: 6;      
    }
    .box{
        width:6.89rem;
        height:5.65rem;
        margin-left:.3rem;
    }
    .pay_title{
        width:100%;
        height:.84rem;
        padding-top:.27rem;
        text-align: center;
        position: relative;
    }
    .pay_title>img{
        width:.17rem;
        height:.3rem;
        position: absolute;
        top:.3rem;
    }
    .pay_title>span{
        font-family: PingFang-SC-Regular;
        font-weight: 400;
        font-size: .34rem;
        color:black;
        margin-top:0;
    }
    .box>.hr{
        width:6.89rem;
        height:0.02rem;
        background: #ccc;
    }
    .pay_others{
        width:100%;
        height:1.18rem;
        padding-top: .44rem;
    }
    .pay_others>img{
        width:.55rem;
        height:.55rem;
        position: absolute;
        margin:-.07rem .26rem .36rem .1rem;
    }
    .pay_others>.wx{
        height:.45rem;
    }
    .pay_others>span{
        width:.63rem;
        height:.31rem;
        font-family: PingFang-SC-Regular;
        font-weight: SC-Regular;
        font-size: .32rem;
        margin-left:.91rem;
    }
</style>
