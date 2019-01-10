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
          url:"https://www.easy-mock.com/mock/5c36b509ba536b0f6ca629b0/commodity/commodity",
          data:{
			        },
          headers:{
            "Content-type":"application/x-www-form-urlencoded"
          },
 
        }).then((data)=>{
     
          console.log(data); 
          that.showwz = data.data.commodity;
          that.wznum =data.data.commodity.length; 
       for(var i=0;i<data.data.commodity.length;i++)    {
          if(that.id==data.data.commodity[i].c_id){
              console.log(
                 that.showwz[i].c_price     

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