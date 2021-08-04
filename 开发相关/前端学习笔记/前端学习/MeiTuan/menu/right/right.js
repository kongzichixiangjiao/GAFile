(function () {
    /*

    */
    var itemTmpl = '<div class="menu-item">' +
        '<img src="' + '$picture' + '" class="img">' +
        '<div class="munu-item-right">' +
        '<p class="item-title">' + '$name' + '</p>' +
        '<p class="item-description">' + '$description' + '</p>' +
        '<p class="item-zan">' + '$praise_content' + '</p>' +
        '<p class="item-price">' + '￥$min_price' +
        '<span class="unit">' + '$unit' + '</span>' +
        '</p>' +
        '</div>' +
        '<div class="select-content">' +
        '<div class="minus"></div>' +
        '<div class="count">' + '$chooseCount' + '</div>' +
        '<div class="plus"></div>' +
        '</div>' +
        '</div>';

    function initRightList(list) {

        // refresh之后先清除之前的数据 再添加
        $('.right-list-inner').html('');

        $.each(list, function (index, item) {
            // debugger;
            if (!item.chooseCount) {
                item.chooseCount = 0;
            }
            // debugger;
            var str = itemTmpl.replace('$picture', item.picture)
                .replace('$name', item.name)
                .replace('$description', item.description)
                .replace('$praise_content', item.praise_content)
                .replace('$min_price', item.min_price)
                .replace('$unit', item.unit)
                .replace('$chooseCount', item.chooseCount);

            var $target = $(str);
            $target.data('itemData', item);

            $('.right-list-inner').append($target);
        });
    }

    function initRightTitle(str) {
        $('.right-title').text(str);
    }

    function addClick() {
        $('.menu-item').on('click', '.plus', function (e) {
            updateItemData(e, true);
        })
        $('.menu-item').on('click', '.minus', function (e) {
            updateItemData(e, false);
        })

        function updateItemData(e, isPlus) {
            var $count = $(e.currentTarget).parent().find('.count');
            
            if ($count.text() == 0 && !isPlus) return;
            
            $count.text(parseInt($count.text() || '0') + (isPlus ? 1 : -1));

            var $item = $(e.currentTarget).parents('.menu-item').first();
            var itemData = $item.data('itemData');
            itemData.chooseCount = itemData.chooseCount + (isPlus ? 1 : -1);

            window.ShopBar.renderItems();
        }
    }

    function init(data) {
        initRightList(data.spus || []);
        initRightTitle(data.name);
        addClick();
    }

    window.Right = {
        refresh: init,
    }

})();