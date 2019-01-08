<template>
    <ul class="nav">
<li v-for="(item,index) in navs" >   <router-link :to="{name:item.name}"   :class="index==nowindex?active:''"   > {{item.title}}</router-link></li>
    </ul>
</template>
<script>
export default {
    data(){
        return {
 active: " active",
  nowindex:2,
navs:[ {name:"all",title:"全部"   },{name:"food",title:"食材"   },{name:"light",title:"轻食"   },{name:"drink",title:"饮品"   }]
        }
    }
}
</script>
<style lang="">
 .nav{height:0.88rem;
 display: flex;
 justify-content: space-around;
 justify-items: center;
 border-bottom:0.01rem solid rgba(228, 228, 228, 1); 
}
.nav li {font-size:0.28rem;
font-family:PingFangSC-Regular;
font-weight:400;
color:rgba(113,113,113,1);
line-height:0.88rem;
}
.active{color:rgba(241,87,102,1);}

</style>