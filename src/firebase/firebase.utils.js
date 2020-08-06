import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  // your firebase app config goes here
  // you can see the setup docs here : https://firebase.google.com/docs/web/setup 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export default firebase;
