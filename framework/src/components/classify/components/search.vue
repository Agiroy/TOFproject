<template>
<div class="classifySearch">
    <div class="classifyTop" >
            <!-- logo -->
            <div class="classify_logo">
                <img src="../../../../static/images/classify/log@3x.png" >
            </div>
            <!-- title -->
            <div class="classify_title">
                <img src="../../../../static/images/classify/biaoti@3x.png">
            </div>
             <!-- line -->
            <div class="classify_line"></div>
        </div>   
 
    </div>
</template>
<script>

</script>
<style lang="">
    .classifySearch{
        width: 100%;
        height: 1.33rem;
        background: rgba(255,255,255,1) ;
        position:fixed;
        top: 0;
        z-index:5;

    }
      .classifyTop {
        width: 100%;
        height: 1.33rem;
        position: fixed;
        top: 0;
        left:0;
        z-index: 10;
    }
  
  
    .classify_logo{
        
    }
    .classify_logo{
       width: .69rem;
        height: .38rem;
        position: absolute;
        top: .65rem;
        left: .32rem;
    }  
    .classify_logo>img, .classify_title>img{
       width: 100%;
        height: 100%;

    } 
    .classify_title{
        position: absolute;
        left: 1.2rem;
        top: .71rem;
        width: 1.94rem;
        height: .27rem;
    }
    /*标题下白线 */
    .classify_line{
        position:absolute;
        top: 1.31rem;
        left: 0;
        height: 0.02rem;
        width: 100%;
        background: #fff;
    }
    .classify_line_{
        
    }
</style>