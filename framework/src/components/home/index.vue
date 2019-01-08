<template>
    <div class="home">
        <Homeheader-com/>
        <Homebanner-com/>
        <Homenav-com/>
    </div>
</template>

<script>

import Vuex from "vuex";
import Homeheader from "./components/homeheader";
import Homebanner from "./components/homebanner";
import Homenav from "./components/homenav";
export default {
    components:{
        "Homeheader-com":Homeheader,
        "Homebanner-com":Homebanner,
        "Homenav-com":Homenav
    }
}
</script>


<style lang="">
    .home{
        width: 100%;
        height:100%;
    }
</style>