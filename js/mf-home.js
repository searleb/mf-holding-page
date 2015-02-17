$(document).ready(function(){
		var width = $(window).width();
		var height = $(window).height();

// Fit landing page to screen
	function setLandingPageSize() {

		$('#landing-page').css({
			'min-height': height
		});
	}

	$(window).resize(function() {
		setLandingPageSize();
		console.log('resize');
	}); 

	setLandingPageSize();

// Smooth Scrolling
	$(".scroll").click(function(event){
	    event.preventDefault();
	    //calculate destination place
	    var dest=0;
	    if($(this.hash).offset().top > $(document).height()-$(window).height()){
	        dest=$(document).height()-$(window).height();
	    }else{
	        dest=$(this.hash).offset().top;
	    }
	    //go to destination
	    if (width < 768) {
	    	$('html,body').animate({scrollTop:dest - 35}, 1000,'swing');
	    } else{
	    	$('html,body').animate({scrollTop:dest - 160}, 1000,'swing');
	    }
	});

// Close mobile menu on link click
	$('.navbar-nav a').on('click', function(){
		$('#navbar').collapse('hide');
	});

// Rotating title text
	var random1 = 2000;
	var random2 = 2500;

	function randomTime () {
		random1 = Math.round( Math.random() * 10000 );
		random2 = Math.round( Math.random() * 10000 )
	}

	$('#h1-first-line').dynamo({
	    delay: random1,
	    // speed: random1,
	    lines: ['hopelessly', 'deliberately', 'scarily', 'proudly', 'rapidly', 'unashamedly', 'emotionally', 'elegantly'],
	    callback: function() { 
	    	randomTime();
	    }
	});
	$('#h1-second-line').dynamo({
	    delay: random2,
	    // speed: random2,
	    lines: ['devoted', 'quick', 'efficient', 'independent', 'small', 'clear', 'available', 'wasted'],
	    callback: function() { 
	    	randomTime();
	    }
	});
});