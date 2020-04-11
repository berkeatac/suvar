import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWznh_pL5sGLfYNzid9FXJx6rtW0O00SU",
  authDomain: "suvar-routes.firebaseapp.com",
  databaseURL: "https://suvar-routes.firebaseio.com",
  projectId: "suvar-routes",
  storageBucket: "suvar-routes.appspot.com",
  messagingSenderId: "300031354488",
  appId: "1:300031354488:web:c18d16238e7aa66df0af8d",
  measurementId: "G-N3GDTH6Z4L",
};

window.firebase = firebase; // to debug in browser if needed

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings); No longer needed so removed

export default firebase;
