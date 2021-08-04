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
		interval: 0,
		loop: false
	};

	Slider.prototype._init = function() {
		var self = this;

		this.$indicators.removeClass('slider-indicator-active');
		this.$indicators.eq(this.curIndex).addClass('slider-indicator-active');

		// to 
		if (this.options.animation === 'slide') {
			this.$elem.addClass('slider-slide')
			this.to = this._slide;
			this.$contrainer = this.$elem.find('.slider-container');
			this.itemWidth = this.$items.eq(0).width();
			this.$contrainer.css('left', -1 * this.curIndex * this.itemWidth);

			this.$contrainer.move(this.options);

			if (this.options.loop) {
				this.$contrainer.append(this.$items.eq(0).clone());
				this.transitionClass = this.$contrainer.hasClass('transition') ? 'transition' : '';
				this.itemNum++;
			}

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
		// this.$indicators.eq(this.curIndex).removeClass('slider-indicator-active');
		this.$indicators.removeClass('slider-indicator-active');
		this.$indicators.eq(index).addClass('slider-indicator-active');
	}

	Slider.prototype._slide = function(index, direction) {
		if (index === this.curIndex) return;
		
		this.$contrainer.move('x', -1 * index * this.itemWidth);
		this.curIndex = index;
		
		var self = this;
		
		if (this.options.loop && direction) {
			if (direction < 0) {// click right 
				if (index === 0) {
					this.$contrainer.removeClass(this.transitionClass).css('left', 0);
					this.curIndex = index = 1;
					setTimeout(function() {
						self.$contrainer.addClass(self.transitionClass).move('x', -1 * index * self.itemWidth);
					},20);
				}
			} else {
				if (index === this.itemNum - 1) {
					this.$contrainer.removeClass(this.transitionClass).css('left', -1 * index * this.itemWidth);
					this.curIndex = index = this.itemNum - 2;
					setTimeout(function() {
						self.$contrainer.addClass(self.transitionClass).move('x', -1 * index * self.itemWidth);
					},20);
				}
			}
			// 矫正index
			index = this._getCorrectIndex(index, this.itemNum - 1);
		}
		this._activeIndicators(index);
	}

	Slider.prototype._getCorrectIndex = function(index, maxNum) {
		maxNum = maxNum || this.itemNum;
		if (isNaN(Number(index))) return 0;
		if (index < 0) return maxNum - 1;
		if (index > maxNum - 1) return 0;
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
