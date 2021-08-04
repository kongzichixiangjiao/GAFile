(function($) {
	'use strict';

	function Dropdown(elem, options) {
		this.$elem = $(elem);
		this.$layer = this.$elem.find('.dropdown-layer');
		this.activeClass = options.active + '-active';
		this.options = options;

		this._init();
	}

	Dropdown.DEFAULTS = {
		event: 'hover', // click
		css3: true,
		js: false,
		animation: 'fade',
		active: 'dropdown',
		delay: 0,
	}

	Dropdown.prototype._init = function() {
		var self = this;

		console.log("Dropdown.prototype._init");
		this.$layer.showHide(this.options);

		// 消息转发
		this.$layer.on('show shown hide hidden', function(e) {
			self.$elem.trigger('dropdown-' + e.type);
		})

		// var self = this;
		// this.$elem.hover(function() {
		// 	self.show();
		// }, function() {
		// 	self.hide();
		// });

		if (this.options.event === 'click') {
			this.$elem.on('click', function(e) {
				self.show();
				e.stopPropagation() // 阻止事件冒泡
			});
			$(document).on('click', $.proxy(this.hide, this));
		} else if (this.options.event === 'hover') {
			this.$elem.hover($.proxy(this.show, this), $.proxy(this.hide, this));
		} else {

		}
	}

	Dropdown.prototype.show = function() {
		var self = this;
		if (this.options.delay) {
			this.timer = setTimeout(function() {
				_show();
			}, this.options.delay);
		} else {
			_show();
		}

		function _show() {
			self.$elem.addClass(self.activeClass)
			self.$layer.showHide('show');
		}
	};

	Dropdown.prototype.hide = function() {
		if (this.options.delay) {
			clearTimeout(this.timer);
		}
		this.$elem.removeClass(this.activeClass);
		this.$layer.showHide('hide');
	}

	// function dropdown(elem, options) {
	// 	var $elem = $(elem),
	// 		$layer = $elem.find('.dropdown-layer'),
	// 		activeClass = $elem.data('active') + '-active';

	// 	$layer.showHide(options);

	// 	$elem.hover(function() {
	// 		$elem.addClass('dropdown-active');
	// 		$layer.showHide('show');
	// 	}, function() {
	// 		$elem.removeClass('dropdown-active');
	// 		$layer.showHide('hide');
	// 	})
	// }

	var defaults = {
		css3: false,
		js: false,
		animation: 'fade'
	};

	$.fn.extend({
		dropdown: function(option) {
			// return this.each(function() {
			// 	option = $.extend({}, defaults, option);
			// 	dropdown(this, option);
			// })
			return this.each(function() {
				var dropdown = $(this).data('dropdown'),
					options = $.extend({}, Dropdown.DEFAULTS, $(this).data(), typeof(option) === 'object' && option);
				
				if (!dropdown) {
					$(this).data('dropdown', dropdown = new Dropdown(this, options));
				}

				if (typeof(dropdown[option]) === 'function') {
					dropdown[option]();
				}
			})
		}
	})
})(jQuery);
