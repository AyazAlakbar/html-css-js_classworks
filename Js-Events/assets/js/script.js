let btn = document.getElementById("login-button");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let warning = document.getElementById("warning");
let show=document.getElementById("exampleCheck1")


btn.addEventListener("click", function() {
   

    if (emailInput.value === "" || passwordInput.value === "") {
        warning.textContent = "Boş buraxmayin!";
    } else {
        alert("Login oldunuz!");
    }
});

show.addEventListener("click", function() {
   

    if (passwordInput.type === "password" ) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});