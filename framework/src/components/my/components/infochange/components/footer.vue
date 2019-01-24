<template>
	<div id="footer1">
		<div>手机拍照</div>
		<div>相册选择</div>
		<div>
			<router-link to="info">
				<span>取消</span>
		    </router-link>
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
#footer1{
	width:100%;
	height:4rem;
	padding-top: .4rem;
	background: #fff;
}
#footer1>div{
	width: 6.66rem;
	height: 1rem;
	line-height: 1rem;
	text-align: center;
	background:rgba(255,217,0,1);
	border-radius:10px;
	background: #FFD900;
	margin: 0 auto;
	margin-bottom: .4rem;
	font-size:.32rem;
	font-family:MicrosoftYaHei;
	font-weight:400;
	color:rgba(0,0,0,1);
}
#footer1>div:last-child{
	width: 6.66rem;
	height: 1rem;
	line-height: 1rem;
	text-align: center;
	background:rgba(255,217,0,1);
	border-radius:.1rem;
	background: #fff;
	margin: 0 auto;
	margin-bottom: .4rem;
	font-size:.32rem;
	font-family:MicrosoftYaHei;
	font-weight:400;
}
#footer1>div:last-child span{
	color: #000;
}
</style>
