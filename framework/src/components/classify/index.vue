<template>
    <div class="season">
        <Banner-com/>
        <div class="recommendAll">
            <Recommend-com v-for="(item,index) in recommendList" :key='index' >  
                <div class="season_p"><p>商品推荐</p></div>   
                <span class="season_title" slot>{{item.title}}</span>
                <div class="season_foodImg">
                    <img :src="item.foodImg">
                </div>
                <div class="season_author">{{item.author}}</div>
                <h3>{{listIndex}}</h3>
            </Recommend-com> 
        </div>
    </div>
</template>

<script>
import  Banner  from './components/banner';
import Recommend from './components/recommend'
import Vuex from 'vuex';

export default {
    //获取推荐商品
    data(){
        return {
            // listIndex: this.recommendList
        }
    },
    computed: {
        ...Vuex.mapState({
            'recommendList': state=>state.classify.recommend,
            'listIndex': state=>state.classify.recommend.length
        }) 
     },
    components:{
        "Banner-com": Banner,
         "Recommend-com": Recommend
    }
}
</script>


<style  >
    
    .season{

    }
    .recommendAll{
        overflow:hidden;
        padding-bottom: 1.9rem;
        background: #F8F7F7; 
    }
    .recommend{
        margin-top: .14rem;
        position: relative;
        width: 100%;
        height: 3.34rem;
        background: #fff;
    }
    /**商品推荐 */
    .recommend>.season_p{
        position: absolute;
        width: 1.7rem;
        height: .4rem;
        line-height:.4rem;
        text-align: center;
        background: #FF0000;
    }
      .recommend>.season_p>p{
        line-height:.4rem;
        color: #FDFDFD;
        font-size: .28rem;
        font-family: 'Adobe Heiti Std R';
    }
    /* 推荐商品图 */
    .season_foodImg{
        width: 2.66rem;
        height: 2.01rem;
        position: absolute;
        right: .3rem;
        top: .72rem;

    }
    .season_foodImg>img{
        width:100%;
        height: 100%;
    }
    .season_title{
        width: 3.77rem;
        height: .76rem;
        position: absolute;
        left: .33rem;
        top: .91rem;
        font-size: .36rem;
        line-height: .42rem;
        font-family: 'PingFang-SC-Regular';

    }
    .season_author{
        width: 2.78rem;
        height: .3rem;
        position:absolute;
        top:2.02rem;
        left: .89rem;
        color: #A5A5A5;
        font-size: .29rem;
        line-height: .42rem;
        font-weight:400;
        font-family:PingFang-SC-Regular;
    }
    .list_2{
    }
</style>