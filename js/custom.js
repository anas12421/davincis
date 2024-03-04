$(function () {

  "use strict"

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
      $(".main-navbar").addClass("nav_ex")
    } else {
      $(".main-navbar").removeClass("nav_ex")
    }

    if (scrolling > 50) {
      $("#responsive_nav").addClass("nav_ex")
    } else {
      $("#responsive_nav").removeClass("nav_ex")
    }
  })

  // counter js
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // full body wow js
  new WOW().init();

  // Client part slider js
  $('.client_main_slider').slick({
    arrows: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    centerPadding: '0',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }

    ]
  });

  // Team part slider js
  $('.team_main_slider').slick({
    arrows: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });

  // Latest Blog part slider js
  $('.latest_blog_main_slider').slick({
    arrows: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false
        }
      }
    ]
  });

})