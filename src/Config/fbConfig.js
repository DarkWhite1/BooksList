import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDwn4heAiAv2AOi9ZfI01VYxV20wTZAQDk",
    authDomain: "books-e0aea.firebaseapp.com",
    databaseURL: "https://books-e0aea.firebaseio.com",
    projectId: "books-e0aea",
    storageBucket: "",
    messagingSenderId: "591014119555",
    appId: "1:591014119555:web:79bb524db3efa0e3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;