<template>
    <div class="login">
    <top-com/>
    <main-com/>
    </div>
</template>
<script>
import Top from "./components/top"
import Main from "./components/main"
export default {
    components:{
        "top-com":Top,
        "main-com":Main
    }
}
</script>
<style scoped>
.login{
    width: 100%;
    height: 100%;
}
</style>