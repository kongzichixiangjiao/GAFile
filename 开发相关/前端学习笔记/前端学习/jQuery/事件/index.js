$(document).ready(function () {
	$('.click').click(function () {
		console.log("click");
	});
	$('.dbclick').dblclick(function () {
		console.log("dbclick");
	});

	$(".mousedown").mousedown(function () {
		console.log("mousedown");
	});
	$(".mouseup").mouseup(function () {
		console.log("mouseup");
	});

	$(".mouseenter").mouseenter(function () {
		console.log("mouseenter");
	});
	$(".mouseleave").mouseleave(function () {
		console.log("mouseleave");
	});

	$(".hover").hover(function () {
		console.log("hover:鼠标进入");
	}, function () {
		console.log("hover:鼠标离开");
	});

	$(".mouseover").mouseover(function () {
		console.log("mouseover：鼠标进入元素及其子元素");
	});
	$(".mouseout").mouseout(function () {
		console.log("mouseout：鼠标进入元素及其子元素");
	});
	$(".mousemove").mousemove(function () {
		console.log("mousemove：DOM内部移动");
	});

	$(".scroll").scroll(function () {
		console.log("scroll：元素及其子元素");
	});

	$('input').keydown(function (key) {
		console.log("键盘按下");
		console.log(key);
		console.log(key.handleObj);
		console.log(key.key); // 返回键盘key
	});
	$('input').keyup(function (key) {
		console.log("键盘抬起");
	});
	$('input').keypress(function (key) {
		console.log("键盘keypress");
	});
});

// $(document).keydown(function(key) {
// 	console.log("键盘按下");
// 	console.log(key);
// 	console.log(key.handleObj);
// 	console.log(key.key); // 返回键盘key
// });

// $(document).keyup(function(key) {
// 	console.log("键盘抬起");
// });

// $(document).keypress(function(key) {
// 	console.log("键盘keypress");
// });


$(document).ready(function () {
	console.log("DOM载入就绪");

	$(window).resize(function () {
		console.log("调整浏览器窗口大小");
	});

	$('input').focus(function () {
		console.log("获得焦点");
	});
	$('input').blur(function () {
		console.log("失去焦点");
	});

	// text / number / date / checkbox
	// 输入时候不检测，当元素的值发生改变时，会发生change事件。
	$('input').change(function () {
		console.log("change");
	});

	// 输入框内容被选择时
	$('input').select(function () {
		console.log("select");
	});

	// 输入框内容被选择时
	$(".formElement").select(function () {
		console.log(".formElement select");
	})

	// submit: 提交表单/阻止表单提交/提交表单时做验证
	//提交表单
	$('input[type=button]').click(function () {
		$('form').submit();
	})

	$('form').submit(function () {
		// 提交表单时做验证
		var inputValue = $('input[type=text]').val();
		console.log(inputValue);
		if (inputValue == '123') {
			console.log('-----');
			return true;
		} else {
			return false;
		}

	});
});

// 事件绑定
$(document).ready(function () {
	console.log("-")

	$(".on").on('click', function () {
		console.log("on-click");
	});

	$(".on").on('mouseup', function () {
		console.log("on-mouseup");
	});

	$(".on").on({
		click: function (event) {
			console.log("on-click");
		},
		mouseup: function (event) {
			console.log("on-mouseup");
		}
	});

	$(".off").off('mouseup', function () {
		console.log("off-mouseup");
	});

	// 要绑定事件
	function flash() {
		$(".buttonDiv").show().fadeOut('slow');
	};

	// 事件绑定
	$(".bind").click(function () {
		$(document).on('click', '.obj', flash)
			.find('.obj').text('点击有效果');
	});
	// 事件取消
	$(".unbind").click(function () {
		$(document).off('click', '.obj')
			.find('.obj').text('点击 无 效果');
	});

	// 一次性事件绑定
	$(".one").click(function () {
		$(document).one('click', '.obj', flash)
			.find('.obj').text('绑定一次');
	});
});


