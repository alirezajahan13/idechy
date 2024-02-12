var swiper = new Swiper(".serviceSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      980: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });