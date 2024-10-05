

/*********** policy・originテキスト　フェードイン ***********/
$(window).scroll(function () {
    const scrollAnimationElm = document.querySelectorAll('.scroll-up-rightside, .scroll-up');
    let hasAnimated = false; // アニメーション実行済みかどうかを追跡

    const scrollAnimationFunk = function () {
        for (let i = 0; i < scrollAnimationElm.length; i++) {
            let triggerMargin = 80; // トリガーのマージン
            const elementTop = scrollAnimationElm[i].getBoundingClientRect().top;

            // 要素が視界に入ったらアニメーションを追加
            if (window.innerHeight > elementTop + triggerMargin && !hasAnimated) {
                scrollAnimationElm[i].classList.add('on');
            } 
        }

        // すべての要素にアニメーションが実行された場合、イベントリスナーを削除
        if (!hasAnimated && Array.from(scrollAnimationElm).every(elm => elm.classList.contains('on'))) {
            hasAnimated = true; // アニメーション実行済み
            $(window).off('scroll', scrollAnimationFunk); // スクロールイベントリスナーを削除
        }
    }

    /*********** load イベントでも初期表示を確認 ***********/
    window.addEventListener('load', scrollAnimationFunk);
    window.addEventListener('scroll', scrollAnimationFunk);
    scrollAnimationFunk(); // ページ読み込み時にもチェック
});



/*/*********** about img（上・左・右から）***********/
// イベントリスナーの追加をpassiveに設定
$(window).on('scroll', { passive: true }, function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll-down, .scroll-left, .scroll-right');
    var aboutFeatureBoxArea = document.querySelector('.about-feature-box-area');
    var aboutFeatureImgBox = document.querySelector('.about-feature-img-box'); // about-feature-img-boxを取得
    var aboutFeatureTxtBox = document.querySelector('.about-feature-txt-box'); // about-feature-txt-boxを取得
    var hasAnimated = false; // アニメーションが実行されたかどうかを追跡
  
    var scrollAnimationFunc = function () {
      var elementTop = aboutFeatureBoxArea.getBoundingClientRect().top;
  
      // スクロール位置がabout-feature-box-areaに到達したら
      if (elementTop < window.innerHeight && !hasAnimated) {
        hasAnimated = true; // アニメーション実行済みとする
  
        // 各要素に.onクラスを付与
        for (var i = 0; i < scrollAnimationElm.length; i++) {
          scrollAnimationElm[i].classList.add('on');
          
          // アニメーション終了時に非表示にする
          scrollAnimationElm[i].addEventListener('transitionend', function () {
            // 767px以下の場合にabout-feature-img-boxを非表示にする
            if (window.innerWidth <= 767) {
              setTimeout(function() {
                aboutFeatureImgBox.style.display = 'none'; // 要素を非表示
  
                // about-feature-txt-boxのopacityを1にする
                aboutFeatureTxtBox.style.opacity = '1'; // 初期値が0の場合
              }, 2100); // 2.1秒後に非表示
            }
          }, { once: true }); // 一度だけ実行
        }
  
        // スクロールのイベントリスナーを削除
        $(window).off('scroll', scrollAnimationFunc);
      }
    };
  
    // スクロールイベントの初期実行
    scrollAnimationFunc();
    $(window).on('scroll', scrollAnimationFunc);
  });
  
  
  
  


// /*********** profile spアニメーション ***********/
// /*********** profile spアニメーション ***********/
$(window).on('scroll', { passive: true }, function () {
    var profileBox = document.querySelector('.profile-box');
    var profileRight = document.querySelector('.profile-right'); 
    var profileLeft = document.querySelector('.profile-left'); 
    var hasAnimated = false; // アニメーションが実行されたかどうかを追跡

    var scrollAnimationFunc = function () {
        var elementTop = profileBox.getBoundingClientRect().top;

        // スクロール位置がprofile-boxに到達したら
        if (elementTop < window.innerHeight && !hasAnimated) {
            hasAnimated = true; // アニメーション実行済みとする

            // profile-rightの表示（初期状態がdisplay: noneの場合）
            profileRight.style.display = 'block'; // 表示

            // 2.1秒後にprofile-leftのopacityを1にし、profile-rightにoffクラスを付与
            setTimeout(function() {
                if (window.innerWidth <= 767) {
                    profileLeft.style.opacity = '1'; // 初期値が0の場合
                    profileRight.classList.add('off'); // offクラスを付与
                }
            }, 2100); // 2.1秒後に実行

            // スクロールのイベントリスナーを削除
            $(window).off('scroll', scrollAnimationFunc);
        }
    };

    // スクロールイベントの初期実行
    scrollAnimationFunc();
    $(window).on('scroll', scrollAnimationFunc);
});
