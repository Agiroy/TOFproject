<template>
    <div id="footer">
        <ul>
            <li v-for="(item,index) in navs" :key="index" @click="handleToggle(index)" :class="activeIndex==index?'router-link-active':''" >
                <router-link :to="{name:item.name}" >
                    <i class="iconfont" v-html="item.icon"></i>
                    <span>{{item.title}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navs:[
                {
                    name:"home",
                    title:"首页",
                    icon:"&#xe677;"
                },
                {
                    name:"classify",
                    title:"食令",
                    icon:"&#xe7f9;"
                },{
                    name:"scart",
                    title:"购物车",
                    icon:"&#xe60c;"
                },{
                    name:"my",
                    title:"我的",
                    icon:"&#xe8a0;"
                }
            ],
			activeIndex:0
        }
    },
	methods:{
		handleToggle(index){
			this.activeIndex=index;
		}
	}
}
</script>

<style scoped>
   
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom:0;
        background: #fff;
    }
     #footer>ul{
         display: flex;
         justify-content: space-between;
     }
    #footer>ul,#footer>ul>li,#footer>ul>li>a{
        width: 100%;
        height: 100%;
    }
    #footer>ul>li>a{
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    }
     #footer>ul>li>a>i{
         font-size: .36rem;
     }
    #footer>ul>li>a>span{
        font-size: .24rem;
    }
  .router-link-active{
        color: #ffc700;
    }
</style>