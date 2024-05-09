import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyCTNxj3R4fgKhK6G5coLQ4BVD61tAZFB8o",
  //   authDomain: "prose-paradise.firebaseapp.com",
  //   projectId: "prose-paradise",
  //   storageBucket: "prose-paradise.appspot.com",
  //   messagingSenderId: "866821077868",
  //   appId: "1:866821077868:web:f61ef63ed7224585265149",

  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
