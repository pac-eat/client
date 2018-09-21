<template>
    <div class="template">
        <div class="row">
    
            <!-- Player1 -->
            <div class="col-md-6">
                <img class="tiang" v-bind:src="image1" style="height: 650px">
                <div>
                    <button type="submit" @click="click1">player1</button>
                    <audio id="engah">
                                            <!-- <source src="@/assets/engahpajar.mp3" type="audio/ogg"> -->
                                        </audio>
                </div>
            </div>
    
            <!-- Player2 -->
            <div class="col-md-6">
                <img class="tiang" v-bind:src="image2" style="height: 650px; width: 550px;">
                <div>
                    <button type="submit" @click="click2">player2</button>
                    <audio id="engah2">
                                            <!-- <source src="@/assets/engahHelmi.mp3" type="audio/ogg"> -->
                                        </audio>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>


export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      image1: '',
      image2: ''
    };
  },
  methods: {
    click1() {
      this.value1++;
      if (this.value1 == 5) {
        this.image1 =
          "https://storage.googleapis.com/andre-sudi/1537463288613wahyudimata.gif";
      } else if (this.value1 >= 10 && this.value1 <= 30) {
        this.image1 =
          "https://storage.googleapis.com/andre-sudi/1537463393393wahyumuter.gif";
      } else if (this.value1 >= 31 && this.value1 <= 40) {
        this.image1 =
          "https://storage.googleapis.com/andre-sudi/1537463433795wahyumeledak.gif";
      } else if (this.value1 == 41) {
        this.image1 =
          "https://storage.googleapis.com/andre-sudi/1537464287160wahyudisetan.jpg";
      }
    },
    click2() {
      this.value2++;
      if (this.value2 == 5) {
        this.image2 =
          "https://storage.googleapis.com/andre-sudi/1537463288613wahyudimata.gif";
      } else if (this.value2 >= 10 && this.value2 <= 20) {
        this.image2 =
          "https://storage.googleapis.com/andre-sudi/1537463393393wahyumuter.gif";
      } else if (this.value2 >= 21 && this.value2 <= 30) {
        this.image2 =
          "https://storage.googleapis.com/andre-sudi/1537463433795wahyumeledak.gif";
      } else if (this.value2 >= 31) {
        this.image2 =
          "https://storage.googleapis.com/andre-sudi/1537464287160wahyudisetan.jpg";
      }
    }
  }
};
</script>

<style>
.imgBorder {
  border-radius: 50%;
}

.tiang {
  position: relative;
}

.saucage {
  width: 100px;
  position: fixed;
}

.split {
  height: 100%;
  width: 50%;
  position: fixed;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: #111;
}

.right {
  right: 0;
  background-color: red;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.centered img {
  width: 150px;
  border-radius: 50%;
}

.template {
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
</style>
