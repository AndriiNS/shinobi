const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");
const links = document.querySelectorAll(".header__link");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  list.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    list.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
