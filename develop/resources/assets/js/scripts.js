//=include _pages/*
//=include _modules/*


(() => {

})();

//DOMContentLoaded
$(() => {
});

//images resources loaded
$(window).on('load', () => {

  $(window).trigger('loading');
});

//after loading animation
$(window).on('loading', () => {
  let smoothScroll = new SmoothScroll('');
  let slideAnime = new SlideAnime('.hamburger');
  let imgParallax = new ImgParallax('js-parallax');
  let inviewEvent = new InviewEvent('.js-inview');
  let Accordion = new AccordionEvent('.js-accordion');
  let swiperEvent = new SwiperEvent('.swiper');
  // let newsTab = new NewsTab('.c-news');
  $(".slider")
    // 現在のスライドに"add-zoom"のclassを付与(data-slick-index="0"が現在のスライド)
    .on("init", function() {
      $('.slick-slide[data-slick-index="0"]').addClass("add-zoom");
    })
    .slick({
      autoplay: true,
      fade: true, 
      arrows: false,
      speed: 3000, // スライド、フェードアニメーションの速度
      autoplaySpeed: 5000, // 自動再生の切り替え速度
      pauseOnFocus: false,
      pauseOnHover: false,
    })
    .on({
      // スライドが移動する前に発生するイベント
      beforeChange: function(event, slick, currentSlide, nextSlide) {
        // 現在のスライドに"add-zoom"のclassを付与
        $(".slick-slide", this).eq(nextSlide).addClass("add-zoom");
        // "add-zoom"のclassを消すための"remove-zoom"classを付与
        $(".slick-slide", this).eq(currentSlide).addClass("remove-zoom");
      },
      // スライドが移動した後に発生するイベント
      afterChange: function() {
        // 現在のスライド以外は"add-zoom"のclassを削除
        $(".remove-zoom", this).removeClass(
          "remove-zoom add-zoom"
        );
      },
    });
});

// スマホ・タブレットの向き判定
// $(window).on('orientationchange', ()=>{
//   if(isPortrait()){
//     console.log('isPortrait');
//   } else {
//     console.log('isLandscape');
//   }
// });