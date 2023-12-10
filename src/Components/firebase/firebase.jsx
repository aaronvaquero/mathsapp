import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuVfle18UAIp46n0CqDE8o4VnYTNCUy4Q",
  authDomain: "mathbay-b33e4.firebaseapp.com",
  projectId: "mathbay-b33e4",
  storageBucket: "mathbay-b33e4.appspot.com",
  messagingSenderId: "302347022491",
  appId: "1:302347022491:web:fe28afb4cd70ff3a8b563e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
