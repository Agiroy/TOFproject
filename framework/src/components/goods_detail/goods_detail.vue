<template>
	<div id="goods_detail">
<Main-com :val="id" :mes="detail"></Main-com>
 <Bottom-com :val="id" :mes="detail"></Bottom-com>
	</div>



</template>

<script>
import axios from "axios";
import Main from './components/main';
import Bottom from './components/bottom';
export default {
	components:{
        "Main-com":Main,
       "Bottom-com":Bottom,

    },
     data(){
        return {
        showwz:[],
    	wznum:'',
       id:'',
       detail:{}
        }
    },
    created() { 
    let {id} = this.$route.params; 
//  console.log(this.$route) ;
    this.id = id;
    },
       	methods:{
 getwz:function(){
 var that =this;
var  id=this.id;
   axios({
          method:"get",
          url:" http://132.232.146.152/user/detail?goodsId="+id,
          data:{
			        },
          headers:{
            "Content-type":"application/x-www-form-urlencoded"
          },
 
        }).then((data)=>{
     
          console.log(data.detail); 
    that.detail = data.detail
   

        })
         
        }
    	},
    	mounted(){
    		this.getwz();
    	}
}
</script>
<style lang="" scoped>
   
</style>