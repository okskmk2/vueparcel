import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        modalOpen: false,
        inputPaths:[],
    },
    getters: {
    },
    mutations: {
        OPEN_MODAL: (state) => {
            state.modalOpen = true
        },
        CLOSE_MODAL: (state) => {
            state.modalOpen = false
        },
        ADD_INPUT_PATH: (state, path) =>{
            state.inputPaths.push(path);
        }
    },
    actions: {
        openModal: (context) => {       
            context.commit("OPEN_MODAL");
        },
        closeModal: (context) => {       
            context.commit("CLOSE_MODAL")
        }
    }
})