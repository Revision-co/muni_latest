class SwiperEvent {
  constructor(el,opt){
    this.el = el;
    this.event();
  }
  event(){
    const swiper = new Swiper(".swiper", {
      loop: true,
      effect: 'fade',
      speed: 1500,
      autoplay: {
        delay: 2000,
      },
      // ページネーションが必要なら追加
      pagination: {
        el: ".swiper-pagination"
      },
    });
  }
}
