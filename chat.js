var firebaseConfig = {
  apiKey: "AIzaSyBlNUiAh4PjouA8vwsrREAaTU_ESIewM-M",
  authDomain: "covid-19-hnoo.firebaseapp.com",
  databaseURL: "https://covid-19-hnoo-default-rtdb.firebaseio.com",
  projectId: "covid-19-hnoo",
  storageBucket: "covid-19-hnoo.appspot.com",
  messagingSenderId: "919073518702",
  appId: "1:919073518702:web:7a2ba846b2a8b520fce27f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
     function addRoom() {
     room_name = document.getElementById("addroom_input").value;
     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     }); 
     localStorage.setItem("room_name", room_name); 
     window.location = "chat_page.html"; 
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div id='+Room_names+' class='room_name' onclick='redirectToRoomNames(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row; 
      console.log("Room names - " + Room_names)
      //End code
      });});}
getData();

function redirectToRoomNames(name) {
      console.log(name);
      localStorage.setItem("room_name",name); 
      window.location="chat_page.html"; 
}
function log() {
      window.location = "index.html"; 
}