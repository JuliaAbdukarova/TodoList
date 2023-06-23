import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCEa56e4v2zKXsCbj3dga_dHbyD6kgkK-U",
  authDomain: "todolist-projec-t.firebaseapp.com",
  projectId: "todolist-projec-t",
  storageBucket: "todolist-projec-t.appspot.com",
  messagingSenderId: "904140149766",
  appId: "1:904140149766:web:1f756cfd5b489541529f87",
  measurementId: "G-CRK85QGL6Q",
  databaseURL:
    "https://todolist-projec-t-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getDatabase(app);
