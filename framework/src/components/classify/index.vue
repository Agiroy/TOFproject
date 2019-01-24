<template>
<div class="classify_wrap">
  <Search-com/>
    <div class="wrapper  wrapperClassify" ref="wrapper">
      
        <div class="season content" >     
            <Banner-com >
            </Banner-com>
            <div class="recommendAll">
             <!--  <router-link :to=""></router-link>--> 
                    <Recommend-com v-for="(item,index) in recommendList" :key='index' @click.native="handleClick()"  > 
                        <div class="recommendwrap"    > 
                            <div class="season_p"><p>商品推荐</p></div>   
                            <span class="season_title" slot>{{item.title}}</span>
                            <div class="season_foodImg">
                                <img :src="item.imgUrl">
                            </div>
                            <div class="season_author">{{item.author}}</div>
               
                        </div>
                    </Recommend-com>
                    <div class="listfooterImg" v-show="flag" > 
                        <img src="../../../static/images/classify/1.gif">                
                    </div>    
                    <div class="listfootertxt" v-show="!flag" > 
                        <p>您已经碰到我的底线了</p>          
                    </div>
                <!-- <div class="fillFooter"></div> -->
             <!--   -->
             
            </div>

        </div>
    </div>
    </div>

</template>

<script>
import  Banner  from './components/banner'
import Recommend from './components/recommend'
import Search from './components/search'
import Vuex from 'vuex';
import BScroll from 'better-scroll'
 
export default {
    //获取推荐商品
    data(){
        return {
          
        }
    },
    created() {
         this.handleHomeData()
    },
    computed: {
        ...Vuex.mapState({
            'recommendList': state=>state.classify.recommend,
            'listIndex': state=>state.classify.recommend.length,
            'pageindex': state=>state.classify.pageindex,
            'flag': state=>state.classify.flag
        }) 
     },
     watch: {
         recommendList(newVal,oldVal){
              this.scroll.finishPullUp();
         }
     },
    components:{
        "Banner-com": Banner,
         "Recommend-com": Recommend,
         "Search-com": Search
    },
    mounted() {
            window.addEventListener('scroll', this.handleScroll);
        
           this.scroll = new BScroll(this.$refs.wrapper,{
                 //只有设置成true pullingUp才能使用
                pullUpLoad:true,
                click: true,//允许点击事件
        
            });
            this.scroll.on("pullingUp",()=>{
                this.handleUpdataData();
            })
   
    },
      methods: {
          ...Vuex.mapActions({
              handleHomeData: "classify/handleHomeData",
              handleUpdataData: "classify/handleUpdataData",
              handleClick: "classify/handleClick"
          }),
            handleClick(){
                //点击推荐商品，跳转详情页
                //  this.$router.push('xq')
              
            }
      },
     
}
</script>


<style  >
    .classify_wrap{
        width:100%;
        height: 100%; 
        
    }
    .wrapperClassify{
      width:100%;
      height: 100%; 
      
    }
    .recommendAll{
        overflow:hidden;
        padding-bottom: 1.3rem;
        background: #F8F7F7; 
    }
    .recommend{
        margin-top: .14rem;
        position: relative;
        width: 100%;
        height: 3.34rem;
        background: #fff;
   
    }
    .recommendwrap{
        width: 100%;
        height: 100%;
 
    }
    /**商品推荐 */
    .recommend>.recommendwrap>.season_p{
        position: absolute;
        width: 1.7rem;
        height: .4rem;
        line-height:.4rem;
        text-align: center;
        background: #FF0000;
    }
      .recommend>.recommendwrap>.season_p>p{
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
        width: 2.88rem;
        height: .3rem;
        position:absolute;
        top:2.02rem;
        left: .89rem;
        color: #A5A5A5;
        font-size: .29rem;
        line-height: .42rem;
        font-weight:400;
        font-family:'PingFang-SC-Regular';
    }
    .fillFooter{
        height: .6rem;
        width:100%;

    }
    /**加载图片 */
    .listfooterImg,.listfootertxt{
        width : 100%;
        height:  .6rem;
        display: flex;
        justify-content: center;
    }
    .listfooterImg>img{
        width: .4rem;
        height: .4rem;
    }
    .listfootertxt>p{
        line-height: 1rem;
        color: #ccc;
    }
</style>