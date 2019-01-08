 <template>
     <div class="top">
	<img class="back" src="../../../assets/icon_fh@2x.png"  @click="handlelead()">
<span class="title">登录</span>
<router-link :to="{name:'register'}">注册</router-link>
     </div>
 </template>
 <script>
 export default{
 	methods:{
 	handlelead(){
 		this.$router.go(-1)
 	}
 	}
 }
 </script>
 <style scoped>
 .top{
	width:100%;
height:0.88rem;
	background:#FFD900; display: flex;justify-content: space-around;align-items: center}
    .top .back{width:0.17rem;
height:0.3rem;}
.title{ 
font-size:0.34rem;
 font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(41,41,41,1);
line-height:0.15rem;}
.sig{ 
font-size:0.24rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(41,41,41,1);
line-height:0.15rem;}

 </style>
 