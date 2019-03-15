import firebase from 'firebase'
import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCF2cji2rxePpke5UiWpqgFv_Rihs1TwMk",
    authDomain: "chat-972da.firebaseapp.com",
    databaseURL: "https://chat-972da.firebaseio.com",
    projectId: "chat-972da",
    storageBucket: "chat-972da.appspot.com",
    messagingSenderId: "815970632235"
  };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings( {timestampsInSnapshots: true});

 export default firebaseApp.firestore();