<template>
	<div id="list">
		<div>
			<p><label>联系人</label><input type="text"></p>
			<p><label>手机号</label><input type="text"></p>
			<p><label>备用电话</label><input type="text"></p>
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
#list{
	width: 100%;
	height: 100%;
	background: #efefef;
	padding-top: .3rem;
}
#list>div{
	width: 100%;
	height: 2.5rem;
	background: #fff;
}
#list>div>p{
	width: 6.89rem;
	height: .7rem;
	border-bottom: 1px solid #ccc;
	margin: 0 auto;
	font-size:14px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(58,58,58,1);
	
}
#list>div>p>label{
	height: .7rem;
	display: inline-block;
	width: 1.5rem;
	align-items: center;
	line-height:.7rem;
}
#list>div>p>input{
	border: 0;
}
</style>
