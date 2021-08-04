(function() {
	'use strict'

	setRemUnit();
	window.addEventListener('resize', setRemUnit);

	function setRemUnit() {
		var docEl = document.documentElement;
		// 1rem = viewWidth / 18.75
		var ratio = 18.75;
		var viewWidth = window.innerWidth |
			docEl.clientWidth |
			docEl.getBoundingClientRect().width;

		docEl.style.fontSize = viewWidth / ratio + 'px';
	}
})();
/* height: 50px; 固定单位px */
/* 1rem = html font-size */
/* 1rem=25px 固定死不行，应该随屏幕宽改变*/
/* 
750px设计稿 1rem=750px
height: 100px / 750px = 0.13333333333333rem;
 */
/* 
375px 1re = 375px 
height: 50 / 375 = 0.13333333333333rem;
*/
/* 使用设计稿750px为标准 */
/* 选择一个系数方便计算 18.75 */
/* 750px 1rem = 750 / 18.75 = 40 */
/* height: 100 / 40 = 2.5rem */
/* 1rem = viewWidth / 18.75 */

/* html {
	font-size: 30px;
} */
