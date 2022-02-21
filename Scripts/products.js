const starIcons = document.querySelectorAll(".rating-component input");
const outputDisplay = document.getElementById("display-rating");
const clearBtn = document.getElementById("clear-rating");

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
