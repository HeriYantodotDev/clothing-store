// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCIDDP8KNKHcdH-UrIf0NDcR-nPz3llAdo',
  authDomain: 'clothing-store-heriyantodotdev.firebaseapp.com',
  projectId: 'clothing-store-heriyantodotdev',
  storageBucket: 'clothing-store-heriyantodotdev.appspot.com',
  messagingSenderId: '467954694042',
  appId: '1:467954694042:web:bc853f58d3e62d13e1ec23',
  measurementId: 'G-6K15B5VPYJ',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
