<template>
<div class="goods_bootm">
<div class="goods_btn">  
   <router-link :to="{name:'scart'}" ><div class="scart"> 
        <img src="@/assets/商品详情界面 副本_slices/gwc@2x.png" alt="">  
       <p>购物车</p> </div></router-link>
     <router-link to="" ><div class="like">  <img src="@/assets/商品详情界面 副本_slices/guanzhu@2x.png" alt=""> 
       <p>关注</p></div></router-link>
  <router-link to="" ><div class="get"  @click ="handleClick()">加入购物车</div></router-link>
 
     <router-link :to="{name:'settled'}" ><div class="buy">立即购买</div></router-link>
  </div>

</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  props:[
  "val"]
  ,
   methods: {
 handleClick() {
Toast({
message: '添加成功！',
position: 'middle',
duration: 1000,
className:"tip"
})
    }
  }
    }</script>
    <style>
    .goods_bootm{   position: fixed;
    bottom: 0;width: 100%;height: 1rem;  }
.goods_btn{

    display: flex;
    justify-content: space-between;
    height:100%;
width: 100%;


 }
.scart,.like{    border-radius: .08rem;height:1rem;  text-align: center;width:1rem;font-size:0.2rem;
padding: .1rem;
display: flex;
justify-content: space-around;
font-size: .2rem;
align-items: center;
flex-direction: column;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(0,0,0,1);
 
}
.scart  img,.like img{ width:.5rem;
height:0.4rem;display: block;margin: 0 auto}
.get,.buy{
    border-radius: .08rem;
    height:1rem; width:2.7rem;text-align: center;font-size:0.3rem;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(0,0,0,1);}
.buy{background:  #FFD900;
border:0.01rem #FFD900 solid }
.like,.get,.scart{background:#fff;
border:0.01rem #999 solid ;}
.mint-toast.is-placemiddle.tip{width:3rem ;height: 1rem;border-radius: .09rem;}
.mint-toast-text{  font-size: .36rem;font-family:PingFang-SC-Regular;}
    </style>
    