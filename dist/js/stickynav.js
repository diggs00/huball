$(document).ready(function () {

// Toggle NAV:
 //    $("div.toggle-nav").click(function(){
	// if ($('div.toggle-nav').hasClass('active')) {
	// 	// Do things on Nav Close
	// 	$('div.toggle-nav').removeClass('active');
	// } 
 //  	else {
	// 	// Do things on Nav Open
	// 	$('div.toggle-nav').addClass('active');
	// }


	// });



	// Toggle nav
	$('div.toggle-nav').click(function (e) {
		if ($('div.toggle-nav').hasClass('active')) {
			$('div.toggle-nav').removeClass('active');
		} else {
			$('div.toggle-nav').addClass('active');
		}
		$('nav').toggle();
		e.stopPropagation();
	});
	$('html').click(function () {
		$('nav').hide();
		$('div.toggle-nav').removeClass('active');
	});




// Sticky NAV:
	var top = $('aside').offset().top;
	$(window).scroll(function (event) {
	var y = $(this).scrollTop();
	if (y >= top) {
	  $('aside').addClass('fixed')
	  $('.content').addClass('margin-nav')
	}
	else {
	  $('aside').removeClass('fixed')
	  $('.content').removeClass('margin-nav')
	 }
	});




});

