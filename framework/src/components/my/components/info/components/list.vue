<template>
	<div id="list">
		<ul>
			<li>头像  
			     <img class="img1" src="../../../../../assets/my/tx@3x.png">
			</li>
			<li>手机号   <span>17023221234</span></li>
			<li>
				<router-link to="nickname">
					昵称<img src="../../../../../assets/my/jt1@2x.png">
				</router-link>
			</li>
			<li @click="handleAddress()">
				地址管理<img src="../../../../../assets/my/jt1@2x.png">
			</li>
			<li>
				<router-link to="realname">
					实名认证<img src="../../../../../assets/my/jt1@2x.png">
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			//判断该用户是否有地址
			handleAddress(){
				if(false){
					this.$router.push({path: '/addressmanage'});
				}else{
					this.$router.push({path: '/address'});
				}
			}
		}
	}
</script>

<style scoped>
#list{
	width: 100%;
	height: 12.4rem;
	background:#efefef;
}
#list>ul>li{
	padding: .33rem;
	height: 1rem;
	margin-top: .06rem;
	background: #fff;
	font-size:.3rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(41,41,41,1);
}
#list>ul>li>span{
	float: right;
}
#list>ul>li img{
	width:.15rem;
	height:.25rem;
	margin-left: 6.7rem;
	margin-top: -.17rem;
}
#list>ul>li .img1{
	width: .8rem;
	height: .8rem;
	margin-left: 6.2rem;
	margin-top:-.65rem ;
}
</style>
