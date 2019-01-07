<template>
	<div id="main">
		<ul>
			<li>
				<div><img class="img" src="../../../../../assets/my/icon_tx@2x.png"></div>
				<span>活动通知</span>
				<p>囤货啦囤货啦，江南皮革厂倒闭啦！</p>
		    </li>
			<li>
				<div><img src="../../../../../assets/my/photo_mk@2x.png"></div>
				<span>摩卡咖啡</span>
				<p>店内折扣买三送一！</p>
			</li>
			<li>
				<div><img src="../../../../../assets/my/photo_jn@2x.png"></div>
				<span>江南皮革厂</span>
				<p>全场88折限时狂甩！</p>
			</li>
			<li>
				<div><img src="../../../../../assets/my/photo_chwh@2x.png"></div>
				<span>吃好玩好专卖店</span>
				<p>欢迎下次光临！</p>
			</li>
		</ul>
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
#main>ul>li{
	width: 6.4rem;
	height: 1.5rem;
	margin: 0 auto;
	align-items: center;
	padding-top: .29rem;
	border-bottom: 1px solid #ccc;
}
#main>ul>li>div{
	width: .88rem;
	height: .88rem;
	background:rgba(255,217,0,1);
	border-radius:50%;
	padding-top: .13rem;
	float: left;
}
#main>ul>li>div .img{
	width: .48rem;
	height: .61rem;
	margin: 0 auto;
}
#main>ul>li>span{
	display: inline-block;
	margin-left: .39rem;
	font-size:16px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
}
#main>ul>li>p{
	margin-top: .25rem;
	font-size:12px;
	/* margin-left: .39rem; */
	margin-left: 1.23rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(153,153,153,1);
}
#main>ul>li>div>img{
	width: .88rem;
	height: .88rem;
	border-radius: 50%;
	margin-top: -.13rem;
}
</style>
