(function () {
    /*
        得分模板字符串
    */
    var itemTmpl = '<div class="star-score">' +
        '$startstr' +
        '</div>';


    function _getStars() {
        var _score = this.score.toString();
        var scoreArray = _score.split('.');
        // 满星
        var fullstar = parseInt(scoreArray[0]);
        // 半星
        var halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
        // 零星
        var nullstar = 5 - fullstar - halfstar;
        var starstr = '';

        for (var i = 0; i < fullstar; i++) {
            starstr += '<div class="star fullstar"></div>'
        }
        for (var j = 0; j < halfstar; j++) {
            starstr += '<div class="star halfstar"></div>'
        }
        for (var k = 0; k < nullstar; k++) {
            starstr += '<div class="star nullstar"></div>'
        }

        return itemTmpl.replace('$startstr', starstr);
    }

    window.StarScore = function (score) {
        this.score = score || '';
        this.getStars = _getStars;
    }

})();