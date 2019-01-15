<template>
	<div id="realname">
		<div id="top">
			<router-link to="info">
				<img src="../../../../assets/my/jt@2x.png">
			</router-link>
			<span>实名认证</span>
		</div>
		<div id="list">
			<p><label>真实姓名</label><input type="text"></p>
			<p><label>性别</label><input type="text"></p>
			<p><label>身份证号</label><input type="text"></p>

			<p>所属省市:{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
			<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
		</div>
		<p @click="handleProve()">认证</p>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui';
	import Vue from "vue";
	import {Picker} from "mint-ui";
	import myaddress from "./data.json";

	export default {
		data() {
			return {
				myAddressSlots: [{
						flex: 1, //对应 slot CSS 的 flex 值
						defaultIndex: 1, //对应 slot 初始选中值，需传入其在 values 数组中的序号，默认为 0
						values: Object.keys(myaddress), //省份数组
						className: "slot1", //对应 slot 的类名
						textAlign: "center" //对应 slot 的对齐方式
					},
					{
						divider: true, //对应 slot 是否为分隔符
						content: "-", //分隔符 slot 的显示文本
						className: "slot2"
					},
					{
						flex: 1,
						values: [],
						className: "slot3",
						textAlign: "center"
					},
					{
						divider: true,
						content: "-",
						className: "slot4"
					},
					{
						flex: 1,
						values: [],
						className: "slot5",
						textAlign: "center"
					}
				],
				myAddressProvince: "省",
				myAddressCity: "市",
				myAddresscounty: "区/县"
			}
		},
		methods: {
			handleProve() {
				Toast({
					message: '认证成功',
					duration: 1000,
				});
				setTimeout(() => {
					this.$router.push({
						path: '/info'
					});
				}, 1000)
			},
			onMyAddressChange(picker, values) {
				if (myaddress[values[0]]) {
					//这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
					picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
					picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
					//获取省
					this.myAddressProvince = values[0];
					//获取市
					this.myAddressCity = values[1];
					//获取县
					this.myAddresscounty = values[2];

					/*
					    setSlotValues(index, values)：设定给定 slot 的备选值数组
        
					*/
				}
			}
		},
		mounted() {
			this.$nextTick(() => {
				//vue里面全部加载好了再执行的函数 （类似于setTimeout）
				this.myAddressSlots[0].defaultIndex = 0;
				// 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
				//因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
			});
		}
}
</script>

<style>
	#top {
		width: 100%;
		height: 1rem;
		display: flex;
		background: #FFD900;
		background: rgba(255, 217, 0, 1);
	}

	#top img {
		width: .17rem;
		height: .34rem;
		margin: .35rem .17rem;

	}

	#top>span {
		display: inline-block;
		margin-left: 2.89rem;
		margin-top: .3rem;
		color: #231010;
		font-size: .34rem;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(35, 16, 16, 1);
	}

	#list {
		height: 4.5rem;
		margin-top: .3rem;
		padding: .4rem;
	}

	#list>p {
		height: .7rem;
		font-size: .35rem;
		color: #444;
		line-height: .5rem;
		border-bottom: .02rem dashed #CDCDCD;
		margin-top: .3rem;
	}

	#list>p>label {
		display: inline-block;
		width: 1.5rem;
		text-align: right;
		margin-right: .3rem;
	}

	#list>p>input {
		width: 3.5rem;
		height: .5rem;
		border: none;
		outline: none;
		font-size: .3rem;
	}

	#realname>p {
		width: 6.3rem;
		height: .7rem;
		background: rgba(255, 217, 0, 1);
		text-align: center;
		line-height: .7rem;
		margin: 3rem auto;
		border-radius: .2rem;
		font-size: .35rem;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(35, 16, 16, 1);
	}

	.mint-toast-text {
		width: 2rem;
		height: .8rem;
		font-size: .3rem;
	}
	.picker-item{
		font-size: .3rem;
	}
</style>
