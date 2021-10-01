$(document).ready(function () {
  $(".nav-toggler").each(function (_, navToggler) {
    var target = $(navToggler).data("target");
    $(navToggler).on("click", function () {
      $(target).animate({
        height: "toggle",
      });
    });
  });
  
	AOS.init();


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
		if ($(window).scrollTop() > pixels) {
			$('.navbar-contact').addClass('navbar-reduce');
			$('.navbar-contact').removeClass('navbar-trans');
			$('.navbar-contact img').removeClass('md:w-16 w-16');
			$('.navbar-contact img').addClass('md:w-12 w-12');

		} else {
			$('.navbar-contact').addClass('navbar-trans');
			$('.navbar-contact').removeClass('navbar-reduce');
			$('.navbar-contact img').removeClass('md:w-12 w-12');
			$('.navbar-contact img').addClass('md:w-16 w-16');
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
    dots: true,
	margin:10,
    autoplay:true,
    autoplayTimeout:3000,
	autoplayHoverPause:true,
	nav:false
});

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	// Preloader

	$(window).on('load', function () {
		if ($('#loader').length) {
			$('#loader').delay(500).fadeOut("slow", function () {
				$(this).remove();
			});
		}
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


	/* ==============================================
	   CONTACT FORM
	=============================================== */


	$(function () {
		jQuery.validator.addMethod("mobile", function (phone_number, element) {
			phone_number = phone_number.replace(/\s+/g, "");
			return this.optional(element) || phone_number.length > 9 &&
				phone_number.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/);
		}, "<br />Please specify a valid mobile number");

		$("form[name='contact-form']").validate({

			rules: {
				fullname: "required",
				mobile: {
					required: true,

					mobile: true
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
				fullname: "Please enter your name",
				mobile: {
					required: "Please enter your mobile number",
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


//Theaters
	$.getJSON("./js/theaters.json", function (data) {
		
		$.each(data, function (key, v) {
			var $theaters;
			var $theatersList = $('#theaters');
			var $moviePosters = $('#movieposters');
			$theatersList.append('<option class="capitalize">' + key + '</option>');

			for (var items in v) {
				$theaters = key;
				var movie_items = v[items];
				$moviePosters.append('<div class="posters p-2 bg-gradient-to-r from-primary via-secondary to-third rounded-3xl" data-aos="fade-up" data-aos-duration="1800" data-aos-offset="1" data-theater="' + $theaters + '"><img src="' + movie_items.poster + '" class="rounded-3xl w-100 md:w-52" alt="poster" /></div>');
				$('.posters').addClass('hidden');
				$('.posters[data-theater="gudivada"]').removeClass('hidden').addClass('block');	
			}
			$("select#theaters").change(function () {
				var selectedTheater = $(this).children("option:selected").val();
				$('.posters').addClass('hidden');
				var dataPosters = $('.posters[data-theater=' + selectedTheater + ']').removeClass('hidden').addClass('block');
				
			});
	});




});

});


