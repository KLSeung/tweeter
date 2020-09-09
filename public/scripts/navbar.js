$(document).ready(() => {
  $(window).scroll(function() {
    var position = $(this).scrollTop();
    if (position >= 180) {
      $('nav').addClass('shrink-navbar');
    } else if (position <= 50) {
      $('nav').removeClass('shrink-navbar');
    }
  });
});
