<template>
    <div id="scart">
        <Top-com/>
        <Nav-com/>
        <Main-com/>
        <Bottom-com/>
        
    </div>
</template>

<script>
import Top from './components/top';
import Nav from './components/nav';
import Bottom from './components/bottom';
import Main from './components/main';
export default {
    components:{
    	"Top-com":Top,   
    	"Nav-com":Nav,   
    	"Bottom-com":Bottom,   
    	"Main-com":Main  
    },
}
</script>


<style lang="">
   
</style>