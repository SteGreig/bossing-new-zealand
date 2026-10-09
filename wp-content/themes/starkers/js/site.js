
jQuery(document).ready(function($) {

	$(".top-bar .tags").hover(function() { $(".top-bar .tag-cloud").stop(true, true).fadeToggle('fast'); });
	$(".top-bar .tags").click(function() { $(".top-bar .tag-cloud").stop(true, true).fadeToggle('fast'); });

	$(".top-bar .tag-cloud").hover(function() {
	$(this).stop(true, true).show(); },
	function() {
	$(this).stop(true,true).fadeOut('fast');
	});

	
	function preload(images) {

	  if (document.images) {

	    var i = 0;

	    var imageArray = new Array();

	    imageArray = images.split(',');

	    var imageObj = new Image();

	    for(i=0; i<=imageArray.length-1; i++) {

	        imageObj.src=images[i];

	    }

	  }

	}

});

