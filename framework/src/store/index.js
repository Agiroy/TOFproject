import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import classify from "./classify";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        home,
        classify
    }
})

export default store;