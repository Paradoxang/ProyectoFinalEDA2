import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyA4aDmLiSgNlj8WQXhyryE-k_qX56i08wc",
    authDomain: "thefanchoice.firebaseapp.com",
    projectId: "thefanchoice",
    storageBucket: "thefanchoice.firebasestorage.app",
    messagingSenderId: "514235624404",
    appId: "1:514235624404:web:715e65f091f7d0529f8441"


};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth}
