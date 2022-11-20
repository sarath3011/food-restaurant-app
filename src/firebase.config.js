import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCX3gpSxyjin35Chp1KAweRhKQZKOxXWZo",
  authDomain: "my-restaurant-app-28638.firebaseapp.com",
  databaseURL: "https://my-restaurant-app-28638-default-rtdb.firebaseio.com",
  projectId: "my-restaurant-app-28638",
  storageBucket: "my-restaurant-app-28638.appspot.com",
  messagingSenderId: "22450098465",
  appId: "1:22450098465:web:f2139d69b3cf74f0ef6e60"
  };
  const app = getApps.length > 0 ? getApp() : initializeApp (firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export{app,firestore,storage}