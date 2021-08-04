// 封装通用的xhr对象，兼容各个版本
function createXHR() {
	// 判断浏览器是否将XMLHttpRequest作为本地对象实现，针对IE7，firefox，opera等
	if (typeof(XMLHttpRequest) != "undefined") {
		return new XMLHttpRequest();
	} else if (typeof(ActiveXObject) != "undefined") {
		// 将所有可能出现的ActiveXObject版本放在一个数组中
		var xhrARR = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.6.0',
			'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0',
			'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP.2.0'
		];
		var xhr = null;
		for (let i = 0; i < xhrARR.length; i++) {
			try {
				xhr = new ActiveXObject(xhrARR[i]);
				break;
			} catch (ex) {
				console.log(ex);
			}
		}
		return xhr;
	} else {
		throw new Error("NO XHR object availabel.");
	}
}


function sourceRequest() {
	var xhr = createXHR();
	// 响应XMLHttpRequest对象状态变化的函数
	xhr.onreadystatechange = function(state) {
		console.log(state);
		// 异步调用成功，响应内容解析完成
		if (xhr.readyState === 4) {
			// 304资源没有改变，使用缓存
			if (xhr.status >= 200 && xhr.status < 300 ||
				xhr.status === 304) {
				console.log(xhr.responseText);
				console.log(xhr.response)
				// var data = eval("("+xhr.responseText+")");
				var data = JSON.parse(xhr.responseText);
				var dataStr = JSON.stringify(xhr.responseText);
				console.log(data);
				// JSON.parse() // 用于将JSON字符串转化成对象.
				// JSON.stringify() // 将一个值转为字符串，该字符串应该符合JSON格式，并且可以被JSON.pare()方法还原。
			}
		}
	}
	// 创建请求
	xhr.open("get", "./server/slider.json", true);
	// 发送请求
	xhr.send({
		user: "zs",
		id: 1001
	});
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

}

function jqRequest() {
	$.ajax({
		url: '请求地址',
		type: 'post',
		async: true,
		dataType: 'json',
		success: function(responseData) {

		},
	})
}

function getJSONP(url, callback) {
	if (!url) {
		return;
	}
	// 声明数组用来随机生成函数名
	var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'h', 'j'],
		r1 = Math.floor(Math.random() * 10),
		r2 = Math.floor(Math.random() * 10),
		r3 = Math.floor(Math.random() * 10),
		r4 = Math.floor(Math.random() * 10),
		r5 = Math.floor(Math.random() * 10),
		name = 'getJSONP' + a[r1] + a[r2] + a[r3] + a[r4] + a[r5],
		cbname = 'getJSONP.' + name;

	console.log(cbname);

	// 判断url地址中是否有?符号
	if (url.indexOf('?') === -1) {
		url += '?jsonp=' + cbname
	} else {
		url += '&jsonp=' + cbname
	}
	console.log(url); // index.js:93 https://www.baidu.com?jsonp=getJSONP.getJSONPfiagh
	/*
		后台返回getJSONPfiagh([])
		js理解getJSONPfiagh([]) 就是调用getJSONPfiagh函数
	*/
	// 动态创建script标签
	var script = document.createElement('script');
	// 定义被脚本执行的回调函数
	getJSONP[name] = function(data) {
		try {
			callback && callback(data);
		} catch (e) {

		} finally {
			// 最后删除该函数及script标签
			delete getJSONP[name];
			script.parentNode.removeChild(script);
		}
	}
	// 定义script的src
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

// getJSONP.getJSONPfiagh(JSON);

getJSONP("http://class.imooc.com/api/jsonp", function(data) {
	console.log(data);
});
