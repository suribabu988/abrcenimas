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

		$("form[name='bulk-form']").validate({

			rules: {
				name: "required",
				guests: "required",
				date: "required",
				movie: "required",
				mobile: {
					required: true,

					mobile: true
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Please enter your name",
				guests: "Please enter number of guests",
				date: "Please enter date & time",
				movie: "Please enter movie name",
				mobile: {
					required: "Please enter your mobile number",
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

			$("select#theaters").change(function () {
				var selectedTheater = $(this).children("option:selected").val();
				$('.posters').addClass('hidden');
				if ($("#theaters option:selected").val() == 'ALL'){
					$('.posters').removeClass('hidden').addClass('block');
				};
				var dataPosters = $('.posters[data-theater=' + selectedTheater + ']').removeClass('hidden').addClass('block');

			});

			$('.posters a').first().addClass('first');
			$('.posters a').last().addClass('last');
			for (var items in v) {
				console.log(v[items].poster);
				$theaters = key;
				var movie_items = v[items];
				$moviePosters.append('<div class="posters p-2 bg-gradient-to-r from-primary via-secondary to-third rounded-3xl" data-aos="fade-up" data-aos-duration="1800" data-aos-offset="1" data-theater="' + $theaters + '"><a href="#videoModal" rel="modal:open" data-title="' + movie_items.movie +'" data-videoid="'+movie_items.video+'"><img src="' + movie_items.poster + '" class="rounded-3xl w-full" alt="poster" /></a></div>');
				var dataPosters = $('.posters[data-theater]').removeClass('hidden').addClass('block');
				
				
			$('.posters a').on('click', function () {	
				var $this = $(this);	
				var $videoClass = $this.attr('class');
				var videos_id = $this.attr('data-videoid');
					var $videoTitle = $this.attr('data-title');
					//var videos_id = $imgHref.split('v=')[1];
					// var ampersandPosition = videos_id.indexOf('&');
					// if (ampersandPosition != -1) {
					// 	videos_id = videos_id.substring(0, ampersandPosition);
					// }
				var $videoModal = $('#videoModal');
				
				$videoModal.html('<h2 class="video-title text-2xl uppercase pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-third">' + $videoTitle + '</h2>'+
					'<iframe id="videoFrame" class="w-full h-80  min-h-32" title="' + movie_items.movie + '"  src = "https://www.youtube.com/embed/'+videos_id+'?autoplay=1&showinfo=0&controls=0&autohide=1" allow = "autoplay; encrypted-media" >'+
			'</iframe >'+
			'<a class="prev" id="prev-video-btn">&#10094;</a>'+
		    '<a class="next" id="next-video-btn">&#10095;</a>');
				$('#videoModal').removeClass('hidemodal').addClass('showmodal');

					// next click logic
					$('#next-video-btn').on('click', function () {
						var $next = $this.parent('.posters').next('.posters').find('a').attr('data-videoid');
						var $nextVideoTitle = $this.parent('.posters').next('.posters').find('a').attr('data-title');
						var $nextVideoClass = $this.parent('.posters').next('.posters').find('a').attr('class');
						var video_nextid = $next;
						// var ampersandPosition = video_nextid.indexOf('&');
						// if (ampersandPosition != -1) {
						// 	video_nextid = video_nextid.substring(0, ampersandPosition);
						// }
						$this = $this.parent('.posters').next('.posters').find('a');
						$('#videoModal h2.video-title').html($nextVideoTitle);
						$('#videoModal iframe').addClass($nextVideoClass);
						$('#videoModal iframe').attr('src', 'https://www.youtube.com/embed/' + video_nextid + '?autoplay=1&showinfo=0&controls=0&autohide=1');
						if ($nextVideoClass == 'last') {
							$(this).hide();
							$('#prev-video-btn').show();
						}
						if ($nextVideoClass != 'last') {
							$(this).show();
							$('#prev-video-btn').show();
						}

					});

					// prev click logic
					$('#prev-video-btn').on('click', function () {
						var $prev = $this.parent('.posters').prev('.posters').find('a').attr('data-videoid');
						var video_previd = $prev;
						// var ampersandPosition = video_previd.indexOf('&');
						// if (ampersandPosition != -1) {
						// 	video_previd = video_previd.substring(0, ampersandPosition);
						// }
						var $prevVideoTitle = $this.parent('.posters').prev('.posters').find('a').attr('data-title');
						var $prevVideoClass = $this.parent('.posters').prev('.posters').find('a').attr('class');
						
						$this = $this.parent('.posters').prev('.posters').find('a');

						$('#videoModal h2.video-title').html($prevVideoTitle);
						$('#videoModal iframe').addClass($prevVideoClass);
						$('#videoModal iframe').attr('src', 'https://www.youtube.com/embed/' + video_previd + '?autoplay=1&showinfo=0&controls=0&autohide=1');
						if ($prevVideoClass == 'first') {
							$(this).hide();
							$('#next-video-btn').show();
						}
						if ($prevVideoClass != 'first') {
							$(this).show();
							$('#next-video-btn').show();
						}

					});

			});

}

});

});


});


