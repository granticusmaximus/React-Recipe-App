import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const fb_Config = {
    apiKey: "AIzaSyAXAqjXniaZSH8WcAL8X_zP9ApTzvGYk9Y",
    authDomain: "recipe-app-9831b.firebaseapp.com",
    projectId: "recipe-app-9831b",
    storageBucket: "recipe-app-9831b.appspot.com",
    messagingSenderId: "684953099983",
    appId: "1:684953099983:web:4603993fa1c42d93cde1ba",
    measurementId: "G-HVRC7PFJPW"
};

const app = initializeApp(fb_Config);
const db = getFirestore(app);

export {
    app,
    db,
};