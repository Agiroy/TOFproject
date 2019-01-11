<template>
	<div class="top">
		<div class="t1">
			<router-link to="setting"> 
				<img src="../../../assets/my/sz@2x.png">
			</router-link> 
			<router-link to="news"> 
				<img src="../../../assets/my/xx@2x.png">
			</router-link> 
		</div>
		<div class="t2">
			<router-link to="info">
				<img src="../../../assets/my/tx@3x.png">
			</router-link>
			<p class="p1">170****1234</p>
			<p class="p2">白金会员</p>
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
.top{
	width:100%;
	height:2.4rem;
	background:#FFD900;
	background:rgba(255,217,0,1);
}
.top>.t1{
	width: 100%;
	height:.48rem;
	display: flex;
	justify-content: flex-end;
}
.top>.t1 img{
	margin-top: .4rem;
	width: .48rem;
	height: .48rem;
}
.top>.t1 img:nth-child(1){
	margin-right: .4rem;
}
.top>.t1 img:last-child{
	margin-right: .36rem;
}

.top>.t2{
	width: 100%;
	height:1.22rem;
	display: flex;
}
.top>.t2 img{
	width: 1.22rem;
	height: 1.22rem;
	margin-top: .66rem;
	margin-left: .14rem;
}
.top>.t2>.p1{
	width:2.04rem;
	height:.26rem;
	font-size:.34rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(0,0,0,1);
 	margin-top: .9rem;
	margin-left: .1rem;
}
.top>.t2>.p2{
    font-family:PingFang-SC-Medium;
	font-weight:500;
	width:1.56rem;
	height:.38rem;
	font-size: .3rem;
	line-height:.38rem;
	text-align: center;
	color: #FFFBE6;
	background:rgba(51,51,51,1);
	border-radius:.2rem;
	margin-top: 1.36rem;
	margin-left: -1.89rem;
}
</style>
