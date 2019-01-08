<template>
    <div class="scart">
        <top-com/>
        <nav-com/>
        <main-com/>
        <bottom-com/>
        </div>
</template>

<script>
import Top from './components/top';
import Nav from './components/nav';
import Main from './components/main';
import Bottom from './components/bottom';

export default {
    components:{
    "top-com":Top,
    "nav-com":Nav,
    "main-com":Main,
    "bottom-com":Bottom,
    },
}
</script>


<style lang="">
  .scart{
      width:100%;
      height:100%;
  }
</style>