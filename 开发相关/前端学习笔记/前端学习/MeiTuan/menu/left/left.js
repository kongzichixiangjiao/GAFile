(function () {
    /*

    */
    var itemTmpl = '<div class="left-item">' +
        '<div class="item-text">' +
        '$getItemContent' +
        '</div>' +
        '</div>';

    function getList() {
        $.get("../../json/food.json",
            function (data, textStatus, jqXHR) {
                console.log(data);
                var list = data.data.food_spu_tags || [];
                
                window.food_spu_tags = list;
                
                initContentlist(list);
                
                window.ShopBar.changeShippingPrice(data.data.poi_info.shipping_fee || 0);
            },
        );
    }

    function getItemContent(data) {
        if (data.icon) {
            return '<img class="item-icon" src="' + data.icon + '" />' + data.name;
        } else {
            return data.name;
        }
    }

    function initContentlist(list) {
        $.each(list, function (index, item) {
            var str = itemTmpl.replace('$getItemContent', getItemContent(item));

            var $target = $(str);
            // debugger;
            $target.data('itemData', item);

            $('.left-bar-inner').append($target);
        });

        $('.left-item').first().click();
    }

    function addClick() {
        $('.menu-inner').on('click', '.left-item', function (e) {
            var $target = $(e.currentTarget);

            $target.addClass('active');
            $target.siblings().removeClass('active'); // 同级的active全部去掉

            // 获取数据
            var data = $target.data('itemData');
            //传递数据
        
            window.Right.refresh(data);
        });
    }

    function init() {
        getList();
        addClick();
    }

    init();

})();