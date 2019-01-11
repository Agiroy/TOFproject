<template>
    <div class="goods">
        <title-gl></title-gl>
        <scartList-gl/>
        <footer-gl></footer-gl>
        <yourloves-gl v-if="flag"/>
    </div>
</template>

<script>
import scartList from "./main";
import title from "./title";
import footer from "./footer";
import yourloves from "./yourloves";
export default {
    components:{
        "title-gl":title,
        "scartList-gl": scartList,       
        "footer-gl":footer,
        "yourloves-gl": yourloves
    },
    data(){
        return{
            flag:false
        }
    }
}
</script>

<style scoped>
    
</style>