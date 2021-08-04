(function($) {
	'use strict';

	function Slider($elem, options) {
		this.$elem = $elem;
		this.options = options;

		this.$items = this.$elem.find('.slider-item');
		this.$indicators = this.$elem.find('.slider-indicator');
		// this.$controlLeft = this.$elem.find('.slider-control-left');
		// this.$controlRight = this.$elem.find('.slider-control-right');
		this.$controls = this.$elem.find('.slider-control');

		this.itemNum = this.$items.length;
		// debugger;
		this.curIndex = this._getCorrectIndex(this.options.activeIndex);

		this._init();
	};

	Slider.DEFAULTS = {
		css3: false,
		js: false,
		animation: 'fade', // slide
		activeIndex: 0,
		interval: 0
	};

	Slider.prototype._init = function() {
		var self = this;
		// 先执行一次 加载第一张图片
		this.$elem.trigger('slider-show',[this.curIndex,this.$items[this.curIndex]]);

		this.$indicators.removeClass('slider-indicator-active');
		this.$indicators.eq(this.curIndex).addClass('slider-indicator-active');

		// to 
		if (this.options.animation === 'slide') {

			this.$elem.addClass('slider-slide')

			this.$items.eq(this.curIndex).css('left', 0);

			this.$items.on('move moved', function(e) {
				var index = self.$items.index(this);

				if (e.type === 'move') {
					if (index === self.curIndex) {
						self.$elem.trigger('slider-hide', [index, this]);
					} else {
						self.$elem.trigger('slider-show', [index, this]);
					}
				} else { // moved
					if (index === self.curIndex) {
						self.$elem.trigger('slider-shown', [index, this]);
					} else {
						self.$elem.trigger('slider-hidden', [index, this]);
					}
				}
			});

			this.$items.move(this.options);

			this.to = this._slide;

			this.itemWidth = this.$items.eq(0).width();
			this.transitionClass = this.$items.eq(0).hasClass('transition') ? "transition" : "";
		} else {
			this.$elem.addClass('slider-fade')
			this.$items.eq(this.curIndex).show();

			// send message 
			this.$items.on('show shown hide hidden', function(e) {
				self.$elem.trigger('slider-' + e.type, [self.$items.index(this), this]);
			});

			// showHide init
			this.$items.showHide(this.options);

			this.to = this._fade;
		}

		this.$elem.hover(function() {
			// self.$controlLeft.show();
			// self.$controlRight.show();
			self.$controls.show();
		}, function() {
			// self.$controlLeft.hide();
			// self.$controlRight.hide();
			self.$controls.hide();
		}).on('click', '.slider-control-right', function() {
			// debugger;
			self.to(self._getCorrectIndex(self.curIndex + 1), -1);
		}).on('click', '.slider-control-left', function() {
			self.to(self._getCorrectIndex(self.curIndex - 1), 1);
		}).on('click', '.slider-indicator', function() {
			self.to(self._getCorrectIndex(self.$indicators.index(this)));
		});

		if (this.options.interval && isNaN(Number(this.options.intercal))) {
			this.$elem.hover($.proxy(this.pause, this), $.proxy(this.auto, this));
			this.auto();
		}
	};

	Slider.prototype._fade = function(index) {
		if (this.curIndex === index) return;

		this.$items.eq(this.curIndex).showHide('hide');
		this.$items.eq(index).showHide('show');

		this._activeIndicators(index);

		// debugger;
		this.curIndex = index;
	}

	Slider.prototype._activeIndicators = function(index) {
		this.$indicators.eq(this.curIndex).removeClass('slider-indicator-active');
		this.$indicators.eq(index).addClass('slider-indicator-active');
	}

	Slider.prototype._slide = function(index, direction) {
		if (this.curIndex === index) return;

		var self = this;

		if (!direction) {
			if (this.curIndex < index) {
				direction = -1; // 向左滑
			} else if (this.curIndex > index) {
				direction = 1; // 向右滑
			}
		}

		// 设置幻灯片初始位置
		this.$items.eq(index).removeClass(this.transitionClass).css('left', -1 * direction * this.itemWidth);

		// .removeClass('transition')  setTimeout  解决一个向左 一个向右
		setTimeout(function() {
			// 滑出-滑入
			self.$items.eq(self.curIndex).move('x', direction * self.itemWidth); // 滑入
			// css3动画执行removeClass addClass  transitionClass == transition
			// js动画执行removeClass addClass  transitionClass == ''
			self.$items.eq(index).addClass(self.transitionClass).move('x', 0); // 滑出

			self.curIndex = index;
		}, 20)

		this._activeIndicators(index);
	}

	Slider.prototype._getCorrectIndex = function(index) {
		if (isNaN(Number(index))) return 0;
		if (index < 0) return this.itemNum - 1;
		if (index > this.itemNum - 1) return 0;
		return index;
	}
	Slider.prototype.auto = function() {
		var self = this;
		this.intervalId = setInterval(function() {
			self.to(self._getCorrectIndex(self.curIndex + 1), -1);
		}, this.options.interval);
	}
	Slider.prototype.pause = function() {
		clearInterval(this.intervalId);
	}

	$.fn.extend({
		slider: function(option) {
			return this.each(function() {
				var slider = $(this).data('slider'),
					options = $.extend({}, Slider.DEFAULTS, $(this).data(), typeof(option) === 'object' && option);

				if (!slider) {
					$(this).data('slider', slider = new Slider($(this), options));
				}

				if (typeof(slider[option]) === 'function') {
					slider[option]();
				}
			})
		}
	})
})(jQuery);
