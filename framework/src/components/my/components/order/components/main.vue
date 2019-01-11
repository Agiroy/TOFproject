<template>
	<div id="main">
		<div v-for="(item,index) in recieveData">
			<!-- <div class="goodsShop"><img src="../../../../../assets/my/log_1@2x.png"><span>嘻嘻哈哈旗舰店 </span><img class="pic" src="../../../../../assets/my/qianwang@2x.png"><span>交易成功</span></div> -->
		    <div class="goodsName" >
				<img src="../../../../../assets/my/t1@2x.png">
				<span>{{item.goodsname}}</span>
				<p>￥<span>{{item.goodsprice}}</span><br/>X <span>{{item.goodscount}}</span></p>
			</div>
			<div class="goodsCount"><span>共五件商品   合计: ￥</span><span>30</span></div>
			<button>提醒发货</button>
	    </div>
	</div>
</template>

<script>
	import Vuex from "vuex";
	export default {
		data() {
			return {
				sum:0
			};
		},
		computed:{
			...Vuex.mapState({
				recieveData:state=>state.my.recieveData
			})
		}
	}
</script>

<style scoped>
#main{
	width: 100%;
	height: 100%;
	margin-top: .15rem;
}	
#main>div{
	width: 6.9rem;
	height: 2.58rem;
	border:.01rem solid rgba(255,255,255,1);
	border-radius:.1rem;
	margin: 0 auto;
	padding-top: .19rem;
	margin-bottom: .25rem;
}
#main>div>.goodsShop{
	display: flex;
}
#main>div>.goodsShop>img{
	width: .34rem;
	height: .34rem;
	margin-left: .45rem;
	margin-right: .15rem;
}
#main>div>.goodsShop>.pic{
	width: .1rem;
	height: .18rem;
	margin-left: .20rem;
	margin-right: .15rem;
	margin-top: .08rem;
}
#main>div>.goodsShop>span{
	display: inline-block;
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:800;
	color:rgba(51,51,51,1);
}
#main>div>.goodsShop>span:last-child{
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(255,217,0,1);
	margin-left: 2.7rem;
}
#main>div>.goodsName{
	display: flex;
}
#main>div>.goodsName>img{
	width: 1.2rem;
	height: 1.2rem;
	margin-left: .1rem;
	margin-right: .2rem;
}
#main>div>.goodsName>p{
	font-size:.24rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	margin-left: 1.9rem;
}
#main>div>.goodsName>span{
	display: inline-block;
	font-size:.28rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
	margin-top: .2rem;
}
#main>div>.goodsCount{
	display: flex;
	padding-left: 3.7rem;
}
#main>div>button{
	border:.02rem solid rgba(255,217,0,1);
	border-radius:.18rem;
	font-size:.2rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(255,217,0,1);
	margin-left: 5.3rem;
	margin-top: .1rem;
	background: #fff;
	outline: none;
}
#main>div>.goodsCount>span{
	font-size:.23rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(51,51,51,1);
}

</style>
