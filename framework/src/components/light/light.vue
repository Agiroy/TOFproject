<template>
	<div id="light">
		<Banner-com/>
     	<Nav-com  />
		
 <div class="seller" ref="seller">
    <div class="seller-wrapper">
 	<Content-com/>	 
    </div>
</div>

	</div>



</template>

<script>

import Banner from './components/banner';
import Nav from './components/nav';
import Content from './components/content';
import BScroll from "better-scroll";
export default {
	  data(){
        return {
            flag:true
        }},
	components:{
        "Banner-com":Banner,
			"Nav-com":Nav,
      "Content-com":Content,
	},
	    mounted () {
    this.$nextTick(()=>{
                  if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.seller, {
                      click: true
                    });
                  } else {
                    this.scroll.refresh();
                  };
            });
        
    }
}
</script>
<style lang="">
    .seller{width:100%;
	height: 5rem}
</style>