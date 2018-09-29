$ = require ('jquery');
slick = require('slick-carousel');

function setSlickTransform($slider) {
	var $slick_track = $slider.find('.slick-track')
	var width_before = $slick_track.css('transform');
}

$(document).ready(function() {

	var $large_slider = $('.product-link.slider.large .product-list-wrapper');
	var $small_slider = $('.product-link.slider.small .product-list-wrapper');
	
	$('.menu-opener').click( function(){
		$('.flex-wrapper').toggleClass('open');
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
  		slidesToScroll: 1,	
  		arrows: false,
  		adaptiveHeight: true,
		centerMode: true
	});

	$large_slider.on('swipe', function(event, slick, direction){
        $large_slider.slick('slickSetOption', {
            autoplay: false
        }, true);
	});

	// On before slide change
	/*$('.product-link.slider.small .product-list-wrapper').on('afterChange', function(event, slick, currentSlide, nextSlide){
	  setSlickTransform($(this));
	});*/
});

