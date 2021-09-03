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
				$moviePosters.append('<div class="posters p-2 bg-gradient-to-r from-primary via-secondary to-third rounded-3xl" data-theater="' + $theaters + '"><img src="' + movie_items.poster + '" class="rounded-3xl w-100 md:w-52" alt="poster" /></div>');
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


