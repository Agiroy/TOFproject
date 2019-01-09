<template>
	<div id="integral">
		<div class="nav">
			<router-link to="my">
				<img src="../../../../assets/my/jt@2x.png">
			</router-link>
			<span>积分明细</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
#money{
	width: 100%;
	height: 100%;
}
.nav{
	width:100%;
	height: .88rem;
	display: flex;
	background:#FFD900;
	background:rgba(255,217,0,1);
}
.nav img{
	width: .17rem;
	height: .34rem;
	margin: .3rem .17rem;
}
.nav>span{
	display: inline-block;
	margin-left: 2rem;
	margin-top: .2rem;
	font-size:16px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(61,61,61,1);
}
</style>
