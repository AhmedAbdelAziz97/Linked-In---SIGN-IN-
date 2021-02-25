// This just toggles the follow/following of the button
$('a.follow').click(function () {
  $(this).toggleClass('followed');
  
  if($(this).hasClass('followed')) {
    $(this).text('Followed');
    $('ul li:last-child').html('325<span>Followers</span>');
  }
  else {
    $(this).text('Follow Nick');
    $('ul li:last-child').html('324<span>Followers</span>');
  }
});

var card = $('.card');

$('#close').click(function () {
  card.fadeOut(200).delay(1000).fadeIn(200);
});
$('#connect').click(function () {
  $('.added').fadeIn(500).delay(1000).fadeOut(500);
  //card.css("opacity", "0.55");
});
