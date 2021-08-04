$(document).ready(function() {
	var div = $(".animateBlock");
	$(".animateBtn").click(function() {

		div.animate({
			'opacity': '0',
			'width': '200px',
		}, 1000);

		div.stop().show()
			.animate({
				'width': '0%',
				'opacity': '1',
			}, 1000)
			.delay(1000)
			.animate({
				'width': '100%',
				'opacity': '0',
			}, 1000);
	})

	$(".show").click(function() {
		// div.stop().show('fast');
		// div.stop().show('slow');
		
		// div.stop().fadeIn('slow');
		
		// 显示->隐藏
		// div.stop().fadeToggle('slow');
		// div.stop().slidToggle('slow');
		
		div.stop().slideDown('slow');
		
	});
	
	$(".hide").click(function() {
		// div.stop().hide('fast');
		// div.stop().hide('slow');
		
		// div.stop().fadeOut('slow');
		
		// 隐藏->显示
		// div.stop().fadeToggle('slow');
		// div.stop().slidToggle('slow');
		
		div.stop().slideUp('slow');
	})
});
