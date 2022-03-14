const openMenu = document.querySelector(".burger"),
  closeMenu = document.querySelector(".menu__close"),
  menuItem = document.querySelectorAll(".menu__link"),
  menu = document.querySelector(".menu"),
  overlay = document.querySelector(".menu__overlay");

// MENU
openMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  fadeIn(overlay, 300, "block");
});
closeMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  fadeOut(overlay, 300);
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  fadeOut(overlay, 300);
});
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    fadeOut(overlay, 300);
  });
}

// STACK PROGRESS

const percents = document.querySelectorAll(".stack-progress__percent"),
  fill = document.querySelectorAll(".stack-progress__fill");

percents.forEach((item, i) => {
  fill[i].style.width = item.innerHTML;
});

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
