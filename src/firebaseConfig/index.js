import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC7Fl5FZqj_Tg4dL4kDOjnQLbK5u0QvsMI",
    authDomain: "englishgrammar-ec8d9.firebaseapp.com",
    databaseURL: "https://englishgrammar-ec8d9.firebaseio.com",
    projectId: "englishgrammar-ec8d9",
    storageBucket: "englishgrammar-ec8d9.appspot.com",
    messagingSenderId: "24296879788",
    appId: "1:24296879788:web:957f28478cd21475f39109",
    measurementId: "G-ZNBNYN8GER"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);