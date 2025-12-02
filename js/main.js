const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 200,
  centeredSlides: true,

  breakpoints: {
    0: {
      spaceBetween: 70,
      slidesPerView: 2
    },
    768: {
      spaceBetween: 150,
      slidesPerView: 2
    },
    1280: {
      spaceBetween: 200,
      slidesPerView: 3
    }
  }
});

const workItems = document.querySelectorAll(".work__item");

function resetActive() {
  workItems.forEach((item, index) => {
    const number = item.querySelector(".work__item-number");
    const text = item.querySelector(".work__item-text");

    if (index === 0) {
      number.classList.add("active");
      text.style.opacity = "1";
    } else {
      number.classList.remove("active");
      text.style.opacity = "0";
    }
  });
}

workItems.forEach((item) => {
  const number = item.querySelector(".work__item-number");
  const text = item.querySelector(".work__item-text");

  item.addEventListener("mouseenter", () => {
    workItems.forEach((el) => {
      el.querySelector(".work__item-number").classList.remove("active");
      el.querySelector(".work__item-text").style.opacity = "0";
    });

    number.classList.add("active");
    text.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    const isHovering = Array.from(workItems).some((el) => el.matches(":hover"));

    if (!isHovering) {
      resetActive();
    }
  });
});

resetActive();

//========================================================================================================================================================
document.addEventListener("DOMContentLoaded", (e) => {
  if (screen.width < 768) {
    const menus = document.querySelectorAll(".footer__menu");

    function closeAll() {
      menus.forEach((menu) => {
        menu.classList.remove("active");
        const list = menu.querySelector(".footer__list");
        list.style.height = 0;
      });
    }

    menus.forEach((menu) => {
      const title = menu.querySelector(".footer__title");
      const list = menu.querySelector(".footer__list");

      title.addEventListener("click", () => {
        const isOpen = menu.classList.contains("active");

        closeAll();

        if (!isOpen) {
          menu.classList.add("active");
          list.style.height = list.scrollHeight + "px";
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".footer")) {
        closeAll();
      }
    });
  }
});

//========================================================================================================================================================

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

//========================================================================================================================================================

const scrollToTopBtn = document.querySelector(".footer__scroll-to-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//========================================================================================================================================================

const modal = document.getElementById("formModal");
const openButtons = document.querySelectorAll(".js-open-form");
const closeBtn = modal.querySelector(".modal__close");
const overlay = modal.querySelector(".modal__overlay");

function openModal() {
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // щоб не скролився фон
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
