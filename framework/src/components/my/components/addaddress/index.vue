<template>
	<div id="addaddress">
		<div class="nav">
			<img  @click="handleback()" src="../../../../assets/my/jt@2x.png">
			<span>新增地址</span>
		</div>
		<List-com/>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import List from "./components/list"
	export default {
		data() {
			return {
				
			};
		},
		components:{
			"List-com":List
		},
		methods:{
			handleback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
#addaddress{
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
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:500;
	color:rgba(35,16,16,1);
}
</style>
