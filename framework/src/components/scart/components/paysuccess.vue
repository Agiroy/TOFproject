<template>
    <div class="pay">
        <div class="pay_success">
            <div class="conent">
                <div class="pay_title">
                    <router-link to="scart">
                        <img class="pro" src="./../../../../static/images/classify/icon_fh.png">
                    </router-link>
                    <span>完成</span>
                </div>
                <div class="pay_cont">
                    <img src="./../../../../static/images/classify/icon_zgjs.png" alt="">
                    <span class="pay_suc">支付成功</span>
                    <span class="pay_price">81.00元</span>
                </div>
                <div class="HR"></div>
                <div class="hr"></div>
                <div class="pay_others">
                    <span>付款方式</span>
                    <span>中国建设银行</span>
                </div>
                <div class="hr"></div>
                <div class="pay_others">
                    <span>收款方</span>
                    <span>邓超 </span>
                </div>
            </div>
            
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .pay{
        width:100%;
        height:100%;
        background:#ccc;
        position:absolute;
        z-index: 4;
    }
    
    .pay_success{
        width:7.5rem;
        height:7.09rem;
        background:#FDFDFD;
        padding-left:.3rem;

    }
    .pay_title{
        position: relative;
        height:.4rem;
    }
    .pay_success>.conent{
        width:6.89rem;
        height:100%;
        
    }
    .pro{
        width:.17rem;
        height:.3rem;
        position: absolute;
        top:.41rem;
        left:.04rem;
    }
    .pay_title>span{
        height:.32rem;
        position: absolute;
        right:.02rem;
        top:.39rem;
        font-size: .34rem;
        font-family: PingFang-SC-Regular;
        font-weight: SC-Regular;
        color:#000;
    }
    .pay_cont{
        width:100%;
        height:4.47rem;
  
        position: relative;
        top:.4rem;
        left:0;
        display:flex;
        flex-direction: column;
        align-items: center;
        font-family: PingFang-SC-Regular
    }
    .pay_cont>img{
        width:1.25rem;
        height:1.35rem;
        margin-top:.95rem;       
    }
    .pay_suc{
        font-size: .32rem;
        margin-top:.21rem;
    }
    .pay_price{
        font-size: .52rem;
        margin-top:.4rem;
    }
    .HR{
        height:.42rem;
        width:100%;
    
    }
    .conent>.hr{
        width:6.89rem;
        height:0.02rem;
        background: #ccc;
        border:0;
        position: relative;
    }
    .conent>.pay_others{
        width:100%;
        height:.78rem;
        line-height: .78rem;
        display:flex;
        justify-content: space-between;
        padding:0 .13rem 0 .25rem;
    }
    .conent>.pay_others>span{
        min-width:.3rem;
        height:.31rem;
        font-family: PingFang-SC-Regular;
        font-weight: SC-Regular;
        font-size: .32rem;
            
    }
</style>
