<template>
    <div class="home">
        <Homeheader-com/>
        <Homebanner-com/>
        <Homenav-com/>
        <Homesubnav-com/>
        <Homemain-com/>
    </div>
</template>

<script>
import Vuex from "vuex";
import Homeheader from "./components/homeheader";
import Homebanner from "./components/homebanner";
import Homenav from "./components/homenav";
import Homesubnav from "./components/homesubnav";
import Homemain from "./components/homemain";
export default {
    components:{
        "Homeheader-com":Homeheader,
        "Homebanner-com":Homebanner,
        "Homenav-com":Homenav,
        "Homesubnav-com":Homesubnav,
        "Homemain-com":Homemain
    }
}
</script>

<style lang="" scoped>
    .home{
        width: 100%;
        height:100%;
    }
</style>