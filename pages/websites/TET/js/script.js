// Phone number field

$(function(){
  $("#phone").mask("+7 (999) 999 - 99 - 99");
});

// navbar toggle

const menu_btn = document.querySelector('.burger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
