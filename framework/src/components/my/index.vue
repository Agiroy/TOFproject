<template>
	<div id="my">
		<Top-com/>
		<Myorder-com/>
		<List-com/>
	</div>
</template>

<script>
import Top from './components/top';
import Myorder from './components/myorder';
import List from './components/list';
export default {
	components:{
		"Top-com":Top,
		"Myorder-com":Myorder,
		"List-com":List
	},
}
</script>
<style lang="">
    
</style>