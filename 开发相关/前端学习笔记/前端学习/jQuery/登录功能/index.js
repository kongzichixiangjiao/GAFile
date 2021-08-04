var $ = {
		ajax: function(options) {
			var xhr = null,
				url = options.url,
				method = options.method.toUpperCase() || 'GET',
				async = typeof(options.async) === "undefined" ? true : options.async,
					data = options.data || null,
					params = '',
					callback = options.success;
			error = options.error;
			if (data) {
				for (var i in data) {
					params += i + '=' + data[i] + '&';
				}
				params = params.replace(/&$/, "");
			}
			if (method === "GET") {
				url += '?' + params;
			}
			// 判断浏览器是否将XMLHttpRequest作为本地对象实现，针对IE7，firefox，opera等
			if (typeof(XMLHttpRequest) != "undefined") {
				xhr = new XMLHttpRequest();
			} else if (typeof(ActiveXObject) != "undefined") {
				// 将所有可能出现的ActiveXObject版本放在一个数组中
				var xhrARR = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.6.0',
					'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0',
					'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP.2.0'
				];
				for (let i = 0; i < xhrARR.length; i++) {
					try {
						xhr = new ActiveXObject(xhrARR[i]);
						break;
					} catch (ex) {
						console.log(ex);
					}
				}
			} else {
				throw new Error("NO XHR object availabel.");
			}
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
						callback && callback(JSON.parse(xhr.responseText))
				} else {
					error && error("错误信息");
				}
			}
		}
		// 创建请求
		xhr.open(method, url, async);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencode");
		xhr.send(params);
	},
	jsonp: function() {

	}
}

$.ajax({
	url: "192.168.1.1:8080",
	method: "get",
	async: true,
	data: {
		username: "123",
		pwd: "222"
	},
	success: function(data) {

	},
	error: function(e) {

	}
})
