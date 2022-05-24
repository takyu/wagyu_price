$(function () {
  $('#page-top').on('click', function () {
    var speed = 1000;
    var position = $('html').offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});
