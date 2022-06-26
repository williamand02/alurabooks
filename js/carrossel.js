const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3, //<= o erro esta aqui
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  });