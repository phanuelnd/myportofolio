
function validation(){
  
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

if(message.length<10){
  alert('Provide text more than 10 characters');
// document.getElementById("falseEmail").innerHTML="Email field cannot be empty";
}


}