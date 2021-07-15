(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  });

  //AOS.init();

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	/*--/ Star Counter /--*/
	$('.counter').counterUp({
		delay: 15,
		time: 2000
	});

	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}			
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	// $('.js-scroll').on("click", function () {
		// $('.navbar-collapse').collapse('hide');
	// });

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
			$('.navbar-expand-lg .container .navbar-brand img').css('width', '100px');

		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
			$('.navbar-expand-lg .container .navbar-brand img').css('width', '100px');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}

		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg.subpage').addClass('navbar-reduce');
			$('.navbar-expand-lg.subpage').removeClass('navbar-trans');
			$('.navbar-expand-lg.subpage .container .navbar-brand img').css('width', '54px');
			$('.navbar-expand-lg.subpage .logow').css('padding', '0');

		} else {
			$('.navbar-expand-lg.subpage').addClass('navbar-trans');
			$('.navbar-expand-lg.subpage').removeClass('navbar-reduce');
			$('.navbar-expand-lg.subpage .container .navbar-brand img').css('width', '100px');
			$('.navbar-expand-lg.subpage .logow').css('padding', '20px 5px 10px 5px');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
		
	
	
	});

	$(document).ready(function () {
		$('#testimonials .owl-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			dots:true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			margin: 10,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 1,
					nav: false
				},
				1200: {
					items: 1,
					nav: true,
					loop: false,
					margin: 20
				}
			}
		});
	});

	$(document).ready(function () {
		$('.services-content').addClass('hide');
		$('.services-content[data-content="retailing"]').removeClass('hide').addClass('show');
		$('.gray-shadow-box').click(function(){
		var servicesName = $(this).attr("data-service");
		//var serviceContent = $('.services-content').attr('data-content');
			$('.services-content').addClass('hide').removeClass('show');
			$('.services-content[data-content = "'+servicesName+'"]').addClass('show').removeClass('hide');
			
	});

	});
	/* ==============================================
	   CONTACT FORM
	=============================================== */


	$(function () {
		jQuery.validator.addMethod("phoneno", function (phone_number, element) {
			phone_number = phone_number.replace(/\s+/g, "");
			return this.optional(element) || phone_number.length > 9 &&
				phone_number.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
		}, "<br />Please specify a valid phone number");

		$("form[name='contact-form']").validate({

			rules: {
				your_name: "required",
				phone: {
					required: true,

					phoneno: true
				},
				email: {
					required: true,
					email: true
				},
				comments: {
					required: true,
					minlength: 2
				}
			},
			messages: {
				your_name: "Please enter your name",
				phone: {
					required: "Please enter your phone number",
				},
				comments: {
					required: "Please provide a your message",
					minlength: "Your message must be at least 2 characters long"
				},
				email: "Please enter a valid email address"
			},
			submitHandler: function (form) {
				form.submit();
			}
		});
	});



})(jQuery);


