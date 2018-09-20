import firebase from "firebase";
var config = {
    apiKey: "AIzaSyBlPuOoM59BP6TTXqK2EcqWdZJ4V52-o1Q",
    authDomain: "pac-aet.firebaseapp.com",
    databaseURL: "https://pac-aet.firebaseio.com",
    projectId: "pac-aet",
    storageBucket: "pac-aet.appspot.com",
    messagingSenderId: "299364742641"
};
firebase.initializeApp(config);

var db = firebase.datbase()
export default db