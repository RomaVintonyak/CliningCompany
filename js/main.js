$(function() {
  /*global variables*/
  /*scrool top*/
  var top_button = $("#back__top");
  /*scrool to top function*/
  top_button.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      top_button.fadeIn();
    } else {
      top_button.fadeOut();
    }
  });
  top_button.click(function(event) {
    event.preventDefault();
    $("body, html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });
});
