<template>
    <diV class="searchhistory">
        <div class="history-top">
            <img class="history-logo" src="@/assets/搜索_slices/icon_jl@2x.png">
            <h3>搜索记录</h3>
            <img @click="historyDel()" class="history-del" src="@/assets/搜索_slices/icon_sc@2x.png">
        </div>
        <ul class="history-box">
            <li v-for="(item,index) in searchhistory" class="history-main">
                <img src="@/assets/搜索_slices/icon_ht@2x.png"> {{item}}
            </li>
        </ul>
    </diV>
</template>

<script>
import Vuex from "vuex";
export default {
    computed:{
        ...Vuex.mapState({
            searchhistory:state=>state.home.searchhistory
        })
    },
    methods:{
        ...Vuex.mapMutations({
            historyDel:"home/historyDel"
        })
    }
}
</script>

<style>
.searchhistory{
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.history-top{
    width: 6.89rem;
    height: .57rem;
    display: flex;
    align-self: center;
    border-bottom: .02rem solid #ccc;
    margin-bottom: .4rem;
    
}
.history-logo{
    width: .32rem;
    height: .34rem;
}
.history-top h3{
height: .34rem;
font-size:.34rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(51,51,51,1);
margin:-.03rem 0 0 .25rem;
}
.history-del{
width: .27rem;
height: 0.32rem;
margin: .11rem 0 0 4.6rem;
}
.history-box{
    width: 5.99rem;
    height: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: .42rem;
}
.history-main{
    display: flex;
    width:1.4rem;
    height:.4rem;
    font-size:.28rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin:0 .09rem .4rem 0;
    overflow: hidden;
    
}
.history-main img{
    width:.03rem;
    height: .29rem;
    margin:.04rem .05rem 0 0;

}

</style>