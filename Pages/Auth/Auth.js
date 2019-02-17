 // ******************VARIABLES****************

 let l_email=document.getElementById("l-email");
 let l_password=document.getElementById("l-password");
 let l_btn=document.getElementById("l-btn");

 let s_email=document.getElementById("s-email");
 let s_password=document.getElementById("s-password");
 let s_btn=document.getElementById("s-btn");

 let wrap=document.getElementById("wrap");
 let loader=document.getElementById("load");

 let loginForm=document.getElementById("loginForm");
 let signupForm=document.getElementById("signupForm");




 // ******************LISTENERS**************

 signupForm.addEventListener("submit",signup);
 loginForm.addEventListener("submit",login);




 //******************* */FUNCTIONS************************

 
 function login(e)
 {
   e.preventDefault();
   loader.style.display="block";
   wrap.style.filter = "blur(2px)";
   let obj=
   {
    email:l_email.value,
    password:l_password.value
   }
  
   
   firebase.auth().signInWithEmailAndPassword(l_email.value, l_password.value)
   .then(()=>
   {
     console.log("daaan")
     console.log(obj)
     loader.style.display="none";
     wrap.style.filter = "blur(0px)";
     location.assign("../SubAdd/SubAdd.html")


    //  location.assign("../AdminDashboard/AdminDashboard.html")
   }
   
   ).catch(error=>{
     // Handle Errors here.
     loader.style.display="none";
     wrap.style.filter = "blur(0px)";
     var errorCode = error.code;
     var errorMessage = error.message;
     // ...
     console.log(errorMessage)
   });
   
 }


 function signup(e)
 {

  e.preventDefault();
  loader.style.display="block";
  wrap.style.filter = "blur(2px)";

  
  let obj=
   {
    email:s_email.value,
    password:s_password.value
   }
   console.log(obj)

   firebase.auth().createUserWithEmailAndPassword(s_email.value, s_password.value)
   .then((a)=>
   {
     console.log(a)
     loader.style.display="none";
     wrap.style.filter = "blur(0px)";

    firebase.database().ref("users/").child(a.user.uid).set(obj);
   })
   .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    loader.style.display="none";
    wrap.style.filter = "blur(0px)";
    console.log(errorMessage)
    // ...
  });


 }

//  ****************SWITCH FORMS******************


function signupShow()
{
signupForm.style.display="block";
loginForm.style.display="none";
}

function loginShow()
{
    signupForm.style.display="none";
    loginForm.style.display="block";
}
