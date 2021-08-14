/* ============================
Author Name: Samiul Islam Sajib
===============================*/   
/*=============================
[Start Activation Code]
=======================
	* One Page Nav
	* Sticky JS
	* Mobile Menu
	* Social JS
	* Service hover
	* Isotop Active
	* Counter JS
	* Testimonial Carousel
	* Blog Carousel
	* Blog Slider
	* Clients Carousel
	* Wow JS
	* Parallax JS
	* Video Background
	* Side Navigation
	* Personal slider
	* Extra JS
	* Preloader JS
========================
[End Activation Code]
========================*/ 
(function($){"use strict";$(document).ready(function(){function Sajib_Custom_JS(){var windowS=$(window),windowH=windowS.height(),projecthoverS=$('.portfolio-hover'),projecthoverH=projecthoverS.height(),proejectdevide=(projecthoverH/2);projecthoverS.css({marginTop:-proejectdevide,})};if($.fn.onePageNav){$('.mainmenu .nav').onePageNav({currentClass:'active',scrollSpeed:1000,easing:'easeInOutQuart'})}
jQuery(window).on('scroll',function(){if($(this).scrollTop()>1){$('#header').addClass("sticky")}else{$('#header').removeClass("sticky")}});$('.menu').slicknav({prependTo:".mobile-nav",closeOnClick:!0,});$('.social-icon li a').on("click",function(){$('.social').toggleClass('active')});$('.single-service').on('mouseenter',function(){$(' .single-service').removeClass('active');$(this).addClass('active')});$(window).on('load',function(){Sajib_Custom_JS();if($.fn.isotope){$(".isotop-active").isotope({filter:'*',});$('.portfolio-nav ul li').on('click',function(){$(".portfolio-nav ul li").removeClass("active");$(this).addClass("active");var selector=$(this).attr('data-filter');$(".isotop-active").isotope({filter:selector,animationOptions:{duration:750,easing:'easeInOutQuart',queue:!1,}});return!1})}});$('.count').counterUp({time:1000});$(".testimonial-carousel").owlCarousel({loop:!0,autoplay:!1,smartSpeed:600,animateOut:'flipOutX',animateIn:'flipInX',margin:30,nav:!0,dots:!1,items:1,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],});$(".blog-carousel").owlCarousel({loop:!0,autoplay:!1,autoplayTimeout:4000,smartSpeed:600,margin:15,nav:!1,dots:!0,responsive:{300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$("#blog .slide").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:3500,smartSpeed:600,mouseDrag:!0,nav:!0,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:!0,responsive:{320:{items:1,dots:!1,nav:!1,},480:{items:1,dots:!1,nav:!1,},768:{items:1,},1170:{items:1,},}});$(".clients-slider").owlCarousel({loop:!0,autoplay:!1,smartSpeed:600,margin:30,nav:!1,dots:!1,responsive:{300:{items:1,},480:{items:2,},768:{items:3,},1170:{items:5,},}});var window_width=$(window).width();if(window_width>767){new WOW().init()}
$(window).stellar({responsive:!0,positionProperty:'position',horizontalScrolling:!1});$('.side-icon a').on("click",function(){$('#header').toggleClass('active')});$(".personal-main.slide").owlCarousel({loop:!0,autoplay:!0,animateIn:'fadeIn',animateOut:'fadeOut',smartSpeed:600,autoplayTimeout:4000,mouseDrag:!1,margin:30,nav:!1,dots:!0,items:1,});$(".portfolio-single.slider").owlCarousel({loop:!0,autoplay:!0,smartSpeed:600,autoplayTimeout:3500,mouseDrag:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],dots:!1,items:1,});$(".portfolio-related").owlCarousel({loop:!0,autoplay:!0,smartSpeed:600,autoplayTimeout:3500,mouseDrag:!0,nav:!1,dots:!1,items:1,responsive:{300:{items:1,},480:{items:1,},768:{items:2,},1170:{items:3,},}});$('.btn, .arrow a, .slicknav_menu li a').on('click',function(event){var $anchor=$(this);$('html, body').stop().animate({scrollTop:$($anchor.attr('href')).offset().top-20},1000,'easeInOutQuart');event.preventDefault()});$('.player').mb_YTPlayer()});$(window).load(function(){$('.loader').fadeOut('slow',function(){$(this).remove()})})})(jQuery)