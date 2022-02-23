window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".intro__menu"),
    menuItem = document.querySelectorAll(".intro__link"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("intro__menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger_active");
      menu.classList.toggle("intro__menu_active");
    });
  });
});
$(document).ready(function () {
  const slider = {
    fade: true,
    arrows: false,
  };
  $(".slider-2").slick({
    asNavFor: ".slider-1",
    fade: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
  });
  $(".slider-1").slick(slider);
});
