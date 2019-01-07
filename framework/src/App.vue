<template>
  <div id="app">
    <router-view/>
    <Footer-com v-show="$route.meta.flag"/>
  </div>
</template>

<script>
import Footer from "./components/footer";
export default {
  name: 'App',
  components: {
    "Footer-com":Footer
  }
}
</script>

<style>
#app {
  width: 100%;
 

}
</style>
