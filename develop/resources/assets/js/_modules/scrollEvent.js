class ScrollEvent {
  constructor(el,opt){
    this.el = el;
    this.event();
  }
  event(){
    $(window).scroll(function () {
      if($(window).scrollTop() > 150) {
        $('.l-footer__scrollBanner').addClass('is-scroll');
      } else {
        $('.l-footer__scrollBanner').removeClass('is-scroll');
      }
    });
  }
}
