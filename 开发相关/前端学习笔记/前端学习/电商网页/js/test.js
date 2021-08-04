(function($) {

	console.log("this is ", this);
	console.log($);

	$.ajax({
		url: '',
		dataType: 'jsonp'
	}).done(function(data) {
		console.log(data);
	}).fail(function(e) {
		console.log(e);
	}).always(function() {
		console.log('无论成功失败都会执行');
	})
	
	// 代理对象是动态生成的元素，随时都在变化,事件绑定不到代理对象上
	// 给父元素添加事件，通过冒泡原理，执行点击事件。
	$father.on('click', '.代理对象的class', function() {
		// this是点击的元素
		console.log($(this));
	})

})(jQuery)
