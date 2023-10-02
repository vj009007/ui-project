(function($) {
    
    // Slider
    $(document).ready(function() {
           $('.owl-carousel').owlCarousel({
            stagePadding:40,
            loop:false,
            nav:true,
            dots:false,
            margin:0,
            autoplay:false,
            autoplayTimeout:10000,
            autoplayHoverPause:true,
            navText : ["<img src='images/left-arrow.svg'>","<img src='images/right-arrow.svg'>"],
            responsive:{
              0:{
                  items:1
              },
              500:{
                  items:2
              },
              768:{
                  items:3,
                  margin:30,
              },
              1024:{
                  items:4,
                  stagePadding: 60,
                  margin:30,
              }
            }         
         })
      
    })

    // Sticky Header
    $(window).scroll(function(){
        var sticky = $('.header'),
              scroll = $(window).scrollTop();

        if (scroll >= 37) sticky.addClass('sticky-header');
        else sticky.removeClass('sticky-header');
     });


     AOS.init();
  
})(jQuery);