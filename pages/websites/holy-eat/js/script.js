// menu
const burger = document.querySelector(".burger"),
  menuItem = document.querySelectorAll(".header__link"),
  menu = document.querySelector(".header__menu"),
  overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.remove("active");
  });
}

// FADEIN
const fadeIn = (el, timeOut, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";
  el.style.transition = `opacity ${timeOut}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};
// FADEOUT
const fadeOut = (el, timeOut) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeOut}ms`;
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.display = "none";
  }, timeOut);
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
