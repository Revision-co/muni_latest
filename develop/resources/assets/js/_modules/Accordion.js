class AccordionEvent {
  constructor(el,opt){
    this.el = el;
    this.event();
  }
  event(){
    //アコーディオンをクリックした時の動作
    $('.a-trigger').on('click', function() {//a-triggerをクリックしたら
      var findElm = $(this).next(".a-area");//直後のアコーディオンを行うエリアを取得し
      $(findElm).slideToggle();//アコーディオンの上下動作
        
      if($(this).hasClass('close')){//a-triggerにクラス名closeがあれば
        $(this).removeClass('close');//クラス名を除去し
      }else{//それ以外は
        $(this).addClass('close');//クラス名closeを付与
      }
    });

    $(window).on('load', function(){
      $('.c-acc').addClass("open"); //はじめのc-acc__headにopenクラスを追加
      $(".open").each(function(index, element){ //openクラスを取得
        var Title =$(element).children('.a-trigger'); //openクラスの子要素のtitleクラスを取得
        $(Title).addClass('close');       //a-triggerにクラス名closeを付与し
        var Box =$(element).children('.a-area'); //openクラスの子要素boxクラスを取得
        $(Box).slideDown(500);          //アコーディオンを開く
      });
    });
  }
}
