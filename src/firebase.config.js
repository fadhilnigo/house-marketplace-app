import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCIEtgG-4Eb3WcAhS7VxfgXunaj1TRiOM",
  authDomain: "house-marketplace-ad309.firebaseapp.com",
  projectId: "house-marketplace-ad309",
  storageBucket: "house-marketplace-ad309.appspot.com",
  messagingSenderId: "675183936714",
  appId: "1:675183936714:web:384d6b3be0e9ef91c56033"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()