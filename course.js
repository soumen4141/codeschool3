console.log("course");

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

 let user=auth.currentUser;

 console.log(user);
// localStorage.setItem(value, `${data}`);
// let getvalue= localStorage.getItem(value);
 
 let add=document.querySelectorAll(".course_buy");

//  let  course_data={



//   }

//console.log(localStorage.getItem("course_data"));
// if(localStorage.getItem("course_data")!=='null'){

//     let cart_arr=JSON.parse(localStorage.getItem("course_data"));


// }else{


// let cart_arr=[]
// }
// let data=JSON.stringify(arr);

// let arr_data=JSON.parse(data);



let cart_arr=[]



let add_localstorage=(user)=>{

//      let local_data=JSON.parse(localStorage.getItem("myitem")).concat(cart_arr);
//    let data=JSON.stringify(local_data);
   
//     localStorage.setItem("myitem", data);
//     console.log(user)

if(localStorage.getItem(user.uid)==null){
    localStorage.setItem(user.uid, "[]");

    
}
else{
    
let local_data=JSON.parse(localStorage.getItem(user.uid)).concat(cart_arr);
let data=JSON.stringify(local_data);

 localStorage.setItem(user.uid, data);
}

// let local_data=JSON.parse(localStorage.getItem(user.uid)).concat(cart_arr);
// let data=JSON.stringify(local_data);

//  localStorage.setItem(user.uid, data);
 
}

let show_cart=(user)=>{
    let mycart=document.querySelector("#mycart")
    console.log(user)

    mycart.addEventListener('click',()=>{

        add_localstorage(user);
        location.href = "mycart.html";


    })


}


// console.log(arr_data[0].name);
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
     
    
document.querySelectorAll(".box").forEach(element => {

  // let cousre_buy=element.querySelector(".course_buy");

  // let course_not_buy=0;


    
  element.querySelector(".course_buy").addEventListener('click',()=>{
    let data=element.querySelector("p");
   let data2=element.querySelector(".course_price b")

     let obj={}

    obj.course_name=data.innerHTML;
    obj.course_price=data2.innerHTML;

   cart_arr.push(obj);
   
   
  



   

   })
    

    
  
    
});



show_cart(user);


    
      // ...
    } else {
      // User is signed out

      document.querySelectorAll(".course_buy").forEach(elem=>{

       elem.addEventListener('click',()=>{


        alert("please log in  first");
       })

      })

    }
  });

  
