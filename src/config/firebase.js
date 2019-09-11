import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  production: {
    apiKey: 'AIzaSyBB5Nvgpl-YZOXW5lupTAcQE52gfiafO38',
    authDomain: 'family-assistant-dev.firebaseapp.com',
    databaseURL: 'https://family-assistant-dev.firebaseio.com',
    projectId: 'family-assistant-dev',
    storageBucket: 'family-assistant-dev.appspot.com',
    messagingSenderId: '928402288765',
    appId: '1:928402288765:web:e871e804e8b26a34158114',
  },
  development: {
    apiKey: 'AIzaSyBB5Nvgpl-YZOXW5lupTAcQE52gfiafO38',
    authDomain: 'family-assistant-dev.firebaseapp.com',
    databaseURL: 'https://family-assistant-dev.firebaseio.com',
    projectId: 'family-assistant-dev',
    storageBucket: 'family-assistant-dev.appspot.com',
    messagingSenderId: '928402288765',
    appId: '1:928402288765:web:e871e804e8b26a34158114',
  },
};

export const firebaseApp = firebase.initializeApp(
  process.env.NODE_ENV !== 'production' ? firebaseConfig.development : firebaseConfig.production,
);

export const GOOGLE_AUTH_PROVIDER = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
