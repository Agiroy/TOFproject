<template>
    <div class="homemain">
        <div class="homemain-top">
            <h3>推荐热卖</h3>
            <p>精选好货</p>
        </div>
        <router-link to=""><img class="hommain-img" src="../../../assets/首页_slices/bannerpangxie@2x.png"></router-link>
        <div class="homemin-bottom">
            <div class="homeminbl">
                <h3><router-link to="">正宗阳澄湖大闸蟹</router-link></h3>
                <p><router-link to="">正宗阳澄湖大闸蟹 秋日盛宴不早不晚</router-link></p>
            </div>
            <div class="homeminbr">
                <span>￥ 699</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.homemain{
    width:100%;
    flex: 1;
}
.homemain-top{
    width: 100%;
    height: .8rem;
    display: flex;
    align-items: center;
}
.homemain-top h3{
    font-size:.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(34,34,34,1);
    margin-left: .32rem;
}
.homemain-top p{
    font-size:.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(170,170,170,1);
    margin-left: .35rem;
}
.homemain .hommain-img{
    width: 7rem;
    height:3.4rem;
    align-self: center;
    margin-left: .21rem;
}
.homemin-bottom{
    display: flex;
    width: 100%;
    height: 100%;
}
.homemin-bottom .homeminbl h3{
    font-size:0.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(34,34,34,1);
    margin:.04rem 0 0 .31rem
}
.homemin-bottom .homeminbl p{
    font-size:0.24rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(135,135,135,1);
    margin:.04rem 0 0 .31rem;
}
.homemin-bottom .homeminbr span{
    display: inline-block;
    font-size:0.44rem;
    font-family:PingFang-SC-Regular;
    font-weight:bold;
    color:rgba(238,18,44,1);
    margin:.1rem 0 0 1rem;
}
</style>