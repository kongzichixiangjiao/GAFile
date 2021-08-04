(function() {
	'use strict'

	setRemUnit();
	window.addEventListener('resize', setRemUnit);

	function setRemUnit() {
		var docEl = document.documentElement;
		// 1rem = viewWidth / 10
		var ratio = 10;
		var viewWidth = window.innerWidth |
			docEl.clientWidth |
			docEl.getBoundingClientRect().width;

		docEl.style.fontSize = viewWidth / ratio + 'px';
	}
})();
// "px-to-rem.px-per-rem": 75,
// px-to-rem.px-per-rem * ratio = 设计稿宽度