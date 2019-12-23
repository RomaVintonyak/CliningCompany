$(function() {
  /*global variables*/
  /*scrool top*/
  var top_button = $("#back__top");
  /*our servicess */
  var btn_prev = $("#servicesBPrev");
  var btn_next = $("#servicesBNext");
  /*filter category*/
  var filter = $("[data-filter]");
  /*slider reviews */
  var workSlider = $("[data-slider]");
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
    var filterValue = $($(this), ".links__project-attr").attr("data-filter");
    console.log(filterValue);
    if (filterValue == "all") {
      $(this).addClass("link__active");
    } else {
      $(this).toggleClass("link__active");
    }
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
  /*Slick slider https://kenwheeler.github.io/slick */
  workSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });
  $("#reviews-prev").on("click", function(event) {
    event.preventDefault();
    var curentSlider = $(this)
      .parents(".container")
      .find('[data-slider="slider"]');
    curentSlider.slick("slickPrev");
  });
  $("#reviews-next").on("click", function(event) {
    event.preventDefault();
    var curentSlider = $(this)
      .parents(".container")
      .find('[data-slider="slider"]');
    curentSlider.slick("slickNext");
  });
  /*clas active link nav menu*/
  $(".nav__link").on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass("nav__link--active");
  });
  /*smoth scroll to category*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    var blockID = $(this).data("scroll");
    var blockofSet = $(blockID).offset().top;
    $("#togleMenu").removeClass("nav__menu--show");
    $("html, body").animate(
      {
        scrollTop: blockofSet - 70
      },
      900
    );
  });
  /*add class to burger__active*/
  $("#burgerToggle").on("click", function(event) {
    event.preventDefault();
    $(".burger__icon").toggleClass("show");
  });
  /*add clas to nav menu show*/
  $("#burgerToggle").on("click", function(event) {
    event.preventDefault();
    $("#togleMenu").toggleClass("nav__menu--show");
  });
  /*fixed header*/
  var introH = $("#intro").innerHeight();
  var header = $("#header");
  var scrollOfset = $(window).scrollTop();
  checkScroll(scrollOfset);
  $(window).on("scroll", function() {
    scrollOfset = $(this).scrollTop();
    checkScroll(scrollOfset);
  });
  function checkScroll(scrollOfset) {
    scrollOfset = $(this).scrollTop();
    if (scrollOfset >= introH) {
      header.addClass("fixed__header");
    } else {
      header.removeClass("fixed__header");
    }
  }
});
