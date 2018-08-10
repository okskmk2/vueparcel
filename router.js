import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';
import User from './User.vue';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:'/', component: Home},
        {path:'/user', component: User},
    ]
})