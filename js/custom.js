$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
  
  	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-custom').addClass('navbar-reduce');
			$('.navbar-custom').removeClass('navbar-trans');
			$('.navbar-custom img').removeClass('md:w-32 w-20');
			$('.navbar-custom img').addClass('md:w-20 w-20');

		} else {
			$('.navbar-custom').addClass('navbar-trans');
			$('.navbar-custom').removeClass('navbar-reduce');
			$('.navbar-custom img').removeClass('md:w-20 w-20');
			$('.navbar-custom img').addClass('md:w-32 w-20');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}

	});
  
  var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    dots: false,
	margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

  
});


