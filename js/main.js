import { swiper } from "./modules/swiper.js";
import "./modules/work-hover.js";
import "./modules/modal.js";
import "./modules/burger-menu.js";
import "./modules/footer-menu.js";

const scrollToTopBtn = document.querySelector(".footer__scroll-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
