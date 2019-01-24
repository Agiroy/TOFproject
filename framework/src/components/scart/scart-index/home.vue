<template>
    <div class="goods">
        <scartList-gl/>
        <footer-gl></footer-gl>   
    </div>
</template>

<script>
import scartList from "./main";
import footer from "./footer";

export default {
    created () {
        this.$store.dispatch("scart/handleGoodsList")   
    },
    components:{
        "scartList-gl": scartList,       
        "footer-gl":footer
    }
}
</script>

<style scoped>
    
</style>