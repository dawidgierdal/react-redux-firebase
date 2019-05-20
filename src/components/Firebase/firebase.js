import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyChZeSal81QvMU0Y-U5BP3jH5goPJJeZiA",
    authDomain: "my-react-redux-firebase-b6a87.firebaseapp.com",
    databaseURL: "https://my-react-redux-firebase-b6a87.firebaseio.com",
    projectId: "my-react-redux-firebase-b6a87",
    storageBucket: "my-react-redux-firebase-b6a87.appspot.com",
    messagingSenderId: "39504766556",
    appId: "1:39504766556:web:5797684b7b44c022"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;