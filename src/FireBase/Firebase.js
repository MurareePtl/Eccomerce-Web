
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDKHszfqDV3B8lRh8nfo80ywOpsMV89pG0",
  authDomain: "patelshop-9acfc.firebaseapp.com",
  projectId: "patelshop-9acfc",
  storageBucket: "patelshop-9acfc.appspot.com",
  messagingSenderId: "149846084697",
  appId: "1:149846084697:web:91ac5e9b8084644e89f548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth();
const db = getFirestore(app);
export{app,auth,db}