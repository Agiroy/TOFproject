<template>
	<div class="nav_bar">
		<router-link to="../../../login">
			<button class="btnnn" @click="handleLogin_nav()">登录</button>
		</router-link>
	     <p>您可以在登录后同步账号中的商品</p>
	</div>
</template>

<script>
	export default{
		methods:{
			handleLogin_nav(){
				alert(1)
			}
		}
	}
</script>

<style>
	.nav_bar{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.nav_bar .btnnn{
		width: .98rem;
		height: .48rem;
		position: absolute;
		background: white;
		outline: none;
		border: 1px solid black;
		left: 10px;
		top: 10px;
		
	}
	.nav_bar>p{
		font-size: 0.38rem;
		position: absolute;
		left:1.5rem;
		top: 10px;
	}
</style>