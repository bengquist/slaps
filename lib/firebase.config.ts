import firebase from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBZzsReSzcOc42RkovYGBM29wk-VJRnlVI",
  authDomain: "slaps-db.firebaseapp.com",
  databaseURL: "https://slaps-db.firebaseio.com",
  projectId: "slaps-db",
  storageBucket: "",
  messagingSenderId: "1079117281033",
  appId: "1:1079117281033:web:feb738fe4200d2fe"
};

const storage = firebase.initializeApp(config).storage();

export { storage };
