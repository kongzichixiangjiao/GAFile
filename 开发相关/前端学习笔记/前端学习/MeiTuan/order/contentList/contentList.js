/*
 * @Author: houjianan 
 * @Date: 2020-11-23 22:04:09 
 * @Last Modified by: houjianan
 * @Last Modified time: 2020-11-24 16:43:10
 */

(function () {
    /*
        订单卡片模板
    */
    var itemTmpl = '<div class="order-item">' +
        '<div class="order-item-inner">' +
        '<img class="item-img" src="' + '$poi_pic' + '" >' +
        '<div class="item-right">' +
        '<div class="item-top">' +
        '<p class="order-name one-line">' + '$poi_name' + '</p>' +
        '<div class="arrow"></div>' +
        '<div class="order-state">' + '$status-description' + '</div>' +
        '</div>' +
        '<div class="item-bottom">' + '$getProduct' + '</div>' +
        '</div>' +
        '</div>' +
        '$getComment' +
        '</div>';

    //  渲染评价按钮
    function getComment(data) {
        var evaluation = !data.is_comment;

        if (evaluation) {
            return '<div class="evaluation clearfix">' +
                '<div class="evaluation-btn">评价</div>' +
                '</div>';
        }
        return '<div>' + '</div>';
    }

    // 总计菜品
    function getTotalPrice(data) {
        var str = '<div class="product-item">' +
            '<span>...</span>' +
            '<div class="p-total-count">总计' + data.product_count + '个菜，实付' +
            '<span class="total-price">' + '￥' + data.total + '</span>' +
            '</div>' +
            '</div>';

        return str;
    }

    // 具体商品
    function getProduct(data) {
        var list = data.product_list || [];
        list.push({
            type: 'more'
        });

        var str = '';
        $.each(list, function (index, item) {
            if (item.type === 'more') {
                str += getTotalPrice(data);
            } else {
                str += '<div class="product-item">' + item.product_name +
                    '<div class="p-count">x' + item.product_count + '</div>' +
                    '</div>';
            }
        });
        return str;
    }

    // 渲染列表
    function initContentList(list) {
        $.each(list, function (index, item) {
            var _str = itemTmpl.replace('$poi_pic', item.poi_pic)
                .replace('$poi_name', item.poi_name)
                .replace('$status-description', item.status_description)
                .replace('$getProduct', getProduct(item))
                .replace('$getComment', getComment(item));
            $('.order-list').append(_str);
        });
    }

    // 请求数据
    function getList(finished) {
        $.get("../../json/orders.json",
            function (data, textStatus, jqXHR) {

                var list = data.data.digestlist || [];
                initContentList(list);
                isloading = false;
                if (typeof(finished) === "function") {
                    finished();
                }
            },
        );
    }

    var isloading = false;
    var page = 0;

    function init() {
        window.Loading.loaded(function() {
            if (page < 3) {
                if (isloading) {
                    return;
                }
                    
                isloading = true;
                page++;

                getList();
            } else {
                window.Loading.loadingCSS()
            }
        })
        
        window.Loading.showLoading(false);

        getList(function() {
            window.Loading.showLoading(true);
        });
        
    }

    init();

})();