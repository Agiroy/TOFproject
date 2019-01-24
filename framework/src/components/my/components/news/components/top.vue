<template>
	<div id="top">
		<div class="nav">
			<router-link to="my">
				<img src="../../../../../assets/my/jt@2x.png">
			</router-link>
			<span>消息</span>
			<router-link to="setting">
				<img class='pic' src="../../../../../assets/my/dd@2x.png">
			</router-link>
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

<style>
#top{
	width: 100%;
	height: 100%;
}
.nav{
	width:100%;
	height: 1.18rem;
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
	margin-left: 2.89rem;
	margin-top: .42rem;
	color: #231010;
	font-size:17px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
</style>
