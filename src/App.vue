<template>
<div class='app'>
    <Modal v-if="modalOpen"></Modal>
    <div>
    <header>
      <div class='container'>
        <nav class='text-right'><i class='material-icons'>account_circle</i></nav>
        <h1>Site Name</h1>
        <nav class='gnb'>
            <router-link to='/'>Home</router-link>
            <router-link to='/inputList'>InputList</router-link>
        </nav>
      </div>
    </header>
    <router-view class='container'></router-view>
    <footer>
      <div class='container'>designed by Baeun</div>
    </footer>
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
  mounted() {}
};
</script>

