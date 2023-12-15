    
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut ,sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
 

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCIk4pKU2P_nMxjLpBBpSNmcawbpctlufY",
   authDomain: "fir-1-9a604.firebaseapp.com",
   projectId: "fir-1-9a604",
   storageBucket: "fir-1-9a604.appspot.com",
   messagingSenderId: "155387087610",
   appId: "1:155387087610:web:4f83ef5af2ec5083c7d743"
 };


 

 //--------account creation javascript code start--------
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 let email=document.getElementById("Email");
let password=document.getElementById("Pass");
let login_title_sign_in=document.querySelector("#login_h1")



 const create_accnt=()=>{


  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     alert('please log out first');

  //     // ...
  //   } else //{


      

createUserWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
//after adding user information  into database ......you can do whatever you want over here.
console.log("account creation is completed ");

const user = userCredential.user;
console.log(userCredential,user);
let em=document.getElementById("Email");
let ps=document.getElementById("Pass");

console.log(em);
em.value='';
ps.value='';
if(user){
    alert("account created succussfully");
    location.href = "index.html";

}




sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
    console.log("varification mail sent")
  });



})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message; 
console.log("in valid credentials");

});

     
   // }
 // });
  











}

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//      alert("log out first")
//   } else {
//     // User is signed out

//     console.log('user is not here ')
    
      
// let button1=document.querySelector(".Sign_up");
// button1.addEventListener('click',create_accnt);



//     // ...
//   }
// });

let button1=document.querySelector(".Sign_up");
button1.addEventListener('click',create_accnt);



 //--------account creation javascript code end--------

 //--------account log in code start----------------

//  function signin(){



// signInWithEmailAndPassword(auth, email.value, password.value)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log("account log in");
//     console.log(user);
//     console.log(userCredential);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });




//  }

//  let button2=document.getElementsByClassName("Log_in");

//  button2[0].addEventListener('click',signin);
//   //--------account log in code start----------------
//   //-----------checkingh user existance--------------

//   function signout(){
    

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log("user is present ");
//     console.log(user);
//     signOut(auth);

//     // ...
//   } else {
//     // User is signed out
//     console.log("user is not present");
//     console.log(user);
//     // ...
//   }
// });
//   }

//   let button3=document.getElementsByClassName("Log_out");
//   button3[0].addEventListener('click',signout);







//  console.log("soumen patra is here");
 


