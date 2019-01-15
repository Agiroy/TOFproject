<template>
  <div class="main">
    <div class="share">
      <p class="one">分享您的购买心得</p>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.main {
  width: 100%;
  height: 5.42rem;
  background: rgba(239, 239, 239, 1);
  padding-top: 0.5rem;
}
.main .share {
  width: 100%;
  height: 90%;
  background: #fff;
  padding: 0.2rem;
}
.main .share p {
  width: 2.25rem;
  height: 0.26rem;
  font-size: 0.28rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(155, 155, 155, 1);
}
.main .share textarea {
  width: 100%;
  height: 90%;
  margin-top: 0.2rem;
  outline: none;
  border: 0;
  color: black;
}
</style>