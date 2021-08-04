$(document).ready(function() {
	console.log("ready");
	$('a').click(function() {
		console.log($(this).index());
		console.log($('img'));
		console.log($('img').eq($(this).index()));
		$('img').eq($(this).index()).css({
			'opacity': '1'
		}).siblings().css({
			"opacity": '0'
		})
	});
	var alinks = $('a');
	for (let i = 0; i < alinks.length; i++) {
		console.log(alinks.eq(i));
		console.log(alinks[i]);
		alinks.eq(i).css({
			'background':'red'
		}).text("乾坤轮");
		// .html('<i>炉钩子' + i + '</i>')
	}
});
