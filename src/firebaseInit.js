
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhkF112YNHgmiUGWH2AVK2khqfBvYZPfA",
  authDomain: "chatapplication-df72a.firebaseapp.com",
  projectId: "chatapplication-df72a",
  storageBucket: "chatapplication-df72a.appspot.com",
  messagingSenderId: "819442993048",
  appId: "1:819442993048:web:c9b885be9edb091a658ded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();