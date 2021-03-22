import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyDATID5Bfrn0g8pR60g9TWh3pMUSIX-fhE",
    authDomain: "react-friendslist.firebaseapp.com",
    projectId: "react-friendslist",
    storageBucket: "react-friendslist.appspot.com",
    messagingSenderId: "627401124505",
    appId: "1:627401124505:web:728b9895a664e13ebb6608",
    measurementId: "G-9E0CVNW5GH"
  };
  const fire=firebase.initializeApp(firebaseConfig);
export default fire;