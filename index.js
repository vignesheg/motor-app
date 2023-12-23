import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue ,set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnCZJypuXuV_AYzhp3gYPfenFe8JyJF-s",
    authDomain: "motor-control2.firebaseapp.com",
    databaseURL: "https://motor-control2-default-rtdb.firebaseio.com",
    projectId: "motor-control2",
    storageBucket: "motor-control2.appspot.com",
    messagingSenderId: "513533947006",
    appId: "1:513533947006:web:81d1cff35a6b8a882c3c2f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

// Reference to the "data" key in your database
const dataRef = ref(database, "data");

// Listen for changes to the "data" key
onValue(dataRef, (snapshot) => {
  // Get the value of the "data" key
  const dataValue = snapshot.val();

  // Use the data in your application
  console.log("Value of 'data' key:", dataValue);
}, {
  // Set up any additional options if needed
});

// Note: Make sure to replace "YOUR_API_KEY", "YOUR_AUTH_DOMAIN", etc. with your actual Firebase project configuration values.
function modechanger(mode,state){
set(dataRef,mode)
    .then(()=>{
        console.log("updated");
    });
   document.getElementById("stat-val").innerHTML = state;
}


    const onButton = document.getElementById('onbt');
    const offButton = document.getElementById('offbt');

    onButton.addEventListener('click', () => {
        modechanger(1,"ON");
    });

    offButton.addEventListener('click', () => {
        modechanger(0,"OFF");
    });

  

