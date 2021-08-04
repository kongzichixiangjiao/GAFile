/*
 * @Author: houjianan 
 * @Date: 2020-11-23 13:50:02 
 * @Last Modified by: houjianan
 * @Last Modified time: 2020-11-24 10:22:07
 */

(function () {
    var itemTmpl =
        '<div class="category-item">' +
        '<img class="item-icon" src=$url />' +
        '<p class="item-name">$name</p>' +
        "</div>";

    
    function initCategory() {
        // 获取数据
        $.get("../json/head.json", function (data) {
            var list = data.data.primary_filter.splice(0, 8);
            $.each(list, function (index, item) {
                var str = itemTmpl
                    .replace("$url", item.url)
                    .replace("$name", item.name);

                $('.category-content').append(str);
            });
        });
    }

    function addClick() {
        $('.category-content').on('click', '.category-item', function () {
            
        });
    }

    function init() {
        initCategory();
        addClick();
    }

    init();
})();