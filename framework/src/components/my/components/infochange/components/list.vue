<template>
	<div id="list">
		<ul>
			<li>头像  <img class="img1" src="../../../../../assets/my/tx@3x.png"></li>
			<li>手机号   <span>170666666666</span></li>
			<li>昵称<img src="../../../../../assets/my/jt1@2x.png"></li>
			<li>地址管理<img src="../../../../../assets/my/jt1@2x.png"></li>
			<li>实名认证<img src="../../../../../assets/my/jt1@2x.png"></li>
		</ul>
		<div id="mask">
			
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

<style scoped="scoped">
 #list{
	width: 100%;
	height: 7.8rem; 
}
#list>ul>li{
	padding: .33rem;
	height: 1rem;
	margin-top: .06rem;
	background: #fff;
	font-size:15px;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
}
#list>ul>li>span{
	float: right;
}
#list>ul>li>img{
	width:.15rem;
	height: .25rem;
	margin-left: 6.7rem;
	margin-top: -.17rem;
}
#list>ul>li .img1{
	width: .8rem;
	height: .8rem;
	margin-left: 6.2rem;
	margin-top:-.65rem ;
} 
#list>#mask{
	width: 100%;
	height: 8.7rem;
	background: #000;
	position: absolute;
	top: 0;
	left: 0;
	opacity: .5;
	z-index:10;
}
</style>
