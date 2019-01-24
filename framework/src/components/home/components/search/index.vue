<template>
    <div class="searchbox">
        <Searchheader-com/>
        <Searchhistory-com/>
        <Searchhot-com/>
    </div>
</template>

<script>
import Searchheader from "./components/searchheader";
import Searchhistory from "./components/searchhistory";
import Searchhot from "./components/searchhot"
export default {
    components:{
            "Searchheader-com":Searchheader,
            "Searchhistory-com":Searchhistory,
            "Searchhot-com":Searchhot
		}
}
</script>

<style>
.searchbox{
    width:100%;
    height: 100%;
}
</style>
