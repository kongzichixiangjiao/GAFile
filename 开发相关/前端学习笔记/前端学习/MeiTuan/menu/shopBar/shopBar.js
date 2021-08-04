(function () {

    var itemTopTmpl =
        '<div class="choose-content hide">' +
        '<div class="content-top">' +
        '<div class="clear-car">清空购物车</div>' +
        '</div>' +
        '</div>';

    var itemBottomTmpl =
        '<div class="bottom-content">' +
        '<div class="shop-icon">' +
        '<div class="dot-num hide"></div>' +
        '</div>' +
        '<div class="price-content">' +
        '<p class="total-price">￥<span class="total-price-span">0</span></p>' +
        '<p class="other-price">另需配送&nbsp;<span class="shipping-fee">0</span></p>' +
        '</div>' +
        '<div class="submit-btn">去结算</div>' +
        '</div>';

    var $strBottom = $(itemBottomTmpl);
    var $strTop = $(itemTopTmpl);

    function changeShippingPrice(str) {
        $strBottom.find('.shipping-fee').text(str);
    }

    function changeTotalPrice(totalPrice) {
        $('.total-price-span').text(totalPrice);
    }

    function changeDot() {
        var $counts = $strTop.find('.count');
        var total = 0;
        for (var i = 0; i < $counts.length; i++) {
            total += parseInt($($counts[i]).text());
        }
        if (total > 0) {
            $('.dot-num').show().text(total);
        } else {
            $('.dot-num').hide();
        }

    }

    function renderItems() {
        $strTop.find('.choose-item').remove();
        var list = window.food_spu_tags || [];
        var tmpl = '<div class="choose-item">' +
            '<div class="item-name">' + '$name' + '</div>' +
            '<div class="price">￥<span class="total">' + '$price' + '</span></div>' +
            '<div class="select-content">' +
            '<div class="minus"></div>' +
            '<div class="count">' + '$chooseCount' + '</div>' +
            '<div class="plus"></div>' +
            '</div>' +
            '</div>';

        var totalPrice = 0;
        $.each(list, function (index, item) {
            // console.log(item);
            $.each(item.spus, function (_index, _item) {

                if (_item.chooseCount > 0) {
                    var price = _item.min_price * _item.chooseCount;
                    var row = tmpl.replace('$name', _item.name)
                        .replace('$price', price)
                        .replace('$chooseCount', _item.chooseCount)

                    totalPrice += price;

                    var $row = $(row);
                    $row.data('itemData', _item);

                    $strTop.append($row);

                    changeTotalPrice(totalPrice);
                }
            });
        });
        changeDot();
    }

    function addClick() {
        $('.shop-bar').on('click', '.shop-icon', function () {
            $('.mask').toggle();
            $strTop.toggle();
        })

        $strTop.on('click', '.plus', function (e) {
            updateItemData(e, true);
        });

        $strTop.on('click', '.minus', function (e) {
            updateItemData(e, false);
        });

        function updateItemData(e, isPlus) {
            var $count = $(e.currentTarget).parent().find('.count');

            if ($count.text() == 0 && !isPlus) return;

            $count.text(parseInt($count.text() || '0') + (isPlus ? 1 : -1));

            var $item = $(e.currentTarget).parents('.choose-item').first();
            var itemData = $item.data('itemData');
            itemData.chooseCount = itemData.chooseCount + (isPlus ? 1 : -1);

            renderItems();

            // 模拟点击事件 找到当前的右侧详情数据，进行联动
            $('.left-item.active').click();
        }
    }

    function init() {
        $('.shop-bar').append($strTop);
        $('.shop-bar').append($strBottom);

        addClick();
    }

    init();

    window.ShopBar = {
        renderItems: renderItems,
        changeShippingPrice: changeShippingPrice,
    }

})();