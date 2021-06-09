import firebase from "firebase"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD0kJkIm_JMAVZ66lbdm7L_PMbaIikOuNg",
    authDomain: "pokedex-76f08.firebaseapp.com",
    projectId: "pokedex-76f08",
    storageBucket: "pokedex-76f08.appspot.com",
    messagingSenderId: "505843672903",
    appId: "1:505843672903:web:ec82b9017de196bf9a0e62",
    measurementId: "G-P8C8PSBDXM"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = fire.auth()


  export { auth }