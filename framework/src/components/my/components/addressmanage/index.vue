<template>
	<div id="addressmanage">
		<div class="nav">
			<img  @click="handleBack()" src="../../../../assets/my/jt@2x.png">
			<span>地址</span>
		</div>
		<div class="main" v-for="(item,index) in addList.datalist">
			<p class="p1"><input type="checkbox"><span class="s1">{{addList.name}}</span> <span class="s2">{{addList.tel}}</span><router-link :to="{name:'modifyaddress',query:{name:addList.name,tel:addList.tel,address:item.city}}"><img src="../../../../assets/my/jt1@2x.png"></router-link></p>
			<p class="p2">{{item.city}}</p>
		</div>
		<p><input type="checkbox" @click="handleDel()"> 删除</p>
		<div class="add">
			<router-link to="addaddress">
				<p>添加新址</p>
			</router-link>
		</div>
	</div>
</template>

<script>
import Vuex from "vuex";
import { MessageBox } from "mint-ui";
	export default {
		computed:{
			...Vuex.mapState({
				addList:state=>state.my.addList
			})
		},
		methods:{
			handleBack(){
				this.$router.go(-1);
			},
			handleDel(){
				 MessageBox.confirm('', { 
					 message: '确认要删除该地址吗？', 
					 title: '提示', 
					 confirmButtonText: '确认',
					 cancelButtonText: '取消' 
					 }).then(action => { 
					 if (action == 'confirm') {     //确认的回调
					 		alert("确认的回调"); 
					   }
					 })

			}
		},
	}
</script>

<style>
#addressmanage{
	width: 100%;
	height: 100%;
}
#addressmanage>p{
	margin-top: .5rem;
	padding-left: .3rem;
	font-size: .25rem;
	color:rgba(35,16,16,1);
}
#addressmanage>p>input{
	width: .2rem;
	height: .2rem;
}
.nav{
	width:100%;
	height: .88rem;
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
	margin-top: .2rem;
	color: #231010;
	font-size:.34rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(35,16,16,1);
}
#addressmanage>.main{
	width:6.9rem;
	height:1.6rem;
	margin: 0 auto;
	padding-top: .5rem;
	border-bottom:.02rem solid #cdcdcd;
	padding-bottom: .15rem;
}
#addressmanage>.main>.p1>input{
	width: .2rem;
	height: .2rem;
	margin-right: .2rem;
}
#addressmanage>.main>.p1>.s1{
	font-size:.32rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	display: inline-block;
	margin-right: .3rem;
}
#addressmanage>.main>.p1>.s2{
	font-size:.34rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(51,51,51,1);
	margin-right: .4rem;
}
#addressmanage>.main>.p1>.s3{
	display: inline-block;
	text-align: center;
	width: .5rem;
	height: .3rem;
	line-height: .3rem;
	background:rgba(255,217,0,1);
	border-radius:.1rem;
	font-size:.16rem;
	font-family:PingFang-SC-Regular;
	font-weight:bold;
	color:rgba(0,0,0,1);
}
#addressmanage>.main>.p2{
	font-size:.24rem;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	color:rgba(102,102,102,1);
	margin-top: -0.1rem;
}
#addressmanage>.main>.p1 img{
	display: inline-block;
	width: .1rem;
	height: .17rem;
	margin-left: 6rem;
}
#addressmanage>.add{
	width:6.66rem;
	height:.86rem;
	background:rgba(255,217,0,1);
	border-radius:.4rem;
	position: fixed;
	bottom: .8rem;
	left: .42rem;
}
#addressmanage>.add p{
	width: 100%;
	height: 100%;
	text-align: center;
	font-size:.32rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(255,255,255,1);
	padding-top: .2rem;
}
.mint-msgbox{
	width: 5rem;
	height: 2.5rem;
	font-size: .3rem;
}
.mint-msgbox-title{
	height: .8rem;
	font-size: .3rem;
}
.mint-msgbox-btn{
	height: 1rem;
	font-size: .25rem;
}
</style>
