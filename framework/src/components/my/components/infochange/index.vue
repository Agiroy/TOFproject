<template>
	<div id="info">
		<Top-com/>
		<List-com/>
		<Footer-com/>
	</div>
</template>

<script>
	import Top from "./components/top"
	import List from "./components/list"
	import Footer from "./components/footer"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			"Top-com":Top,
			"List-com":List,
			"Footer-com":Footer
		}
	}
</script>

<style>
</style>
