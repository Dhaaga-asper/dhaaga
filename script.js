// const bar = document.getElementById('bar');
// const close = document.getElementById('bar');
// const nav = document.getElementById('bar');

// if (bar) {
//     bar.addEventListener('click',()=> {
//         nav.classList.add('active');
//     })
// }

// if (close) {
//     close.addEventListener('click',()=> {
//         nav.classList.remove('active');
//     })
// }

// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navbar");
const navLink = document.querySelectorAll("#nav-link");

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);
function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
}

// scroll to top functionality
scrollUp.addEventListener("click", () => {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
});
});

