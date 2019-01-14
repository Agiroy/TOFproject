<template>
    <div class="yourloves_box">
        <div class="love_top">            
            <button class="love_login">
                <router-link to="login">登录</router-link>
            </button>      
            <h3>您可以在登录后同步账户中的商品<i>~</i></h3>
        </div>
        <div class="love_body">
            <h3>购物车暂时没有商品</h3>
            <button>
                <router-link to="home">去逛逛</router-link> 
            </button>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .love_top{
        width:100%;
        height:.84rem;
        background:rgba(255,251,209,1);
        margin-top:.88rem;
    }
    .love_login{
        width:1.14rem;
        height:.55rem;
        border:.01rem solid rgba(160,160,160,1);
        border-radius:.04rem;
        float: left;
        line-height: .55rem;
        font-size:.28rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        background:rgba(255,251,209,1);
        margin:.18rem .18rem .11rem .3rem;
    }
    .love_top>h3{
        position: relative;
        top:.32rem;
        width:5.02rem;
        height:.33rem;
        font-size:.28rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-left:1.62rem;
        
    }
    .love_body{
        width:100%;
        height:6.01rem;
        padding-top: 4.04rem;
    }
    .love_body>button{
        width:2.81rem;
        height:.78rem;
        background:rgba(255,217,0,1);
        border-radius:.39rem;
        border:0;
        font-size:.3rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin:.2rem 0 0 2.34rem;
    }
    .love_body>h3{
        width:3.2rem;
        height:.33rem;
        font-size:.34rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-left:2.25rem;
    }
</style>
