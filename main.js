// header
(function btnAddActive() {
  const menuBtn = document.querySelector(".menuBtn");
  const sideMenu = document.querySelector(".sideMenu");
  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sideMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
})();

// figure
var swiper = new Swiper(".swiperContainer", {
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
