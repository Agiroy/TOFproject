<template>
    <div class="classify_banner">
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
        <!-- data -->
        <div class="classify_black"></div>
        <div class="classify_data">12/27</div>
        <div class="classify_hint">距离 小寒 还有9天</div>
        <div class="classify_introduce">冬至，俗称“冬节”“长至节”或“亚岁”等。冬至兼具自然与人文两大内涵，既是二十四节气中一个重要的节气，也是中华民族共同的传统节</div>
    </div>
</template>

<script>
export default { 
    
}
</script>


<style lang="" >
    .classify_banner{
        width: 100%;
        height: 14.81rem;
        background: url('../../../../static/images/classify/banner@2x.png')  center center;  
        position: relative;  
        background-size: cover; 
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
        height: 0.01rem;
        width: 100%;
        background: #fff;
    }
    .classify_black{
        position: absolute;
        top: 12rem;
        width: 0.5rem;
        height: .07rem;
        background: #000;
    }
    /* data*/
    .classify_data{
        position:absolute;
        font-family: 'PingFang-SC-Regular';
        left: .24rem;
        top: 12.36rem;
        font-size: .48rem;
        color: #1E1C1C;
        width: 1.38rem;
        height: .47rem;
        line-height: .47rem;
        
    }
    /*   */
    .classify_hint{
        position:absolute;
        top: 12.94rem;
        left: .26rem;
        width: 2.03rem;
        height: .24rem;
        font-size: .24rem;
        color: #1E1C1C;
        font-family: 'PingFang-SC-Regular';
        font-weight:bold;
    }
    .classify_introduce{
        position: absolute;
        top: 13.32rem;
        left: .25rem;
        width: 3.96rem;
        height: .67rem;
        font-size: .18rem;
        font-family: 'PingFang-SC-Regular';
        color: #1E1C1C;        
        line-height: .24rem;
        font-weight:400;
    }


</style>