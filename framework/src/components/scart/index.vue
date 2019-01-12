<template>
  <div class="car">
    <cartop-com/>
    
    <div class="seller" ref="seller">
     <div class="seller-wrapper">
      <home-gl></home-gl>
        </div>      
      </div>
  </div>
</template>

<script>
import CarTop from "./components/car_top";
import Home from "./scart-index/home";
import BScroll from "better-scroll";
export default {
  components: {
    "cartop-com": CarTop,
    "home-gl":Home
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