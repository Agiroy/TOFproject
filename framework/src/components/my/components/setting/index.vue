<template>
	<div id="setting">
		<div class="nav">
			<img  @click="handleback()" src="../../../../assets/my/jt@2x.png">
			<span>设置</span>
		</div>
		<div class="main">
			<p>系统设置</p>
			<p>清空设置  <span>8.00 M</span></p>
		</div>
		<div class="back">
			<router-link to="login">退出当前账号</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pathname:'my'
			}
		},
	methods:{
		handleback(){
			this.$router.go(-1);
		}
	}
}
</script>

<style scoped>
#setting{
	width: 100%;
	height: 100%;
	background:#ECECEC;
}
.nav{
	width:100%;
	height: .88rem;
	display: flex;
	background:#FFD900;
	background:rgba(255,217,0,1);
}
.nav img{
	width: .15rem;
	height: .30rem;
	margin: .4rem .17rem;
}
.nav>span{
	display: inline-block;
	margin-left: 2.89rem;
	margin-top: .25rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
.main>p{
	margin-top:.03rem;
	/* line-height:1rem ; */
}
.main>p:nth-child(1){
	padding-left:.17rem;
	height: 1rem;
	background: #fff;
	font-size: .24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(120,120,120,1);
	line-height:1rem;
	border-bottom: ;
}
.main>p:nth-child(2){
	padding-left:.17rem;
	height: 1rem;
	background: #fff;
	font-size:.3rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
	line-height:.5rem;
}
.main>p:nth-child(2) span{
	display: inline-block;
	margin-left: 3.8rem;
}
.back{
	width:6.66rem;
	height:.86rem;
	background:rgba(255,217,0,1);
	border-radius:.4rem;
	margin:1rem auto;
	font-size:.32rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
	text-align: center;
	line-height:.86rem; ;
}
</style>
