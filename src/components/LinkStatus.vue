<template>
    <div>{{links.length}}</div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed:{
        ...mapState(['links'])
    }
}
</script>
