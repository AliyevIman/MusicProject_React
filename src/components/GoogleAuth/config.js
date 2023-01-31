import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDV0JaYmBXnbSuc--xPtva6hLe_sh7iA3s",
  authDomain: "my-music-project-376023.firebaseapp.com",
  projectId: "my-music-project-376023",
  storageBucket: "my-music-project-376023.appspot.com",
  messagingSenderId: "69753538296",
  appId: "1:69753538296:web:8fb0ce30a2bb666f735d0d",
  measurementId: "G-6X5ZP3PMRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider= new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
export {auth,provider,facebookProvider};