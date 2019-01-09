<template>
  <div class="top_bar">
     <router-link to="/my">
      <img class="top_pic1" src="../../../assets/icon_fh@2x.png">
    </router-link>
    <p class="top_p">结账</p> 
  <router-link to="../../classify/">
      <img class="top_pic2" src="../../../assets/结账_slices-2/icon_gd@2x.png">
    </router-link> 
     </div>
  
</template>
 <script>
 export default{
     
 }
 </script> 
 <style scoped>
  .top_bar{
width:7.5rem;
height:.88rem;
background:#FFD900;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;

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
    width:.17rem;
    height:.3rem; 
    margin-right:.3rem; 
  }
</style>

