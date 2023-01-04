import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGRK5ua10VARk-EbMT_NXnUAyiYnBDxG8",
  authDomain: "jukebox-audio-player-react.firebaseapp.com",
  projectId: "jukebox-audio-player-react",
  storageBucket: "jukebox-audio-player-react.appspot.com",
  messagingSenderId: "1065121612559",
  appId: "1:1065121612559:web:eb3e5eedd72c772d4c747a",
  measurementId: "G-TH47FK0EVM"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()