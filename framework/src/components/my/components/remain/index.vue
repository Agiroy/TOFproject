<template>
	<div id="remain">
		<div class="nav">
				<img @click="handleBack()" src="../../../../assets/my/jt@2x.png">
				<span>现有余额</span>
		</div>
		<div class="main">
			<div>  
				<p class="p1">现有余额</p>
				<p class="p2"><span>200</span></p>
				<p class="p4"></p>
				<p class="p3">消费可获得相应积分 抵扣现金</p>
			</div>
		</div>
		<div class="consume">
			<p>消费明细</p>
			<div>
				<img src="../../../../assets/my/t1@2x.png">
				<p>新鲜水果红心红肉菠萝蜜，8斤装 限时特惠<span>￥50</span></p>
				<span>-50</span>
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
#remain{
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
#remain>.main{
	width:6.61rem;
	height:2.6rem;
	background:linear-gradient(-90deg,rgba(255,220,89,1),rgba(255,184,99,1));
	border-radius:.08rem;
	margin: .3rem auto;
}
#remain>.main>div{
	padding-left: .31rem;
	padding-top: .2rem;
}
#remain>.main>div .p1{
	font-size:.3rem;
	font-family:PingFang-SC-Bold;
	font-weight:bold;
	color:rgba(251,250,250,1);
}
#remain>.main>div .p2{
	font-size:.7rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(251,250,250,1)
}
#remain>.main>div .p3{
	font-size:.3rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(251,250,250,1);
	margin-top: .33rem;
}
#remain>.main>div .p4{
	width:6.08rem;
	height:.02rem;
	background:rgba(255,255,249,1);
	margin: 0 auto;
}
#remain>.consume>p{
	width: 100%;
	height: .3rem;
	font-size:.32rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(64,64,64,1);
	padding-left: .27rem;
}
#remain>.consume>div{
	width:6.89rem;
	height:1.6rem;
	background:rgba(255,228,201,1);
	border-radius:8px;
	margin:.3rem auto;
	padding: .24rem .23rem;
	display: flex;
	margin-bottom: .38rem;
}
#remain>.consume>div>img{
	width: 1.12rem;
	height: 1.12rem;
}
#remain>.consume>div>p{
	width: 3.01rem;
	height: .65rem;
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(64,64,64,1);
	margin-left: .11rem;
	/* line-height: ; */
}
#remain>.consume>div>p>span{
	display: block;
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(64,64,64,1);
	margin-top: .1rem;
}
#remain>.consume>div>span{
	display: inline-block;
	font-size:.36rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(64,64,64,1);
	margin-left: 1.4rem;
	margin-top: .30rem;
}


</style>
