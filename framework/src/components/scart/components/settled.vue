<template>
  <div class="car">
    <top-com/>
    <main-com/>
    <!-- 灰色背景 -->
    <div class="mask" v-show="flag"></div>
    <!-- 支付方式 -->
    <transition name="payWay">
      <payWay-gl v-show="flag"></payWay-gl>
    </transition>
  </div>
</template>

<script>
import Top from "./top";
import Main from "./main";
import PayWay from "./payWay";
import paySuccess from "./paysuccess";

export default {
    created () {
       this.Observer.$on("pay",()=>{
           this.flag = !this.flag;
       })
    },
  components: {
    "top-com": Top,
    "main-com": Main,
    "payWay-gl": PayWay,
    "paySuccess-gl": paySuccess
  },
  data() {
    return {
      flag: false
    }
  }
//   methods: {
//     handlePay() {
//       this.flag = !this.flag;
//     }
//   }
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