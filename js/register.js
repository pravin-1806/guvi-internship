function validate()
{
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const number = document.getElementById('number');

form.addEventListener('submit', (event) => { event.preventDefault();

validate();

})
const validate = () => {
const firstnameVal = username.value.trim();
const lastnameVal = email.value.trim(); 
const emailVal= phone.value.trim();
const passwordVal = password.value.trim();
const repasswordVal = repassword.value.trim();
const numberVal = number.value.trim();

//validate username

if (emailVal=="") {
    setErrorMsg(email, 'email cannot be blank'); 
}else if (!is Email (emailVal)) { 
    setErrorMsg(emailVal, 'Not a valid Email');
}else { 
    setSuccessMsg(email);
}

//validate number

if (numberVal=="") {
    setErrorMsg(number, 'number cannot be blank'); 
}else if (phoneVal.length!=10) { 
    setErrorMsg(number, 'Not a valid number');
}else { 
    setSuccessMsg(number);
}

//validate password

if (passwordVal = "") {
    setErrorMsg(password, 'password cannot be blank');
} else if (passwordVal.length <= 5) {
    setErrorMsg(password, 'Minimum 6 char');
} else {
    setSuccessMsg(password);
}

//validate repassword

if (cpasswordVal == "") {
    setErrorMsg(repassword, 'confirm password cannot be blank'); 
} else if (passwordVal != cpasswordVal) { 
    setErrorMsg(repassword, 'password are not matching');
} else {
    setSuccessMsg(repassword);
}


}

}
