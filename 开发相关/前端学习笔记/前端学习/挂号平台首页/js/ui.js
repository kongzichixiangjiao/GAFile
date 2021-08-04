$.fn.UISearch = function() {
	var ui = $(this);

	$(".ui-search-selected", ui).on('click', function() {
		$('.ui-search-selected-list').show();
		return false;
	});

	$(".ui-search-selected-list a", ui).on('click', function() {
		$(".ui-search-selected").text($(this).text());
		$(".ui-search-select-list").hide();
		return false;
	})

	$("body").on('click', function() {
		$(".ui-search-selected-list").hide();
	})
};

/*
	header tab组件选项卡部分的className
	content tab组件的内容区域部分的className
	focus_prefix 选项卡高亮样式前缀，可选
*/
$.fn.UITab = function(header, content, focus_prefix) {
	var ui = $(this);
	var tabs = $(header, ui);
	var cons = $(content, ui);
	var focus_prefix = focus_prefix || '';

	tabs.on('click', function() {
		var index = $(this).index();
		console.log(index);
		console.log(focus_prefix + 'item-focus');
		tabs.removeClass(focus_prefix + 'item-focus').eq(index).addClass(focus_prefix + 'item-focus');
		cons.hide().eq(index).show();
		return false;
	})
}

$.fn.UIBackTop = function() {
	var ui = $(this);
	var el = $('<a class="ui-backTop" href="#0"></a>');
	ui.append(el);
	el.hide();
	
	var windowHeight = $(window).height();

	$(window).on('scroll', function() {
		var top = $(document).scrollTop();
		var top = $('body').scrollTop(); // 获取到位0
		// console.log(top);
		if (top > 250) {
			el.show();
		} else {
			el.hide();
		}
	});

	el.on('click', function() {
		$(window).scrollTop(0);
	});
}

$(function() {
	$('.ui-search').UISearch();

	$('.content-tab').UITab('.caption > .item', '.block > .item');
	$('.content-tab .block .item').UITab('.block-caption > a', '.block-content > .block-wrap', 'block-caption-');

	$('body').UIBackTop();

})
