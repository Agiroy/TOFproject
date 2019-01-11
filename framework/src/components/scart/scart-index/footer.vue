<template>
    <div class="footer">
        <div class="checkbox">
            <label>
                <input type="checkbox">
                全选
            </label>
        </div>
        <div class="goodsName">已选择<span></span>件商品</div>
        <div class="price">总价<span></span></div>
        <div class="btnPay">去结算</div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    // computed: {
    //     ...Vuex.mapGetters({
    //         result:"goodsList/result"
    //     })
    // }
}
</script>


<style scoped>
    .footer{
        width: 100%;
        height: .44rem;
        border:1px solid #cdcdcd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #c09393;
    }
    .footer>.btnPay{
        width: .8rem;
        height: 100%;
        text-align: center;
        line-height: .44rem;
        color: #fff;
        background: #c33;
    }
    .footer>.checkbox{
        width:.36rem;
        height:.36rem;
        border:#7D7D7D solid .02rem;
        border-radius: 50%;
        margin:.84rem .25rem .71rem .26rem;
        overflow: hidden;
        background: #FFF;
        position: relative;
    }
    .footer>.checkbox>label>input{
        width:.42rem;
        height:.42rem;
        background: #FFF;
        border-radius: 50%;
        border:0;
        margin:0;
        position: absolute;
        top:-.05rem;
        left:-.06rem;
    }
</style>