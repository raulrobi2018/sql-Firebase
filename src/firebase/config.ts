import firebase from 'firebase/app';

// Habilita todas las funcionalidades de Firestore
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbQGfoh0ooamRm7FvlM0llDfSEX2U0p0w",
    authDomain: "sql-demos-f7fdb.firebaseapp.com",
    projectId: "sql-demos-f7fdb",
    storageBucket: "sql-demos-f7fdb.appspot.com",
    messagingSenderId: "993438572321",
    appId: "1:993438572321:web:499262616d383e66bda860"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log('Firebase configurado');

// Exporto la base de datos para utilizarla en otros archivos para 
//realizar tareas en la base de datos
export default firebase.firestore();