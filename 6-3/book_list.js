var $ = function(id) {
	return document.getElementById(id);
}
window.onload = function() {
	var categories = $("categories");
	var h2Elements = categories.getElementsByTagName("h2");
	var listNode = $("categories");
	var imageNode = $("image");
	var headingNode;
	for (var i = 0; i < h2Elements.length; i++) {
		headingNode = h2Elements[i];

		// Attach event handler to open/ close the options based on click of the plus/minus button
		headingNode.onclick = function() {
			var h2 = this;
			// h2 is the current headingNode object

			if (h2.getAttribute("class") == "plus") {
				h2.setAttribute("class", "minus");
			} else {
				h2.setAttribute("class", "plus");
			}
			if (h2.nextElementSibling.getAttribute("class") == "closed") {
				h2.nextElementSibling.setAttribute("class", "open");
			} else {
				h2.nextElementSibling.setAttribute("class", "closed");
			}
			//remove the picture when click the minus sign
			$("image").setAttribute("src", "");
		}
	}
	var imageLinks = listNode.getElementsByTagName("a");

	var i,
	    linkNode,
	    image;
	    
	    //loop through the images to load them into the application
	for ( i = 0; i < imageLinks.length; i++) {
		linkNode = imageLinks[i];

		linkNode.onclick = function(evt) {
			var link = this;
			imageNode.src = link.getAttribute("href");
//cancel the default action of the links
		if (!evt)
			evt = window.event;
			if (evt.preventDefault) {
				evt.preventDefault();
			} else {
				evt.returnValue = false;
		}
		}
		//preload the images 
		image = new Image();
		image.src = linkNode.getAttribute("href");
	}

}

