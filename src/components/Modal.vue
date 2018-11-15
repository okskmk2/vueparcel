<template>
    <div class='modal-background'>
        <div class='modal'>
        <button @click="closeModal">close</button>
        <h3>Modal</h3>
        <div>
            <input type="text" v-model="inputpath">
        </div>
        <button @click="sendInputPath">ok</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      inputpath: ""
    };
  },
  name: "Modal",
  methods: {
    ...mapMutations(["ADD_INPUT_PATH"]),
    ...mapActions(["closeModal"]),
    sendInputPath() {
      this.ADD_INPUT_PATH(this.inputpath);
      this.closeModal();
    }
  }
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
}
.modal {
  padding:0.5rem 1.5rem;
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
  top: 20%;
}
</style>
