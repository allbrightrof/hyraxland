/*const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", () => {
navbarMenu.classList.toggle("active");
});
*/

const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", () => {
  // Toggle the 'active' class when the menu is clicked
  toggleButton.classList.toggle("active"); // Toggle "X" effect
  navbarMenu.classList.toggle("active"); 
});
