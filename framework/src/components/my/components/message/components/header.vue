<template>
    <div class="mesHeader">
        <div class="mesFill"> </div>
        <div class="header_main">
            <router-link  to="../../../../my/" >   
                <div class="mesReturn"  >
                    <i class="iconfontMes" v-html="icon[0]"></i>
                </div>      
            </router-link> 
            <div class="mesTxt">消息</div>
            <div class="mesEllipsis"><i class="iconfontMes" v-html="icon[1]"></i></div>
        </div>     
    </div>
</template>

<script>
// import router from '../../../../../router'
export default {
    data(){
        return {
            icon: ["&#xe622;","&#xe637;"]
        }
    }  
}
//  
</script>

<style lang="scss">
    .mesHeader{
        height: 1.28rem;
        width: 100%;
        background: #FFD900;
           .mesFill{
                height: .4rem;
                width: 100%;
            }
            .header_main{
                overflow: hidden;
                height: .88rem;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                 .mesReturn{
                    width: .4rem;
                    height: 100%;
                    line-height: .88rem;
                    margin-left: .34rem;
                    i{
                        font-size: .4rem;
                        color: #635A5B;
                    }
                }
                .mesEllipsis{
                    height: .01rem;
                    transform:rotate(90deg);
                    -ms-transform:rotate(90deg); 	/* IE 9 */
                    -moz-transform:rotate(90deg); 	/* Firefox */
                    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
                    -o-transform:rotate(90deg); 	/* Opera */
                    margin-right: .32rem;
                    height: 100%;
                    line-height: .88rem;
                    overflow: hidden;
                     i{
                        font-size: .4rem;
                        color: #635A5B;
                    }
                }
                .mesTxt{
                    flex:1;
                    text-align: center;
                    color: #333;
                    font-size: .34rem;
                    font-family: 'PingFang-SC-Bold';
                    font-weight:bold;
                }
            }
    }
 
   
     
    
</style>
