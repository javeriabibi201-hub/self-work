
/* =====================================
   CONTACT FORM
===================================== */

// Contact form select
const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get form values
        let name = document.querySelector("#name").value.trim();
        let email = document.querySelector("#email").value.trim();
        let message = document.querySelector("#message").value.trim();

        // Email subject
        let subject = encodeURIComponent("Portfolio Message from " + name);

        // Email body
        let body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage: " + message
        );

        // Open email application
        window.location.href =
            "mailto:javeriabibi201@gmail.com?subject=" +
            subject + "&body=" + body;

    });
}


/* =====================================
   LOGIN FORM
===================================== */

// Login form select
const loginForm = document.querySelector("#loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get login values
        let email = document.querySelector("#loginEmail").value.trim();
        let password = document.querySelector("#loginPassword").value;

        // Show message
        if (email && password) {

            document.querySelector("#loginMessage").innerText =
                "Login form submitted successfully!";

        }

    });
}


/* =====================================
   SIGNUP FORM
===================================== */

// Signup form select
const signupForm = document.querySelector("#signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get signup values
        let name = document.querySelector("#signupName").value.trim();
        let email = document.querySelector("#signupEmail").value.trim();
        let password = document.querySelector("#signupPassword").value;

        // Show message
        if (name && email && password) {

            document.querySelector("#signupMessage").innerText =
                "Signup form submitted successfully!";

        }

    });
}


/* =====================================
   SHOW AND HIDE PASSWORD
===================================== */

// Show password checkbox
const showPassword = document.querySelector("#showPassword");

if (showPassword) {

    showPassword.addEventListener("change", function() {

        // Select password input
        const password = document.querySelector("#loginPassword");

        // Show or hide password
        if (password) {

            if (showPassword.checked) {
                password.type = "text";
            } else {
                password.type = "password";
            }

        }

    });
}
