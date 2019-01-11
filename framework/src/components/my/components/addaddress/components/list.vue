<template>
	<div id="list">
		<div>
			<p><label>联系人</label><input type="text" placeholder="请输入联系人姓名"></p>
			<p><label>手机号</label><input type="text" placeholder="请输入手机号"></p>
			<p><label>备用电话</label><input type="text" placeholder="请输入备用联系电话"></p>
		</div>
		<div>
			<p><label>收货地址</label><input type="text" placeholder="小区/学校/写字楼"></p>
			<p><label>&nbsp;&nbsp;&nbsp;</label><input type="text" placeholder="详细地址(如楼号/楼层/房号)"></p>
			<p><label>标签</label> 
			<span v-for="(item,index) in labels" @click="handleToggle(index)" :class="activeIndex==index?'active':''">{{item}}</span>
			</p>
		</div>
		<div>
			<span>设为默认地址</span>
			<p><span></span></p>
		</div>
		<div class="save">保存</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex:0,
				labels:["家庭","父母","公司","自定义"]
			};
		},
		methods:{
			handleToggle(val){
			    this.activeIndex=val;
			}
		},
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
	margin-top: .3rem;
}
#list>div>p{
	width: 6.89rem;
	height: .85rem;
	border-bottom:.02rem solid #ccc;
	margin: 0 auto;
	font-size:.28rem;
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
	outline:none;
	font-size: .24rem;
}
#list>div:nth-child(1){
	margin-top: .1rem;
}
#list>div>p>span{
	padding: .1rem .25rem;
	border-radius: .28rem;
	font-size:.28rem;
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(58,58,58,1);
	display: inline-block;
	margin-right: .19rem;
}
#list>div>p:nth-child(3){
	border: none;
}
#list>div>p .active{
	background: #FCDD25;
}
#list>div:nth-child(3){
	height: .86rem;
	/* ba; */
	font-family:PingFang-SC-Regular;
	font-weight:400;
	color:rgba(58,58,58,1);
	align-items: center;
	padding-left: .29rem;
	padding-top: .3rem;
}
#list>div:nth-child(3) p{
	font-size:.26rem;
	width: 1rem;
	height: .56rem;
	background: #E7E7E7;
	border-radius: .26rem;
	margin-top: -.49rem;
	margin-left: 5.9rem;
}

#list>div:nth-child(3) p>span{
	width: .56rem;
	height: .56rem;
	background:#fff;
	border-radius: 50%;
}
#list>.save{
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
</style>
