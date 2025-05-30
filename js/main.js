(function ($) {

	"use strict";

	$(window).load(function () {
		$("#loader").fadeOut("slow", function () {
			$("#preloader").delay(300).fadeOut("slow");
		});
	})

	setTimeout(function () {
		$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });
	}, 100);

	$(".fluid-video-wrapper").fitVids();

	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		itemsCustom: [
			[0, 1],
			[700, 2],
			[960, 3]
		],
		navigationText: false
	});

	$('.alert-box').on('click', '.close', function () {
		$(this).parent().fadeOut(500);
	});

	var statSection = $("#stats"),
		stats = $(".stat-count");

	statSection.waypoint({
		handler: function (direction) {
			if (direction === "down") {
				stats.each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 4000,
						easing: 'swing',
						step: function (curValue) {
							$this.text(Math.ceil(curValue));
						}
					});
				});
			}
			this.destroy();
		},
		offset: "90%"
	});

	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded(function () {
		containerProjects.masonry({
			itemSelector: '.folio-item',
			resize: true
		});
	});

	$('.item-wrap a').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'mfp-fade'
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$('.smoothscroll').on('click', function (e) {
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});

	var pxShow = 300;
	var fadeInTime = 400;
	var fadeOutTime = 400;
	var scrollSpeed = 300;

	jQuery(window).scroll(function () {
		if (!($("#header-search").hasClass('is-visible'))) {
			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}
		}
	});

})(jQuery);
