$ = require ('jquery');
slick = require('slick-carousel');
//window.truncate = require('html-truncate');
window.Shuffle = require('shufflejs');
window.Cookies = require('js-cookie');
//require('readmore-js');
//window.Shave = require('shave');
//DotDotDot = require('jquery.dotdotdot');
var Truncatise = require('truncatise');

function setSlickTransform($slider) {
	var $slick_track = $slider.find('.slick-track')
	var width_before = $slick_track.css('transform');
}

$(document).ready(function() {

	//remove the product in slider where product is shown on page 
	if($('.main-container.product-detail-page').length > 0){
		var product_detail_header = $('.main-container.product-detail-page .product-detail .header').text();
		var $products = $('.product-link.small .product');
		$.each($products, function( key, value ){
			$this = $(this);
			var product_slider_header = $this.find('.header').text();
			if (product_detail_header === product_slider_header) {
				$this.remove();
			}
		});
	}

	$('.product-link.large.no-slider').find('.product').each(function(){
		$bodytext = $(this).find('.bodytext');
		var croppedText = Truncatise($bodytext.html(), {
			TruncateLength: 250,
			TruncateBy : "characters",
			Strict : false,
			StripHTML : true,
			Suffix : ' ...'
		});
		$bodytext.html(croppedText);
	});

	$('.product-link.large.slider').find('.product').each(function(){
		$bodytext = $(this).find('.bodytext');
		var croppedText = Truncatise($bodytext.html(), {
			TruncateLength: 180,
			TruncateBy : "characters",
			Strict : false,
			StripHTML : true,
			Suffix : ' ...'
		});
		$bodytext.html(croppedText);
	});

	// CROP on height
	//TODO: Redo on resize
/*
	var product_height = $('.product-link.large .product .bodytext').css('height');
	product_height = product_height.substring(0, product_height.length - 1);
	product_height = parseInt(product_height);
	product_height = product_height - 80;
	//Shave('.product-link.large .product .bodytext', product_height);
	window.dotdotdot_API = $('.product-link.large .product .bodytext').dotdotdot({
		height: product_height,
		truncate: 'word',
		ellipsis: ' ...',
		watch: 'window'
	}).data('dotdotdot');;*/



	var $large_slider = $('.product-link.slider.large .product-list-wrapper');
	var $small_slider = $('.product-link.slider.small .product-list-wrapper');

	//shufflejs config
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

	//add scrolled class to navigation
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
  		arrows: true,
  		nextArrow: '<div class="arrow arrow-right"><i class="icon-arrow-right"></i></div>',
  		prevArrow: '<div class="arrow arrow-left"><i class="icon-arrow-left"></i></div>',
  		adaptiveHeight: true,
  		//autoplay: true,
  		//autoplaySpeed: 7000,
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

    //crop product-slider description-text
	/*$('.product-link.large').find('.product').each(function(){
		$bodytext = $(this).find('.bodytext');
		var croppedText = truncate($bodytext.html(), 200);
		$bodytext.html(croppedText);
	});*/
	

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

	//Cookiebanner behaviour close
	var show_cookiebanner = Cookies.get('show_cookiebanner');
	if(typeof show_cookiebanner === 'undefined') {
		show_cookiebanner = true;
	} else {
		show_cookiebanner = false;
	}

	if (show_cookiebanner) {
		$('.cookiebanner').removeClass('hidden');
	}

	$('.cookiebanner .icon-close').click(function() {
		$('.cookiebanner').addClass('hidden');
		if (show_cookiebanner === true){
			Cookies.set('show_cookiebanner', 1, { expires: 365 });
		}
	});


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
	$('.product-detail .shop-button').click(function() {
		var product_name = $('.product-detail .header').text();
		var product_price = parseInt($('.product-detail .price').text());

		gtag('event', 'shop', {
		  'event_category': 'product-detail',
		  'event_label': product_name,
		  'value': product_price
		});
	});

	//MAIL from product-detail
	$('.product-detail .mail-button').click(function() {
		var product_name = $('.product-detail .header').text();
		var product_price = parseInt($('.product-detail .price').text());

		gtag('event', 'mail', {
		  'event_category': 'product-detail',
		  'event_label': product_name,
		  'value': product_price
		});
	});

		//LINK ON JAKOBDELLAGO on facebook in footer
	$('.footer .facebook-link-jakob').click(function() {

		var url = $(this).attr('href');

		gtag('event', 'facebook', {
		  'event_category': 'social-media',
		  'event_label': url
		});
	});

	//ANALYTICS EVENTS END

});

