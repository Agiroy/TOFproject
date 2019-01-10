import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import classify from "./classify";
import scart from "./scart";
Vue.use(Vuex);
let state = {
    settle:"结账",
    goodlist:"商品列表"
}
const store = new Vuex.Store({
    state,
    modules:{
        home,
        classify,
        scart
    }
})

export default store;