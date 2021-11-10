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
  

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
    msg=document.getElementById("textinput").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });


}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
names=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_tag="<h4>"+names+"<img class='user_tick' src='tick.png'> </h4>";
message_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>";
same=name_tag+message_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=same;

//End code
 } });  }); }
getData();

function updatelike(message){
    console.log("clicked on like button -"+message);
    button=message;
    likes=document.getElementById(button).value;
    update=Number(likes)+1;
    console.log(update);

    firebase.database().ref(room_name).child(message).update({
        like:update
    });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    
    window.location="index.html";
}