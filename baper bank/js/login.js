document.getElementById('btn-submit').addEventListener('click', function(){
    //get value from html element: email input
    const emailField = document.getElementById('user-email');
    const email =emailField.value;
//get value from html element: Password input
    const passwordField = document.getElementById('passcode');
    const password = passwordField.value;

    if( email === 'ayonbs@gmail.com' && password === '123456'){
        window.location.href = 'bank.html';
    }
    else{
        alert("invalid user")
    }

})