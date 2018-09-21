import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    image: '',
    roomName: '',
    player: '',
    readyRoom : ''
  },
  mutations: {
    ADD_PLAYER (state, payload) {
      state.playerName = payload
    },
    CHANGE(state, payload){
      state.readyRoom = payload
    }
  },
  actions: {
    createRoom (context, data) {
      let player = data.playerName
        let room = data.room
        context.commit('CHANGE', room)
        context.commit('ADD_PLAYER',player)
        console.log(' ini room ',room);
        console.log('ini',player);
        
        db.ref('rooms/' + room).once('value').then(function(snapshot){
          console.log(snapshot);
          
          console.log(snapshot.val());
          let cek = snapshot.val()
          if (cek == null) {
              db.ref('rooms/' + room + '/player1').set({
                  player: player,
                  token : room,
                  status: 0
              })
              let token = room
              localStorage.setItem('room', room)
              window.location.href = '/room'
          }else if (!cek.player2 && cek.player1 !== '') {
              db.ref('rooms/' + room + '/player2').set({
                  player: player,
                  token : room,
                  status: 0
              })
              let token = room
              localStorage.setItem('room', room)
              // localStorage.setItem('token2', token)
              window.location.href = '/room'
          }
      });
    }
  }
})


// user => 
// 1. name
// 2. posisi = 0
// 3. token


// pencet1 (player) {
//   if (posisi = 0) {
//       image = "dota"
//   }else if (posisi = 1) {
//       image = "lol"
//   }else if (posisi = 2) {
//       image ="ml"
//   }
// }

// pencer2 () {

// }