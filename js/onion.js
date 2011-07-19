/*
TO GET THIS SCRIPT TO WORK, YOU NEED THE FOLLOWING INFORMATION:
- THE URL PATH TO YOUR SITE COMP IMAGE
- THE WIDTH OF YOUR COMP
- THE HEIGHT OF YOUR COMP
*/
$(document).ready(function() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	// CHANGE THIS TO THE CORRECT PATH AND WIDTH OF YOUR SITE COMP
	$('body').prepend('<div id="comp"><img src="site_comps/comp.jpg" width="960" height="1000" /></div>');
	compWidth = $('#comp img').width();
	compHeight = $('#comp img').height();
	// POSITION THE COMP IN THE BACKGROUND
	// CONSIDERATION NEEDS TO BE MADE FOR WHETHER THERE IS A SCROLL BAR OR NOT
	if(windowHeight < compHeight){
		$("#comp").css({
			// ADJUST DIMENSIONS TO FIT YOUR SITE COMP
			width: "960px",
			height:"1000px",
			position: "absolute",
			top: "0",
			// IF THERE IS A SCROLLBAR, WE NEED TO OFFSET THE LEFT POSITION OF THE COMP TO ACCOMMODATE IT (8PX HERE)
			left: (((windowWidth - compWidth)/2)-8)+"px"
		});
	}
	else{
		$("#comp").css({
			// ADJUST DIMENSIONS TO FIT YOUR SITE COMP
			width: "960px",
			height:"1000px",
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
				left: (((windowWidth - compWidth)/2))+"px"
			});
		}
		else{
			$("#comp").css({
				left: (((windowWidth - compWidth)/2))+"px"
			});
		}
	});
});