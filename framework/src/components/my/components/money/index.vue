<template>
	<div id="money">
		<div class="nav">
			<img @click="handleBack()" src="../../../../assets/my/jt@2x.png">
			<span>红包</span>
		</div>
		<div class="main">
			<div>
				<div>
					<p>
						<span class="s1">￥25</span><br />
						<span class="s2">满任意金额可用</span>
					</p>
					<p>
						<span class="s3">25元现金红包--新客专享</span><br />
						<span class="s4">全场通用，包邮、预售产品、卡券除外</span>
					</p>
				</div>
				<p>有效期至： 2019.02.14</p>
			</div>
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
.main{
	width: 100%;
	height: 100%;
	background: #EFEFEF;
	padding-top: .3rem;
}
.main>div{
	width:6.89rem;
	height:2.6rem;
	background:rgba(255,255,255,1);
	border-radius:.08rem;
	margin: 0 auto;
}
.main>div>div{
	display: flex;
	justify-content: space-between;
	height: 2rem;
	padding: .3rem .15rem;
}
.main>div>div .s1{
	font-size:.68rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(252,84,94,1);
	display: inline-block;
	margin-bottom: .2rem;
}
.main>div>div .s2{
	font-size:.26rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(45,45,45,1);
}
.main>div>div .s3{
	font-size:.32rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(47,47,47,1);
	display: inline-block;
	margin-bottom: .2rem;
	margin-top: .2rem;
}
.main>div>div .s4{
	font-size:.26rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(81,75,75,1);
}
.main>div>p{
	font-size:.3rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(50,50,50,1);	
	padding-left: .15rem;
}




</style>
