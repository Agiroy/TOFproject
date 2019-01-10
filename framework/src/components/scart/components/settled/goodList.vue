<template>
  <div class="goodlist_bar">
      <listtop-com/>
      <listmain-com/>
    </div>
</template>
 <script>
 import listTop from "./components/listTop";
 import listMain from "./components/listmain";

export default {
  data(){
    return{

    }
  },
    components: {
      "listtop-com": listTop,
      "listmain-com": listMain
    }
}
 </script>  
 <style scoped>
 .goodlist_bar{
   width:100%;
   height:100%;
 }

 </style>