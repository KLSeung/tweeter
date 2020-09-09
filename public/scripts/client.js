/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const createTweetElement = (tweetData) => {
  const article = $('<article class="tweet">');
  const header = $('<header>')
                    .append($(`<img class="tweet-profile" src=${tweetData.user.avatars}>`))
                    .append($(`<span class="name">`).text(tweetData.user.name))
                    .append($(`<span class="username>`).text(tweetData.user.handle))

  const tweetParagrah = $(`<p class="tweet-text">`).text(tweetData.content.text)
  const footer = $('<footer>')
                    .append($(`<span class="tweet-day">`).text(moment(tweetData.created_at).fromNow()))
                    .append($('<img class="icon" src="./images/favorite.png">'))
                    .append($('<img class="icon" src="./images/share.png>'))
                    .append($('<img class="icon" src="./images/bookmark.png">'))

  return article.append(header).append(tweetParagrah).append(footer);
  }

  const renderTweets = (data) => {
    const $tweetContainer = $('#tweets-container');
    for (const id in data) {
      //retrieve each tweet in the data
      const tweet = data[id];

      //Create each tweet element in the data and append to container
      const tweetHTML = createTweetElement(tweet)
      $tweetContainer.append(tweetHTML)
    }
  };

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const $tweetForm= $(".new-tweet").children('form');

  //Event listener for new tweet form
  $tweetForm.on('submit', function (event) {
    //Prevent page refresh
    event.preventDefault();

    //Serialize data to get key values 
    const serializedData = $(this).serialize();

    $.post('./tweets', serializedData)
    .then((res) => {
      console.log(res);
    })  

  })


  renderTweets(data);


});
