//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbzxlFa2oZfYVaZuoPvjTcWkyOopW_TNw",
    authDomain: "kwitter-d934f.firebaseapp.com",
    databaseURL: "https://kwitter-d934f.firebaseio.com",
    projectId: "kwitter-d934f",
    storageBucket: "kwitter-d934f.appspot.com",
    messagingSenderId: "498770365320",
    appId: "1:498770365320:web:d2422786c538d6e91b883d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
    });
}