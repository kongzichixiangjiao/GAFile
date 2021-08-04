var screenAnimateElements = {
	'.screen-1': [
		'.screen-1__heading',
		'.screen-1__phone',
		'.screen-1__shadow',
	]
};

function setScreenAnimate(screenCls) {
	var screen = document.querySelector(screenCls);
	var animateElements = screenAnimateElements[screenCls];
	var isSetAnimateClass = false;
	var isAnimateDone = false;

	screen.onclick = function() {
		if (isSetAnimateClass === false) {
			for (let i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');

			}
			isSetAnimateClass = true;
			return;
		}
		if (isAnimateDone === false) {
			for (let i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
				console.log(baseCls.replace('_animate_init', '_animate_done'));
			}
			isAnimateDone = true;
			return;
		}
		if (isAnimateDone === true) {
			for (let i = 0; i < animateElements.length; i++) {
				var element = document.querySelector(animateElements[i]);
				var baseCls = element.getAttribute('class');
				element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
			}
			isAnimateDone = false;
			return;
		}
	}
}

setScreenAnimate('.screen-1');
