// Swiperの初期化
const swiper = new Swiper('.swiper1', {
  // autoplay: {
  //   delay: 3000,
  // },
  speed: 1000,
  slidesPerView: 1.25,
  spaceBetween: 0, // スライド間の間隔
  centeredSlides: true,
  // effect: 'coverflow', // 真ん中にスライドを表示
  loop: true, // ループ設定
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  }, // クリックしたスライドに移動
  // breakpoints: {
  //   // 画面幅が小さい場合のレスポンシブ設定
  //   1080: {
  //     slidesPerView: 3.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
  //   768: {
  //     slidesPerView: 1.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
  //   480: {
  //     slidesPerView: 1.5, // 1枚表示
  //     spaceBetween: 0,
  //   }
  // },

});

// Swiperの初期化
const swipe2 = new Swiper('.swiper2', {
  // autoplay: {
  //   delay: 3000,
  // },
  speed: 1000,
  slidesPerView: 1.25,
  spaceBetween: 20, // スライド間の間隔
  centeredSlides: true,
  // effect: 'coverflow', // 真ん中にスライドを表示
  loop: true, // ループ設定
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    type: "bullets",
  },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // }, // クリックしたスライドに移動
  // breakpoints: {
  //   // 画面幅が小さい場合のレスポンシブ設定
  //   1080: {
  //     slidesPerView: 3.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
  //   768: {
  //     slidesPerView: 1.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
  //   480: {
  //     slidesPerView: 1.5, // 1枚表示
  //     spaceBetween: 0,
  //   }
  // },

});