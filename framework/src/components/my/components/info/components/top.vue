<template>
	<div id="top">
		<div class="nav">
			<router-link to="my">
				<img src="../../../../../assets/my/jt@2x.png">
			</router-link>
			<span>账户资料</span>
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
#top{
	width: 100%;
	height: 100%;
	background: #C6E746;
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
	margin-left: 2.89rem;
	margin-top: .2rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
</style>
