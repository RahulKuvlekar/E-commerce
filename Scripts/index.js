const navPills = document.querySelectorAll(".nav-pill");
const burgerMenu = document.getElementById("burgerMenu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("nav-active");
  navPills.forEach((elementTag) => {
    elementTag.classList.toggle("nav-active");
  });
});
