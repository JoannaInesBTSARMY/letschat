var firebaseConfig = {
    apiKey: "AIzaSyBEBr5lcF6-7Em_1QmOrW0hxN6OuJpcYRk",
    authDomain: "lets-chat-project-34e34.firebaseapp.com",
    databaseURL: "https://lets-chat-project-34e34-default-rtdb.firebaseio.com",
    projectId: "lets-chat-project-34e34",
    storageBucket: "lets-chat-project-34e34.appspot.com",
    messagingSenderId: "995395654887",
    appId: "1:995395654887:web:5be45b7fe9e5a4018efe42",
    measurementId: "G-89NC42WGQ0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");

document.getElementById("room").innerHTML="Welcome" + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#" +Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function addroom(){

    room=document.getElementById("room_name").value
    
    firebase.database().ref("/").child(room).update({
          purpose : " Add Room Name "
    });

    localStorage.setItem("room_name",room);

    window.location="kwitter_page.html";

    function redirect(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location="kwitter_page.html";
    }
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    
    window.location="index.html";
}


