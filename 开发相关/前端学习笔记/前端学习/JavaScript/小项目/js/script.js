var EventUtil = {

	// 针对keypress
	getCharCode: function(event) {
		if (typeof(event.charCode) == "number") {
			return event.charCode;
		} else {
			return event.keyCode;
		}
	},
	getTarget: function(event) {
		return event.target || event.srcElement;
	},
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	addHandler: function(element, type, handler) {
		// 绑定事件
		// chrom, firefox, IE9等 addEventListener
		// IE8及以下浏览器 attachEvent
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	removeHandler: function(element, type, handler) {
		// 移除时间
		if (element.removeEventListener) {
			element.removeEventListener(type, handler);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}
}

var index = 0, // 当前显示图片的索引， 默认值0
	timer = null,
	prev = byId("prev"),
	next = byId("next"),
	main = byId("main"),
	pics = byId("banner").getElementsByTagName("div"),
	dots = byId("dots").getElementsByTagName("span"),
	banner = byId("banner"),
	menuContent = byId("menu-content"),
	menuItems = menuContent.getElementsByClassName("menu-item"),
	subMenu = byId("sub-menu"),
	innerBox = subMenu.getElementsByClassName("inner-box"),
	size = pics.length;

function byId(id) {
	return typeof(id) === "string" ? document.getElementById(id) : id;
}

EventUtil.addHandler(next, 'click', function() {
	nextImage()
})

function nextImage() {
	index++;
	if (index >= size) {
		index = 0;
	}
	changeImg();
}

EventUtil.addHandler(prev, 'click', function() {
	index--;
	if (index < 0) {
		index = size - 1;
	}
	changeImg();
})

for (let i = 0; i < dots.length; i++) {
	dots[i].setAttribute("data-id", i);
	EventUtil.addHandler(dots[i], 'click', function() {
		// index = this["data-id"];
		index = this.getAttribute("data-id");
		changeImg();
	})
}

function startAutoPlay() {
	timer = setInterval(function() {
		nextImage();
	}, 3000);
}

function stopAutoPlay() {
	if (timer) {
		clearInterval(timer);
	}
}

function changeImg() {
	for (let i = 0; i < size; i++) {
		pics[i].style.display = "none";
		dots[i].className = "";
	}
	pics[index].style.display = "block";
	dots[index].className = "active";
}


for (let i = 0, idx; i < menuItems.length; i++) {
	menuItems[i].setAttribute("data-index", i);
	EventUtil.addHandler(menuItems[i], 'mouseover', function() {
		subMenu.className = "sub-menu";
		idx = this.getAttribute("data-index");
		for (let i = 0; i < innerBox.length; i++) {
			innerBox[i].style.display = "none";
			menuItems[i].style.background = "none";
		}
		innerBox[idx].style.display = "block";
		menuItems[idx].style.background = "rgba(0, 0, 0, 0.1)";
	});
}
EventUtil.addHandler(banner, 'mouseout', function() {
	subMenu.className = "sub-menu hide";
});

EventUtil.addHandler(menuContent, 'mouseout', function() {
	subMenu.className = "sub-menu hide";
});

EventUtil.addHandler(subMenu, 'mouseover', function() {
	this.className = "sub-menu";
});
EventUtil.addHandler(subMenu, 'mouseout', function() {
	this.className = "sub-menu hide";
});

EventUtil.addHandler(main, 'mouseover', stopAutoPlay);
EventUtil.addHandler(main, 'mouseout', startAutoPlay);
startAutoPlay();
