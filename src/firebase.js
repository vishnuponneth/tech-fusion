import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4DGcAdyUC_a9HEa7v4i33Y8GvPWO_eCg",
    authDomain: "tech-fusion-7fe30.firebaseapp.com",
    projectId: "tech-fusion-7fe30",
    storageBucket: "tech-fusion-7fe30.appspot.com",
    messagingSenderId: "895106140903",
    appId: "1:895106140903:web:678e828271eab906127042"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set up Google provider
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(firebaseApp);
