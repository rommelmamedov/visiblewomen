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

    var openModal = function openModal(clickItem, modalClass) {
      $("".concat(clickItem)).on('click', function () {
        $('.dialog-overlay').addClass('active');
        $("".concat(modalClass)).addClass('active');
        $('body').css('overflow', 'hidden');
      });
    };

    var closeModal = function closeModal(className) {
      $("".concat(className, " .dialog-close-btn")).on('click', function () {
        $('.dialog-overlay').removeClass('active');
        $("".concat(className)).removeClass('active');
        $('body').css('overflow', 'unset');
      });
    };

    openModal('.header .subscribe', '.subscribe');
    openModal('.header button', '.be-visible');
    openModal('.send-pin-btn', '.send-pin');
    closeModal('.be-visible');
    closeModal('.subscribe');
    closeModal('.send-pin');
    $('.dialog-overlay').on('click', function () {
      $('.dialog-overlay').removeClass('active');
      $('.be-visible').removeClass('active');
      $('.subscribe').removeClass('active');
      $('.send-pin').removeClass('active');
      $('body').css('overflow', 'unset');
    });
    $('.input-submit-btn').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('submitted');
      $('.be-visible #dialog-title').text('Wohooo!');
      $('.be-visible #dialog-desc').text('Your tweet is submitted.');
    });
    $('.input-submit-btn').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('submitted');
      $('.subscribe #dialog-title').text('It’s done!');
      $('.subscribe #dialog-desc').text('You’re one of us now.');
    });
    $('.input-submit-btn').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('submitted');
      $('.send-pin #dialog-title').text('We’ve sent your e-mail the');
      $('.send-pin #dialog-desc').text('pinned items list.');
    }); //  be-visible
  });
})();