<template>
    <div class="container">
        <br><br>
            <h1>Game Play</h1>
        <div class="row">
            <div class="col-md-6">
                <button @click="tambah1">test 1</button>
            </div>
            <div class="col-md-6">
                <button @click="tambah2">test 2</button>
            </div>
        </div>
    </div>
</template>

<script>
import db from "../firebase.js";
export default {
  data() {
    return {
      counter1: 0,
      value2: 0,
      room: localStorage.getItem('room')
    };
  },
  methods: {
    tambah1() {
        db.ref('rooms/'+this.room+'/player1').set({
            player: 'player1',
            token: this.room,
            status: this.counter1++
        })

       this.read1()
    },

    read1 () {
         db.ref('rooms/'+this.room+'/player1').once('value')
        .then(function(snapshot) {
            let pos = snapshot.val().status
            if (pos == 10) {
                alert(`${pos}`)
            } else if (pos == 15) {
                 alert(`${pos}`)
            } else if (pos == 20) {
                alert('winner')
            }
        })
    },

    tambah2() {
      this.value2++;
      if (this.value2 == 5) {
        console.log(this.value2);
        alert("step 10");
      } else if (this.value2 == 10) {
        console.log(this.value2);
        alert("step 15");
      } else if (this.value2 == 15) {
        console.log(this.value2);
        alert("finish");
        this.value2 = 0;
      }
    }
  }
};
</script>

<style>
</style>
