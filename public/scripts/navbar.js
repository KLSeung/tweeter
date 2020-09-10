$(document).ready(() => {
  $(window).scroll(function() {
    var position = $(this).scrollTop();
    if (position >= 180) {
      $('nav').addClass('shrink-navbar');
    } else if (position <= 50) {
      $('nav').removeClass('shrink-navbar');
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
});
