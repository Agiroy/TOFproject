<template>
	<div id="myorder">
		<p>
				<span>
					<router-link to="order">
						我的订单
					</router-link>
				</span>
		    <span>
				<router-link to="order">
					查看全部
				</router-link>
			</span>
			<img src="../../../assets/my/jt0@2x.png">
		</p>
		<div class="line"></div>
		<div>
			<ul>
				<li>
					<router-link to="pay">
						<img src="../../../assets/my/icon_dfk@2x.png" alt=""><span>待支付</span>
					</router-link>
				</li>
				<li>
					<router-link to="delivery">
					 <img src="../../../assets/my/icon_dfh@2x.png" alt=""><span>待发货</span>
					</router-link>
				</li>
				<li>
					<router-link to="evaluation">
						<img src="../../../assets/my/icon_dpj@2x.png" alt=""><span>待评价</span>
					</router-link>
				</li>
				<li>
					<router-link to="service">
						<img src="../../../assets/my/icon_th@2x.png" alt=""><span>退换/售后</span>
				    </router-link>
				</li>
			</ul>
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
#myorder{
	width:7.16rem;
	height:2.2rem;
	border-radius:.2rem;
	margin: .04rem auto;
}
#myorder>p{
	width: 100%;
	height: 1rem;
}
#myorder>p span:first-child{
	display: inline-block;
	width:2.32rem;
	height:.32rem;
	font-size:.3rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
	margin-top: .26rem;
	margin-left: .2rem;
}
 #myorder>p span:nth-child(2){
	 display: inline-block;
	 margin-left: 3rem;
	 font-size:.24rem;
	 font-family:PingFang-SC-Medium;
	 font-weight:500;
	 color:rgba(102,102,102,1);
 }
#myorder>p img{
	display: inline-block;
	width: .14rem;
	height: .1rem;
	margin-left:.04rem;
}
#myorder .line{
	width:6.96rem;
	height:.02rem;
	border:.02rem solid rgba(153,153,153,1);
	opacity:0.3;
	margin-left: .14rem;
}
#myorder>div>ul{
	width: 100%;
	height: 1.2rem;
	display: flex;
	justify-content: space-between;
}
#myorder>div>ul>li{
	width: 100%;
	height: 100%;
	text-align: center;
	align-items: center;
}
#myorder>div>ul>li img{
	margin: .2rem auto;
	width: .48rem;
	height: .48rem;
}
#myorder>div>ul>li span{
	width:.74rem;
	height:.24rem;
	font-size:.26rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(102,102,102,1);	
}
</style>
