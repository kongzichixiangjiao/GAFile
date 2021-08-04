(function (window, document) {
    let GAAlert = function (options) {
        this._init(options);
    }

    GAAlert.prototype._init = function ({
        title = '提醒',
        message = '',
        concleStr = '',
        confirmStr = '确定',
        messageStyle = {},
        titleStyle = {},
        confirmStyle = {},
        cancleStyle = {},
        lineStyle = {},
        closedFunction = null,
        confirmFunction = null,
        cancleFunction = null,
        hideDirection = 'bottom', // scale_middle
        showDirection = 'bottom' // scale_middle
    }) {
        this._title = title;
        this._message = message;
        this._concleStr = concleStr;
        this._confirmStr = confirmStr;
        this._messageStyle = messageStyle;
        this._titleStyle = titleStyle;
        this._confirStyle = confirmStyle;
        this._cancleStyle = cancleStyle;
        this._lineStyle = lineStyle;

        this._closedFunction = closedFunction;
        this._confirmFunction = confirmFunction;
        this._cancleFunction = cancleFunction;

        this._hideDirection = hideDirection;
        this._showDirection = showDirection;

        this._createElement();
    }

    GAAlert.prototype._createElement = function () {
        let concleDiv = this._concleStr === '' ? '' : '<div class="btn cancle" >' + this._concleStr + '</div>';
        let lineDiv = this._concleStr === '' ? '' : '<div class="line"></div>';

        let galert = document.createElement('div');
        galert.className = 'galert';
        galert.innerHTML =
            `<div class="galert">\
                <div class="mask">\
                </div>\
                <div class="wrap">\
                        <div class="top">\
                            <p class="title">${this._title}</p>\
                            <i class="closed iconfont icon-closedx"></i>\
                        </div>\
                        <div class="middle">\
                            <div class="message">${this._message }</div>\
                        </div>\
                        <div class="halving_line"></div>\
                        <div class="bottom">${concleDiv} ${lineDiv}\
                            <div class ="btn confirm">${this._confirmStr}</div>\
                        </div>\
                    </div>\
            </div>`;

        this._updateStyleAddAction(galert);

        this._el = galert;
    }

    GAAlert.prototype._updateStyleAddAction = function (galert) {
        let closedEl = galert.querySelector('.galert .closed');
        let self = this;
        closedEl.onclick = function () {
            if (typeof self._closedFunction === 'function') {
                self._closedFunction();
            }
            hideAlert();
        }

        let messageEl = galert.querySelector('.galert .message');
        updateStyle(messageEl, this._messageStyle);

        let titleEl = galert.querySelector('.galert .title');
        updateStyle(titleEl, this._titleStyle);

        let confirmEl = galert.querySelector('.galert .confirm');
        updateStyle(confirmEl, this._confirStyle);
        confirmEl.onclick = function () {
            if (typeof _confirmFunction === 'function') {
                self._confirmFunction()
            }
            hideAlert();
        }

        let cancleEl = galert.querySelector('.galert .cancle');
        updateStyle(cancleEl, this._cancleStyle);
        cancleEl.onclick = function () {
            if (typeof _cancleFunction === 'function') {
                self._cancleFunction()
            }

            hideAlert();
        }
        const hideAlert = function () {
            let duration = 400;
            let wrap = galert.querySelector('.galert .wrap');
            if (self._hideDirection === 'bottom') {
                wrap.style.top = '4000px';
            } else if (self._hideDirection === 'scale_middle') {
                wrap.style.transform = 'translate(-50%, -50%) scale(0, 0)';
            } else {

            }

            wrap.style.transition = 'all ' + duration / 1000 + 's';

            setTimeout(function () {
                wrap.style = null;
                document.body.removeChild(galert);
            }, duration)
        }

        let halving_lineEl = galert.querySelector('.galert .halving_line');
        updateStyle(halving_lineEl, this._lineStyle);

        let lineEl = galert.querySelector('.galert .line');
        updateStyle(lineEl, this._lineStyle);
    }

    function updateStyle(el, messageStyle) {
        if (el) {
            for (let style in messageStyle) {
                if (el.style.hasOwnProperty(style)) {
                    el.style[style] = messageStyle[style];
                }
            }
        }
    }

    GAAlert.prototype.show = function () {
        document.body.appendChild(this._el);
        let self = this;

        let duration = 300;
        let wrap = this._el.querySelector('.galert .wrap');

        if (self._showDirection === 'bottom') {
            wrap.style.top = '4000px';
        } else if (self._showDirection === 'scale_middle') {
            wrap.style.transform = 'translate(-50%, -50%) scale(0, 0)';
        } else {

        }

        setTimeout(function () {
            if (self._showDirection === 'bottom') {
                wrap.style.top = '50%';
            } else if (self._showDirection === 'scale_middle') {
                wrap.style.transform = 'translate(-50%, -50%) scale(1, 1)';
            } else {

            }

            wrap.style.transition = 'all ' + duration / 1000 + 's';
        }, 100)
    }

    GAAlert.prototype.test = function () {
        console.log("test");
    }

    window.$GAAlert = GAAlert;

})(window, document);