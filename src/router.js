import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import InputList from './views/InputList.vue';


Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:'/', component: Home},
        {path:'/inputList', component: InputList},
    ]
})