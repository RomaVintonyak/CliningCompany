$(function() {
  /*global variables*/
  /*scrool top*/
  var top_button = $("#back__top");
  /*our servicess */
  var btn_prev = $("#servicesBPrev");
  var btn_next = $("#servicesBNext");
  /*filter category*/
  var filter = $("[data-filter]");
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
  /*our servicess */
  btn_prev.on("click", function(event) {
    event.preventDefault();
    $("#services__card1").toggleClass("active__card");
  });
  btn_next.on("click", function(event) {
    event.preventDefault();
    $("#services__card3").toggleClass("active__card");
  });
  /*filter category*/
  filter.on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("link__active");
    var cat = $(this).data("filter");
    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        var workCat = $(this).data("cat");
        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });
});
