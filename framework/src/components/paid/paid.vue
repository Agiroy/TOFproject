<template>
        <div class="paid">
                <top-com></top-com>
                <main-com></main-com>
                <upload-com></upload-com>
        </div>
</template>
<script>
import Top from "./components/top"
import Main from "./components/main"
import Upload from "./components/upload"
export default {
        components:{
            "top-com":Top,
            "main-com":Main,
            "upload-com":Upload
        }
}
</script>
<style>
    .paid{
        width: 100%;
        height: 100%;
    }
</style>
