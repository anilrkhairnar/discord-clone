// Select elements
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("mob-nav");

// Click event on menu button
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  nav.classList.remove("hidden");
  nav.classList.add("flex");
});

// Click event on close button
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  nav.classList.remove("flex");
  nav.classList.add("hidden");
});
