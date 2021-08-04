(function () {
    function _loading(load) {
        window.addEventListener('scroll', function () {
            var clientHeight = document.documentElement.clientHeight;
            var scrollHeight = document.body.scrollHeight;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

            var proDis = 30;

            if ((scrollTop + clientHeight) >= (scrollHeight - proDis)) {
                // if (page < 3) {
                //     if (isloading) {
                //         return;
                //     }
                //     getList();
                // } else {
                //     $('.list-content .loading').text("加载完毕");
                // }
                load();
            }
        })
    }

    function _loadingCSS() {
        $('.loading').css({
            'font-size': '0.426667rem',
            'text-align': 'center',
            'line-height': '50px',
            'height': '2.333333rem',
        });
        $('.loading').text("加载完毕");
    }

    function _showLoading(isShow) {
        var temp = isShow ? 'block' : 'none';
        $('.loading').css({
            'display': temp,
        })
    }

    window.Loading = {
        loaded: _loading,
        loadingCSS: _loadingCSS,
        showLoading: _showLoading,
    }

})();