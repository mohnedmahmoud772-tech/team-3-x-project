const signupForm= document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    let username= document.getElementById("username");
    let email= document.getElementById("email");
    let password= document.getElementById("password");
    let signupBtn= document.getElementById("signup-btn");
    let loginBtn= document.getElementById("login-btn");
    let signupForm= document.getElementById("signup-form");
    let errormsg= document.getElementById("errormsg");

    let user= username.value.trim();
    let mail= email.value.trim();
    let pass= password.value.trim();


    if(user.length   < 3){
    errormsg.textContent = "Username must be at least 3 characters long.";
    errormsg.style.opacity = 1;
    return;
}
if(user.length > 20){
    errormsg.textContent = "Username must be less than 20 characters long.";
    errormsg.style.opacity = 1;
    return;
}

if(user.includes(" ")){
    errormsg.textContent = "Username cannot contain spaces.";
    errormsg.style.opacity = 1;
    return;
}
if(mail.length < 5 || !mail.includes("@") || !mail.includes(".")){
    errormsg.textContent = "Please enter a valid email address.";
    errormsg.style.opacity = 1;
    return;
}

if(pass.length < 8){
    errormsg.textContent = "Password must be at least 8 characters long.";
    errormsg.style.opacity = 1;
    return;
}


    userData= {
        username: user,
        email: mail,
        password: pass
    };

    if(userData != null){
        console.log("successfully saved data:", userData);

    window.location.href = "home.html";
    }
    if(userData == null){
        console.log("failed to save data:", userData);
    }
    
});


