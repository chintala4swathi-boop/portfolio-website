
/* MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

});


/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");

    });

});


/* SHOW OR HIDE EMAIL */

const emailBtn = document.getElementById("emailBtn");
const emailDisplay = document.getElementById("emailDisplay");

emailBtn.addEventListener("click", function () {

    emailDisplay.classList.toggle("show");

    const isVisible = emailDisplay.classList.contains("show");

    emailBtn.setAttribute("aria-expanded", isVisible);

});


/* AUTOMATIC FOOTER YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();
