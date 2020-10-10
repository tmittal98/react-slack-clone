import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXdYdf5beI5hUrlKT5jZOKw5cbcpHvkt4',
  authDomain: 'react-slack-clone-25589.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-25589.firebaseio.com',
  projectId: 'react-slack-clone-25589',
  storageBucket: 'react-slack-clone-25589.appspot.com',
  messagingSenderId: '513164673381',
  appId: '1:513164673381:web:811c0622962ae6cccae18c',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
