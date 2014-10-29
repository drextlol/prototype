$(document).ready(function() {
	$(".menu > li").on('mouseover', function(event) {
		event.preventDefault();

		$(".menu > li > a").removeClass('active');
		$(this).children('a').addClass('active');

		if(!$('.mask-menu').hasClass('active')){
			$(this).closest('.mask-menu').addClass('active');
		}

	}).mouseleave(function(event) {
		$('.mask-menu').removeClass('active');
		$(".menu > li > a").removeClass('active');
	});
});