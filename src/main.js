import "babel-polyfill"; // for IE11
import axios from "axios";

import Vue from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";

Vue.prototype.axios = axios;

new Vue({
    el: '#app',
    store,
    router,
    render: h=> h(App)
});