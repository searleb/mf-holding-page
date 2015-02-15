$(document).ready(function(){

	function setLandingPageSize() {
		var width = $(window).width();
		var height = $(window).height();

		$('#landing-page').css({
			// 'min-width': width,
			'min-height': height
		});

		$('.chevron').css({
			
		})

	}

	$(window).resize(function() {
		setLandingPageSize();
	}); 

	setLandingPageSize();
});