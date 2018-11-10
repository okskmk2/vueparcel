import "@babel/polyfill"; // for IE11
import axios from "axios";

import Vue from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true, dialog: true });

Vue.prototype.axios = axios;

new Vue({
    el: '#app',
    store,
    router,
    render: h=> h(App)
});