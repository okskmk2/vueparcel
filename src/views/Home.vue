<template>
    <div>
        <h3>home</h3>
        <button @click="addLinks">count</button>
        <LinkStatus></LinkStatus>
    </div>
</template>
<script>

import {mapMutations} from 'vuex';
import LinkStatus from "../components/LinkStatus.vue";

export default {
    methods:{
        ...mapMutations(['ADD_LINK']),
        addLinks(){
            this.ADD_LINK('1');
        }
    },
    components:{
        LinkStatus
    }
}
</script>
