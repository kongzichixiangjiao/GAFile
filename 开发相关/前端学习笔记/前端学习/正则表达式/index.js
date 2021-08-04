// 正则表达式
// var str = 'I love js';
// var pattern = /js/;

// console.log(pattern.test(str));
// console.log(pattern.exec(str)); // 找不到返回null  // ["js", index: 7, input: "I love js", groups: undefined]0: "js"groups: undefinedindex: 7input: "I love js"length: 1__proto__: Array(0)


// var str = 'I love js';
// var pattern = new RegExp('js');


// var str = 'I love JS';
// var userInput = 'love';
// var pattern = new RegExp(userInput, 'i');
// console.log(pattern);
// console.log(pattern.exec(userInput));


// var str = '//转义字符';
// var pattern = /\//;
// console.log(pattern.exec(str));

// var str = '\\\\';
// var pattern = /\\\\/;
// console.log(pattern.exec(str));

// [] 字符类 中括号内的字符 先匹配到哪个就算匹配成功
// var str = 'javascript';
// var pattern = /[js]/
// console.log(pattern.exec(str)); // j


// var str = '对javascript啊';
// var pattern = /[\u4e00-\u9fa5]/
// console.log(pattern.exec(str)); // 对

// var str = '3.14';
// var pattern = /\./
// console.log(pattern.exec(str)); // .

// var str = '\n';
// var pattern = /./
// console.log(pattern.exec(str)); // null

// var str = '_@';
// var pattern = /[a-zA-Z0-9_]/
// console.log(pattern.exec(str)); // _

// /[a-zA-Z0-9_]/ 别名 /\w/
// /[0-9]/ 别名 /\d/
// / / 别名 /\s/  匹配空白（空格 tab unicode空白）
// /\S/  除了匹配空白（空格 tab unicode空白）

// var str = '_@';
// var pattern = /\w/
// console.log(pattern.exec(str)); // _


// var str = '110';
// var pattern = /\d{2}/
// console.log(pattern.exec(str)); // 11


// var str = '110';
// var pattern = /\d{1,4}/
// console.log(pattern.exec(str)); // 110


// var str = '110';
// var pattern = /\d{1,}/
// console.log(pattern.exec(str)); // 110

// var str = '110';
// var pattern = /\d{0,1}/
// console.log(pattern.exec(str)); // 1

// var str = '110';
// var pattern = /\d?/
// console.log(pattern.exec(str)); // 1

// var str = '110';
// var pattern = /\d*/
// console.log(pattern.exec(str)); // 110

// var str = '肯德基豪华吴灿：￥15.5！';
// // var pattern = /\d+\.?\d*/;
// var pattern = /\d{1,}\.{0,1}\d{0,}/
// console.log(pattern.exec(str)); 

// var str = 'fff1';
// var pattern = /[a-z]+/
// console.log(pattern.exec(str)); // fff

// var str = 'fff1';
// var pattern = /\d+/
// console.log(pattern.exec(str)); // 1


// var str = 'aaab';
// var pattern = /a+/
// console.log(pattern.exec(str)); // aaa

// var str = 'aaab';
// var pattern = /a+?/
// console.log(pattern.exec(str)); // a

// var str = 'aaab';
// var pattern = /a+b/
// console.log(pattern.exec(str)); // aaab

// var str = 'aaab';
// var pattern = /a+?b/
// console.log(pattern.exec(str)); // aaab

// var str = 'aaab';
// var pattern = /a+b/
// console.log(pattern.exec(str)); // aaab

// var str = '<td><p>a</p></td><td><p>b</p></td>';
// var pattern = /<td>.*<\/td>/
// console.log(pattern.exec(str)); // <td><p>a</p></td><td><p>b</p></td>

// var str = '<td><p>a</p></td><td><p>b</p></td>';
// var pattern = /<td>.*?<\/td>/
// console.log(pattern.exec(str)); // <td><p>a</p></td>


// var str = 'css html js';
// var pattern = /html|js|css/
// console.log(pattern.exec(str)); // css

// var str = 'ab';
// var pattern = /ab|a/
// console.log(pattern.exec(str)); // ab

// var str = 'ab';
// var pattern = /a|ba/
// console.log(pattern.exec(str)); // a


// var str = 'ababab';
// var pattern = /ab+/
// console.log(pattern.exec(str)); // ab

// var str = 'ababab';
// var pattern = /(ab)+/
// console.log(pattern.exec(str)); // ababab ab

// var str = 'abcd';
// var pattern = /(ab)c/
// console.log(pattern.exec(str)); // abc ab

// var str = 'abcd';
// var pattern = /(?:ab)c/
// console.log(pattern.exec(str)); // abc

// var str = 'abcd';
// var pattern = /(ab)(c)/
// console.log(pattern.exec(str)); // abc ab c

// var str = 'abcd';
// var pattern = /(abc)/
// console.log(pattern.exec(str)); // abc abc

// var str = 'abcd';
// var pattern = /(a(b(c)))/
// console.log(pattern.exec(str)); // abc abc bc c

// var str = 'ab cd ab';
// var pattern = /(ab) cd \1/
// console.log(pattern.exec(str)); // "ab cd ab", "ab"

// var str = '<p><a>这段链接</a></p>';
// var pattern = /<([a-zA-Z]+)>(.*?)<\/\1>/
// console.log(pattern.exec(str)); // "<p><a>这段链接</a></p>", "p", "<a>这段链接</a>"

// var str = 'aaab';
// var pattern = /a+?b/
// console.log(pattern.exec(str)); // aaab

// var str = 'js';
// var pattern = /^js/
// console.log(pattern.exec(str)); // js

// var str = 'html js';
// var pattern = /^js/
// console.log(pattern.exec(str)); // null 

// // /[^0-9]/ 除了数字

// var str = 'html js';
// var pattern = /js$/
// console.log(pattern.exec(str)); // js 

// var str = 'html js css';
// var pattern = /js$/
// console.log(pattern.exec(str)); // null 

// var str = 'html js css';
// var pattern = /js$/
// console.log(pattern.exec(str)); // null


// var str = 'a1b3c12345550';
// var pattern = /\d+/
// console.log(pattern.exec(str)); // 1

// var str = '131234555a0';
// var pattern = /^\d+$/
// console.log(pattern.exec(str)); // null

// var str = '1312345550';
// var pattern = /^\d+$/
// console.log(pattern.exec(str)); // 1312345550

// var str = '1312345550';
// var pattern = /\D/
// console.log(pattern.exec(str)); // null

// var str = '131234555a0';
// var pattern = /\D/
// console.log(pattern.exec(str)); // a


// var str = '1312345550aaa';
// var pattern = /^\d+[a-z]+$/
// console.log(pattern.exec(str)); // 1312345550aaa


// var str = 'js';
// // var pattern = /js/;
// var pattern = /\bjs\b/;
// console.log(pattern.exec(str)); // js

// // var str = 'js html';
// // // var pattern = /js/;
// // var pattern = /\bjs/;
// // console.log(pattern.exec(str)); // js

// var str = '@@@@·+？发-js@@@@@';
// // var pattern = /js/;
// var pattern = /\bjs\b/;
// console.log(pattern.exec(str)); // js


// var str = '@@@@js@@@@@';
// // var pattern = /js/;
// var pattern = /\bjs\b/;
// console.log(pattern.exec(str)); // js

// // <p class = "odd2 odd odd1" > < /p>

// function getByClassName(className, parentNode) {
// 	if (!document.getElementsByClassName) {
// 		return document.getElementsByClassName(className);
// 	} else {
// 		parentNode.parentNode || document;
// 		var nodeList = [];
// 		var allNodes = parentNode.getElementsByTagName('*');
// 		// var pattern = new RegExp('^|\\s+' + className + '$|\\s+');
// 		var pattern = new RegExp('\\b' + className + '\b');

// 		for (let i = 0; i < allNodes.length; i++) {
// 			if (pattern.test(allNodes[i].className)) {
// 				nodeList.push(allNodes[i]);
// 			}
// 		}
// 	}
// }

// // 前瞻性匹配
// var str = 'javascript';
// var pattern = /java(?=script)/;
// console.log(pattern.exec(str)); // java


// var str = 'javascript';
// var pattern = /java(?!script)/;
// console.log(pattern.exec(str)); // null


// // RegExp对象

// new RegExp("\\b"); // 双重转义 

// var pattern = /js/;
// var pattern = new RegExp('js');


// var str = 'js js js';
// var pattern = /js/g;
// console.log(pattern.ignoreCase); // false 
// console.log(pattern.global); // true 
// console.log(pattern.multiline); // false 
// console.log(pattern.source); // js 

// console.log(pattern.lastIndex); // 0
// console.log(pattern.exec(str)); // js 0
// console.log(pattern.lastIndex); // 2
// console.log(pattern.exec(str)); // js 3
// console.log(pattern.lastIndex); // 5
// console.log(pattern.exec(str)); // js 6
// console.log(pattern.lastIndex); // 8
// console.log(pattern.exec(str)); // null
// console.log(pattern.lastIndex); // 0
// console.log(pattern.exec(str)); // js 0
// console.log(pattern.lastIndex); // 2

// var str = 'js js js';
// var pattern = /js/g;
// console.log(pattern.lastIndex); // 0
// console.log(pattern.test(str)); // true
// console.log(pattern.lastIndex); // 2
// console.log(pattern.test(str)); // true
// console.log(pattern.lastIndex); // 5
// console.log(pattern.test(str)); // true
// console.log(pattern.lastIndex); // 8
// console.log(pattern.test(str)); // false
// console.log(pattern.lastIndex); // 0
// console.log(pattern.test(str)); // true
// console.log(pattern.lastIndex); // 2


// var str = 'js js js';
// var pattern = /(j)s/g;
// console.log(pattern.exec(str)); // j
// console.log(pattern.exec(str)); // j
// console.log(pattern.exec(str)); // j
// console.log(pattern.exec(str)); // null

// var str = '1.js 2.js 3.js';
// var pattern = /js/g;
// var total = 0,
// 	match = '',
// 	reuslt;
// while ((result = pattern.exec(str)) != null) {
// 	total++;
// 	match += '第' + total + '个匹配到的结果是：' + result[0] + ',它的位置是：' + result.index + '\n';
// }
// console.log('总共：' + total + '处');
// console.log(match);

// var pattern = new RegExp('a\\nb');
// console.log(pattern.toString()); // /a\nb/
// console.log(pattern.toLocaleString()); // /a\nb/
// console.log(pattern.valueOf()); // /a\nb/

// // 构造函数属性
// var str = 'js js js';
// var pattern = /(j)s/;
// pattern.exec(str);
// console.log(RegExp.input); // js js js 
// console.log(RegExp.$_); // js js js 
// console.log(RegExp["$_"]); // js js js 

// console.log(RegExp.lastMatch); // js 
// console.log(RegExp["$&"]); // js 

// console.log(RegExp.leftContext); // 空格
// console.log(RegExp["$`"]); // 空格
// console.log(RegExp.rightContext); // 空格 js js
// console.log(RegExp["$'"]); // 空格 js js

// console.log(RegExp.lastParen); // j
// console.log(RegExp["$+"]); // j

// console.log(RegExp.$1); // j
// console.log(RegExp.$2); // 空格


// var str = 'html js js js';
// var pattern = /js/;
// console.log(str.search(pattern)); // 5

// var str = 'html js js js';
// var pattern = /js/g;
// console.log(str.search(pattern)); // 5

// var str = 'html js js js';
// var pattern = /js/g;
// console.log(str.search('js')); // 5


// var str = 'js js js';
// var pattern = /js/;
// console.log(str.match(pattern)); // js 

// var str = 'js js js';
// var pattern = /js/g;
// console.log(str.match(pattern)); // ["js", "js", "js"]

// // match VS  exec 
// // match: 非全局的情况下才会返回分组中匹配到的内容，全局匹配只能匹配到所有匹配到的字符
// // Exec: 无论是否全局匹配都会返回分组中匹配到的内容，都只会返回当前匹配到的一个内容，而不是全部返回。

// // 多行匹配(g和m联合使用)(m配合$和^使用)

// var str = '1.js\n2.js\n3.js';
// var pattern = /js/gm;
// console.log(str);
// console.log(str.match(pattern)); // ["js", "js", "js"]

// var str = '1.js\n2.js\n3.js';
// var pattern = /js/g;
// console.log(str);
// console.log(str.match(pattern)); // ["js", "js", "js"]


// var str = '1.js\n2.js\n3.js';
// var pattern = /js$/g;
// console.log(str);
// console.log(str.match(pattern)); // ["js"]

// var str = '1.js\n2.js\n3.js';
// var pattern = /js$/gm;
// console.log(str);
// console.log(str.match(pattern)); // ["js", "js", "js"]

// var str = 'js1\njs2\njs3';
// var pattern = /^js/g;
// console.log(str);
// console.log(str.match(pattern)); // ["js"]

// var str = 'js1\njs2\njs3';
// var pattern = /^js/gm;
// console.log(str);
// console.log(str.match(pattern)); // ["js", "js", "js"]


// // split方法 字符串组成数组

// var str = 'html,css,js';
// console.log(str.split(',')); // ["html", "css", "js"]

// var str = 'html,css,js';
// var pattern = /,/;
// // var pattern = /,/g;
// console.log(str.split(pattern)); // ["html", "css", "js"]

// var str = 'html,  css,  js';
// var pattern = /,/;
// console.log(str.split(pattern)); // ["html", "  css", "  js"]

// var str = 'html,  css,  js';
// var pattern = /\s*,\s*/;
// console.log(str.split(pattern)); // ["html", "css", "js"]


// // replace方法

// var str = 'I love js js';
// var pattern = /\s*,\s*/;
// console.log(str.replace('js', 'swift')); // I love swift js

// var str = 'I love js js';
// var pattern = /js/g;
// console.log(str.replace(pattern, 'swift')); // I love swift swift

// var str = '1111-11-11';
// var pattern = /-/g;
// console.log(str.replace(pattern, '.')); // 1111.11.11

// var str = 'I love js';
// var pattern = /(js)/;
// console.log(str.replace(pattern, '<strong style="color:red">$1</strong>')); // I love <strong style="color:red">js</strong>
// document.write(str.replace(pattern, '<strong style="color:red">$1</strong>'));


// var str = '敏感词过滤中国军队和啊好一起办证';
// var pattern = /(中国军队)|啊好|办证/g;
// console.log(str.replace(pattern, function($0, $1) {
// 	console.log($0);
// 	/*
// 	中国军队
// 	啊好
// 	办证
// 	*/
//    var result = '';
//    for (let i = 0; i < $0.length; i++) {
//    	result += "*";
//    }
//    return result;
// })); // index.js:472 敏感词过滤****和**一起**


// var str = '    jj   ';
// var pattern = /^\s+/;
// console.log('|' + str.replace(pattern, '') + '|');

// var str = '    jj   ';
// var pattern = /\s+$/;
// console.log('|' + str.replace(pattern, '') + '|');

// var str = '    jj   ';
// var pattern = /^\s+|\s+$/g;
// console.log('|' + str.replace(pattern, '') + '|');

// var str = '    jj   ';
// var pattern1 = /^\s+/;
// var pattern2 = /\s+$/;
// console.log('|' + str.replace(pattern1, '').replace(pattern2, '') + '|');

// function trim(str) {
// 	return str.replace(/^\s+/,'').replace(/\s+$/,'');
// }
// console.log(trim(str));



// var str = "background-color";
// var pattern = /-([a-z])/gi;
// console.log(str.replace(pattern, function(all, letter) {
// 	console.log(all, letter);
// 	return letter.toUpperCase();
// }));

// function toCamelCase(str) {
// 	var pattern = /-([a-z])/gi;
// 	return str.replace(pattern, function(all, letter) {
// 		console.log(all, letter);
// 		return letter.toUpperCase();
// 	});
// }

// console.log(toCamelCase(str));


// var str = '<p class="odd" id="odd">123</p>';
// var pattern = /<\/?[a-zA-Z]+(\s+[a-zA-Z]+=".*")*>/g;
// console.log(str.match(pattern)); // ["<p class="odd" id="odd">", "</p>"]

// var str = '<input type="text" value=">" name="username" />';
// // var pattern = /<[^>]+>/g; 
// var pattern = /<(?:[^"'>]|"[^"]|'[^']*')*>/g;
// console.log(str.match(pattern));

// var str = '<input type="text" value=">" name="username" />';
// var pattern = /<(?:[^"'>]|(["'])[^"']*\1)*>/g;
// console.log(str.match(pattern));

// var str = 'hou-jia.nan_110@163.cn.com';
// // /()()*@()()\.()/i
// var pattern = /^[a-z0-9]+(?:[._-][a-z0-9]+)*@[a-z0-9](?:[.-_][a-z0-9]+)*\.[a-z]{2,4}$/i;
// console.log(str.match(pattern));

var str = 'http://www.baidu.com?a=2&b=zz';
// (协议:\/\/)(主机名)(:端口号)(/路径)(?参数)
// 协议:http://、ftp//、file:///、https://
var pattern = /^https?:\/\/(?:[^:\/]+)(?::\d+)?(?:\/.*)?(?:[a-zA-Z]+=(?:.*)+(?:&)?)?$/;
// 主机名：-www.-imos-oc.co-m
// var pattern = /^([a-z0-9]\.|[a-z0-9][-a-z0-9]*[a-z0-9]\.)*(com|edu|gov|net|org|[a-z]{2})$/i;
// var pattern = /^([a-z0-9]\.|[a-z0-9][-a-z0-9]*[a-z0-9]\.)*([a-z]*)$/i;
console.log(str.match(pattern));

var regexp = {
  'chinese': /[\u4e00-\u9fa5]/,
  'qq': /^[1-9]\d{4,}$/
}
console.log(regexp.qq);
console.log(regexp.chinese);

console.log("=====");

/*
<p wx:nodeid="61">123<strong wx:nodeid="75">
123！@<em wx:nodeid="81">123<u wx:nodeid="86">123</u></em></strong>
<img data-cloud="cloud://fkd-9gpkdg6f6034e215.666b-fkd-9gpkdg6f6034e215-1304322465/noteImages/474324461.png" width="100%" data-custom="id=787732&amp;url=cloud://fkd-9gpkdg6f6034e215.666b-fkd-9gpkdg6f6034e215-1304322465/noteImages/474324461.png" wx:nodeid="90" src="https://666b-fkd-9gpkdg6f6034e215-1304322465.tcb.qcloud.la/noteImages/474324461.png">
</p>
<p wx:nodeid="96">123213我是**（扣水电费）（@）（#汉字</p>
<p wx:nodeid="94">123123我<br wx:nodeid="95">123啊213</p>
*/
// var str11 = "<p wx:nodeid=\"96\">123213我是**（扣水电费）（@）（#汉字</p><p wx:nodeid=\"94\">123123我<br wx:nodeid=\"95\">123啊213</p>"
var str11 = "<p wx:nodeid=\"96\">123213我是**（扣水电费）（@）（#汉字</p>"

var pattern11 = /<(.*)>/g;


console.log(str11.replace(pattern11, "--"));
// console.log(pattern11.exec(str11));
// console.log(pattern11.exec(str11).length);
// console.log(pattern11.exec(str11)[0]);
// console.log(pattern11.exec(str11)[1]);


var str12 = '<p wx:nodeid="61">123<strong wx:nodeid="75">123！@<em wx:nodeid="81">123<u wx:nodeid="86">123</u></em></strong><img data-cloud="cloud://fkd-9gpkdg6f6034e215.666b-fkd-9gpkdg6f6034e215-1304322465/noteImages/474324461.png" width="100%" data-custom="id=787732&amp;url=cloud://fkd-9gpkdg6f6034e215.666b-fkd-9gpkdg6f6034e215-1304322465/noteImages/474324461.png" wx:nodeid="90" src="https://666b-fkd-9gpkdg6f6034e215-1304322465.tcb.qcloud.la/noteImages/474324461.png"></p><p wx:nodeid="96">123213我是**（扣水电费）（@）（#汉字</p>';
var pattern12 = /<(?:[^"'>]|(["'])[^"']*\1)*>/g;
console.log(str12.replace(pattern12, ""));


console.log("====")
var pattern13 = /\w{6}/
console.log(pattern13.test("1"));
console.log(pattern13.test("111111"));

console.log("====")
