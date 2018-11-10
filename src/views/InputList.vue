<template>
    <div>
        <h2>Input List</h2>
        <div class='btngroup'>
            <button @click="addInputItem">Add</button>
            <button @click="resetInputList">Reset</button>
        </div>
        <template v-for="(InputItem, index) in inputItems">
            <component :is="InputItem" :key="index" :id="'item'+index">
                <button @click="removeInputItem('item' + index)" :key="index">Remove</button>
            </component>
        </template>
        <hr>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";

import Vue from "vue";
import InputItem from "../components/InputItem.vue";
export default {
  data() {
    return {
      inputItems: [InputItem]
    };
  },
  methods: {
    resetInputList() {
        this.inputItems = [];
    },
    addInputItem() {
      this.inputItems.push(InputItem);
    },
    removeInputItem(id) {
      document.getElementById(id).remove();
    },
    ...mapActions(["openModal", "closeModal"]),
  },
  components: {
    InputItem
  }
};
</script>
<style scoped>
.btngroup {
  margin-bottom: 0.5rem;
}
</style>
