$(document).ready(function () {
  $('.projects__slider').slick({
    slidesToShow: 1,
    dots: true,
    responsive: [{
      breakpoint: 1350,
      settings: {
        arrows: false,
      }
    }]
  })
});

$(document).ready(function () {
  $('.workspace__slider').slick({
    slidesToShow: 1,
    dots: true,
    responsive: [{
      breakpoint: 1350,
      settings: {
        arrows: false,
      }
    }]
  })
});

$(document).ready(function () {
  if ($(window).width() <= 768) {
    $('.value__cols').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false
    })
  }
});

document.addEventListener('scroll', function () {
  if ($(window).width() <= 768) {
    $('.value__cols').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false
    })
  }
});

const offer = document.querySelectorAll('.offer__button');
const cross = document.querySelector('.offer__cross');
const hiddenWindow = document.querySelector('.window');
const bgWindow = document.querySelector('.window__container');
const body = document.querySelector('body');

function openWindow(e) {
  e.preventDefault();
  hiddenWindow.classList.add('open');
  body.style.overflow = 'hidden';
  console.log($(window).width());
}

function closeWindow() {
  hiddenWindow.classList.remove('open');
  body.style.overflow = 'auto';
}



offer.forEach(x => x.addEventListener('click', openWindow));
cross.addEventListener('click', closeWindow);
bgWindow.addEventListener('click', (e) => {
  if (!e.target.closest('.offer__container'))
    closeWindow();
});