'use strict';

(function() {
  $(document).ready(function() {
    //  Welcome Console
    //  prettier-ignore
    console.log(
      '%c#%cVisible%cWomen',
      'color: #A97BFF; font-weight: 800; font-size: 28px;',
      'color: #A97BFF; font-weight: 300; font-size: 28px;',
      'color: #A97BFF; font-weight: 800; font-size: 28px;'
    );

    // $(document).scroll(function() {
    //   checkOffset();
    // });

    // function checkOffset() {
    //   // if ($('button.filled').offset().top + $('button.filled').height() >= $('.footer').offset().top - 20) {
    //   //   $('button.filled').css('position', 'absolute');
    //   // }

    //   if ($(document).scrollTop() + window.innerHeight < $('.footer').offset().top) {
    //     $('button.filled').css('position', 'fixed');
    //   }
    // }

    function checkOffset() {
      const a = $(document).scrollTop() + window.innerHeight;
      const b = $('.footer').offset().top;
      if (a > b) {
        $('button.filled').addClass('fadeOut animated');
      } else {
        $('button.filled').removeClass('fadeOut animated');
      }
    }
    $(document).ready(checkOffset);
    $(document).scroll(checkOffset);

    const $grid = $('.twitter-cards').imagesLoaded(() => {
      $grid.masonry({
        itemSelector: '.tweet',
        columnWidth: 340,
        gutter: 40,
        horizontalOrder: true,
      });
    });
    //  dialog-overlay
    //  be-visible

    const openModal = (clickItem, modalClass) => {
      $(`${clickItem}`).on('click', function() {
        $('.dialog-overlay').addClass('active');
        $(`${modalClass}`).addClass('active');
        $('body').css('overflow', 'hidden');
      });
    };

    const closeModal = className => {
      $(`${className} .dialog-close-btn`).on('click', function() {
        $('.dialog-overlay').removeClass('active');
        $(`${className}`).removeClass('active');
        $('body').css('overflow', 'unset');
      });
    };
    openModal('.header .subscribe', '.subscribe');
    openModal('.header button', '.be-visible');
    openModal('.send-pin-btn', '.send-pin');
    closeModal('.be-visible');
    closeModal('.subscribe');
    closeModal('.send-pin');

    $('.dialog-overlay').on('click', function() {
      $('.dialog-overlay').removeClass('active');
      $('.be-visible').removeClass('active');
      $('.subscribe').removeClass('active');
      $('.send-pin').removeClass('active');
      $('body').css('overflow', 'unset');
    });

    $('.input-submit-btn').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('submitted');
      $('.be-visible #dialog-title').text('Wohooo!');
      $('.be-visible #dialog-desc').text('Your tweet is submitted.');
    });

    $('.input-submit-btn').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('submitted');
      $('.subscribe #dialog-title').text('It’s done!');
      $('.subscribe #dialog-desc').text('You’re one of us now.');
    });

    $('.input-submit-btn').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('submitted');
      $('.send-pin #dialog-title').text('We’ve sent your e-mail the');
      $('.send-pin #dialog-desc').text('pinned items list.');
    });

    //  be-visible
  });
})();
