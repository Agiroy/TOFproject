<template>
  <div class="top_bar">
     <router-link to="/settled">
      <img class="top_pic1" src="../../../assets/icon_fh@2x.png">
    </router-link>
    <p class="top_p">购物车</p> 
     <button class="top_pic2">编辑</button>
     </div>
  
</template>
 <script>
 export default{
     
 }
 </script> 
 <style lang="">
  .top_bar{
width:100%;
height:.88rem;
background:#FFD900;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
position: fixed;
  }
  .top_bar>p{
  
font-size:0.34rem;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(51,51,51,1);
  }
  .top_bar .top_pic1{
    width:.17rem;
    height:.3rem; 
    margin-left:.3rem; 
  }
  .top_bar .top_pic2{
    width:.9rem;
    height:.5rem; 
    margin-right:.3rem; 
    background:#FFD900;
    border:0;
    outline: none;
  }
</style>

