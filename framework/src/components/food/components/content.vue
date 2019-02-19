<template>
    <div class="content">
<ul id="show" class="yg yg_l">
	        <router-link v-for="(item,index) in showwz" :to="'/goods_detail/'+item.bossId" :key="index">
			<li  v-if="index%2==0">
				<div style="position: relative;">
		        <img :src=" 'http://132.232.146.152:85/group1/M00/00/00/'+item.pictureAddress" alt="">  </div>
			   <p>{{item.goodsName}}</p>
            	<p class="price">￥{{item.goodsPrice}}</p>
			</li>
	</router-link>
		</ul>
		<ul class="yg yg_r">
	    <router-link v-for="(item,index) in showwz" :to="'/goods_detail/'+item.bossId" :key="index">
			<li  v-if="index%2==1" >
				<div style="position: relative;">
		            <img :src=" 'http://132.232.146.152:85/group1/M00/00/00/'+item.pictureAddress" alt=""> 
		        </div>
			     <p>{{item.goodsName}}</p>
            	<p class="price">￥{{item.goodsPrice}}</p>
			</li>
			</router-link>
		</ul>
		<div style="clear: both;"></div>

    </div>
</template>
<script>
 import axios from "axios";
 import qs from "qs";
export default {
    data(){
        return {   
 
    		showwz:[],
    		wznum:''
    }	},
    	methods:{
 getwz:function(){
var  that=this;
 var data = "type=food";

   axios({
          method:"post",
          url:"http://132.232.146.152/user/index/list",
          data:data,
          headers:{
            "Content-type":"application/x-www-form-urlencoded"
          },
 
        }).then((data)=>{
            console.log(data); 
          that.showwz = data.food
		  that.wznum =data.food.length;
 
        })
        }
    	},
    	mounted(){
    		this.getwz();
    	}
}
</script>
<style lang="" scope>
.content{padding:  .3rem;		
padding-top: 0.9rem;}
 	*{ 
	
	 
			list-style-type: none;
		}
	
		.pubu{
            width: calc(100% - 16px);
            margin-left: 8px;
        }
        .yg img{
            width:100%;
            border-radius: 8px 8px 0 0;
        }
      .content ul li p{
font-size:0.26rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(11,11,11,1);
white-space: nowrap;
overflow: hidden;
width: 100%;
      text-overflow: ellipsis;
        }
              .content ul li .price{
 font-size:0.28rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(241,87,102,1);
        }
        .yg_l , .yg_r{
            width: calc(50% - 5px);
        }
        .yg li{
            background: #fff;
            border-radius: 8px;
            margin-bottom: 10px;
            box-shadow: 0 0 5px #999;
        }
        .yg_l{
            float: left;
        }
        .yg_r{
            float: right;
        }
		.u_xinx{
	        position: absolute;
	        bottom: 4px;
	    }
	    .u_xinx img{
	        margin-left: 5px;
	        background: rgba(0,0,0,.2);
	        box-shadow: 0 1px 3px rgba(0,0,0,.5);
	        width: 26px;
	        height: 26px;
	        border-radius: 50%;
	        display: inline-block;
	    }
	    .u_xinx span{
	        position: relative;
	        text-shadow: 0 1px 1px #333;
	        top: -8px;
	        color: #fff;
	        font-size: 0.3rem;
	    }
</style>
 