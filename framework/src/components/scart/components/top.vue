<template>
  <div class="top_bar">
    <router-link to="../../home/">
      <img src="../../../assets/icon_fh@2x.png">
    </router-link>
     <p>结账</p>
      <router-link to="../../classify/">
      <img src="../../../assets/结账_slices-2/icon_gd@2x.png">
    </router-link>
     
  </div>
</template>
 <script>
 export default{
     
 }
 </script> 
 <style lang="">
.top_bar{
   width: 750px;
   height:88px;
   background:#FFD900;
 }
 .top_bar>router-link{
   font-size:.48rem;
   color: red;
 }
</style>

