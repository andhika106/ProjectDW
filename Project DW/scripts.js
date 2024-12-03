// Carousel untuk bawah navbar
const navbarSwiper = new Swiper('.navbar-swiper', {
    loop: true, // Loop through slides
    autoplay: {
      delay: 3000, // 3 seconds per slide
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  const reviewSwiper = new Swiper('.review-swiper', {
    loop: false, // Tidak looping otomatis
    slidesPerView: 4, // Tampilkan 3 review sekaligus
    spaceBetween: 30, // Jarak antar review
    navigation: {
      nextEl: '.swiper-button-next', // Tombol next
      prevEl: '.swiper-button-prev', // Tombol prev
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1, // 1 review untuk layar kecil
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2, // 2 review untuk layar sedang
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3, // 3 review untuk layar besar
        spaceBetween: 30,
      },
    },
  });