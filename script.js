function validateForm() {
  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");
  const email = document.querySelector("#emailid");
  const password = document.querySelector("#password");
  const cPassword = document.querySelector("#cpassword");
  const mobile=document.querySelector("#mobile")

  //   console.log(firstName.value);
  const namecheck = /^[A-Za-z.]{3,10}$/;
  const lastnamecheck = /^[A-Za-z.]{3,20}$/;
  const emailCheck = /[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-z.]{3,6}/;
  const mobileCheck=/91[0-9]{10}/

  // if(firstName.value.length<=3){
  //     document.querySelector("#nameerror").innerHTML="Name Is too Short"
  // }
  // if(firstName.value.length>4){
  //     document.querySelector("#nameerror").innerHTML=""
  // }

//   firstname check
  if (namecheck.test(firstName.value)) {
    document.querySelector("#nameerror").innerHTML = "";
  } else {
    document.querySelector("#nameerror").innerHTML = "Invalid";
  }

//   lastnamecheck
  if (lastnamecheck.test(lastName.value)) {
    document.querySelector("#lastnameerror").innerHTML = "";
  } else {
    document.querySelector("#lastnameerror").innerHTML = "Invalid";
  }

  //   emailcheck
  if (emailCheck.test(email.value)) {
    document.querySelector("#emailerror").innerHTML = "";
  } else {
    document.querySelector("#emailerror").innerHTML = "Invalid Email";
  }

//   mobilecheck
if (mobileCheck.test(mobile.value)) {
    document.querySelector("#mobileerror").innerHTML = "";
  } else {
    document.querySelector("#mobileerror").innerHTML = `Invalid number <small>(number should be indian (91))`;
  }

//   passwordlength check
  if (password.value.length <= 6) {
    document.querySelector("#passworderror").innerHTML ="password Is too Short";
  } else {
    document.querySelector("#passworderror").innerHTML = "";
  }

// confirm password check
  if (password.value == cPassword.value) {
    document.querySelector("#capasserror").innerHTML = "";
  } else {
    document.querySelector("#capasserror").innerHTML = "Password Shoud Match";
  }

//   const submit = document.querySelector("button");
// submit.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("here");
//   if(validateForm()==true){
//       alert("pass")
//   }
//   else {
//       alert("fail")
//   }
// });
}

