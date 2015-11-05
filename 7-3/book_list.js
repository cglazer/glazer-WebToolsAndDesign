$(document).ready(function() {
	$("#categories h2").toggle(function() {
		$(this).addClass("minus");
		$(this).next().show();
	}, function() {
		$(this).removeClass("minus");
		$(this).next().hide();
	});
	$("#categories h2").click(function() {
		$("#image").attr("src", "");
	});
	$("#web_images a, #java_images a, #net_images a").each(function() {
		var imageURL = $(this).attr("href");
		//preload the images
		var bookImage = new Image();
		bookImage.src = imageURL;

		//set up event handlers
		$(this).click(function(evt) {
			$("#image").attr("src", imageURL);

			//cancel the default action of the link
			evt.preventDefault();
		});

	});

});
