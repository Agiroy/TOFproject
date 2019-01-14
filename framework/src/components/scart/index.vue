<template>
  <div class="car">
    <cartop-com/>

    <div class="seller" ref="seller">
      <div class="seller-wrapper">
        <div class="switchover">
          <component is="home-gl"></component>
          <yourloves-gl/>
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
import CarTop from "./components/car_top";
import Home from "./scart-index/home";
import ScartNull from "./scart-index/scartNull";
import Yourloves from "./scart-index/yourloves";
import BScroll from "better-scroll";
export default {
  components: {
    "cartop-com": CarTop,
    "home-gl": Home,
    "ScartNull-gl":ScartNull,
    "yourloves-gl":Yourloves
  }
};
</script>


<style scoped>
.car {
  width: 100%;
  height: 100%;
}
.switchover{
  width:100%;
  min-height:10rem;
  overflow: auto;
}
.scart {
  width: 100%;
  height: 100%;
}
</style>