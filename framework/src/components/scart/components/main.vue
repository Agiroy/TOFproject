<template>
	<div class="main_bar">
		  <router-link to="../../../home">
		  	<img class="pic" src="../../../assets/我的 副本_slices/gwc@2x.png"/>
		   <button>去逛逛</button>
		  </router-link>
			
	
	</div>
</template>

<script>
</script>

<style>
	.main_bar{
		width: 100%;
		height: 100%;
		position: relative;
		border-bottom: 1px solid black;
		border-top: 1px solid black;
		bottom: -.9rem;
	}
	.main_bar .pic{
		width: 50%;
		height: 50%;
		position: absolute;
		top:.5rem;
		left: 1.5rem;
	}
	.main_bar button{
		width: 2rem;		
		height: .8rem;
		background:deepskyblue;
		border: 1px solid black;
		font-size: .28rem;
		color: white;
		margin-top: 3.2rem;
		margin-left: 2.6rem;
		margin-bottom: 1rem;
	
	}
</style>