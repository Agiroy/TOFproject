<template>
  <div class="car">
    <cartop-com/>
  </div>
</template>

<script>
import CarTop from "./components/car_top";

export default {
  components: {
    "cartop-com": CarTop
  }
};
</script>


<style scoped>
 
.car {
  width: 100%;
  height: 100%;
}
 
  .scart{
      width:100%;
      height:100%;
  }
 
</style>