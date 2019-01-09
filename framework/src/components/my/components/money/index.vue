<template>
	<div id="money">
		<div class="nav">
			<img @click="handleBack()" src="../../../../assets/my/jt@2x.png">
			<span>红包</span>
		</div>
		<div class="main">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			handleBack(){
				this.$router.go(-1);
			}
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
	height: 1rem;
	display: flex;
	background:#FFD900;
	background:rgba(255,217,0,1);
}
.nav img{
	width: .17rem;
	height: .34rem;
	margin: .42rem .17rem;
}
.nav>span{
	display: inline-block;
	margin-left: 2.89rem;
	margin-top: .36rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
</style>
