<template>
    <div class="pay">
        <div class="pay_success">
            <div class="box">
                <div class="pay_title">

                </div>
            </div>
            
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style>
    .pay{
        width:100%;
        height:100%;
        background:#ccc;
        position:absolute;
        z-index: 4;
    }
    
    .pay_success{
        width:7.5rem;
        height:7.09rem;
        background:rgba(253,253,253,1);
        padding-left:.3rem;

    }
    .pay_success>.box{
        width:6.89rem;
        height:100%;
        background: rgb(199, 157, 80)
    }
</style>
