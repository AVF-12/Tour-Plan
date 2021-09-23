const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
    keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
});


var map;
function initMap ()
  {
  map = new ymaps.Map("yandexmap", {
    center: [7.838231, 98.298906],
    zoom: 16
    });
  }
ymaps.ready(initMap);
