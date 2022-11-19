import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDrpS01Tb2H_haNjg6tit0uEvX8A8hhlcc",
  authDomain: "beauty-bazar.firebaseapp.com",
  projectId: "beauty-bazar",
  storageBucket: "beauty-bazar.appspot.com",
  messagingSenderId: "721407529014",
  appId: "1:721407529014:web:bf5e479f0a277df1d60897"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;