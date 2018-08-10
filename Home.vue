<template>
    <div>
        <h3>home</h3>
        <Hottest></Hottest>
        <button @click="testtest()">testtest</button>
    </div>
</template>
<script>

import Hottest from './Hottest.vue';

export default {
        components:{Hottest}
        ,methods:{
            testtest : Hottest.methods.testtest            
        }
}
</script>
