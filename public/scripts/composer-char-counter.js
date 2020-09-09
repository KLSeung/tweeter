$(document).ready(() => {
  const $tweetInput = $('#tweet-text');

  $tweetInput.keyup(function() {
    const textLength = $(this).val().length;
    const counter = $(this).parent('form').children('footer').children('.counter');
    counter.html(140 - textLength); 

    if (textLength > 140) {
      counter.addClass("counter-red");
    } else {
      counter.removeClass("counter-red");
    }
  });
});

