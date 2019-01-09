<template>
  <div class="nav_bar">
       <img class="nav_pic1" src="../../../assets/结账_slices-2/icon_dw@2x.png" alt="">
       <div class="nav_box" v-show="!flag">
          <p><i>收货人：</i><span>黄晓明</span></p>
          <p><i>电话：</i><span>15715110973</span></p>
          <p><i> 收货地址：</i>
                           <span>  北京市昌平区沙河镇</span></p><br/>
          <em>（收货不便时，可选择免费代收服务）</em>
         
       </div>
       <div class="nav_box" v-show="flag"> 
       <router-link class="nav_address" to="/addaddress" >点击添加地址</router-link>
      </div>
       <router-link to="/addaddress">
         <img class="nav_pic2" src="../../../assets/首页_slices/qianwang@2x.png" alt="">
       </router-link>
  </div>
</template>
 <script>
 export default{
     data(){
       return{
         flag:false
       }
     }
 }
 </script>  
 <style scoped>
 .nav_bar{
   width:100%;
   height:3rem;
   background:rgba(253,253,253,1);
   display: flex;
   border-top:.2rem solid #eee; 
   border-bottom:.2rem solid #eee;
 }
 .nav_bar .nav_box{
   width:5.26rem;
  height:100%;
  margin-left:.3rem; 
  margin-right:.3rem; 
 
  }
  .nav_bar>.nav_box>.nav_address{
    display: block;
    font-size: .3rem;
    margin-top: 1rem;
    color:rgb(55, 190, 235) ;
    text-align: center;
  }
  .nav_bar .nav_box>p{
    margin-top: .15rem;
  }
  .nav_bar .nav_box>p>span{
width:1.19rem;
height:0.31rem;
font-size:0.32rem;
font-family:PingFang-SC-Regular;
font-weight:600;
color:rgba(51,51,51,1);
  }
   .nav_bar .nav_box>p>i{
     font-weight:600;
     font-style: normal;
     color:#333;
   }
.nav_bar .nav_box>em{
width:3.74rem;
height:0.25rem;
font-size:0.24rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(255,217,0,1);
line-height:0.33rem;
font-style:normal;
}
 
 .nav_bar>.nav_pic1{
   width:0.29rem;
   height:0.41rem;
    margin-left:.5rem;
    margin-top: 1rem;
   
 }
 .nav_bar .nav_pic2{
   width:0.2rem;
   height:0.34rem;
   margin-top: 1rem;
 }
 </style>