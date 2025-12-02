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
