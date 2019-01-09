<template>
  <div class="main_bar">
    <div class="main_pic1">
      <img src="../../../assets/结账_slices-2/new_page_1 拷贝 2@2x.png">
      <span>
        <router-link to="classify">吃好玩好专卖店</router-link>
      </span>
    </div>
    <div class="main_pic2">
      <img src="../../../assets/结账_slices-2/new_page_1 拷贝 2@3x.png">
      <img src="../../../assets/结账_slices-2/new_page_1 拷贝 2@3x.png">
      <span>共两件</span>
      <img class="main_pic2_pic3" src="../../../assets/首页_slices/qianwang@2x.png">
    </div>
    <div class="main_money">
      <p>
        商品总额:
        <span>￥：72.00元</span>
      </p>
    </div>
    <div class="main_fuli">
      <P>
        <i>红包</i>
        <span>0个可用</span>
        <router-link to="/money" class="main_pic2_pic33">
          <img src="../../../assets/首页_slices/qianwang@2x.png">
        </router-link>
      </P>
      <P>
        <i>积分</i>
        <span>未抵扣</span>
        <router-link to="integral" class="main_pic2_pic33">
          <img src="../../../assets/首页_slices/qianwang@2x.png">
        </router-link>
      </P>
      <P class="main_fuli_p">
        <i>商品实付：</i>
        <span>￥：72.00元</span>
        <i>运费(新客实付满80包邮)</i>
        <span>￥：9.00元</span>
      </P>
    </div>
    <div class="main_message">
      <span>买家留言:</span>
      <input type="text" placeholder="选填：填写内容已和卖家协商确认">
    </div>
    <div class="main_mothods">
      <i>支付方式：</i>
      <span>请选择</span>
      <router-link to="#" class="main_pic2_pic3">
        <img src="../../../assets/首页_slices/qianwang@2x.png">
      </router-link>
    </div>
    <div class="main_finish">
      <i>实付款：</i>
      <span>￥81</span>
      <button>确认结账</button>
    </div>
    <div class="main_last"></div>
  </div>
</template>
 <script>
export default {};
</script> 
 <style scoped>
.main_bar {
  width: 100%;
  height: 7.01rem;
  background: rgba(253, 253, 253, 1);
}
.main_bar > .main_pic1 {
  background: #fff;
  border-bottom: 0.03rem solid #ccc;
}
.main_bar > .main_pic1 > img {
  margin: 0.3rem 0 0.3rem 0.3rem;
}
.main_bar > .main_pic1 > span {
  font-weight: 900;
  float: left;
  margin-left: 1.5rem;
  margin-top: -0.8rem;
}

.main_bar > .main_pic2 > img {
  float: left;
  margin: 0.3rem 0 0.3rem 0.3rem;
}
.main_bar > .main_pic2 > span {
  color: black;
  float: left;
  margin: 0.78rem 0 0 2.5rem;
}
.main_bar > .main_pic2 > .main_pic2_pic3 {
  float: right;
  margin: 0.78rem 0.5rem 0 0;
  width: 0.2rem;
  height: 0.34rem;
}
.main_bar > .main_money {
  border-top: 0.03rem solid #ccc;
  border-bottom: 0.03rem solid #ccc;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-top: 1.9rem;
  margin-left: 0.3rem;
  font-family: PingFang-SC-Regular;
  font-weight: 700;
}
.main_bar > .main_money > p > span {
  margin-left: 4.2rem;
}
.main_fuli > p {
  border-bottom: 0.03rem solid #ccc;
}
.main_fuli > p > i {
  font-style: normal;
  display: block;
  width: 3rem;
  height: 0.25rem;
  margin: 0.3rem 0 0.3rem 0.3rem;
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 0.33rem;
}
.main_fuli > p > span {
  float: left;
  width: 1.5rem;
  height: 0.24rem;
  margin-top: -0.6rem;
  margin-left: 5.6rem;
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 0.33rem;
}
.main_fuli > p > .main_pic2_pic33 > img {
  float: left;
  margin: 0.78rem 0.5rem 0 0;
  width: 0.2rem;
  height: 0.34rem;
  margin-top: -0.6rem;
  margin-left: 6.7rem;
}
.main_fuli > .main_fuli_p > span {
  font-weight: 700;
}
.main_message {
  width: 100%;
  height: 2rem;
  padding-top: 0.2rem;
  border-bottom: 0.05rem solid #ccc;
}
.main_message > span {
  width: 4.89rem;
  height: 0.25rem;
  font-size: 0.26rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 0.33rem;
  margin-left: 0.3rem;
}
.main_message > input {
  border: 0;
  background: #ccc;
  width: 5rem;
  height: 0.52rem;
  outline: none;
  font-size: 0.25rem;
}
.main_mothods {
  width: 100%;
  height: 0.8rem;
  font-family: PingFang-SC-Regular;
  padding-top: 0.2rem;
  font-size: 0.26rem;
}
.main_mothods > i {
  width: 1.02rem;
  height: 0.25rem;

  margin: 0.3rem 0 0 0.3rem;
  font-weight: 700;
  font-style: normal;
  color: rgba(0, 0, 0, 1);
  line-height: 0.33rem;
}
.main_mothods > span {
  width: 0.76rem;
  height: 0.25rem;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-left: 3.98rem;
}
.main_mothods > .main_pic2_pic3 > img {
  width: 0.2rem;
  height: 0.34rem;
  margin-top: -0.3rem;
  margin-left: 6.7rem;
}
.main_finish {
  width: 100%;
  height: 1rem;
  font-family: PingFang-SC-Regular;
  font-size: 0.34rem;
  border: 0.05rem solid rgba(246, 246, 246, 1);
  padding-top: 0.15rem;
}
.main_finish > i {
  font-weight: 700;
  margin-left: .3rem;
  font-style: normal;
}
.main_finish > span {
  color: red;
}
.main_finish > button {
  height: 100%;
  background: yellow;
  outline: none;
  border: 0;
  margin-left: 3.3rem;
}
.main_last {
  width: 100%;
  height: 1rem;
}
</style>
