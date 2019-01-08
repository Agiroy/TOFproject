<template>
	<div id="order">
			<div class="nav">
				<router-link to="my">
					<img src="../../../../assets/my/jt@2x.png">
				</router-link>
				<span>我的订单</span>
				<router-link to="setting">
					<img class='pic' src="../../../../assets/my/dd@2x.png">
				</router-link>
			</div>
		<Ordernavs-com/>
		<Main-com/>
	</div>
</template>

<script>
	import Ordernavs from "./components/ordernavs"
	import Main from "./components/main"
		
	export default {
		data() {
			return {
				
			};
		},
		components:{
			"Ordernavs-com":Ordernavs,
			"Main-com":Main
		}
	}
</script>

<style scoped>
#order{
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
	margin: .49rem .17rem;
}
.nav .pic{
	width: .08rem;
	height: .35rem;
	margin-left: 2.9rem;
	margin-top: .5rem;
}
.nav>span{
	display: inline-block;
	margin-left: 2.3rem;
	margin-top: .42rem;
	color: #231010;
	font-size:17px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
</style>
