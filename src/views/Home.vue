<template>
    <div>
        <h2>Home</h2>
        <button @click="doc_del_rendar">cl</button>
        <button @click="open_dialog">cl1</button>
    </div>
</template>
<script>
import DelPopup from "../components/DelPopup.vue";
export default {
  mounted() {},
  methods: {
    doc_del_rendar() {
      this.$modal.show(
        DelPopup,
        {
          hot_table: "data",
        //   modal: this.$modal
        },
        {
          name: "dynamic-modal",
          width: "330px",
          height: "130px",
          draggable: true
        }
      );
    },
    open_dialog() {
      this.$modal.show("dialog", {
        title: "Alert!",
        text: "You are too awesome",
        buttons: [
          {
            title: "Deal with it",
            handler: () => {
              alert("Woot!");
            }
          },
          {
            title: "", // Button title
            default: true, // Will be triggered by default if 'Enter' pressed.
            handler: () => {} // Button click handler
          },
          {
            title: "Close"
          }
        ]
      });
    }
  }
};
</script>
