const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
var email1= document.getElementById('emailValue1');
var password1= document.getElementById('passwordValue1');
var email2= document.getElementById('emailValue2');
var password2= document.getElementById('passwordValue2');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
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

	function signIn(){
		auth.signInWithEmailAndPassword(email2.value,password2.value).then(function(){
			let user=auth.currentUser;
			alert("Welcome Back ! "+user.email);
		}).catch(function(error){
			var errorCode=error.code;
			var errorMessage=error.message;
			window.alert("Error : "+errorMessage);
		});
	}
	function createUser(){
		auth.createUserWithEmailAndPassword(email1.value,password1.value).then(function(){
			let user = auth.currentUser;
			alert('Hi! '+user.email+". Your profile Created Successfully");
		}
		).catch(function(error){
			var errorCode=error.code;
			var errorMessage=error.message;
			window.alert("Error : "+errorMessage);
		}
		);
		
		console.log(user.email)
	}


	function signInWithProvider(){
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider)
			.then((result) => {
			
			/* @type {firebase.auth.OAuthCredential} */
			var credential = result.credential;
	
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = credential.accessToken;
			// The signed-in user info.
			
			alert('Authentication Successful');
		
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