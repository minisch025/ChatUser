function togglePassword(inputId) {
    var passwordInput = document.getElementById(inputId);
    if (passwordInput.disabled) {
        return; // Ne rien faire si le champ est désactivé
    }
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const togglePassword1 = document.getElementById("togglePassword1");
const togglePassword2 = document.getElementById("togglePassword2");

if (togglePassword1 && togglePassword2) {
    togglePassword1.addEventListener("click", function () {
        togglePassword("password1");
    });

    togglePassword2.addEventListener("click", function () {
        togglePassword("password2");
        togglePassword("confirmPassword");
    });
}

// Vérifier si les éléments nécessaires existent pour les formulaires
if (document.getElementById("Btncreer-compte") && document.getElementById("BtnSe-connecter") && document.getElementById("form-connexion") && document.getElementById("form-inscription")) {
    document.getElementById("Btncreer-compte").addEventListener("click", function () {
        if (document.getElementById("form-connexion").style.display !== "none") {
            document.getElementById("form-connexion").style.display = "none";
            document.getElementById("form-inscription").style.display = "block";
        }
    });

    document.getElementById("BtnSe-connecter").addEventListener("click", function () {
        if (document.getElementById("form-inscription").style.display !== "none") {
            document.getElementById("form-inscription").style.display = "none";
            document.getElementById("form-connexion").style.display = "block";
        }
    });
}

// Appliquer le mode sombre sur toutes les pages si nécessaire
var darkModeEnabled = true; // Mettez à false si vous ne voulez pas le mode sombre sur toutes les pages

if (document.getElementById("changeColorButton") && document.querySelector("body") || darkModeEnabled) {
    const button = document.getElementById("changeColorButton");
    const body = document.querySelector("body");

    button.addEventListener("click", function () {
        if (body.classList == "") {
            body.classList.toggle("dark-tm");
        } else {
            body.classList.remove("dark-tm");
        }
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        const date = new Date();
        const currentHour = date.getHours();
        const body = document.querySelector("body");

        if ((currentHour >= 20 || currentHour < 90) && !body.classList.contains("dark-tm")) {
            body.classList.add("dark-tm");
        }
    });
}

