<script setup>
import './assets/logreg.css';

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



</script>

<template>
  <div class="background-overlay"></div>

  <div class="login-container">
    <!-- Login Box -->
    <div id="login-box" class="login-box">
      <img src="/src/assets/mpp_logo.png" alt="MPP Logo" class="logo">
      <h2>Pieslēgties</h2>
      <form>
        <label for="email">E-pasts</label>
        <input type="email" id="email" name="email" required>

        <label for="password">Parole</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Pieslēgties</button>
      </form>
      <p class="register-link">
        Nav konta? 
        <a href="#" id="show-register">Reģistrēties</a>
      </p>
    </div>

    <!-- Registration Box -->
    <div id="register-box" class="login-box hidden">
      <img src="/src/assets/mpp_logo.png" alt="MPP Logo" class="logo">
      <h2>Reģistrācija</h2>
      <form>
        <div class="name-container">
          <div class="input-group">
            <label for="register-vards">Vārds</label>
            <input type="text" id="register-vards" name="vards" required>
          </div>

          <div class="input-group">
            <label for="register-uzvards">Uzvārds</label>
            <input type="text" id="register-uzvards" name="uzvards" required>
          </div>
        </div>

        <label for="register-email">E-pasts</label>
        <input type="email" id="register-email" name="email" required>

        <label for="register-password">Parole</label>
        <input type="password" id="register-password" name="password" required>

        <label for="confirm-password">Apstiprināt paroli</label>
        <input type="password" id="confirm-password" name="confirm-password" required>

        <button type="submit">Reģistrēties</button>
      </form>
      <p class="register-link">
        Jau ir konts? 
        <a href="#" id="show-login">Pieslēgties</a>
      </p>
    </div>
  </div>
</template>


