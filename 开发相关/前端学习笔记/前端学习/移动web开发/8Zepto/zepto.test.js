;
(function ($) {
	// 给插件增加了一个color方法
	$.extend($.fn, {
		color: function (option) {
			// 默认值
			var options = $.extend({
				col: "blue",
				fz: "20px"
			}, option);

			this.css("color", options.col);
			this.css("fontSize", options.fz);

			return this;
		},
		background: function (option) {
			var options = $.extend({
				bg: "blue",
			}, option);

			this.css("backgroundColor", options.bg);

			return this;
		}
	})

})();