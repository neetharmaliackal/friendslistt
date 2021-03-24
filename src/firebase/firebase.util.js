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
  const Fire=firebase.initializeApp(firebaseConfig);
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get(); //retreieved the info
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({ //sent information to the db
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  const provider1 = new firebase.auth.FacebookAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithFb = () => auth.signInWithPopup(provider1);
  
  export default Fire;
  