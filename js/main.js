

/*********** policy・originテキスト　フェードイン ***********/
$(window).scroll(function() {
    const scrollAnimationElm = document.querySelectorAll('.scroll-up-rightside, .scroll-up');
    const scrollAnimationFunk = function () {
        for (let i = 0; i < scrollAnimationElm.length; i++) {
            let triggerMargin = 80; // トリガーのマージン
            const elementTop = scrollAnimationElm[i].getBoundingClientRect().top;

            // 要素が視界に入ったらアニメーションを追加
            if (window.innerHeight > elementTop + triggerMargin) {
                scrollAnimationElm[i].classList.add('on');
            } else {
                // 要素が視界から出たらアニメーションをリセット
                scrollAnimationElm[i].classList.remove('on');
            }
        }
    }

    /*********** load イベントでも初期表示を確認 ***********/
    window.addEventListener('load', scrollAnimationFunk);
    window.addEventListener('scroll', scrollAnimationFunk);
    scrollAnimationFunk(); // ページ読み込み時にもチェック
});


/*********** about  img（上・左・右から）***********/
// イベントリスナーの追加をpassiveに設定
$(window).on('scroll', { passive: true }, function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll-down, .scroll-left, .scroll-right');
  var delay = 0;

  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 100;
      var elementTop = scrollAnimationElm[i].getBoundingClientRect().top;
      var elementBottom = scrollAnimationElm[i].getBoundingClientRect().bottom;

      // アニメーションの実行
      if (window.innerHeight > elementTop + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
      if (elementBottom < 0 || elementTop > window.innerHeight) {
        scrollAnimationElm[i].classList.remove('on');
      }
    }
  };

  // sp about & sp prof 
  scrollAnimationFunc();
  $(window).on('scroll', scrollAnimationFunc);
});



/*********** profile spアニメーション ***********/
document.addEventListener("DOMContentLoaded", function() {
    const floatTriggers = document.querySelectorAll('.float-trigger');
  
    function handleScroll() {
        if (window.innerWidth <= 767) { // 画面幅が767px以下の場合のみアニメーションを適用
            floatTriggers.forEach(trigger => {
                const floatUp = trigger.querySelector('.float-up');
                const floatDown = trigger.querySelector('.float-down');
                const rect = trigger.getBoundingClientRect();
  
                // ビューポート内に入ったら
                if (rect.top <= window.innerHeight) {
                    if (floatDown) {
                        floatDown.style.display = 'flex'; // profile-rightを表示
                        setTimeout(() => {
                            floatDown.classList.add('off'); // profile-rightに「off」クラスを追加
                            floatDown.style.display = 'none'; // 表示をnoneにする
                        }, 4000); // floatDownを4秒表示
                    }
  
                    if (floatUp) {
                        floatUp.style.opacity = '0'; // 最初にopacityを0に設定
                        setTimeout(() => {
                            floatUp.style.opacity = '1'; // opacityを1に戻す
                            floatUp.style.visibility = 'visible'; // visibilityをvisibleに
                            floatUp.classList.add('on'); // 4.1秒後にonクラスを追加
                        }, 4100); // 4.1秒後にfloatUpを表示
                    }
                }
            });
        }
    }
  
    // スクロールイベントにハンドラを追加
    window.addEventListener('scroll', handleScroll);
  
    // リサイズ時の初期状態を設定
    function handleResize() {
        if (window.innerWidth <= 767) { // 画面幅が767px以下の場合のみ初期状態を設定
            floatTriggers.forEach(trigger => {
                const floatUp = trigger.querySelector('.float-up');
                const floatDown = trigger.querySelector('.float-down');
  
                if (floatUp) {
                    floatUp.style.opacity = '1'; // about-feature-txt-boxを表示
                    floatUp.style.visibility = 'visible'; // visibilityもvisibleにする
                }
  
            });
        }
    }
  
    // 初期状態の設定
    handleResize();
  
    // リサイズ時にもhandleResizeを呼び出す
    window.addEventListener('resize', handleResize);
  });
  
