$(document).ready(() => {
  const $tweetInput = $('#tweet-text');

  //Eventlistener for the keyup event for the input
  $tweetInput.keyup(function() {
    const textLength = $(this).val().length;
    const counter = $(this).parent('form').children('footer').children('.counter');
    //Set counter inner text to be the new value
    counter.text(140 - textLength);

    //Change counter to red if it exceeds 140 characters
    if (textLength > 140) {
      counter.addClass("counter-red");
    } else {
      counter.removeClass("counter-red");
    }
  });
});

