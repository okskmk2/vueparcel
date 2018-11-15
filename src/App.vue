<template>
<div class='app'>
  <modals-container />
  <v-dialog/>
    <Modal v-if="modalOpen"></Modal>
    <div class='main'>
    <header>
        <nav><i class='material-icons'>account_circle</i></nav>
        <h1>Site Name</h1>
        <nav class='gnb'>
            <router-link to='/'>Home</router-link>
            <router-link to='/inputList'>InputList</router-link>
        </nav>
    </header>
    <router-view/>
    <footer>footer area</footer>
    </div>
</div>
</template>
<script>
import Modal from "./components/Modal.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["modalOpen"])
  },
  components: {
    Modal
  },
  mounted(){
    
  }
};
</script>
<style scoped>
.app {
  position: relative;
}
.main{
    margin: 0 auto;
    width: 40rem;
    padding: 2rem;
    border:1px solid #ccc;
}
.gnb>a{
  margin-right: 1rem;
}
</style>
