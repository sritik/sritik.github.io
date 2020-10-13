$(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
          $(".navbar").addClass("nav-scroll");
        } else {
          $(".navbar").removeClass("nav-scroll");
        }
});

$('.testimonial_items_main').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay:true,
  autoplaySpeed:3000,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false

      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      }
    }
  ]
});