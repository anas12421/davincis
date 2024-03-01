$(function () {

  "use strick"

  $(".back2top i").on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1200)
  })

  $(window).on('scroll', function () {
    let scrolling = $(this).scrollTop()
    if (scrolling > 20) {
      $(".back2top i").fadeIn(500)
    } else {
      $(".back2top i").fadeOut(500)
    }

    if (scrolling > 50) {
      $(".main_nav").addClass("nav_ex")
    } else {
      $(".main_nav").removeClass("nav_ex")
    }
  })

  // counter js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // full body wow js
  new WOW().init();





})