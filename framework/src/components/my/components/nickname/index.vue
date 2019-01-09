<template>
	<div id="nickname">
		<div id="top">
			<router-link to="info">
				<img src="../../../../assets/my/jt@2x.png">
			</router-link>
			<span>设置昵称</span>
			<router-link to="login">
				<span class="login">登录</span>
			</router-link>
		</div>
		<div>
			<input type="text" placeholder="输入昵称">
			<p>昵称长度请控制在10个字符以内</p>
		</div>
		<div>
			确定
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
	width:100%;
	height: 1rem;
	display: flex;
	background:#FFD900;
	background:rgba(255,217,0,1);
}
#top img{
	width: .17rem;
	height: .34rem;
	margin: .35rem .17rem;
}
#top>span{
	display: inline-block;
	margin-left: 2.7rem;
	margin-top: .25rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
#top .login{
	display: inline-block;
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
	margin-top: .35rem;
	margin-left: 1.9rem;
}
#nickname>div:nth-child(2){
	margin:1rem .45rem;	
}
#nickname>div:nth-child(2) input{
	width: 6.66rem;
	height: .86rem;
	border:1px solid rgba(204,204,204,1);
	border-radius:.4rem;
	padding: .28rem .46rem;
	font-size:.32rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(120,120,120,1);
	outline:none;
}
#nickname>div:nth-child(2) p{
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(120,120,120,1);
	margin-left:1.4rem;
	margin-top: .29rem;
}
#nickname>div:last-child{
	width: 6.66rem;
	height: .86rem;
	padding-left: 3rem;
	line-height: .86rem;
	background:rgba(255,217,0,1);
	border-radius:.4rem;
	margin: .6rem auto;
	font-size:16px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(0,0,0,1);
}

</style>
