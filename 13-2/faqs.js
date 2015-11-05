$(document).ready(function() {
	$("#faqs h1").animate(
			{ fontSize: "650%", opacity: 1, left: "+=275", backgroundColor: "blue", color: "red" }, 2000 )  
		.animate(
			{ fontSize: "175%", left: "-=275", backgroundColor: "white", color: "blue"}, 1000 );
	
	$("#faqs h2").toggle(
		function() {
			$(this).toggleClass("minus");
		   //try a different effect
		   // $(this).next().show("bounce", 500);
		    $(this).next().show("slide", 500);
	    },
	    function() {
	        $(this).toggleClass("minus");
	      //  $(this).next().hide("puff", 1500);
	     //try a different effect
	      $(this).next().hide("clip", 1000);
	    }
    ); // end toggle
});  // end ready
