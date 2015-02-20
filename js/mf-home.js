var width = $(window).width();
var height = $(window).height();
$('#loader').css({
	'min-height': height,
	'min-width': width
});

$(window).load(function(){
	$('#loader').delay(2000).animate({
		opacity:0
	}, function () {
		$(this).remove();	
		$('nav').animate({
			opacity:1
		});
	})
});

$(document).ready(function(){

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
	// var randomTime = randomTime();

	// function randomTime () {
	// 	return Math.round( Math.random() * 90000 );
	// }

	var delay = 3000;

	$('#h1-first-line').dynamo({
	    delay: delay,
	    // speed: random1,
	    lines: ['hopelessly', 'deliberately', 'scarily', 'proudly', 'rapidly', 'unashamedly', 'emotionally', 'elegantly', 'abundantly'],
	    callback: function() { 
	    	
	    }
	});
	$('#h1-second-line').dynamo({
	    delay: delay,
	    // speed: random2,
	    lines: ['devoted', 'quick', 'efficient', 'independent', 'evolving', 'small', 'available', 'wasted', 'clear'],
	    callback: function() { 
	    	
	    }
	});
});