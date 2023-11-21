// import { initializeApp } from "firebase/app";
// import { getApps, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = process.env.FIREBASE_CLIENT;

// const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

export { firebaseConfig}