
/* MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});


/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });

});


/* TYPING ANIMATION */

const typingText = document.querySelector(".typing-text");

const roles = [
    "Java Developer",
    "Backend Developer",
    "Software Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentRole = roles[roleIndex];

    if (deleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;
    }

    let speed = deleting ? 55 : 100;

    if (!deleting && characterIndex === currentRole.length) {

        deleting = true;
        speed = 1200;

    } else if (deleting && characterIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typeAnimation, speed);
}

typeAnimation();


/* FOOTER YEAR */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* EXPERIENCE PASSWORD PROTECTION */

(function () {

    // Replace YOUR_PASSWORD with your own password
    const correctPassword = "Sw@Thi7187";

    const passwordBox = document.getElementById("passwordBox");
    const experienceContent =
        document.getElementById("experienceContent");

    const passwordInput =
        document.getElementById("experiencePassword");

    const passwordError =
        document.getElementById("passwordError");

    const unlockButton =
        document.getElementById("unlockExperience");

    const lockButton =
        document.getElementById("lockExperience");

    const togglePassword =
        document.getElementById("togglePassword");


    // UNLOCK EXPERIENCE

    function unlockExperience() {

        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {

            passwordBox.hidden = true;
            experienceContent.hidden = false;

            passwordError.textContent = "";
            passwordInput.value = "";

        } else {

            passwordError.textContent =
                "Incorrect password. Please try again.";

            passwordInput.value = "";
            passwordInput.focus();

        }
    }


    unlockButton.addEventListener("click", unlockExperience);


    // ENTER KEY SUPPORT

    passwordInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            unlockExperience();
        }

    });


    // LOCK EXPERIENCE AGAIN

    lockButton.addEventListener("click", function () {

        experienceContent.hidden = true;
        passwordBox.hidden = false;

        passwordInput.value = "";
        passwordError.textContent = "";

        passwordInput.type = "password";

        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

    });


    // SHOW / HIDE PASSWORD

    togglePassword.addEventListener("click", function () {

        const isPassword =
            passwordInput.type === "password";

        passwordInput.type =
            isPassword ? "text" : "password";

        togglePassword.innerHTML = isPassword
            ? '<i class="fa-solid fa-eye-slash"></i>'
            : '<i class="fa-solid fa-eye"></i>';

    });

})();
