// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//! annat sätt
// import * as firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBLUuU_m_xM72mgIjR4gYcZLkfpK8TWXYE",
  authDomain: "swe-uyghur-fc.firebaseapp.com",
  projectId: "swe-uyghur-fc",
  storageBucket: "swe-uyghur-fc.appspot.com",
  messagingSenderId: "947461868116",
  appId: "1:947461868116:web:913793cffc8b40d3457bc1",
  measurementId: "G-NLWXTF8SD7",
};

// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJCT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

//! annat sätt
// firebase.initializeApp(firebaseConfig);
// const projectStorage = firebase.storage();
// const projectFireStore = firebase.firestore();

// export { projectStorage, projectFireStore };
