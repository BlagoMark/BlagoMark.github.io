$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__nav_links").toggleClass("active");
    $("body").toggleClass("scroll-lock");
  });
  $(".link").click(function (event) {
    $(".header__burger, .header__nav_links").removeClass("active");
  });
});

function typedText() {
  let typed = new Typed(".typed-title", {
    strings: ["СТИЛЬ", "НАДЕЖНОСТЬ", "КАЧЕСТВО"],
    typeSpeed: 100,
    loop: true,
  });
}
typedText();

$(function () {
  $(".airpods-slider").slick({
    arrows: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".watch-slider").slick({
    arrows: true,
    prevArrow: $(".prev1"),
    nextArrow: $(".next1"),
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".complect-slider").slick({
    arrows: true,
    prevArrow: $(".prev2"),
    nextArrow: $(".next2"),
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
