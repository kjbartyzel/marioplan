import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const fbConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(fbConfig);
firebase.firestore().settings({
    timestampsInSnapshots: true
});

export default firebase;