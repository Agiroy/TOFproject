<template>
    <diV class="searchhot">
        <div class="hot-top">
            <img class="history-logo" src="@/assets/搜索_slices/icon_rm@2x.png">
            <h3>热门搜索123</h3>
        </div>
        <ul class="hot-box">
            <li class="hot-main" v-for="(item,index) in searchhot">
                <div :class="item.hotactive">{{item.num}}</div>{{item.hotfooter}}
            </li>
        </ul>
    </diV>
</template>

<script>
import Vuex from "vuex";
export default {
    computed:{
        ...Vuex.mapState({
            searchhot:state=>state.home.searchhot
        })
    }
}
</script>

<style>
.searchhot{
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top:.25rem;
}
.hot-top{
    width: 6.89rem;
    height: .57rem;
    display: flex;
    align-self: center;
    border-bottom: .02rem solid #ccc;
    margin-bottom: .4rem;
    
}
.hot-top h3{
height: .34rem;
font-size:.34rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(51,51,51,1);
margin:-.03rem 0 0 .25rem;
}
.hot-box{
    width: 5.99rem;
    height: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: .42rem;
}
.hot-logo{
    width:.3rem;
    height:.3rem;
    background:rgba(231,124,65,1);
    border-radius:.1rem;
    font-size:.12rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: .3rem;
    margin:.04rem .05rem 0 0;
}
.hot-logob{
    width:.3rem;
    height:.3rem;
    background:rgba(153,153,153,1);
    border-radius:.1rem;
    font-size:.12rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    line-height: .3rem;
    margin:.04rem .05rem 0 0;
}
.hot-main{
    display: flex;
    width:2.9rem;
    height:.4rem;
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin:0 .09rem .4rem 0;
    overflow: hidden;
    justify-content: start
}
</style>