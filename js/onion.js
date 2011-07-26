/*
TO GET THIS SCRIPT TO WORK, YOU NEED THE FOLLOWING INFORMATION:
- THE URL PATH TO YOUR SITE COMP IMAGE
- THE WIDTH OF YOUR COMP
- THE HEIGHT OF YOUR COMP
*/
$(document).ready(function() {

	// SET YOUR INFORMATION HERE:
	var config = {
		path :	'',		// e.g. images/onion.jpg
		width :	'',		// e.g. 960
		height :''		// e.g. 1000
	};


	windowWidth = $(window).width();
	windowHeight = $(window).height();
	$('body').prepend('<div id="comp"><img src="'+config.path+'" width="'+config.width+'" height="'+config.height+'" /></div>');
	compWidth = $('#comp img').width();
	compHeight = $('#comp img').height();
	// POSITION THE COMP IN THE BACKGROUND
	// CONSIDERATION NEEDS TO BE MADE FOR WHETHER THERE IS A SCROLL BAR OR NOT
	if(windowHeight < compHeight){
		$("#comp").css({
			width: config.width+"px",
			height:config.height+"px",
			position: "absolute",
			top: "0",
			// IF THERE IS A SCROLLBAR, WE NEED TO OFFSET THE LEFT POSITION OF THE COMP TO ACCOMMODATE IT (8PX HERE)
			left: (((windowWidth - compWidth)/2)-8)+"px"
		});
	}
	else{
		$("#comp").css({
			width: config.width+"px",
			height:config.height+"px",
			position: "absolute",
			top: "0",
			left: (((windowWidth - compWidth)/2))+"px"
		});
	}
	
	$(window).resize(function(){
		windowWidth = $(window).width();
		windowHeight = $(window).height();
		/* THIS MAY NEED TO BE ADJUSTED */
		if(windowHeight < compHeight){
			$("#comp").css({
				left: (((windowWidth - compWidth)/2)-8)+"px"
			});
		}
		else{
			$("#comp").css({
				left: (((windowWidth - compWidth)/2))+"px"
			});
		}
	});
	
	
	/* TOGGLE COMP VISIBILITY WITH TILDE KEY */
	$(document).keyup(function(k){
	
		if(k.keyCode === 192 ){

			if( $('#comp').is(':visible') ){
				$('#comp').fadeOut();
			} else {
				$('#comp').fadeIn();
			}	
		}
	
	});
	
	
	
});