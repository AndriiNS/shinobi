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
