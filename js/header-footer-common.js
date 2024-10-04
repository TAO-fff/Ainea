/*********** mouse stalker ***********/
const stalker = document.getElementById('mouse-stalker');
let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;
        stalker.classList.add('is_active');

    });
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
    });
}

/*********** top-btn 戻るボタンフェードイン***********/
$(function() {
    const topBtn = $('.top-btn-area');
    topBtn.hide();

    // スクロールが200に達したら表示
    $(window).scroll(function() {
        var w = $(window).width();
        if ($(this).scrollTop() > 400) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();        
    }
    });
    //スムーススクロール
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});

/*********** header footer スムーススクロール ***********/
$(function() {
    const navBtn = $('.nav-btn');

    navBtn.click(function(e) {
        e.preventDefault(); //デフォルトのリンク動作をキャンセル

        //  href属性で指定されたセクションのIDを取得
        const target = $(this).find('a').attr('href');
        const position = $(target).offset().top;// ターゲットの位置を取得

        //スムーススクロールで移動
        $('html, body').animate({
            scrollTop:position
        }, 300);
        return false;
    });
    });



/*********** hamメニュー ***********/
// ham 【btn動き】
$(function () {
    $(".sp-menu-btn").on("click", function () {
      $(".sp-menu-btn").toggleClass("open");
      $(".sp-header-nav").fadeToggle();
    });
  
    //hum click後閉じる
    $(".sp-header-nav-item").on("click", function () {
      //header nav list liをclickしたら
      $(".sp-menu-btn").removeClass("open");
      //sp menu btn のopenクラスを消す。
      $(".sp-header-nav").fadeOut();
      //header nav フェードアウトしてもらう
    });
  });


/*********** sp-header-nav-item hover ***********/
  // sp-header-nav 【hoverしたもの以外、薄く表示】
$(document).ready(function () {
    //$(document).ready →ウェブページの準備ができたら何かをする合図
    $(".sp-header-nav-item, .header-nav-item, .footer-nav-item").hover(
      function () {
        //header__nav liにhoverをしたら
        $(this).siblings().css("opacity", "0.2");
        /* this→現在の要素。 siblings→hその要素の兄弟要素。
          現在の要素の兄弟要素(全て)のopacityを0.3に設定する */
      },
      function () {
        $(".sp-header-nav-item, .header-nav-item, .footer-nav-item").css(
          "opacity",
          "1",
        ); /* hoverが外れたときに全てのli要素のopacityを元に戻します */
      }
    );
  });