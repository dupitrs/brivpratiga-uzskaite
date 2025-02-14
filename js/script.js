document.addEventListener("DOMContentLoaded", function () {
    const loginBox = document.getElementById("login-box");
    const registerBox = document.getElementById("register-box");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
    const backgroundOverlay = document.querySelector(".background-overlay");

    showRegister.addEventListener("click", function (event) {
        event.preventDefault();

        // Hide login form smoothly
        loginBox.classList.remove("active");
        loginBox.classList.add("hidden");

        setTimeout(() => {
            // Show register form smoothly
            registerBox.classList.remove("hidden");
            registerBox.classList.add("active");
            backgroundOverlay.classList.add("blurred-bg"); // Blur the background
        }, 100);
    });

    showLogin.addEventListener("click", function (event) {
        event.preventDefault();

        // Hide register form smoothly
        registerBox.classList.remove("active");
        registerBox.classList.add("hidden");

        setTimeout(() => {
            // Show login form smoothly
            loginBox.classList.remove("hidden");
            loginBox.classList.add("active");
            backgroundOverlay.classList.remove("blurred-bg"); // Unblur the background
        }, 100);
    });
});


