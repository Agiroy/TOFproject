<template>
    <diV class="searchhot">
        <div class="hot-top">
            <img class="history-logo" src="@/assets/搜索_slices/icon_rm@2x.png">
            <h3>热门搜索123</h3>
        </div>
        <ul class="hot-box">
            <li>
                <img src="">
            </li>
        </ul>
    </diV>
</template>

<script>
export default {
    
}
</script>

<style>
.searchhot{
    width:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.hot-top{
    width: 6.89rem;
    height: .57rem;
    display: flex;
    align-self: center;
    border-bottom: .02rem solid #ccc;
    margin-bottom: .4rem;
    
}
.hot-logo{
    width: .32rem;
    height: .34rem;
}
.hot-top h3{
height: .34rem;
font-size:.34rem;
font-family:PingFang-SC-Regular;
font-weight:400;
color:rgba(51,51,51,1);
margin:-.03rem 0 0 .25rem;
}

</style>