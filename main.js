import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import common from "./common";

Vue.prototype.axios = axios;

const vm = new Vue({
    el: '#app',
    router,
    render: h=> h(App)
});