<template>
	<div id="addaddress">
		<div class="nav">
			<img  @click="handleback()" src="../../../../assets/my/jt@2x.png">
			<span>修改地址</span>
		</div>
		<div id="list">
			<div>
				<p><label>联系人</label><input type="text" placeholder="请输入联系人姓名" v-model='name'></p>
				<p><label>手机号</label><input type="text" placeholder="请输入手机号"  v-model='tel'></p>
				<p><label>备用电话</label><input type="text" placeholder="请输入备用联系电话"></p>
			</div>
			<div>
				<p><label>收货地址</label><input type="text" placeholder="小区/学校/写字楼"  v-model='address'></p>
				<p><label>&nbsp;&nbsp;&nbsp;</label><input type="text" placeholder="详细地址(如楼号/楼层/房号)"></p>
				<p><label>标签</label> 
				<span v-for="(item,index) in labels" @click="handleToggle(index)" :class="activeIndex==index?'active':''">{{item}}</span>
				</p>
			</div>
			<div>
				<span>设为默认地址</span>
				<p @click="handleChecked()">
						<span class="s1" v-show="flag"></span>
						<span class="s2" v-show="!flag"></span>
				</p>
			</div>
			<div class="save" @click="handlesave()">修改成功</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				activeIndex:0,
				labels:["家庭","父母","公司","自定义"],
				flag:true,
				name:"",
				tel:"",
				address:""
			};
		},
		created(){
			let {name,tel,address}=this.$route.query;
			this.name=name;
			this.tel=tel;
			this.address=address;
		},
		methods:{
			handleback(){
				this.$router.go(-1);
			},
			handleToggle(val){
			    this.activeIndex=val;
			},
			handleChecked(){
				this.flag=!this.flag;
			},
			handlesave(){
					Toast({
					  message: '修改成功',
					  duration: 1000,
					});
					setTimeout(()=>{
						this.cb();
					},1000)
			},
			cb(){
				this.$router.go(-1);
			}
			
		}
	}
</script>

<style>
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
#addaddress>#list{
	width: 100%;
	height: 100%;
	background: #efefef;
	padding-top: .3rem;
}
#addaddress>#list>div{
	width: 100%;
	height: 2.5rem;
	background: #fff;
	margin-top: .3rem;
}
#addaddress>#list>div>p{
	width: 6.89rem;
	height: .85rem;
	border-bottom:.02rem solid #ccc;
	margin: 0 auto;
	font-size:.28rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(58,58,58,1);
}
#addaddress>#list>div>p>label{
	height: .7rem;
	display: inline-block;
	width: 1.5rem;
	align-items: center;
	line-height:.7rem;
}
#addaddress>#list>div>p>input{
	border: 0;
	outline:none;
	font-size: .24rem;
}
#addaddress>#list>div:nth-child(1){
	margin-top: .1rem;
}
#addaddress>#list>div>p>span{
	padding: .1rem .25rem;
	border-radius: .28rem;
	font-size:.28rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(58,58,58,1);
	display: inline-block;
	margin-right: .19rem;
}
#addaddress>#list>div>p:nth-child(3){
	border: none;
}
#addaddress>#list>div>p .active{
	background: #FCDD25;
}
#addaddress>#list>div:nth-child(3){
	height: .86rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(58,58,58,1);
	align-items: center;
	padding-left: .29rem;
	padding-top: .3rem;
}
#addaddress>#list>div:nth-child(3) p{
	font-size:.26rem;
	width: 1rem;
	height: .56rem;
	background: #E7E7E7;
	border-radius: .26rem;
	margin-top: -.49rem;
	margin-left: 5.9rem;
}

#addaddress>#list>div:nth-child(3) p>.s1{
	display: inline-block;
	width: .56rem;
	height: .56rem;
	background:#fff;
	border-radius: 50%;
}
#addaddress>#list>div:nth-child(3) p>.s2{
	display: inline-block;
	width: .56rem;
	height: .56rem;
	border-radius: 50%;
	background:greenyellow ;
	margin-left: .45rem;
}
#addaddress>#list>.save{
	width: 6.66rem;
	height: .86rem;
	background:rgba(252,221,37,1);
    border-radius:.4rem;
	text-align: center;
	font-size:.32rem;
	padding-top: .23rem;
	font-family:PingFang-SC-Regular;
	font-weight:bold;
	color:rgba(65,29,4,1);
	margin: 0 auto;
	margin-top: .5rem;
}

.mint-toast-text{
	width:2rem;
	height:.7rem;
	font-size: .3rem;
}
</style>
