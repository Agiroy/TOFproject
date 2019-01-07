<template>
	<div id="news">
		<Top-com/>
		<List-com/>
	</div>
</template>

<script>
	import Top from "./components/top";
	import List from "./components/list";
	
	export default {
		data() {
			return {
				
			};
		},
		components:{
			"Top-com":Top,
			"List-com":List
		}
	}
</script>

<style>

</style>
