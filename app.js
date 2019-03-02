(function($) {
"use strict";

	var myArray = ['90s', 'retrowave', 'pizza', 'computer', 'glitch'];

	$(document).on('click', 'h2', function(){
		var rand = myArray[Math.floor(Math.random() * myArray.length)];
		var url = "http://tv.giphy.com/" + rand;
		$('#giphy').attr('src', url);
	})

})(jQuery);
