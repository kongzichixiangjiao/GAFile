/*
 * @Author: houjianan 
 * @Date: 2020-11-23 13:55:13 
 * @Last Modified by: houjianan
 * @Last Modified time: 2020-11-24 10:22:05
 */

(function () {
    var itemTmpl = '<div class="r-item-content">' +
        '<img class="item-img" src="' + '$pic_url' + '" />' +
        '$brand' +
        '<div class="item-info-content">' +
        '<p class="item-title">' + '$name' + '</p>' +
        '<div class="item-desc clearfix">' +
        '<div class="item-score">' + '$wm_poi_score' + '</div>' +
        '<div class="item-count">' + '月售$monthNum' + '</div>' +
        '<div class="item-distance">' + '&nbsp;$distance' + '</div>' +
        '<div class="item-time">' + '&nbsp;$mt_delivery_time&nbsp;|' + '</div>' +
        '</div>' +
        '<div class="item-price">' +
        '<div class="item-pre-price">' +
        '$min_price_tip' +
        '</div>' +
        '</div>' +
        '<div class="item-others">' +
        '$others' +
        '</div>' +
        '</div>' +
        '</div>';

    var page = 0;
    var isloading = false;

    function getList() {
        page++;
        isloading = true;
        $.get("../../json/homelist.json",
            function (data, textStatus, jqXHR) {
                var list = data.data.poilist || [];
                initContentList(list);
                isloading = false;
            },
        );
    }
    /*
        渲染是否是新到热门品牌标签
    */
    function getBrand(data) {
        if (data.brand_type) {
            return '<div class="brand brand-pin">品牌</div>';
        } else {
            return '<div class="brand brand-xin">新到</div>';
        }
    }

    function getmonthNum(data) {
        var num = data.month_sale_num;
        if (num > 999) {
            return "999+"
        }
        return num;
    }

    function getOthers(data) {
        var array = data.discounts2;
        var str = '';

        $.each(array, function (indexInArray, item) {
            var _str = '<div class="other-info">' +
                '<img src=$icon_url class="other-tag" />' +
                '<p class="other-content one-line">$info</p>' +
                '</div>';

            _str = _str.replace('$icon_url', item.icon_url)
                .replace('$info', item.info);
            str = str + _str;
        });

        return str;
    }

    function initContentList(list) {
        $.each(list, function (index, item) {
            var str = itemTmpl.replace('$pic_url', item.pic_url)
                .replace('$name', item.name)
                .replace('$distance', item.distance)
                .replace('$mt_delivery_time', item.mt_delivery_time)
                .replace('$min_price_tip', item.min_price_tip)
                .replace('$brand', getBrand(item))
                .replace('$others', getOthers(item))
                .replace('$monthNum', getmonthNum(item))
                .replace('$wm_poi_score', new StarScore(item.wm_poi_score).getStars());

            $('.list-wrap').append(str);
        });
    }

    function addEvent() {
        window.addEventListener('scroll', function () {
            var clientHeight = document.documentElement.clientHeight;
            var scrollHeight = document.body.scrollHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            var proDis = 30;
            
            
            if ((scrollTop + clientHeight) >= (scrollHeight - proDis)) {
                if (page < 3) {
                    if (isloading) {
                        return;
                    }
                    getList();
                } else {
                    $('.list-content .loading').text("加载完毕");
                }
            }
        })
    }

    function init() {
        getList();
        addEvent();
    }

    init();
})();