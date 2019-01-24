<template>
    <div class="footer">
        <div class="checkbox">
            <label>
                <input type="checkbox" :checked="checkAll" @click="handleCheckAll()"> 
            </label>
        </div>
        <div class="goodsName">已选择<span>{{result.goodsNum}}</span>件商品</div>
        <div class="price">总价<span>{{result.goodsPrice | price | count}}</span></div>
       <router-link :to="{name:'settled'}" style="width: 2rem;font-size:.28rem;font-weight: 700;text-align: center;line-height: 250%;margin-right:.2rem;height: 70%;color:#000;font-weight:400;background:#ffd900;"><div class="btnPay">去结算</div></router-link>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed: {
        ...Vuex.mapState({
            checkAll:state=>state.scart.checkAll
        }),
         ...Vuex.mapGetters({
            result:"scart/result"
        })
        
    },
    methods: {
        ...Vuex.mapMutations({
            handleCheckAll:"scart/handleCheckAll"
        })
    },
    filters:{
        count(n){
            return "￥"+ n;
        },
        price(n){
            if(!(/\./g.test(n))){
                return n+".00"
            }else{
                return n+"0";
            }        
        }
    }
}
</script>
<style scoped>
    .footer{
        width: 100%;
        height: 1.1rem;
        border:1px solid #cdcdcd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -.05rem;
        background:  #FFF;
    }
    .checkbox>label>input{
        width:.36rem;
        height:.36rem;
        border:0;
        margin:.84rem .25rem .71rem .26rem; 
    }
    /* .footer>.checkbox{
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
        margin-left:-.05rem;
        margin-top:-.05rem;
    } */
</style>