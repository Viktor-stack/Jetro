$(function () {
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    nextArrow: '<button type="button" class="slick-next"><img src="img/next-bg.png" alt=""></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/previous-left.png" alt=""></button>',
    responsive:[
      {
        breakpoint: 960,
        settings:{
          arrows: false,
        }
      },
    ]
    // asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    dots: false,
    fade: false,
    centerMode: false,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint:890,
        settings:{
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 700,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:500,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 420,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 1, 
        }
      },
    ]
  });
  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
  });
});