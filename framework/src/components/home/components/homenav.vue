<template>
    <div class="home-nav">
            <ul class="nav-box">
                <li class="nav-box-first">
                    <router-link to="all">
                        <img src="@/assets/首页_slices/xinp@2x.png">
                        新品
                    </router-link>
                </li>
                <li>
                    <router-link to="food">
                        <img src="@/assets/首页_slices/shicai@2x.png">
                        食材
                    </router-link >
                </li>
                <li>
                    <router-link to="light">
                        <img src="@/assets/首页_slices/qingshi @2x.png">
                        轻食
                    </router-link>
                </li>
                <li>
                    <router-link to="drink">
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
    .nav-box{
        width: 100%;
        margin-top:.25rem;
        display: flex;
        text-align: center;
    }
    .nav-box li{
        width:.8rem;
        height:1.07rem;
        margin:0 .45rem;
    }
    .nav-box img{
        width: .8rem;
        height: .8rem;
    }
    .nav-box .nav-box-first{
        margin-left:.8rem;
    }
</style>