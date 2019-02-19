<template>
	<div id="goods_detail">
<Main-com :val="id"></Main-com>
 <Bottom-com :val="id"></Bottom-com>
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
       id:''
        }
    },
    created() { 
    let {id} = this.$route.params; 
    console.log(this.$route) ;
    this.id = id;
    },
       	methods:{
 getwz:function(){
var  that=this;
   axios({
          method:"post",
          url:"http://132.232.146.152/user/index/list",
          data:{
			        },
          headers:{
            "Content-type":"application/x-www-form-urlencoded"
          },
 
        }).then((data)=>{
     
          console.log(data); 
      that.showwz = data.list
		  that.wznum =data.list.length;
       for(var i=0;i<data.list.length;i++)    {
          if(that.id==data.list[i].bossId){
              console.log(
                 that.showwz[i].bossId    

              );
          }
}
 
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