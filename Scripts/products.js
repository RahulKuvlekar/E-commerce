const starIcons = document.querySelectorAll(".rating-component input");
const outputDisplay = document.getElementById("display-rating");
const clearBtn = document.getElementById("clear-rating");

const preloader = document.getElementById("preloader");
const products = document.querySelector(".main-section");

const showFilter = document.getElementById("show-filter");
const hideFilter = document.getElementById("hide-filter");
const sidebar = document.querySelector(".sidebar");

starIcons.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.value === "5") {
      outputDisplay.innerHTML = `${event.target.value + `&nbsp;`} | 5`;
      return;
    }
    outputDisplay.innerHTML = `${event.target.value + `&plus;`} | 5`;
  });
});

clearBtn.addEventListener("click", () => {
  starIcons.forEach((element) => {
    element.checked = false;
    outputDisplay.innerHTML = `-- | 5`;
  });
});

setTimeout(() => {
  preloader.classList.remove("active");
  products.classList.add("active");
}, 1500);

const showFiltersHandler = () => {
  sidebar.classList.toggle("active");
  showFilter.classList.toggle("deactive");
  hideFilter.classList.toggle("deactive");
};

showFilter.addEventListener("click", showFiltersHandler);
hideFilter.addEventListener("click", showFiltersHandler);
