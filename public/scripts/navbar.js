$(document).ready(() => {
  $(window).scroll(function() {
    var position = $(this).scrollTop();
    if (position >= 180) {
      $('nav').addClass('shrink-navbar');
      $('.scroll-up-button').css('opacity', '1')
    } else if (position <= 50) {
      $('nav').removeClass('shrink-navbar');
      $('.scroll-up-button').css('opacity', '0')
    }
  });

  $('.logo').on('click', () => {
    window.location.href = '/' 
  })

  $('.nav-span').on('click', () => {
    //Seems like this is easier than using the jquery animate method
    document.getElementById('new-tweet').scrollIntoView(true);
  })

  $('.arrow-down-icon').on('click', () => {
    //Seems like this is easier than using the jquery animate method
    document.getElementById('new-tweet').scrollIntoView(true);
  })

  $('.scroll-up-button').on('click', () => {
    //Seems like this is easier than using the jquery animate method
    $(window).scrollTop(0);
  })
});
