import firebase from 'firebase';


var firebaseConfig = { 
    apiKey: "AIzaSyCrQePt4Tey0ZFYyCn5E8nQ0WA77QyAuN0", 
    authDomain: "equipment-list-309411.firebaseapp.com", 
    projectId: "equipment-list-309411", 
    storageBucket: "equipment-list-309411.appspot.com", 
    messagingSenderId: "185947161618", 
    appId: "1:185947161618:web:65424bce89e81518c104cb", 
    measurementId: "G-YKLD7ETL9D" 
}; 

firebase.initializeApp(firebaseConfig); 
firebase.analytics(); 
const db=firebase.firestore();

export default db;