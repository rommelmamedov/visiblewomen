'use strict';

(function () {
  $(document).ready(function () {
    //  Welcome Console
    //  prettier-ignore
    console.log('%c#%cVisible%cWomen', 'color: #A97BFF; font-weight: 800; font-size: 28px;', 'color: #A97BFF; font-weight: 300; font-size: 28px;', 'color: #A97BFF; font-weight: 800; font-size: 28px;'); // $('.blog .articles').masonry({
    //   // options
    //   itemSelector: '.article-card',
    //   columnWidth: 340,
    //   gutter: 20
    // });
    // const $grid = $('.twitter-cards').masonry({
    //   itemSelector: '.tweet',
    //   columnWidth: 340,
    //   gutter: 40,
    //   horizontalOrder: true,
    //   // fitWidth: true,
    //   // percentPosition: true,
    // });
    // $grid.imagesLoaded().progress(function() {
    //   $grid.masonry('layout');
    // });

    var $grid = $('.twitter-cards').imagesLoaded(function () {
      // init Masonry after all images have loaded
      $grid.masonry({
        itemSelector: '.tweet',
        columnWidth: 340,
        gutter: 40,
        horizontalOrder: true // fitWidth: true,
        // percentPosition: true,

      });
    });
  });
})();