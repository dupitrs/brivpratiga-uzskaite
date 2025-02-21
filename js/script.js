document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById("login-box");
    const registerBox = document.getElementById("register-box");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
    const backgroundOverlay = document.querySelector(".background-overlay");

    showRegister.addEventListener("click", function (event) {
        event.preventDefault();

        // login paslepsana
        loginBox.classList.remove("active");
        loginBox.classList.add("hidden");

        setTimeout(() => {
            // register paslepsana
            registerBox.classList.remove("hidden");
            registerBox.classList.add("active");
            backgroundOverlay.classList.add("blurred-bg"); // miglains bg
        }, 100);
    });

    showLogin.addEventListener("click", function (event) {
        event.preventDefault();

        
        registerBox.classList.remove("active");
        registerBox.classList.add("hidden");

        setTimeout(() => {
            
            loginBox.classList.remove("hidden");
            loginBox.classList.add("active");
            backgroundOverlay.classList.remove("blurred-bg"); 
        }, 100);
    });
});


