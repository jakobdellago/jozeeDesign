$ = require ('jquery');
slick = require('slick-carousel');

$(document).ready(function() {
	
	$('.menu-opener').click( function(){
		$('.flex-wrapper').toggleClass('open');
	});

	$('.product-link.slider.large .product-list-wrapper').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,	
  		arrows: false,
  		adaptiveHeight: true
	});

	$('.product-link.slider.small .product-list-wrapper').slick({
  		infinite: true,
  		slidesToShow: 2.5,
  		slidesToScroll: 2,	
  		arrows: false,
  		adaptiveHeight: true,
	});
});

