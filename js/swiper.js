const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
      spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
    disableOnInteraction: false, // Prevents autoplay from stopping after user interaction
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },  /* Mobile */
    640: { slidesPerView: 2, spaceBetween: 15 },  /* Tablets */
    1024: { slidesPerView: 3, spaceBetween: 20 }, /* Laptops */
  
}

  // And if we need scrollbar

});
// // atou slider
const slider = new Swiper('.slider', {

  slidesPerView: 7,
      spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
    disableOnInteraction: false, // Prevents autoplay from stopping after user interaction
  },
 
  breakpoints: {
    320: { slidesPerView: 5, spaceBetween: 10 },  /* Mobile */
    640: { slidesPerView: 6, spaceBetween: 15 },  /* Tablets */
   
}
});

// testimonial
const test = new Swiper('.testiMonial', {

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
    disableOnInteraction: false, // Prevents autoplay from stopping after user interaction
  },
  effect: "flip",
  flipEffect: {
    slideShadows: false,
  }

});

// Experts

const exper = new Swiper('.exPerts', {

  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
    disableOnInteraction: false, // Prevents autoplay from stopping after user interaction
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },  /* Mobile */
    640: { slidesPerView: 2, spaceBetween: 15 },  /* Tablets */
    1024: {slidesPerView: 3, spaceBetween: 20 },
}

});
// Experts

const builder = new Swiper('.builDing', {

  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds (e.g., 3000ms = 3 seconds)
    disableOnInteraction: false, // Prevents autoplay from stopping after user interaction
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
