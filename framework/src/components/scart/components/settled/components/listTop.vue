<template>
  <div class="top_bar">
    <router-link :to="{name:'settled'}">
      <img class="top_pic1" src="../../../../../assets/icon_fh@2x.png">
    </router-link>
    <p class="top_p">{{this.$store.state.goodlist}}</p>
    <span></span>
  </div>
</template>
 <script>
export default {

};
</script> 
 <style lang="">
.top_bar {
  width: 100%;
  height: 0.88rem;
  background: #ffd900;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  position: fixed;
  top: 0;
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

