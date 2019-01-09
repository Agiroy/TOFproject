<template>
	<div id="ordernavs">
		<ul>
			<li v-for="(item,index) in navs" 
			 @click="handleClick(index)"
			:class="activeIndex==index?'active':''">
			{{item}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navs:["全部订单","待发货","待收货","待评价"],
				activeIndex:0
			};
		},
		methods:{
			handleClick(index){
				this.activeIndex=index;
			}
		}
	}
</script>

<style scoped>
#ordernavs{
	width: 100%;
	height: .8rem;
	margin-top: .1rem;
}
#ordernavs>ul{
	width:100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	font-size:.24rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(102,102,102,1);
}
#ordernavs>ul>li{
	line-height:.8rem;
}
#ordernavs>ul>.active{
	font-size:.24rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(255,217,0,1);
	border-bottom:.04rem solid rgba(255,217,0,1);
}
</style>
