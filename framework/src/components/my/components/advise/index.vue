<template>
	<div id="advise">
		<div class="nav">
			<router-link to="my">
				<img src="../../../../assets/my/jt@2x.png">
			</router-link>
			<span>意见反馈</span>
		</div>
		<div class="list">
			<textarea placeholder="亲，欢迎提出遇到的系统问题或者功能建议，我们将通过首页右上角的“消息”回复您。谢谢！">
			</textarea>
			<button class="btn" @click="handleBtn()">发送</button>
			<p>欢迎提出遇到的系统问题或者功能建议，我们将进一步听取用户的合理意见和建议，完善并优化我们的产品及功能，谢谢！</p>
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
			handleBtn(){
				Toast({
						message: '发送成功',
						duration: 1500,
						iconClass: 'mintui mintui-success'
				});
			}
		}
	}
</script>

<style scoped>
#advise{
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
	margin: .3rem .17rem;
}
.nav>span{
	display: inline-block;
	margin-left: 2.89rem;
	margin-top: .3rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:500;
	color:rgba(35,16,16,1);
}
#advise>.list{
	width: 100%;
	height: 100%;
	background: #EFEEEE;
	padding-top: 1rem;
	padding-left: .3rem;
}
#advise>.list>textarea{
	width: 6.86rem;
	height: 3rem;
	background:rgba(255,255,255,1);
	border-radius:.08rem;
	border: none;
	font-size:.26rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(162,158,158,1);
	outline: none;
}
#advise>.list >.btn{
	width: 6.66rem;
	height: .86rem;
	background:rgba(205,201,201,1);
	border-radius:.08rem;
	border:0;
	font-size:.32rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(252,245,245,1);
	text-align: center;
	line-height: .86rem;
	margin-top: 1.5rem;
}
#advise>.list>p{
	width:6.75rem;
	height:1.16rem;
	line-height: .4rem;
	font-size:.26rem;
	font-family:PingFangSC-Regular;
	font-weight:400;
	color:rgba(162,158,158,1);
	background: #EFEEEE;
	margin-top: 4.4rem;
}
</style>