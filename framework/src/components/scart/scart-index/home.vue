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
    components:{
        "scartList-gl": scartList,       
        "footer-gl":footer
    },
    data(){
        return{
            flag:true
        }
    }
}
</script>

<style scoped>
    
</style>