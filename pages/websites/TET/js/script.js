// Phone number field ============================
$(function () {
  $("#phone").mask("+38 (999) 999 - 99 - 99");
});

// navbar toggle ===============================
const menu_btn = document.querySelector('.burger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

$('.mobile-nav-item, .mobile-nav-button').click(function () {
  mobile_menu.classList.toggle('is-active');
  menu_btn.classList.toggle('is-active');
});


// slider ======================================
$(function () {
  $('.experts-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.publications-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.trust-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});

// Scrolling animations ============================

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
    else {
    change.target.classList.remove('element-show');
    }
  });
}
let options = {
  threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.orange-box, .about h2, .about h4, .about-text, .help-left, .help-right, .experience-box, .servises-card, .outsoursing-left, .outsoursing-right, .for-who__item, .benefits__item, .growth__box, .begin-row');

for (let elm of elements) {
  observer.observe(elm);
}
