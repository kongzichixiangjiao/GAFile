/*
 * @Author: houjianan 
 * @Date: 2020-11-28 00:35:54 
 * @Last Modified by: hjn
 * @Last Modified time: 2020-11-28 00:51:46
 * @Description: 动画类: 旋转 位移 缩放
 */

class GATransform {
    constructor(seclector) {
        this.el = document.querySelector(seclector);
        this.el.style.transition = `all ${ .3 }s`;

        this._queue = [];
        this._transform = {
            'rotate': '',
            'translate': '',
            'scale': ''
        }
        this.defaultTime = GATransform.config.defaultTime;
    }

    /* 位移 */
    translate(value, time) {
        this._add(GATransform.config.translate, value, time);
        return this;
    }

    /* 缩放 */
    scale(value, time) {
        this._add(GATransform.config.scale, value, time);
        return this;
    }

    /* 形变 */
    rotate(value, time) {
        this._add(GATransform.config.rotate, value, time);
        return this;
    }

    /* 添加动画 */
    _add(type, value, time = this.defaultTime) {
        this._queue.push({
            type: type,
            value,
            time
        })
    }

    /* 执行 */
    done() {
        this._start();
    }

    /* 执行动画 */
    _start() {
        if (!this._queue.length) return;

        setTimeout(() => {
            const info = this._queue.shift(); // shift取数组最前面
            this.el.style.transition = `all ${ info.time / 1000 }s`;
            this.el.style.transform = this._getTransform(info);

            setTimeout(() => {
                this._start();
            }, info.time);
        }, 0);
    }

    _getTransform({
        type,
        value,
        time
    }) {
        const _tsf = this._transform;

        switch (type) {
            case GATransform.config.translate:
                _tsf.translate = `translate(${ value })`;
                break;
            case GATransform.config.scale:
                _tsf.scale = `scale(${ value })`;
                break;
            case GATransform.config.rotate:
                _tsf.rotate = `rotate(${ value }deg)`;
                break;
            default:
                break;
        }

        return `${_tsf.translate} ${_tsf.scale} ${_tsf.rotate}`;
    }
}

GATransform.config = {
    defaultTime: 300,
    scale: 'scale',
    translate: 'translate',
    rotate: 'rotate',
    multi: 'multi',
    sleep: 'sleep'
}

// const tf = new GATransform('.ball');
// tf.translate(`100px, 100px`).rotate(180).scale(1.5, 5000).done();

class GAMultiTransform extends GATransform {
    multi(value, time) {
        this._add('multi', value, time);
        return this;
    }

    sleep(time) {
        this._add('sleep', '', time);
        return this;
    }

    _getTransform({
        type,
        value,
        time
    }) {

        super._getTransform({
            type,
            value,
            time
        })
        const _tsf = this._transform;

        switch (type) {
            case GATransform.config.sleep:
                break;
            case GATransform.config.multi:
                value.forEach(item => {
                    // console.log(item + Date());
                    this._getTransform(item);
                });
                break;
            default:
                break;
        }

        return `${_tsf.translate} ${_tsf.scale} ${_tsf.rotate}`;
    }
}


const tf = new GAMultiTransform('.ball');
tf.translate(`100px, 100px`).rotate(180).scale(1.5, 1000).sleep(1000)
    .multi([{
        type: GATransform.config.translate,
        value: '0, 0'
    }, {
        type: GATransform.config.scale,
        value: 0.5
    }]).done();