// let smoothscroll=()=>{
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('.main'),
//         smooth: true
//     });
    
// }



// smoothscroll();

   
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

let sliding_course=()=>{
    let button1=document.querySelector(".left");
    let button2=document.querySelector(".right");
    button1.addEventListener('click',(e)=>{
    
        document.querySelector(".course_slider").scrollLeft += 300;
    })
    button2.addEventListener('click',(e)=>{
        document.querySelector(".course_slider").scrollLeft -= 300;
    })
}
sliding_course();
let check=0
let sliding_instructor=()=>{
    let button1=document.querySelector(".ins_left");
    let button2=document.querySelector(".ins_right");
    
    button1.addEventListener('click',(e)=>{
       
    
        document.querySelector(".intruc_slider").scrollLeft = 0;
        

    
        document.querySelector(".intruc_slider").scrollLeft += 1160;

    
    })
    button2.addEventListener('click',(e)=>{
        document.querySelector(".intruc_slider").scrollLeft -= 1160;
    })
}
sliding_instructor();

let landingpage_animation=()=>{

  let tl=gsap.timeline();
//   tl.from("#navber",{
//     top:-300,
//     duration:1
    
//   })
  tl.from("#navber",{
    top:-200,
    duration:1
  })
  .from(".introduction",{
   left:-100,
   duration:1,
   opacity:0 
  })

gsap.from(".hero_section .intro .facility",{
    left:-100,
    duration:1,
    opacity:0 ,
    delay:.5
   })
   
   gsap.to(".main .hero_section .buttons",{
      stagger:1,
      scale:1,
      opacity:1,
      delay:1
   })

   gsap.to(".main .hero_section .intro_img img",{
    scale:1,
    duration:1.3
   })


}
landingpage_animation();

let Image_hover=()=>{
    document.querySelector(".after_brand").addEventListener('mouseover',()=>{
        setTimeout(()=>{
            gsap.to(".after_brand .first_one .image img",{
                scale:1,
                duration:.7
                
            })
          gsap.to(".after_brand .second_one .image img",{
            scale:1,
            duration:.7
    
          })
            
        },1000)
        
    })
}
Image_hover();

// document.querySelector("#button1").addEventListener('click',(e)=>{
//     if(1){
//         console.log("user present here")
//     }
//     else{
//         console.log("not present")
//     }
// })



let signout=()=>{
    

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is present ");
        console.log(user);
        signOut(auth);
        let logout=document.querySelector(".logout");
        logout.className="dashboard";
        logout.innerHTML=`<a href="signIn.html" style="text-decoration: none; color: rgb(252, 251, 251);"><b>Log In</b></a>`;
        



        console.log("user is signout ");


    
        // ...
      } else {
        // User is signed out
        console.log("user is not present");
        console.log(user);
        // ...
      }
    });
      }
      let func=()=>{
        alert("log out first");

      }
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      let logout=document.querySelector(".dashboard");
      let profile_button=document.querySelector(".profile");
      let sign_up_but=document.querySelector(".signIn a");

      logout.className="logout";
      logout.innerHTML="<b>log out</b>";
      profile_button.innerHTML=`${user.email[0].toUpperCase()}`;
      profile_button.style.visibility= "visible";
      sign_up_but.href="#";
      
      

      
      sign_up_but.addEventListener('click',func)



      logout.addEventListener('click',signout);

      console.log(user,user.email[0]);




      


      // ...
    } else {
      // User is signed out

      console.log('user is not here ')
      profile_button.style.visibility= "hidden";
      let sign_up_but=document.querySelector(".signIn a");
      sign_up_but.href="signup.html";
      sign_up_but.removeEventListener('click',func)




      // ...
    }
  });


  //profile button click funtionality
  let profile_button=document.querySelector(".profile");
  let manu_check=0;
  let profile_click=()=>{
    let manu=document.querySelector(".profile_manu");

    if(manu_check==0){

      gsap.to(manu,{
        height:130,
        visibility: "visible"


      })
      manu_check=1;
    }
    else{

      gsap.to(manu,{
        height:0,
        visibility: "hidden"


      })
      manu_check=0;
    }

  }
  profile_button.addEventListener('click',profile_click);

  

