<template>
	<div id="list1">
		<ul>
			<li>
					红包<img src="../../../../../assets/my/jt1@2x.png">
			</li>
			
			<li>
					积分<img src="../../../../../assets/my/jt1@2x.png">
			</li>
			
			<li>
					余额<img src="../../../../../assets/my/jt1@2x.png">
			</li>
			<li>
					意见反馈<img src="../../../../../assets/my/jt1@2x.png">
			</li>
			<li>在线客服<img src="../../../../../assets/my/jt1@2x.png"></li>
			<li>
				<router-link to="setting">
				  设置<img src="../../../../../assets/my/jt1@2x.png">
				</router-link>
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

<style scoped>
#list1{
	width: 6.96rem;
	margin: .2rem auto;
}
#list1>ul{
	width: 100%;
	height: 6rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(102,102,102,1);
}
#list1>ul>li{
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(102,102,102,1);
	font-size:.3rem;
	width: 100%;
	color: #666666;
	height: 1.12rem;
	line-height:.56rem;
	border-bottom: .01rem solid #ECECEC;
}
#list1>ul>li img{
	display: inline-block;
	width: .1rem;
	height: .18rem;
	margin-left: 5.6rem;
}
#list1>ul>li:nth-child(4) img{
	margin-left: 5rem;
}
#list1>ul>li:nth-child(5) img{
	margin-left:5rem;
}
</style>
