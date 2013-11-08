/* 
 *	jQuery MTabs 1.0.0
 *	Demo's and documentation:
 *	http://datsko.it/#jquery.mtabs
 *
 *	Copyright (c) 2013 Misha Datsko
 *	http://datsko.it
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function($){
	$.fn.mtabs = function(activeClass,content) {
		var active;
		this.each(function(){
			if($(this).hasClass(activeClass)){
				active = $(this).find('a').attr('href');
			}
		});
		$(content).hide();
		$(content+''+active).show();
		this.find('*').unbind('click');
		this.click(function(){
			$(this).parent().find($(this).get(0).tagName).removeClass('active');
			$(this).addClass('active');
			$(content).hide();
			$(content+''+$(this).find('a').attr('href')).show();
			return false
		});
	};
})(jQuery);