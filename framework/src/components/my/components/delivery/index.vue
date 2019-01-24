<template>
	<div id="evaluation">
		<div class="top">
			<router-link to="my">
				<img src="../../../../assets/my/jt@2x.png">
			</router-link>
			<span>待发货</span>
		</div>
		<div class="list2">
			<div>
				<div class="fruit">
						<img src="../../../../assets/my/1.gif">
					<div>
						<p class="p1">红心柚子水果新鲜包邮</p>
						<p class="p2">买5斤送5斤</p>
						<p class="p3"><span>￥</span><span>25</span></p>
					</div>
				</div>
				<p class="bottom"><span>共2件</span><button @click="handleSend()">提醒发货</button></p>
			</div>
			
			<div>
				<div class="fruit">
						<img src="../../../../assets/my/2.gif">
					<div>
						<p class="p1">正宗火龙果 超值实惠</p>
						<p class="p2">买10斤送5斤</p>
						<p class="p3"><span>￥</span><span>50</span></p>
					</div>
				</div>
				<p class="bottom"><span>共2件</span><button @click="handleSend()">提醒发货</button></p>
			</div>
			
			<div>
				<div class="fruit">
						<img src="../../../../assets/my/3.gif">
					<div>
						<p class="p1">新鲜水果之王榴莲 好货不等人</p>
						<p class="p2">买10斤送纪念品</p>
						<p class="p3"><span>￥</span><span>100</span></p>
					</div>
				</div>
				<p class="bottom"><span>共2件</span><button @click="handleSend()">提醒发货</button></p>
			</div>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			handleSend(){
				Toast({
						message: '提醒成功',
						duration: 1500,
						iconClass: 'mintui mintui-success'
				});
			}
		}
		
	}
</script>

<style scoped>
#evaluation{
	width: 100%;
	height: 100%;
}
.top{
	width:100%;
	height: 1rem;
	display: flex;
	background:#FFD900;
	background:rgba(255,217,0,1);
}
.top img{
	width: .17rem;
	height: .34rem;
	margin: .3rem .17rem;
}
.top>span{
	display: inline-block;
	margin-left: 2.59rem;
	margin-top: .25rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
#evaluation>.list2{
	width: 100%;
	height: 100%;
	/* height: 12.06rem; */
	background: #EFEEEE;
	padding-top: .2rem;
}
#evaluation>.list2>div{
	width: 6.86rem;
	height: 3rem;
	background:#fff;
	margin: 0 .32rem;
	margin-bottom: .2rem;
}
#evaluation>.list2>div>.fruit{
	display: flex;
}
#evaluation>.list2>div>.fruit>img{
	width:1.8rem;
	height: 1.8rem;
	margin-right: .35rem;
}
#evaluation>.list2>div>.fruit .p1{
	font-size:.3rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(47,47,47,1);
	margin-top: .3rem;
}
#evaluation>.list2>div>.fruit .p2{
	font-size:.26rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(81,75,75,1);
	margin-top: .2rem;
}
#evaluation>.list2>div>.fruit .p3{
	font-size:.48rem;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:rgba(252,84,94,1);
	margin-top: .05rem;
}
#evaluation>.list2>div>.bottom span{
	display: inline-block;
	font-size:.3rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(81,75,75,1);
	margin-top: .3rem;
	margin-left: .12rem;
	margin-right: 4rem;
}
#evaluation>.list2>div>.bottom button{
	width: 1.5rem;
	height: .6rem;
	background:rgba(251,246,246,1);
	border:1px solid #ccc;
	border-radius:.1rem;
	margin-right: .1rem;
	font-size:.2rem;
	font-family:Adobe Heiti Std R;
	font-weight:normal;
	color:#000;
	outline: none;
}
</style>
