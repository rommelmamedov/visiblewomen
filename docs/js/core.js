'use strict';

(function () {
  $(document).ready(function () {
    //  Welcome Console
    //  prettier-ignore
    console.log('%c#%cVisible%cWomen', 'color: #A97BFF; font-weight: 800; font-size: 28px;', 'color: #A97BFF; font-weight: 300; font-size: 28px;', 'color: #A97BFF; font-weight: 800; font-size: 28px;');
    var $grid = $('.twitter-cards').imagesLoaded(function () {
      $grid.masonry({
        itemSelector: '.tweet',
        columnWidth: 340,
        gutter: 40,
        horizontalOrder: true
      });
    }); //  dialog-overlay
    //  be-visible

    $('.header button').on('click', function () {
      $('.dialog-overlay').addClass('active');
      $('.be-visible').addClass('active');
      $('body').css('overflow', 'hidden');
    });
    $('.be-visible .dialog-close-btn').on('click', function () {
      $('.dialog-overlay').removeClass('active');
      $('.be-visible').removeClass('active');
      $('body').css('overflow', 'unset');
    });
    $('.dialog-overlay').on('click', function () {
      $('.dialog-overlay').removeClass('active');
      $('.be-visible').removeClass('active');
      $('body').css('overflow', 'unset');
    });
  });
})();