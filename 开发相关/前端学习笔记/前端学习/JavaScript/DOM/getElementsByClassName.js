var getElementsByClassName = function(opts) {
	var searchClass = opts.searchClass; // 要查找的类名
	var node = opts.node || document; // 要查找的范围
	var tag = opts.tag || '*'; // 存储一定范围内要查找的标签
	var result = [];

	// 判断浏览器是否支持getElementsByClassName方法
	if (document.getElementsByClassName) {
		var nodes = node.getElementsByClassName(searchClass);
		if (tag !== "*") {
			for (let i = 0; node = nodes[i++];) {
				if (node.tagName === tag.toUpperCase()) {
					result.push(node);
				}
			}
		} else {
			result = nodes;
		}
		return result;
	} else {
		var els = node.getElementsByTagName(tag);
		var elsLen = els.length;
		var i, j;
		var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
		for (let i = 0; i < elsLen; i++) {
			if (pattern.test(els[i].className)) {
				result[j] = els[i];
				j++;
			}
		}
		return result;
	}
}
