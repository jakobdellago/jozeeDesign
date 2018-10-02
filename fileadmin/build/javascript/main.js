$ = require ('jquery');
slick = require('slick-carousel');
window.truncate = require('html-truncate');

function setSlickTransform($slider) {
	var $slick_track = $slider.find('.slick-track')
	var width_before = $slick_track.css('transform');
}

$('.crt-load-more').click( function() {
	console.log('click on more-button');
	debugger;
});

$(document).ready(function() {

	var $large_slider = $('.product-link.slider.large .product-list-wrapper');
	var $small_slider = $('.product-link.slider.small .product-list-wrapper');
	
	//menu opener
	$('.menu-opener').click( function(){
		$('.flex-wrapper').toggleClass('open');
	});

	//headerimage slide to content
	$('.header-slider .scroll-button').on('click', function(e){
	  $('html, body').animate({
	    scrollTop:$('.header-slider').height() + 26
	  },'slow');
	  e.preventDefault();
	});

	$(window).scroll(function() {
		var top  = window.pageYOffset || document.documentElement.scrollTop;
		if (top > 70) {
			$('.mobile-nav').addClass('scrolled');
		} else {
			$('.mobile-nav').removeClass('scrolled');
		}
	});

	$large_slider.slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: false,
  		adaptiveHeight: true,
  		autoplay: true,
  		autoplaySpeed: 3000
	});


	$small_slider.slick({
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2,	
  		arrows: false,
  		adaptiveHeight: true,
		centerMode: true
	});

	$large_slider.on('swipe', function(event, slick, direction){
        $large_slider.slick('slickSetOption', {
            autoplay: false
        }, true);
	});

	$('.product-link.large').find('.product').each(function(){
		$bodytext = $(this).find('.bodytext');
		var croppedText = truncate($bodytext.html(), 200);
		$bodytext.html(croppedText);
	});

	if($('#curator-feed').length > 0) {
		/* curator-feed */
		(function() {
			var i, e, d = document, s = "script";i = d.createElement("script");
			i.async = 1;
			i.src = "https://cdn.curator.io/published/69d5648f-2fa8-4aa4-81c1-356a793a2109.js";
			e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
		})();

		/*
		Destroys curator-feeds textboxes with no text in it
		*/
		function destroyUnusedTextboxes() {
			$post_objects = $('.crt-post-content');
			$.each( $post_objects, function( key, value ) {
				$this = $(this);
				$text = $this.find('.crt-post-content-text');
				$header = $this.find('.crt-post-header');	
    			if($text.length > 0 && $text[0].innerText === "") {
    				$text.remove();
    				$header.remove();
    			}
			});
		}

		destroyUnusedTextboxes();

		$('.content').on('click', '.crt-load-more', function () {
    		setTimeout( function() { 
    			destroyUnusedTextboxes();
    		}, 1000);
		});
	}

});

