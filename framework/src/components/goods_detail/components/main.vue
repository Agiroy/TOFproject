<template>
<div class="goods_main">
 
   	<img class="back" src="../../../assets/ico_fh2@2x.png"  @click="handlelead()">
<div class="goods_image">   <h2>商品ID为:{{val}}</h2></div>

<div class="concrete_details" >
<div class="title">极地能量超级圣果新疆阿勒泰大果沙棘冷榨果汁饮料</div>
<p class="price">￥456</p>
<p class="advantage">
    <span>正品保证</span>  <span>全场包邮</span>  <span>七天退换货</span>
</p>
</div>
<div class="notice">
   <h2>重要提醒</h2>
       <p>新疆阿勒泰大果沙棘呈椭圆柱形状 颗粒饱满 颜色鲜艳 与圆形小果沙棘有鲜明区别</p>
</div>
<img class="dec"  src="@/assets/商品详情界面 副本_slices/wu@2x.png" alt="">
</div>
</template>
<script>
export default {
  props:[
  "val"]
  ,  	methods:{
 	handlelead(){
 	this.$router.go(-1);
 	}
 	}
    }</script>
    <style>
    body{background:rgba(248,247,247,1);}
    .goods_main{
        width: 100%;
 
    }
    .goods_image{width: 100%;
    height:5rem;
    background: gold}
    .concrete_details{
            border-radius: .08rem;
 padding: .5rem;
        margin: 0 auto;
        background: #fff;
        margin-top: .1rem;
        width: 90%;
     height:3.44rem;
     box-shadow: 0 0 .4rem rgb(153, 153, 153);
    }
    .concrete_details .title{
         word-wrap:break-word; 
text-align: center;
margin: 0 auto;
font-size:0.42rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(17,17,17,1);
 
    }
 .concrete_details .price{
font-size:0.38rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(241,87,102,1);}
.advantage{
    font-size:0.24rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(157,157,157,1);
}
.advantage span{margin:  .1rem}
.notice{
    width: 90%;
 
    margin:  0 auto
}
.notice h2{
    text-align: center;
    font-size:0.42rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(250,118,21,1);}
.notice p{font-size:0.28rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(42,42,42,1);}
.back{position:absolute; top: 0.3rem;
left :0.2rem;
z-index: 3;
width:0.27rem;
height:0.47rem;}
.dec{width: 100%;}
    </style>
    