$(function () {
  
   
   $('.study-lavel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(window).on('scroll',function(){
  var position = $(window).scrollTop();
  if( position > 0){
    $('.navbar-expand-lg').addClass('sticky')
  }else{
    $('.navbar-expand-lg').removeClass('sticky')
  }


  if( position > 600){
    $('#back-top').fadeIn(1000);
  }else{
    $('#back-top').fadeOut(1000);
  }



})



$('#back-top').on('click',function(){
  $('html,body').animate({
    scrollTop:0
  })
})

})