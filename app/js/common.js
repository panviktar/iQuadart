$(function() {

	var h_hght = 40; // высота шапки
	var h_mrg = 0;     // отступ когда шапка уже не видна
	$(function(){
	 $(window).scroll(function(){
			var top = $(this).scrollTop();
			var elem = $('#top_nav');
			if (top+h_mrg < h_hght) {
			 elem.css('top', (h_hght-top));
			 $('#nav-opacity').css('opacity','0') ;
			} else {
			 elem.css('top', h_mrg);
			 $('#nav-opacity').css('opacity','0.7');
			}
		});
	});



	// Custom JS

});
