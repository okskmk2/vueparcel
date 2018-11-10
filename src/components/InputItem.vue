<template>
<div class='inputItem'>
    <div>
        <div>
            <div>input</div>
            <div><input type="text"></div>
            <button @click="openFileBrowser">Browse</button>
        </div>
        <div>
            <div>output</div>
            <div><input type="text"></div>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "InputItem",
  methods: {
    ...mapMutations(["OPEN_MODAL"]),
    openFileBrowser() {
      this.OPEN_MODAL();
    }
  }
};
</script>
<style scoped>
.inputItem {
  padding: 0.5rem;
  border: 1px solid #aaa;
  margin-bottom: 0.25rem;
}
</style>
