// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdtu6gr14FyTH2jwBbWwVTaEBECLfArTc",
  authDomain: "login-form-a7a94.firebaseapp.com",
  projectId: "login-form-a7a94",
  storageBucket: "login-form-a7a94.appspot.com",
  messagingSenderId: "773298712236",
  appId: "1:773298712236:web:3e4a195f71e6aaad69b909",
  measurementId: "G-REB104YBT3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
function signUp(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        alert(user);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(errorMessage);
  });
}