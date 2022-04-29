$(window).on('load', function(){

	"use strict";


	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */

	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});


	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */

	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });


	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */

	$('#navbarCollapse').onePageNav({
		filter: ':not(.external)'
	});


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */

	$(".navbar-nav li a, a.scrool").on('click', function(e) {

		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;

		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;

	});


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */

	$('.newsletter-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});


	/* ========================================================== */
	/*   Register                                                 */
	/* ========================================================== */

	$('#register-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="register_names"]').val(),
					'phone':$('input[name="register_phone"]').val(),
					'email':$('input[name="register_email"]').val(),
					'ticket':$('select[name="register_ticket"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.register_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	})


	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'subject':$('input[name="contact_subject"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})

});

	let playVideo = document.querySelector('[data-play-video]');
	let videoBox = document.querySelector('[data-video-block]');
	let videoCta = document.querySelector('[data-video-cta]');
	playVideo.addEventListener('click', toggleVideo);
	videoBox.addEventListener('click', toggleVideo);
	document.addEventListener('keydown', function (event){
		if (event.key === 'Escape' && !videoBox.paused) {
			toggleVideo(event);
		}
	});
	let intervalShow, intervalHide;
	function toggleVideo(event) {
		event.preventDefault();
		videoBox.volume = 0.2;
		if (videoBox.paused && !videoBox.classList.contains('open')) {
			videoBox.play();
			videoBox.classList.add('open');
			// intervalShow = setInterval(() => {
			// 	showVideoCta();
			// }, 5000);
			// intervalHide = setInterval(() => {
			// 	hideVideoCta();
			// }, 9000);

		} else {
			videoBox.classList.remove('open');
			videoBox.pause();
			// clearInterval(intervalShow);
			// clearInterval(intervalHide);
			// hideVideoCta();
		}
	}

	function showVideoCta() {
		videoCta.classList.add('show');
	}

	function hideVideoCta() {
		videoCta.classList.remove('show');
	}

	let videoMobile = document.querySelector('[data-video-mobile]');
	videoMobile.src = videoBox.currentSrc;
	let playVideoMobile = $('[data-play-video-mobile]');
	playVideoMobile.magnificPopup({
		type: 'inline',
		callbacks: {
			beforeOpen: function() {
			},
			open: function() {
				videoMobile.play();
			},
			close: function() {
				videoMobile.pause();
			}
		}
	});

	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	});

	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	});

	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	});

	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	});




