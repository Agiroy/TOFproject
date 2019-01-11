<template>
	<div id="nologin">
		<Top1-com/>
		<Myorder1-com/>
		<List1-com/>
	</div>
</template>

<script>
	import Top1 from "./components/top";
	import Myorder1 from "./components/myorder";
    import List1 from "./components/list";
	export default {
		components:{
			"Top1-com":Top1,
			"Myorder1-com":Myorder1,
			"List1-com":List1
		}
	}
</script>

<style>

</style>
