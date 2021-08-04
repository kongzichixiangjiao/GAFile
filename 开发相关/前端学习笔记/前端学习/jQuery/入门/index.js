// jQuery = function jQuery(agr) {
// 	console.log(agr);
// }
// $ = window.jQuery = jQuery;
// $(agr);
// jQuery(agr);
console.log("-");
console.log($);
console.log(jQuery);
/*
jQuery = function( selector, context ) {
	// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init( selector, context );
};
*/
console.log("-");
// $('div').addClass('div');
// jQuery('div').addClass('div');

$(document).ready(function () {
	console.log("ready function");
	$('div').addClass('div');
});
$().ready(function () {
	console.log("ready function");
	$('div').addClass('div');
});
$(function () {
	console.log("ready function");
	$('div').addClass('div');
});

window.onload = function () {
	console.log("ready function");
}
// <div class="div"></div>