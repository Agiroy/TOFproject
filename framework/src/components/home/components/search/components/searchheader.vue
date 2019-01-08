<template>
    <div class="searchtop">
        <div class="searchtop-back">
            <img @click="handleBack()" src="@/assets/商品详情界面 副本_slices/jiantou@2x.png">
        </div>
        <div class="searchtop-inp">
            <input :value="searchList" @change="searchChange($event.target.value)" type="text"placeholder="快来选购你想要的吧">
        </div>
        <div class="searchtop-sea">
            <img @click="handleHis()" src="@/assets/搜索_slices/icon_ss@2x.png">
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed:{
     ...Vuex.mapState({
          searchList:state=>state.home.searchList,
          searchhistory:state=>state.home.searchhistory
      })
   },
    methods:{
        ...Vuex.mapMutations({
            searchChange:"home/searchChange",
            handleHis:"home/handleHis"
        }),
        handleBack(){
           this.$router.back()
        } 
    },
}
</script>

<style>
.searchtop{
    width:7.5rem;
    height:1.28rem;
    background:rgba(255,217,0,1);
    display: flex;
    margin-bottom: .44rem;
}
.searchtop-back img{
    width:.17rem;
    height:.3rem;
    margin:.71rem 0 0 .34rem;
}
.searchtop-inp{
    width:5.78rem;
    height: .6rem;
    display: flex;
    justify-content: space-around;
    background:rgba(253,253,253,1);
    border-radius:.1rem;
    margin: .54rem 0 0 .2rem;
}
.searchtop-inp input{
    align-self: center;
    border:none;
    width:5.4rem;
    height: .5rem;
    font-size:.26rem;
    font-family:PingFang-SC-Regular;
    font-weight:400;
    color:rgba(153,153,153,1);
    background:rgba(253,253,253,1);
    outline:none;
}
.searchtop-sea img{
    width: .3rem;
    height:.3rem;
    margin: .69rem 0 0 .36rem
}

</style>