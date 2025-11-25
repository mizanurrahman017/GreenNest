import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDHiviUenbbwra7pNvMyqn61uRY2WfaYyY",
  authDomain: "green-nest-beb1c.firebaseapp.com",
  projectId: "green-nest-beb1c",
  storageBucket: "green-nest-beb1c.firebasestorage.app",
  messagingSenderId: "590846927384",
  appId: "1:590846927384:web:125dda4f2af26cf4fa196d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth (app);