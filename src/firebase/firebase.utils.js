import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7cNJAmRWq_KuWB8qA79ZiLPt5QaFDrOg",
    authDomain: "crwn-db-a3472.firebaseapp.com",
    databaseURL: "https://crwn-db-a3472.firebaseio.com",
    projectId: "crwn-db-a3472",
    storageBucket: "crwn-db-a3472.appspot.com",
    messagingSenderId: "39796505664",
    appId: "1:39796505664:web:7902007539ffc9913833a5",
    measurementId: "G-B869JB6218"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;