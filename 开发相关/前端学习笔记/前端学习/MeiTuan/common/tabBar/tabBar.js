/*
 * @Author: houjianan 
 * @Date: 2020-11-23 18:19:10 
 * @Last Modified by: houjianan
 * @Last Modified time: 2020-11-24 10:48:19
 */

(function () {
    /*
        底部导航
    */
    var itemTmpl = '<a href="../$key/$key.html" class="' + '$key' + ' tab-item">' +
        '<div class="btn-name">' + '$text' + '</div>' +
        '</a>';


    function init() {
        var items = [{
            key: 'menu',
            text: '点菜'
        }, {
            key: 'comment',
            text: '评价'
        }, {
            key: 'restanurant',
            text: '商家'
        }];
        var str = '';
        $.each(items, function (index, item) {
            str += itemTmpl.replace(/\$key/g, item.key)
                .replace('$text', item.text);
        });

        $('.tab-bar').append($(str));

        // 找到当前页面的url来确定key值
        var arr = window.location.pathname.split('/');
        var page = arr[arr.length - 1].replace('.html', '');

        // 将当前页面对应的key值的a元素设置active的class
        $('a.' + page).addClass('active');
    }

    init();

})();