<template>
  <div class="car">
    <top-com/>
    <main-com/>
    <!-- 灰色背景 -->
    <div class="mask" v-show="payFlag"></div>
    <!-- 支付方式 -->
    <transition name="payWay">
      <payWay-gl v-show="payFlag"></payWay-gl>
    </transition>
  </div>
</template>

<script>
import Top from "./../settled/components/top";
import Main from "./../settled/components/main";
import PayWay from "./../settled/components/payWay";
import paySuccess from "./../settled/components/paysuccess";
import Vuex from "vuex";

export default {
    computed: {
      ...Vuex.mapState({
        payFlag:state=>state.scart.payFlag
      })
    },
  components: {
    "top-com": Top,
    "main-com": Main,
    "payWay-gl": PayWay,
    "paySuccess-gl": paySuccess
  }
}
</script>
 

<style scoped>
.car {
  width: 100%;
  height: 100%;
}
.car > .mask {
  width: 7.5rem;
  height: 13.34rem;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 5;
}
payWay-gl {
  position: fixed;
  left: 0;
  bottom: 0;
}
.payWay-enter,
.payWay-leave-to {
  transform: translateY(100%);
}
.payWay-enter-active,
.payWay-leave-active {
  transition: all 700ms;
}
</style>