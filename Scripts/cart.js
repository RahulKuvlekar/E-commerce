const openModalButton = document.querySelector(".open-ChangeAddress-btn");
const openNewAddressModalButton = document.querySelector(
  ".open-AddNewAddress-btn"
);
const addNewAddressModalButton = document.querySelector(".addNewAddress-btn");

const closeModalButtons = document.querySelectorAll(".close-btn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modalChangeAddress");
const newAddressModal = document.getElementById("modalAddNewAddress");

openModalButton.addEventListener("click", () => {
  modal.classList.add("active");
  overlay.classList.add("active");
});

openNewAddressModalButton.addEventListener("click", () => {
  modal.classList.remove("active");
  newAddressModal.classList.add("active");
  overlay.classList.add("active");
});

addNewAddressModalButton.addEventListener("click", () => {
  modal.classList.add("active");
  newAddressModal.classList.remove("active");
  overlay.classList.add("active");
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("active");
    newAddressModal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  newAddressModal.classList.remove("active");
  overlay.classList.remove("active");
});
