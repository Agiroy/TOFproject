<template>
    <div class="goods">
        <scartList-gl/>
        <footer-gl></footer-gl>
        <yourloves-gl v-if="flag"/> 
    
    
     
    </div>
</template>

<script>
import scartList from "./main";
import footer from "./footer";
import yourloves from "./yourloves";

export default {
    components:{
        "scartList-gl": scartList,       
        "footer-gl":footer,
        "yourloves-gl": yourloves
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