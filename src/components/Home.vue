<template>
  <div class="body">
    <audio autoplay>
            <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
            <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
          </audio>
    <div class="row">
      <h1>Welcome To Zombie World</h1>
    </div>
    <div class="grad"></div>
    <div class="header">
      <!-- name Site -->
      <div> <b> SIO </b><span> <b>MAY </b></span></div>
    </div>
    <br>
    <div class="login">
      <input type="text" placeholder="username"  style="color: black" v-model="playerName"><br>
      <input type="text" placeholder="room"  style="color: black" v-model="room"><br>
      <input type="button" value="JOIN" @click="addRoom">
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from "vuex";
  import {
    Howl,
    Howler
  } from 'howler';
  export default {
    data() {
      return {
        room: "",
        playerName: ""
      };
    },
    methods: {
      ...mapActions(["createRoom"]),
      addRoom() {
        console.log("masuk");
  
        let newRoom = {
          room: this.room,
          playerName: this.playerName
        };
        this.createRoom(newRoom);
      }
    }
  };
</script>

<style scoped>
  @import url(http://fonts.googleapis.com/css?family=Exo:100,200,400);
  @import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);
  body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
  }
  
  .body {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -40px;
    bottom: -40px;
    width: auto;
    height: auto;
    background-image: url(../assets/login1.jpg);
    background-size: cover;
    /* -webkit-filter: blur(5px); */
    z-index: 0;
  }
  
  .grad {
    position: absolute;
    top: -20px;
    left: -20px;
    right: -40px;
    bottom: -40px;
    width: auto;
    height: auto;
    background: -webkit-gradient( linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 0.65)));
    /* Chrome,Safari4+ */
    z-index: 1;
    opacity: 0.7;
  }
  
  .header {
    position: absolute;
    top: calc(50% - 35px);
    left: calc(50% - 255px);
    z-index: 2;
  }
  
  .header div {
    float: left;
    color: #fff;
    font-family: "Exo", sans-serif;
    font-size: 35px;
    font-weight: 200;
  }
  
  .header div span {
    color: #c51212 !important;
  }
  
  .login {
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 50px);
    height: 150px;
    width: 350px;
    padding: 10px;
    z-index: 2;
  }
  
  .login input[type="text"] {
    width: 250px;
    height: 30px;
    border: 1px solid black;
    border-radius: 2px;
    color:black;
    font-family: "Exo", sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 4px;
  }
  
  .login input[type="password"] {
    width: 250px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    color: #fff;
    font-family: "Exo", sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 4px;
    margin-top: 10px;
  }
  
  .login input[type="button"] {
    width: 260px;
    height: 35px;
    background: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    border-radius: 2px;
    color: #a18d6c;
    font-family: "Exo", sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 6px;
    margin-top: 10px;
  }
  
  .login input[type="button"]:hover {
    opacity: 0.8;
  }
  
  .login input[type="button"]:active {
    opacity: 0.6;
  }
  
  .login input[type="text"]:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
  
  .login input[type="password"]:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
  
  .login input[type="button"]:focus {
    outline: none;
  }
  
  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  ::-moz-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  
  /* css font */
  
  @font-face {
    font-family: "Denk One";
    font-style: normal;
    font-weight: 400;
    src: local("Denk One"), local("DenkOne-Regular"), url(https://fonts.gstatic.com/s/denkone/v5/dg4m_pzhrqcFb2IzRNtAr7w.ttf) format("truetype");
  }
  
  body {
    background-color: #212121;
  }
  
  h1 {
    color: transparent;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    font-family: "Denk One", sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 3em;
    position: absolute;
    left: 50%;
    top: 10%;
    margin-left: -180px;
    -webkit-animation: horror-animation 5s infinite;
    -moz-animation: horror-animation 5s infinite;
    -o-animation: horror-animation 5s infinite;
    animation: horror-animation 5s infinite;
  }
  
  @-webkit-keyframes horror-animation {
    0% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
      left: 51%;
      top: 10%;
    }
    5% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 50%;
      top: 10%;
    }
    10% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
      top: 10%;
    }
    15% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
      top: 10%;
    }
    16% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    17% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 49%;
    }
    25% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 49%;
    }
    30% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
      left: 50%;
    }
    35% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    36% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    37% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    40% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.9);
      left: 51%;
    }
    45% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 51%;
    }
    50% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
      left: 51%;
    }
    55% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 50%;
    }
    56% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    57% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 52%;
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
    65% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    70% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
    }
    75% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    76% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    77% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    80% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.1);
      left: 49%;
    }
    85% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    86% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    87% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    90% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
      left: 51%;
    }
    95% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 51%;
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
  }
  
  @-moz-keyframes horror-animation {
    0% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
      left: 51%;
      top: 10%;
    }
    5% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 50%;
      top: 10%;
    }
    10% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
      top: 10%;
    }
    15% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
      top: 10%;
    }
    16% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    17% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 49%;
    }
    25% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 49%;
    }
    30% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
      left: 50%;
    }
    35% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    36% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    37% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    40% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.9);
      left: 51%;
    }
    45% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 51%;
    }
    50% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
      left: 51%;
    }
    55% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 50%;
    }
    56% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    57% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 52%;
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
    65% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    70% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
    }
    75% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    76% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    77% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    80% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.1);
      left: 49%;
    }
    85% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    86% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    87% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    90% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
      left: 51%;
    }
    95% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 51%;
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
  }
  
  @-o-keyframes horror-animation {
    0% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
      left: 51%;
      top: 10%;
    }
    5% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 50%;
      top: 10%;
    }
    10% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
      top: 10%;
    }
    15% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
      top: 10%;
    }
    16% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    17% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 49%;
    }
    25% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 49%;
    }
    30% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
      left: 50%;
    }
    35% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    36% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    37% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    40% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.9);
      left: 51%;
    }
    45% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 51%;
    }
    50% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
      left: 51%;
    }
    55% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 50%;
    }
    56% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    57% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 52%;
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
    65% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    70% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
    }
    75% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    76% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    77% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    80% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.1);
      left: 49%;
    }
    85% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    86% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    87% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    90% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
      left: 51%;
    }
    95% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 51%;
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
  }
  
  @keyframes horror-animation {
    0% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
      left: 51%;
      top: 10%;
    }
    5% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 50%;
      top: 10%;
    }
    10% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
      top: 10%;
    }
    15% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
      top: 10%;
    }
    16% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    17% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    20% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 49%;
    }
    25% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 49%;
    }
    30% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
      left: 50%;
    }
    35% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    36% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    37% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 50%;
    }
    40% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.9);
      left: 51%;
    }
    45% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
      left: 51%;
    }
    50% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.7);
      left: 51%;
    }
    55% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 50%;
    }
    56% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    57% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.6);
      left: 52%;
    }
    60% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
    65% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 50%;
    }
    70% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.3);
      left: 49%;
    }
    75% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    76% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    77% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      left: 49%;
    }
    80% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.1);
      left: 49%;
    }
    85% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    86% {
      text-shadow: 0 0 5px #212121;
      left: 50%;
    }
    87% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
      left: 51%;
    }
    90% {
      text-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
      left: 51%;
    }
    95% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.4);
      left: 51%;
    }
    100% {
      text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
      left: 50%;
    }
  }
</style>
