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
import Vuex from "vuex";
export default {
	created(){
		this.handleAddData();
		this.handleRecieveData();
	},
	components:{
		"Top-com":Top,
		"Myorder-com":Myorder,
		"List-com":List
	},
	methods:{
		...Vuex.mapActions({
			handleAddData:"my/handleAddData"
		}),
		...Vuex.mapActions({
			handleRecieveData:"my/handleRecieveData"
		})
	}
}
</script>
<style lang="">
    
</style>