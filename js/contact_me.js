var erronOfUsername=document.getElementById("nerror");
var emailError=document.getElementById("email-error");
var phoneError=document.getElementById("phone-error");
var messageError=document.getElementById("message-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name=document.getElementById('contact_name').value;
    if(name.length == 0){
        nerror.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nerror.innerHTML = 'Write both names';
        return false;
    }
    nerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    var phone=document.getElementById('contact_phone').value;
    if(phone.length !== 10){
        perror.innerHTML = 'Invalid Phone number';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        perror.innerHTML = 'Only numbers';
        return false;
    }
    perror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;  
}

function validateEmail(){
    var email=document.getElementById('contact_email').value;

    if(email.length == 0){
        emailerror.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML = 'Email Invalid';
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message=document.getElementById('message').value;
    var required = 30
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        senderror.style.display = 'block';
        senderror.innerHTML = 'Please fill red labeled field before press Submit button';
        setTimeout(function(){ senderror.style.display = 'none';}, 4100);
        return false;
    }
}

