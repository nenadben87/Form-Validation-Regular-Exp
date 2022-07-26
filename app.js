
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('password').addEventListener('blur', validatePassword);
document.getElementById('zipcode').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// Event Listeners
document.getElementById('password').addEventListener('keydown',showPasswordStrength);

document.querySelector('.btn-submit').addEventListener('click',validateSubmition);

document.addEventListener('DOMContentLoaded',clearFields);

// Validation of Regular Expressions
function validateName() {
  const reg = /^[a-zA-Z]{4,10}$/;
  const name = document.getElementById('name');
  const invalid = document.querySelector('.invalid-name');

  if(!reg.test(name.value)) {
    invalid.style.display = 'flex';
    name.style.borderColor = 'red';
  } else {
    invalid.style.display = 'none';
    name.style.borderColor = 'green';
  }
}

function validatePassword() {
  const reg = /[a-zA-Z0-9]{5,}/;
  const password = document.getElementById('password');
  const invalid = document.querySelector('.invalid-password'); 

  if(!reg.test(password.value)) {
    invalid.style.display = 'flex';
    password.style.borderColor = 'red';
  } else {
    invalid.style.display = 'none';
    password.style.borderColor = 'green';
  }

}

function validateZip() {
  const reg = /^[0-9]{5}$/;
  const zipcode = document.getElementById('zipcode');
  const invalid = document.querySelector('.invalid-zip'); 

  if(!reg.test(zipcode.value)) {
    invalid.style.display = 'flex';
    zipcode.style.borderColor = 'red';
  } else {
    invalid.style.display = 'none';
    zipcode.style.borderColor = 'green';
  }
}

function validateEmail() {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById('email');
  const invalid = document.querySelector('.invalid-email'); 

  if(!reg.test(email.value)) {
    invalid.style.display = 'flex';
    email.style.borderColor = 'red';
  } else {
    invalid.style.display = 'none';
    email.style.borderColor = 'green';
  }
}

function validatePhone() {
  const reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  const phone = document.getElementById('phone');
  const invalid = document.querySelector('.invalid-phone'); 

  if(!reg.test(phone.value)) {
    invalid.style.display = 'flex';
    phone.style.borderColor = 'red';
  } else {
    invalid.style.display = 'none';
    phone.style.borderColor = 'green';
  }
}

// Function for showing password strength
function showPasswordStrength() {
  const password = document.getElementById('password');
  const passwordStrength = document.querySelector('.password-strength');
  const strengthLine = document.querySelector('.strength-line');

  if(password.value.length >= 5 && password.value.length <= 8) {
    passwordStrength.classList.add('weak-password');
    passwordStrength.textContent = 'Weak Password';
    strengthLine.classList.add('weak-password-div')
    
 } else {
    passwordStrength.classList.remove('weak-password')
    strengthLine.classList.remove('weak-password-div')
 }

 if(password.value.length >= 9 && password.value.length <= 11) {
   
  passwordStrength.classList.add('medium-password');
  passwordStrength.textContent = 'Medium Password';
  strengthLine.classList.add('medium-password-div');
 } else {
  passwordStrength.classList.remove('medium-password');
  strengthLine.classList.remove('medium-password-div');
 }

 if(password.value.length >= 12) {
   
  passwordStrength.classList.add('strong-password');
  passwordStrength.textContent = 'Strong Password';
  strengthLine.classList.add('strong-password-div');
 } else {
  passwordStrength.classList.remove('strong-password');
  strengthLine.classList.remove('strong-password-div');
 }
  
}

// Validation for form submition
function validateSubmition(e) {
  const btnSubmit = document.querySelector('.btn-submit')

  const regName = /^[a-zA-Z]{4,10}$/;
  const name = document.getElementById('name');
  const invalidName = document.querySelector('.invalid-name');

  if(!regName.test(name.value)) {
    
    invalidName.style.display = 'flex';
    name.style.borderColor = 'red';
    e.preventDefault();
  } else {
    name.value = ''
  }

  const regPassword = /[a-zA-Z0-9]{5,}/;
  const password = document.getElementById('password');
  const invalidPassword = document.querySelector('.invalid-password'); 

  if(!regPassword.test(password.value)) {
    
    invalidPassword.style.display = 'flex';
    password.style.borderColor = 'red';
    e.preventDefault();
  } else {
    password.value = '';
  }

  const regZip = /^[0-9]{5}$/;
  const zipcode = document.getElementById('zipcode');
  const invalidZip = document.querySelector('.invalid-zip'); 

  if(!regZip.test(zipcode.value)) {
    
    invalidZip.style.display = 'flex';
    zipcode.style.borderColor = 'red';
    e.preventDefault();
  } else {
    zipcode.value = '';
  }

  const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const email = document.getElementById('email');
  const invalidEmail = document.querySelector('.invalid-email'); 

  if(!regEmail.test(email.value)) {
    
    invalidEmail.style.display = 'flex';
    email.style.borderColor = 'red';
    e.preventDefault();
  } else {
    email.value = '';
  }

  const regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const phone = document.getElementById('phone');
  const invalidPhone = document.querySelector('.invalid-phone'); 

  if(!regPhone.test(phone.value)) {
    
    invalidPhone.style.display = 'flex';
    phone.style.borderColor = 'red';
    e.preventDefault();
  } else {
    phone.value = '';
  }

}

// Clear all fields after reloading the page
function clearFields() {
document.getElementById('name').value = ''
document.getElementById('password').value = '';
document.getElementById('zipcode').value = '';
document.getElementById('email').value = '';
document.getElementById('phone').value = '';
}

