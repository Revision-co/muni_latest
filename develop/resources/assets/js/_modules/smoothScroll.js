class SmoothScroll {
  constructor(el,opt){
    this.el = el;
    this.event();
  }
  event(){
    var headerHeight = 50;     //fixedのヘッダーの高さを取得
    var urlHash = location.hash;    //URLハッシュを取得
    var animeSpeed = 500;   //スクロールのアニメーションスピード
    if(urlHash) {
      $('body,html').stop().scrollTop(0);
      setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, animeSpeed);
      }, 100);
    }
    $('a[href*="#"]').on({
      'click': function(){
        var href = $(this).attr("href");
        href = href.split('#');
        var target = $('#' + href[1]);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, animeSpeed);
      }
    });

  }
}
