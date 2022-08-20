// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyC3Ga_CHTw7zGeYdHiFz6Xq02hdrZm65Dc",
    authDomain: "linkedin-clone-d8aac.firebaseapp.com",
    projectId: "linkedin-clone-d8aac",
    storageBucket: "linkedin-clone-d8aac.appspot.com",
    messagingSenderId: "779688884971",
    appId: "1:779688884971:web:a03052bcae4e47caa8dcae",
    measurementId: "G-43T6YC1EWS"
};
  
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
