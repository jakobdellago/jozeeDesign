$ = require ('jquery');
slick = require('slick-carousel');
window.truncate = require('html-truncate');
window.Shuffle = require('shufflejs');

function setSlickTransform($slider) {
	var $slick_track = $slider.find('.slick-track')
	var width_before = $slick_track.css('transform');
}

$(document).ready(function() {

	if($('.product-link.selectbox').length > 0) {
		
		$('.selectbox-wrapper select').on('change', function(){
			$this = $(this);
			filter_by = $this.val()
			if (filter_by === "0") {
				shuffleInstance.filter("all");
			} else {
				shuffleInstance.filter(filter_by);
			}
		});

		//ShuffleJS Configuration
		var Shuffle = window.Shuffle;
		var shuffle_element = document.querySelector('.product-link.selectbox .product-list-wrapper');
		var shuffle_sizer = shuffle_element.querySelector('.product');

		var shuffleInstance = new Shuffle(shuffle_element, {
		  itemSelector: '.product',
		  sizer: shuffle_sizer // could also be a selector: '.my-sizer-element'
		});

		window.shuffleInstance = shuffleInstance;
	}

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
			$('.main-nav').addClass('scrolled');
		} else {
			$('.mobile-nav').removeClass('scrolled');
			$('.main-nav').removeClass('scrolled');
		}
	});

	$large_slider.slick({
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		arrows: false,
  		adaptiveHeight: true,
  		autoplay: true,
  		autoplaySpeed: 7000,
  		responsive: [
  			{
  				breakpoint: 1280,
  				settings: {
  					slidesToShow: 1
  				}
  			}
  		]
	});


	$small_slider.slick({
  		infinite: true,
  		slidesToShow: 3,
  		slidesToScroll: 2,	
  		arrows: false,
  		adaptiveHeight: true,
		centerMode: true,
		responsive: [
		    {
		      breakpoint: 812,
		      settings: {
		        slidesToShow: 2,
		      }
		    }
		]
	});

	/* SHOULD STOP AUTOPLAY WHEN SWIPED ONCE - STILL CAUSES BUGS WHILE SLIDING
	$large_slider.on('swipe', function(event, slick, direction){
        console.log('test');
		$large_slider.slick('slickSetOption', {
		    autoplay: false,
		    autoplaySpeed: 0,
		    infinite: true
		}, true)
    });*/

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

	//ANALYTICS EVENTS BEGIN
	//FOOTER BEGIN
	$('.facebook-link').click(function() {
		var url = $(this).attr('href');

		gtag('event', 'facebook', {
		  'event_category': 'social-media',
		  'event_label': url
		});
	});

	$('.instagram-link').click(function() {
		var url = $(this).attr('href');

		gtag('event', 'instagram', {
		  'event_category': 'social-media',
		  'event_label': url
		});
	});

	$('.phone-link').click(function() {
		var phone_number = $(this).attr('href');
		
		gtag('event', 'position:footer', {
		  'event_category': 'click-to-call',
		  'event_label': phone_number
		});

	});

	$('.footer .mail-link').click(function() {
		var mail_address = $(this).attr('href');

		gtag('event', 'position:footer', {
		  'event_category': 'click-to-mail',
		  'event_label': mail_address
		});
	});
	//FOOTER END

	//OUTBOUND TO SHOP from menu
	$('.mobile-nav li.last a, .main-nav li.last a').click(function() {
		gtag('event', 'position:nav-menu', {
		  'event_category': 'outbound-to-shop',
		});
	});

	//OUTBOUND TO SHOP from product-detail
	$('.product-detail .shop-link').click(function() {
		var product_name = $('.product-detail .header').text();
		var product_price = parseInt($('.product-detail .price').text());

		gtag('event', 'shop', {
		  'event_category': 'product-detail',
		  'event_label': product_name,
		  'value': product_price
		});
	});

	//MAIL from product-detail
	$('.product-detail .mail-link').click(function() {
		var product_name = $('.product-detail .header').text();
		var product_price = parseInt($('.product-detail .price').text());

		gtag('event', 'mail', {
		  'event_category': 'product-detail',
		  'event_label': product_name,
		  'value': product_price
		});
	});

	//ANALYTICS EVENTS END

});

