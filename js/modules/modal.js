const modal = document.getElementById("formModal");
const openButtons = document.querySelectorAll(".js-open-form");
const closeBtn = modal.querySelector(".modal__close");
const overlay = modal.querySelector(".modal__overlay");

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

openButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
