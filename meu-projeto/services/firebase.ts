import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyDXsD_wqFBZT32mbLluSd-DxkQmanxPP8k",
  authDomain: "teste-76d67.firebaseapp.com",
  projectId: "teste-76d67",
  storageBucket: "teste-76d67.appspot.com",
  messagingSenderId: "617076319383",
  appId: "1:617076319383:web:0779cfe3e27d74ed9f75d2"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app();
}

const database = firebase.database()

export {database,firebase}