<template>
    <div class="home-nav">
            <ul class="nav-box">
                <li class="nav-box-first">
                    <router-link :to="{name:'all'}">
                        <img src="@/assets/首页_slices/xinp@2x.png">
                        新品
                    </router-link>
                </li>
                <li>

                    <router-link :to="{name:'food'}">


                        <img src="@/assets/首页_slices/shicai@2x.png">
                        食材
                    </router-link >
                </li>
                <li>

                    <router-link :to="{name:'light'}">


                        <img src="@/assets/首页_slices/qingshi @2x.png">
                        轻食
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'drink'}">
                        <img src="@/assets/首页_slices/yinp@2x.png">
                        饮品
                    </router-link>
                </li>
            </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .home-nav{
        zoom:1;
    }
    .nav-box{
        width: 100%;
        margin:.13rem 0 .1rem 0;
        display: flex;
        text-align: center;
    }
    .nav-box li{
        height:1.07rem;
        margin:0 .46rem;
        font-size:0.24rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        color:rgba(99,90,91,1);
        text-align: center;
    }
    .nav-box img{
        width: .7rem;
        height: .7rem;
    }
    .nav-box .nav-box-first{
        margin-left:.8rem;
    }
</style>