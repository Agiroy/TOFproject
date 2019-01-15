<template>
  <div class="upload">
    <div class="anonymous">
      <p>匿名评价商品</p>
      <mt-switch></mt-switch>
    </div>
    <router-link :to="{name:'my'}">
      <button @click="handleClick()">提交评价</button>
    </router-link>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
        methods:{
            handleClick(){
            Toast({
                    message: '评价成功',
                    duration: 1500,
                    iconClass: 'mintui mintui-success'
            });
        }
        }
};
</script>
<style>
.upload {
  width: 100%;
  height: 6.92rem;
  background: rgba(239, 239, 239, 1);
}
.upload .anonymous {
  width: 100%;
  height: 0.8rem;
  background: #fff;
}
.upload .anonymous p {
  width: 1.6rem;
  height: 0.25rem;
  font-size: 0.2rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(58, 58, 58, 1);
  display: block;
  float: left;
  margin: 0.3rem;
}
.upload .anonymous .mint-switch {
  float: right;
  margin-right: 0.5rem;
  margin-top: 0.3rem;
}
.upload button {
  width: 6.66rem;
  height: 0.86rem;
  font-size: 0.3rem;
  font-family: PingFang-SC-Regular;
  font-weight: bold;
  color: rgba(65, 29, 4, 1);
  background: rgba(252, 221, 37, 1);
  border-radius: 0.2rem;
  outline: none;
  border: 0;
  margin: 1rem .4rem;
}
</style>