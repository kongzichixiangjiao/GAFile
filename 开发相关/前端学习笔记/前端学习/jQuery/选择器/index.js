// var obj = document.getElementById("dom-id");
// var obj = $("#dom-id");

// 基本选择器
$(document).ready(function() {
	// ID选择器：根据给定的ID匹配一个元素
	var first = $('#first');
	console.log(first);
	/*
	打印结果：
	jQuery.fn.init [div#first.divfirst]
	0: div#first.divfirst
	length: 1
	__proto__: Object(0)
	*/

	var second = $('#second');
	var third = $('#third');

	// Element选择器：根据给定的元素标签名匹配所有元素
	var div = $('div');
	console.log(div);
	/*
	jQuery.fn.init(3) [div#first.divfirst, div#second.divsecond, div#third.div.third, prevObject: jQuery.fn.init(1)]
	0: div#first.divfirst
	1: div#second.divsecond
	2: div#third.div.third
	length: 3
	prevObject: jQuery.fn.init [document]
	__proto__: Object(0)
	*/

	// class选择器：根据给定的css类名匹配元素
	var divClass = $('.div');
	console.log(divClass)
	/*
	jQuery.fn.init(3) [div#first.div.first, div#second.div.second, div#third.div.third, prevObject: jQuery.fn.init(1)]
	0: div#first.div.first
	1: div#second.div.second
	2: div#third.div.third
	length: 3
	prevObject: jQuery.fn.init [document]
	__proto__: Object(0)
	*/

	var firstClass = $('.first');
	var secondClass = $('.second');
	var thirdClass = $('.third');
	console.log(firstClass);
	/*
	jQuery.fn.init [div#first.div.first, prevObject: jQuery.fn.init(1)]
	0: div#first.div.first
	length: 1
	prevObject: jQuery.fn.init [document]
	__proto__: Object(0)
	*/

	// 通配符选择器：匹配所有元素
	var all = $('*');
	console.log(all);
	/*
	jQuery.fn.init(10) [html, head, meta, title, script, script, body, div#first.div.first, div#second.div.second, div#third.div.third, prevObject: jQuery.fn.init(1)]
	0: html
	1: head
	2: meta
	3: title
	4: script
	5: script
	6: body
	7: div#first.div.first
	8: div#second.div.second
	9: div#third.div.third
	length: 10
	prevObject: jQuery.fn.init [document]
	__proto__: Object(0)
	*/

	//	多项选择器
	var firstAndThird = $('#first, .third');
	console.log(firstAndThird);
	/*
		jQuery.fn.init(2) [div#first.div.first, div#third.div.third, prevObject: jQuery.fn.init(1)]
		0: div#first.div.first
		1: div#third.div.third
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var objs = $('#first, div, .div, .third');
	console.log(objs);

	/*
		jQuery.fn.init(6) [div#first.div.first, div#second.div.second, div#third.div.third, section#first.div.first, section#second.div.second, section#third.div.third, prevObject: jQuery.fn.init(1)]
		0: div#first.div.first
		1: div#second.div.second
		2: div#third.div.third
		3: section#first.div.first
		4: section#second.div.second
		5: section#third.div.third
		length: 6
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/
	console.log(objs[0]);
	// <div id="first" class="div first">First</div>


	//	层级选择器

	// 祖先aside 后代summary
	var summaries = $('aside summary');
	console.log(summaries);
	/*
		jQuery.fn.init(3) [summary, summary, summary, prevObject: jQuery.fn.init(1)]
		0: summary
		1: summary
		2: summary
		length: 3
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	var details = $('aside details');
	console.log(details);
	/*
		jQuery.fn.init(4) [details, details, details, details, prevObject: jQuery.fn.init(1)]
		0: details
		1: details
		2: details
		3: details
		length: 4
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/


	// 直接后代选择器
	var details = $('aside > details');
	console.log(details);
	/*
		jQuery.fn.init(2) [details, details, prevObject: jQuery.fn.init(1)]
		0: details
		1: details
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	// 下一选择器
	var uls = $('summary + ul');
	console.log(uls);
	/*
		jQuery.fn.init(3) [ul, ul, ul, prevObject: jQuery.fn.init(1)]
		0: ul
		1: ul
		2: ul
		length: 3
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	var details = $('summary + details');
	console.log(details);
	/*
		jQuery.fn.init [details, prevObject: jQuery.fn.init(1)]
		0: details
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
  */


	// 兄弟选择器
	// $('pre - sublining')
	var uls = $('summary ~ ul');
	console.log(uls);
	/*
		jQuery.fn.init(3) [ul, ul, ul, prevObject: jQuery.fn.init(1)]
		0: ul
		1: ul
		2: ul
		length: 3
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/
	var details = $('summary ~ details');
	console.log(details);
	/*
		jQuery.fn.init(2) [details, details, prevObject: jQuery.fn.init(1)]
		0: details
		1: details
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var all = $('[class]');
	console.log(all);
	/*
		jQuery.fn.init(10) [details.tool, p.tool_sublime, p.tool_webstorm, p.tool_vs, p.tool_vscode, details.lang, p.lang_html, p.lang_css, p.lang_js, p.lang_jquery, prevObject: jQuery.fn.init(1)]
		0: details.tool
		1: p.tool_sublime
		2: p.tool_webstorm
		3: p.tool_vs
		4: p.tool_vscode
		5: details.lang
		6: p.lang_html
		7: p.lang_css
		8: p.lang_js
		9: p.lang_jquery
		length: 10
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	var all = $('[lang]');
	console.log(all);
	/*
		jQuery.fn.init [html, prevObject: jQuery.fn.init(1)]
		0: html
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
  */

	var all = $('[class=tool_sublime]');
	console.log(all);
	/*
		jQuery.fn.init [p.tool_sublime, prevObject: jQuery.fn.init(1)]
		0: p.tool_sublime
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var all = $('[class!=tool]');
	console.log(all);
	/*
		jQuery.fn.init(18) [html, head, meta, title, script, script, body, summary, p.tool_sublime, p.tool_webstorm, p.tool_vs, p.tool_vscode, details.lang, summary, p.lang_html, p.lang_css, p.lang_js, p.lang_jquery, prevObject: jQuery.fn.init(1)]
		0: html
		1: head
		2: meta
		3: title
		4: script
		5: script
		6: body
		7: summary
		8: p.tool_sublime
		9: p.tool_webstorm
		10: p.tool_vs
		11: p.tool_vscode
		12: details.lang
		13: summary
		14: p.lang_html
		15: p.lang_css
		16: p.lang_js
		17: p.lang_jquery
		length: 18
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	var all = $('[class^=tool]');
	console.log(all);
	/*
		jQuery.fn.init(5) [details.tool, p.tool_sublime, p.tool_webstorm, p.tool_vs, p.tool_vscode, prevObject: jQuery.fn.init(1)]
		0: details.tool
		1: p.tool_sublime
		2: p.tool_webstorm
		3: p.tool_vs
		4: p.tool_vscode
		length: 5
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var all = $('[class$=sublime]');
	console.log(all);
	/*
		jQuery.fn.init [p.tool_sublime, prevObject: jQuery.fn.init(1)]
		0: p.tool_sublime
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	var all = $('[class*=_v]');
	console.log(all);
	/*
		jQuery.fn.init(2) [p.tool_vs, p.tool_vscode, prevObject: jQuery.fn.init(1)]
		0: p.tool_vs
		1: p.tool_vscode
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
  */
	var all = $('[type][src]');
	console.log(all);
	/*
		jQuery.fn.init(2) [script, script, prevObject: jQuery.fn.init(1)]
		0: script
		1: script
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var all = $('[class][class*=lang][class$=jquery]');
	console.log(all);
	/*
		jQuery.fn.init [p.lang_jquery, prevObject: jQuery.fn.init(1)]
		0: p.lang_jquery
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	//过滤器

	var first = $('details');
	console.log(first);
	/*
		jQuery.fn.init(3) [details.tool, details.ide, details.lang, prevObject: jQuery.fn.init(1)]
		0: details.tool
		1: details.ide
		2: details.lang
		length: 3
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/
	var first = $('details:first-child');
	console.log(first);
	/*
		jQuery.fn.init [details.tool, prevObject: jQuery.fn.init(1)]
		0: details.tool
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	// details > p:first-child details下的第一个标签是p标签
	var first = $('details > p:first-child');
	console.log(first);
	/*
		jQuery.fn.init [prevObject: jQuery.fn.init(1)]
		length: 0
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	// details > p:last-child details下的最后一个标签是p标签
	var last = $('details > p:last-child');
	console.log(last);
	/*
		jQuery.fn.init(3) [p.tool_sublime, p.tool_vscode, p.lang_jquery, prevObject: jQuery.fn.init(1)]
		0: p.tool_sublime
		1: p.tool_vscode
		2: p.lang_jquery
		length: 3
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	// details下第二个标签是p会返回p标签
	var nthFirst = $('details > p:nth-child(2)');
	console.log(nthFirst);
	/*
		jQuery.fn.init(3) [p.tool_sublime, p.tool_webstorm, p.lang_html, prevObject: jQuery.fn.init(1)]
		0: p.tool_sublime
		1: p.tool_webstorm
		2: p.lang_html
		length: 3
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	// details下第一个标签是p会返回p标签
	var nthFirst = $('details > p:nth-child(1)');
	console.log(nthFirst);
	/*
		jQuery.fn.init [prevObject: jQuery.fn.init(1)]
		length: 0
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var nthLast = $('details > p:nth-last-child(2)');
	console.log(nthLast);
	/*
		jQuery.fn.init(2) [p.tool_vs, p.lang_js, prevObject: jQuery.fn.init(1)]
		0: p.tool_vs
		1: p.lang_js
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var onlyChild = $('details > p:only-child');
	console.log(onlyChild);
	/*
		jQuery.fn.init [p.only-child, prevObject: jQuery.fn.init(1)]
		0: p.only-child
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	// details > p:first-of-type 找到details下的第一次出现的p标签
	var first = $('details > p:first-of-type');
	console.log(first);
	/*
		jQuery.fn.init(4) [p.only-child, p.tool_sublime, p.tool_webstorm, p.lang_html, prevObject: jQuery.fn.init(1)]
		0: p.only-child
		1: p.tool_sublime
		2: p.tool_webstorm
		3: p.lang_html
		length: 4
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var last = $('details > p:last-of-type');
	console.log(last);
	/*
		jQuery.fn.init(4) [p.only-child, p.tool_sublime, p.tool_vscode, p.lang_jquery, prevObject: jQuery.fn.init(1)]
		0: p.only-child
		1: p.tool_sublime
		2: p.tool_vscode
		3: p.lang_jquery
		length: 4
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var nthF = $('details > p:nth-of-type(2)');
	console.log(nthF);
	/*
		jQuery.fn.init(2) [p.tool_vs, p.lang_css, prevObject: jQuery.fn.init(1)]
		0: p.tool_vs
		1: p.lang_css
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var nthL = $('details > p:nth-last-of-type(2)');
	console.log(nthL);
	/*
		jQuery.fn.init(2) [p.tool_vs, p.lang_js, prevObject: jQuery.fn.init(1)]
		0: p.tool_vs
		1: p.lang_js
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var only = $('details > p:only-of-type');
	console.log(only);
	/*
		jQuery.fn.init(2) [p.only-child, p.tool_sublime, prevObject: jQuery.fn.init(1)]
		0: p.only-child
		1: p.tool_sublime
		length: 2
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/


	var inputs = $(':input');
	console.log(inputs);
	/*
		jQuery.fn.init(6) [input, input, input, input, input, button, prevObject: jQuery.fn.init(1)]
		0: input
		1: input
		2: input
		3: input
		4: input
		5: button
		length: 6
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
   */

	var texts = $(':text');
	console.log(texts);
	/*
		jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
		0: input
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var texts = $(':password');
	console.log(texts);
	/*
		jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
		0: input
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var disabled = $(':disabled');
	console.log(disabled);
	/*
		jQuery.fn.init [input, prevObject: jQuery.fn.init(1)]
		0: input
		length: 1
		prevObject: jQuery.fn.init [document]
		__proto__: Object(0)
	*/

	var enabled = $(':enabled');
	console.log(enabled);

	var checked = $(':checked');
	console.log(checked);

	var checked = $(':selected');
	console.log(checked);

	var js = $('aside').find('.javascript');
	console.log(js);
	/*
		jQuery.fn.init [li.javascript, prevObject: jQuery.fn.init(1)]
		0: li.javascript
		length: 1
		prevObject: jQuery.fn.init [aside, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
	*/

	var list = $('aside').children('details');
	console.log(list);
	/*
		jQuery.fn.init(2) [details, details, prevObject: jQuery.fn.init(1)]
		0: details
		1: details
		length: 2
		prevObject: jQuery.fn.init [aside, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
   */

	var js_parent = js.parent();
	console.log(js_parent);
	/*
		jQuery.fn.init [ul, prevObject: jQuery.fn.init(1)]
		0: ul
		length: 1
		prevObject: jQuery.fn.init [li.javascript, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
	*/

	var js = $('aside').find('.javascript');
	var html = js.next();
	console.log(html);
	/*
		jQuery.fn.init [li.html, prevObject: jQuery.fn.init(1)]
		0: li.html
		length: 1
		prevObject: jQuery.fn.init [li.javascript, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
	*/

	console.log(html.prev());
	/*
		jQuery.fn.init [li.javascript, prevObject: jQuery.fn.init(1)]
		0: li.javascript
		length: 1
		prevObject: jQuery.fn.init [li.html, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
	*/

	var lis = $('li');
	var html = lis.eq(5);
	console.log(html);
	/*
		jQuery.fn.init [li.html, prevObject: jQuery.fn.init(9)]
		0: li.html
		length: 1
		prevObject: jQuery.fn.init(9) [li, li, li, li, li.javascript, li.html, li, li, li, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
	*/

	var details = $('details');
	var detailsSiblings = details.siblings();
	console.log(detailsSiblings);

	/*
		jQuery.fn.init(5) [details, details, summary, details, details, prevObject: jQuery.fn.init(4)]
		0: details
		1: details
		2: summary
		3: details
		4: details
		length: 5
		prevObject: jQuery.fn.init(4) [details, details, details, details, prevObject: jQuery.fn.init(1)]
		__proto__: Object(0)
   */

	var details = detailsSiblings.filter(".details");
	console.log(details);
	/*
		jQuery.fn.init [details.details, prevObject: jQuery.fn.init(5)]
		0: details.details
		length: 1
		prevObject: jQuery.fn.init(5) [details, details.details, summary, details, details, prevObject: jQuery.fn.init(4)]
		__proto__: Object(0)
	*/
})
