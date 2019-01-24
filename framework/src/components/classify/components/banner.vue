<template>

    <div class="classify_banner">      
            <!-- data -->
            <div class="classify_black"></div>
            <div class="classify_data">{{nowYear}}/{{nowMonth}}/{{nowDay}}</div>
            <div class="classify_hint">世界再大, 大不过一盘饺子</div>
            <div class="classify_introduce">冬至，俗称“冬节”“长至节”或“亚岁”等。冬至兼具自然与人文两大内涵，既是二十四节气中一个重要的节气，也是中华民族共同的传统节</div>
    
    </div>
</template>

<script>
 

export default { 
    data(){
        return {
            // flag: true,
            nowMonth: -1,
            nowDay: -1,
            nowYear: -1
        }
    },
    mounted () {
        
        this.handleNowDate();
    },
    methods: {
   
        handleNowDate(){
            var date = new Date();
            this.nowMonth = date.getMonth()+1;   
            this.nowDay = date.getDate();
            this.nowYear = date.getFullYear();
        }

    }

 

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
        width: 3.03rem;
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
        font-size: .19rem;
        font-family: 'PingFang-SC-Regular';
        color: #1E1C1C;        
        line-height: .25rem;
        font-weight:400;
    }


</style>