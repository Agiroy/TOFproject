<template>
  <div class="top_bar">
     <img class="top_pic1" src="../../../../../assets/icon_fh@2x.png" @click="handle()">
     <p class="top_p">{{this.$store.state.settle}}</p> 
  <router-link to="setting">
      <img class="top_pic2" src="../../../../../assets/结账_slices-2/icon_gd@2x.png">
    </router-link> 
     </div>
  
</template>
 <script>
 import Vuex from "vuex";
 export default{
    methods:{
      handle(){
        this.$router.go(-1)
      }
    }
 }
 </script> 
 <style scoped>
  .top_bar{
width:100%;
height:.88rem;
background:#FFD900;
display: flex;
flex-direction: row;
justify-content:space-between;
align-items: center;
position: fixed;
top:0;
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
    width:.06rem;
    height:.28rem; 
    margin-right:.3rem; 
  }
</style>

