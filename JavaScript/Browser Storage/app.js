let cont = document.getElementById("container");
let msg = document.getElementById("msg")

function isUserLoggedIn(){
  if(localStorage.getItem("username") === null){
    console.log("lets log in")
    return false
  }
  return true
}

function addUser(){
  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  //Set Value And LocalStorage
  
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  // alert("Your details are recorded");
}

function showContainer(){
  if(!isUserLoggedIn()){
    cont.style.display = "flex";
  }

}

function hideContainer(){
  cont.style.display = "none";
}

function showMsg(){
  msg.style.display = "flex"
}

function hideMsg(){
  if(!isUserLoggedIn){
    msg.style.display = "none"
  }
  
}

function deleteElements(){
  localStorage.removeItem('username')
  localStorage.removeItem('email')
  localStorage.removeItem('password')
}

// b.addEventListener("click",()=>{


//   if(!isUserLoggedIn){
//     addUser()
//   }

//   hideContainer()
//   showMsg()
// })

// logout.addEventListener("click",()=>{
//   hideMsg()
//   showContainer()
// })


//Get All Value

let b = document.getElementById('submit_btn');
let logout = document.getElementById('logout');

if (isUserLoggedIn()) {
  // console.log("if block", isUserLoggedIn());
  hideContainer()
  showMsg()
  
}else{
  console.log("else block", isUserLoggedIn);
  showContainer()
  hideMsg()
}

//Now Start SendBtn
b.addEventListener('click', () => {

  if(!isUserLoggedIn){
    
    showContainer()
    hideMsg()
    
  }else{
    addUser()
    hideContainer()
    showMsg()
    alert(`Hello ${localStorage.getItem("username")}`)
  }
});

logout.addEventListener('click', () => {
  deleteElements()
  hideMsg()
  showContainer()
});