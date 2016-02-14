
;(function($){
	$(document).foundation();
	$(function(){
		var slider = $('.ba-slider');
		sliderFeatures = $('.ba-slider__features');
		slider.slick({
			gorizontal:true,
			infinity: false

		});
		sliderFeatures.slick({
			dots:true,
			gorizontal:true,
			infinity: false,
			nextArrow:false,
			prevArrow:false

		});
		slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// console.log(nextSlide);
			var currentSlideEl = $(slick.$slides[currentSlide]),
			nextSlideEl = $(slick.$slides[nextSlide]),
			currentClass = currentSlideEl.data('compare'),
			nextClass = nextSlideEl.data('compare');
			$('body').removeClass(currentClass).addClass(nextClass);
		});
		sliderFeatures.on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// console.log(nextSlide);
			var currentSlideEl = $(slick.$slides[currentSlide]),
			nextSlideEl = $(slick.$slides[nextSlide]),
			currentClass = currentSlideEl.data('works'),
			nextClass = nextSlideEl.data('works');
			$('body').removeClass(currentClass).addClass(nextClass);
		});
	});

})(jQuery);
