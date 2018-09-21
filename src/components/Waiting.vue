<template>
  <div>
    <audio autoplay loop>
          <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
          <source src="https://storage.googleapis.com/andre-sudi/1537504721567horror2.mp3" type="audio/ogg">
          <link rel="stylesheet" href="../css/waitingRoom.css">
        </audio>
    <!-- <h1>WAITING</h1>
    <div class="row">
      <div class="col-md-6">     
            <h2>Player 1</h2>
            <h2> {{player1}} </h2>
        </div> 
      <div class="col-md-6">
           <h2>Player 2</h2>
            <h2> {{player2}} </h2>
      </div>

    </div> -->
     <div class="body"></div>
    <div class="container-fluid">
        <div class="row">
            <div>

                <body>

                    <h1 id="title">VS</h1>

                </body>
            </div>
        </div>
        <div class="row" id="containerZombie">
            <div class="col">
                <img   src="../assets/zom_right1.png"  alt="" width="29%" style="position: relative">
            </div>
            <div class="col">
                <img alt="" src="https://storage.googleapis.com/traveller-blog.helmiyogantara.club/1537518235347zom_left1.png" id="" width="38%">
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h2>Player name</h2>
            </div>
            <div class="col">
                <h2>Player name</h2>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      token1: "",
      token2: "",
      player1: localStorage.getItem('player1'),
      // player2: localStorage.getItem('player2')
    };
  },
  computed: {
    ...mapState(["readyRoom"])
  },
  mounted() {
    let room = localStorage.getItem("room")
    console.log(room);
    
    db.ref("rooms/"+room).once("value")
    .then((snapshot) => {
      if (snapshot.val().player1.player) {
        this.player1 = snapshot.val().player1.player
        console.log('ini layer 1', this.player1);
        
      }
      
      if (snapshot.val().player2.player) {
        this.player2 = snapshot.val().player2.player
        console.log('ini layer 2', this.player2);
        
      }
    })
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
      })
    }
  };
</script>

<style scoped>
  @import url(http://fonts.googleapis.com/css?family=Exo:100,200,400);
@import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);

body{
	margin: 0;
	padding: 0;
	background: #fff;

	color: #fff;
	font-family: Arial;
	font-size: 12px;
}




.body{
	position: fixed;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
	background-image: url(../assets/zombie_waiting_room.jpg);
	background-size: cover;
	/* -webkit-filter: blur(5px); */
	z-index: 0;
}

.grad{
	position: absolute;
	top: -20px;
	left: -20px;
	right: -40px;
	bottom: -40px;
	width: auto;
	height: auto;
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */
	z-index: 1;
	opacity: 0.7;
}

.header{
	position: absolute;
	top: calc(50% - 35px);
	left: calc(50% - 255px);
	z-index: 2;
}

.header div{
	float: left;
	color: #fff;
	font-family: 'Exo', sans-serif;
	font-size: 35px;
	font-weight: 200;
}

.header div span{
	color: #c51212 !important;
}

h6 {
        color: black !important;
}

#title{
	z-index: 999;
	position: absolute;
	padding-top: 10%;
	right: 45%;
}

#containerZombie{
	padding-top: 5%;
}
/* img #player1 {
    padding-top : 400px;
    margin-right: auto;
    margin-left: auto;
    display: block
}

img #player2 {
	
	padding-top : 400px;
	margin-right: auto;
	margin-left: auto;
	display: block
	
} */

/* css */

@font-face {
	font-family: 'Denk One';
	font-style: normal;
	font-weight: 400;
	src: local('Denk One'), local('DenkOne-Regular'), url(https://fonts.gstatic.com/s/denkone/v5/dg4m_pzhrqcFb2IzRNtAr7w.ttf) format('truetype');
  }
  body {
	background-color: #212121;
  }
  h1 {
	color: transparent;
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	font-family: 'Denk One', sans-serif;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-size: 15em;
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
