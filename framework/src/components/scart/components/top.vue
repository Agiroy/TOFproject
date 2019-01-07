<template>
	<div class="top_bar">
		<p>{{topname}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				topname:"购物车"
			}
		}
	}
</script>

<style>
	.top_bar{
		width: 100%;
		height: 100%;
		/*background: red;*/
		border-bottom: 1px solid black;
	    }
	.top_bar>p{
		color: black;
		font-size: 0.48rem;
		text-align: center;
		line-height: .88rem;
		}
</style>