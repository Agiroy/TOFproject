import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import classify from "./classify";
import scart from "./scart";
import my from "./my";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        home,
        classify,
        scart,
		my
    }
})

export default store;