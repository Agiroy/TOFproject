<template>
    <div class="title">
        <div class="checkbox">
            <label>
                <input type="checkbox" :checked="!flag" @click="handleCheck()">
                全选 
            </label>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
    computed: {
        ...Vuex.mapState({
            flag:state=>state.scart.flag
        })
    },
    methods: {
        ...Vuex.mapMutations({
            handleCheck:"scart/handleCheck"
        })
    }
}
</script>


<style scoped>
    .title{
        width: 100%;
        background: #c09393;
        height: .44rem;
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
    }
    .title>.checkbox{
        width:.36rem;
        height:.36rem;
        border:#7D7D7D solid .02rem;
        border-radius: 50%;
        margin:.84rem .25rem .71rem .26rem;
        overflow: hidden;
        background: #FFF;
        position: relative;
    }
    .title>.checkbox>label>input{
        width:.42rem;
        height:.42rem;
        background: #FFF;
        border-radius: 50%;
        border:0;
        margin:0;
        position: absolute;
        top:-.05rem;
        left:-.06rem;
    }
</style>