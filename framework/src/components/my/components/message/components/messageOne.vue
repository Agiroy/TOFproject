<template>
    <div class="mesOne">
        <ul>
            <li v-for="">
                <div class="mesImg">
                    <div class="mesYuan">
                        <img src="">
                    </div>
                    
                </div>
                <div class="mesMain">
                    <span class="mesTitle">活动中心</span>
                    <span class="mesContent">囤货啦囤货啦囤货啦囤货啦囤货啦</span>
                </div>
                <div class="mesTime">
                    <span>上午11:35</span>
                </div>
            </li>

            <li v-for="">
                <div class="mesImg">
                   <div class="mesYuan">
                        <img src="">
                    </div>
                </div>
                <div class="mesMain">
                    <span class="mesTitle">活动中心</span>
                    <span class="mesContent">囤货啦囤货啦囤货啦囤货啦囤货啦</span>
                </div>
                <div class="mesTime">
                    <span>上午11:35</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .mesOne{
        width: 100%;
        background: #fff;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            li{
                height: 1.5rem;
                width: 92%;
                display: flex;
                background: #fff;
                overflow: hidden;
                align-items: center;
                border-bottom: .02rem solid #CCCCCC;
                .mesImg{
                    width: .88rem;
                    height: .88rem;
          
                    margin-left: .19rem;
                    .mesYuan{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        background: pink;
                    }
                }
                .mesMain{
                    margin-left: .39rem;
                    display: flex;
                    flex:1;
                    flex-direction: column;
                    height: .88rem;
                    justify-content: space-between;
                    .mesTitle{
                        font-size: .32rem;
                        font-family: "PingFang-SC-Regular";
                        color: #333;
                    }
                    .mesContent{
                        font-size: .24rem;
                        font-family: "PingFang-SC-Regular";
                        color: #999;
                    }
                }
                .mesTime{
                    margin-top: .39rem;
                    margin-right: .12rem;
                    height: 100%;
                    color: #999;
                    font-size: .24rem;
                }
            }
            li:last-child{border:none}
  
        }   
    }
</style>
