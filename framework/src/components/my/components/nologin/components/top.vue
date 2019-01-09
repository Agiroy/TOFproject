<template>
	<div id="top">
		<div class="t1">
			<router-link to="setting"> 
				<img src="../../../../../assets/my/sz@2x.png">
			</router-link> 
			<img src="../../../../../assets/my/xx@2x.png">
		</div>
		<img src="../../../../../assets/my/tou x.png">
		<p>
			<router-link to="login">
				<span>登录</span>
			</router-link>
			<router-link to="register">
				<span>注册</span>
			</router-link>
		</p>
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
	height: 3rem;
	background:rgba(255,217,0,1);
	padding-top: .23rem;
	padding-right: .35rem;
}
#top>.t1{
	display: flex;
	width:100%;
	height: .48rem;
	justify-content: flex-end;
}
#top>.t1 img{
	width: .48rem;
	height: .48rem;
	margin-left: .4rem;
}
#top>img{
	width: 1.21rem;
	height: 1.21rem;
	margin: .2rem auto;
}
#top>p span{
	display: inline-block;
	width:1.2rem;
	height: .5rem;
	background:rgba(255,217,0,1);
	border:1px solid rgba(115,124,136,1);
	border-radius:25px;
	text-align: center;
	font-size:.26rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	line-height: .5rem;
	color:rgba(56,52,52,1);
	margin-left: .47rem;
	margin-top: -.2rem;
}
#top>p{
	padding-left: 1.65rem;
	margin-top: .4rem;
}
</style>
