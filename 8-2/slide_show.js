$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;

	// the function for running the slide show
	var runSlideShow = function() {
		$("#caption").hide(1000);
		$("#slide").slideUp(2000, function() {
			if (nextSlide.next().length == 0) {
				nextSlide = $("#slides img:first-child");
			} else {
				nextSlide = nextSlide.next();
			}
			nextSlideSource = nextSlide.attr("src");
			nextCaption = nextSlide.attr("alt");
			$("#slide").attr("src", nextSlideSource).show(1000);
			$("#caption").text(nextCaption).slideDown(2000);
		});
	},
	//start slide show
	    timer1 = setInterval(runSlideShow, 5000);

	//starting and stopping the slide show
	$("#slide").click(function() {
		if (timer1 != null) {
			clearInterval(timer1);
			timer1 = null;
		} else {
			timer1 = setInterval(runSlideShow, 5000);
		}
	});
});
