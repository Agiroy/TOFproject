<template>
    <div class="car">
        <top-com/>
        <main-com/>
      
        </div>
</template>

<script>
import Top from './components/top';
import Main from './components/main';


export default {
    components:{
    "top-com":Top,
    "main-com":Main
   },
}
</script>
 

<style lang="">
  .car{
      width:100%;
      height:100%;
  }
</style>