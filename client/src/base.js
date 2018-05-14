import * as firebase from "firebase";

//FirebaseApp
firebase.initializeApp({
    apiKey: "AIzaSyBnxyi17-5NhphHDk2mvx2HtWQyPnlogCY",
    authDomain: "house-react.firebaseapp.com",
    databaseURL: "https://house-react.firebaseio.com"
});

export const database = firebase.database().ref("profiles/");

export const auth = firebase.auth();
