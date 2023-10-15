const password = document.getElementById('password')
const check = document.getElementById('check1')

check.onclick = togglePassword;

function togglePassword(){
    
    if (check.checked){
        password.type = 'text'
      } else {
        password.type = 'password'
      }
    }

    const confirmpassword = document.getElementById('confirmpassword')
const check2 = document.getElementById('check2')

check2.onclick = togglePasswords;


function togglePasswords(){
    
    if (check2.checked){
        confirmpassword.type = 'text'
      } else {
        confirmpassword.type = 'password'
      }
    }

console.log(confirmpassword.value)