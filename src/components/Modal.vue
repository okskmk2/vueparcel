<template>
    <div class='modal-background'>
        <div class='modal'>
        <button @click="closeModal">close</button>
        <h3>Modal</h3>
        <p>content</p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  methods: {
    ...mapActions(["closeModal"])
  }
};
</script>

<style scoped>
.modal-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  z-index: 100;
}
.modal {
  background-color: #fff;
  border: 1px solid #ccc;
  position: absolute;
}
</style>
