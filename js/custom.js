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



  // banner part slider js

  $('.banner_main_slider').slick({
    fade:true,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  // Client part slider js

  
$('.client_main_slider').slick({
  arrows:false,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  centerMode: true,
  centerPadding: '0',
  responsive: [
    {
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



})