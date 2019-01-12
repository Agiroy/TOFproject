<template>
  <div class="top_bar">
    
      <img class="top_pic1" src="../../../assets/icon_fh@2x.png" @click="handleBack()"> 
  
    <p class="top_p">购物车</p>
    <span></span>
  </div>
</template>

 <script>

export default {
  components: {
   
  },methods:{
    handleBack(){
      this.$router.go(-1)
    }
  }
};

</script> 
 <style scoped>
 
.top_bar {
  width: 100%;
  height: 0.88rem;
  background: #ffd900;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  z-index: 9;
}
.top_bar > p {
  font-size: 0.34rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.top_bar .top_pic1 {
  width: 0.17rem;
  height: 0.3rem;
  margin-left: 0.3rem;
}
.top_bar .top_pic2 {
  width: 0.9rem;
  height: 0.5rem;
  margin-right: 0.3rem;
  background: #ffd900;
  border: 0;
  outline: none;
}
</style>

