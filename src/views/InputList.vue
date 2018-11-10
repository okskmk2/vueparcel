<template>
    <div>
        <h2>Input List</h2>
        <div class='btngroup'>
            <button @click="addInputItem">Add</button>
            <button @click="resetInputList">Reset</button>
        </div>
        <template v-for="(InputItem, index) in inputItems">
            <component :is="InputItem" :key="index">
                <button @click="removeInputItem(index)" :key="index">Remove</button>
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
      this.inputItems = [InputItem];
    },
    addInputItem() {
        this.inputItems.push(InputItem);
    },
    removeInputItem(index) {
        console.log(this.inputItems.length);
        console.log(index);
        this.inputItems.splice(index, 1); // 내가 원하는 아이템을 삭제하지 않고 마지막 인덱스만 삭제하고 있다.
    },
    ...mapActions(["openModal", "closeModal"]),
    openTest() {
      this.openModal();
    },
    closeTest() {
      this.closeModal();
    }
  },
  components: {
    InputItem
  }
};
</script>
<style scoped>
.btngroup{
    margin-bottom: 0.5rem;
}
</style>
