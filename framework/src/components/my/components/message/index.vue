<template>
    <div class="message">
         <Header-com/>  
         <Mes-com/>
    </div>
</template>

<script>

import Header from './components/header';
import Mes from './components/messageOne';

export default {
    // namespace: true,

    components:{
        "Header-com": Header,
        "Mes-com": Mes
    }
}
</script>

<style lang="">
    .message{
        width: 100%;
        height: 100%;
        background:#efefef;
    }
</style>
