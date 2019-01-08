<template>
	<div id="address">
			<div class="nav">
				<router-link to="info">
					<img src="../../../../assets/my/jt@2x.png">
				</router-link>
				<span>地址信息</span>
			</div>
			<div class="n2">
				<img src="../../../../assets/my/gwc@2x1.png">
				<p>暂时无地址，请新建后继续使用</p>
			</div>
			
			<p>
				<router-link to="addaddress">
					新建地址
				</router-link>
			</p>
			
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
#address{
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
	margin: .35rem .17rem;

}
.nav>span{
	display: inline-block;
	margin-left: 2.89rem;
	margin-top: .3rem;
	color: #231010;
	font-size:17px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
.n2>img{
	margin: 0 auto;
	margin-top: 1.13rem;
	width: 6.72rem;
	height: 5.23rem;
	border: 1px dashed #000;
}
.n2>p{
	font-size:17px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(61,61,61,1);
	margin-left: 1.31rem;
	margin-top: .17rem;
}
#address>p{
	width: 6.66rem;
	height: .86rem;
	line-height: .86rem;
	text-align: center;
	background:rgba(252,221,37,1);
	border-radius:40px;
	font-size:16px;
	font-family:PingFang-SC-Regular;
	font-weight:bold;
	color:rgba(61,61,61,1);
	margin: 0 auto;
	margin-top: 3rem;
}
</style>
