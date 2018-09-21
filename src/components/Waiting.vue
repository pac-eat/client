<template>
    <h1>WAITING</h1>
</template>

<script>
import db from "../firebase.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      token1: "",
      token2: ""
    };
  },
  computed: {
    ...mapState(["readyRoom"])
  },
  mounted() {
    let room = localStorage.getItem("room")
    db.ref("rooms/").on("value", function(snapshot) {
      var roomArray = [];
      var result = snapshot.val();
      let countPlayer = 0;
      for (let count in result[room]) {
        countPlayer++;
        if (countPlayer === 2) {
          window.location.href = "/gameplay";
        }
      }
    });
  }
};
</script>

<style>
</style>
