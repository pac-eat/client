<template>
  <div>

    <div :class="{ 'finish-bg': true, 'active': isFinishBg }">
      <img src="../assets/img/kepotong/8.png" alt="zombie mode">
      <h2>Thankyou !<br/> Wahyudi now become a <br/> <span>ZOMBIE</span></h2>
    </div>

    <div class="full-bg">
      <img src="https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517164922paku.png" alt="paku" class="paku-left">
      <img src="https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517164922paku.png" alt="paku" class="paku-right">
      <div class="left-img">
        <img :src="leftSrcImg" alt="wahyudi">
      </div>
      <div class="right-img">
        <img :src="rightSrcImg" alt="wahyudi">
      </div>
      <a href="javascript:void(0)" :class="{ 'left-btn': true, 'animate': isAnimateLeft }" @click="tambah1">
        <img src="https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517100643btn-left.png" alt="">
      </a>
      <!-- <audio id="engah">
        <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
      </audio> -->

      <a href="javascript:void(0)" :class="{ 'right-btn': true, 'animate': isAnimateRight }" @click="tambah2">
        <img src="https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517132954btn-right.png" alt="">
      </a>
      <!-- <audio id="engah2">
        <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
      </audio> -->
    </div>

  </div>
  <!-- BACKUP
  <div class="container">
    <br><br>
    <h1>Game Play</h1>
    <div class="row">
      <div class="col-md-6">
        <button @click="tambah1">test 1</button>
        <audio id="engah">
            <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
        </audio>
      </div>
      <div class="col-md-6">
        <button @click="tambah2">test 2</button>
        <audio id="engah2">
            <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
        </audio>
      </div>
    </div>
  </div>
  -->
</template>

<script>
  import db from "../firebase.js";
  export default {
    data() {
      return {
        isFinishBg: false,
        isAnimateLeft: false,
        isAnimateRight: false,

        leftSrc: 1,
        rightSrc: 1,
        leftSrcImg: '',
        rightSrcImg: '',

        counter1: 0,
        counter2: 0,
        value2: 0,
        room: localStorage.getItem("room"),
        arrImg: [
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375166543951.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375167538952.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375167846543.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375168180554.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375168461245.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375168752856.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375169000277.png',
          'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/15375169384208.png'
        ],
        paku: 'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517164922paku.png',
        btnLeftImg: 'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517100643btn-left.png',
        btnRightImg: 'https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537517132954btn-right.png'
      };
    },
    methods: {

      tambah1() {
        db.ref("rooms/" + this.room + "/player1").set({
          player: "player1",
          token: this.room,
          status: this.counter1++
        });
  
        this.read1();
      },
  
      read1() {
        let self = this
        
        self.isAnimateLeft = true

        setTimeout(function() {
          self.isAnimateLeft = false
        }, 100);

        this.engah()
        db
          .ref("rooms/" + this.room + "/player1")
          .once("value")
          .then(function(snapshot) {
            let pos = snapshot.val().status
            let max = 5

            if (pos === 7) {
              self.isFinishBg = true
            } else {
              self.leftSrcImg = self.arrImg[pos + 1]
            }
          });
      },
  
      tambah2() {
        this.engah2()
        db.ref("rooms/" + this.room + "/player2").set({
          player: "player2",
          token: this.room,
          status: this.counter2++
        });
  
        this.read2();
      },
  
      read2() {
        let self = this
        
        self.isAnimateRight = true

        setTimeout(function() {
          self.isAnimateRight = false
        }, 100);

        db
          .ref("rooms/" + this.room + "/player2")
          .once("value")
          .then(function(snapshot) {
            let pos = snapshot.val().status
            let max = 5

            if (pos === 7) {
              self.isFinishBg = true
            } else {
              self.rightSrcImg = self.arrImg[pos + 1]
            }
          });
      },
      hor1() {
        document.getElementById("hor1").play();
      },
      engah() {
        // document.getElementById("engah").play();
      },
      engah2() {
        // document.getElementById("engah2").play();
      }
    },
    mounted () {
      let self = this

      localStorage.removeItem('player1')
      localStorage.removeItem('player2')
      this.leftSrcImg = this.arrImg[this.leftSrc - 1]
      this.rightSrcImg = this.arrImg[this.rightSrc - 1]

      db
        .ref("rooms/" + this.room + "/player2")
        .on("value", function(snapshot) {
          if(snapshot.val() == null) {
            self.rightSrcImg = self.arrImg[0]
          } else {
            self.rightSrcImg = self.arrImg[snapshot.val().status]
          }
        });

      db
        .ref("rooms/" + this.room + "/player1")
        .on("value", function(snapshot) {
          if(snapshot.val() == null) {
            self.leftSrcImg = self.arrImg[0]
          } else {
            self.leftSrcImg = self.arrImg[snapshot.val().status]
          }
        });
    }
  };
</script>

<style scoped>
  
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.full-bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: url('../assets/img/thumb-1920-201712.jpg');
  background-size: cover;
}

.left-img img,
.right-img img {
  position: absolute;
  width: 280px;
  height: auto;
  border-radius: 10px/30px;
  background-color: linear-gradient(#333333, #dd1818);
  box-shadow: 0 0 200px #ff4d4d;
  box-shadow: 0 0 150px #cccccc;
  padding: 2px;
  bottom: 20%;
}

.left-img img {
  left: 10%;
}
.right-img img {
  right: 10%;
}

.paku-left,
.paku-right {
  position: absolute;
  z-index: 9;
  max-width: 70px;
  bottom: 65%;
}

.paku-left {
  left: 20%;
}

.paku-right {
  right: 15%;
}

/* HAND BUTTON */
.left-btn,
.right-btn {
  position: absolute;
  bottom: -1%;
  /* top: 50%; */
  /* margin-top: 7%; */
}

.left-btn img,
.right-btn img {
  max-width: 200px;
}

.left-btn {
  left: 10%;
}

.right-btn {
  right: 10%;
}

.animate img {
  animation-name: zoom-in;
  animation-duration: 0.1s;
  transition: all 0.1s ease;
}

.finish-bg {
  width: 100%;
  height: 100%;
  z-index: 99;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 3%;
  display: none;
}

.finish-bg img {
  max-width: 350px;
  display: block;
  margin: auto;
  box-shadow: 0 0 100px #cccccc;
  border-radius: 10px;
}

.finish-bg h2 {
  bottom: 7%;
  position: absolute;
  color: #ffffff;
  z-index: 99;
  margin: auto;
  width: 100%;
  text-align: center;
  display: block;
  font-family: 'Creepster', cursive;
  font-weight: 400;
  font-size: 2em;
}

.finish-bg h2 span {
  font-size: 2.7em;
}

.finish-bg.active {
  display: block;
  animation: bg-zoom 1s ease;
}

@keyframes zoom-in {
  from   {transform: scale(1)}
  to {transform: scale(0.9)}
}

@keyframes bg-zoom {
  from { opacity: 0 }
  to { opacity: 1; }
}


</style>
