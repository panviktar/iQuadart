$(function () {
	
	// SCRIPT FIX HEADER---

	var h_hght = 40; // высота шапки
	var h_mrg = 0; // отступ когда шапка уже не видна
	$(function () {
		$(window).scroll(function () {
			var top = $(this).scrollTop();
			var elem = $('#top_nav');
			if (top + h_mrg < h_hght) {
				elem.css('top', (h_hght - top));
				$('#nav-opacity').css('opacity', '0');
			} else {
				elem.css('top', h_mrg);
				$('#nav-opacity').css('opacity', '0.7');
			}
		});
	});

	// SCRIPT FIX HEADER---END


	// SCRIPT MENU---

	(function () {
		'use strict';

		var btnScrollDown = document.querySelector('#scroll_down');

		function scrollDown() {
			var windowCoords = document.documentElement.clientHeight;
			(function scroll() {
				if (window.pageYOffset < windowCoords) {
					window.scrollBy(0, 5);
					setTimeout(scroll, 0);
				}
				if (window.pageYOffset > windowCoords) {
					window.scrollTo(0, windowCoords);
				}
			})();
		}

		btnScrollDown.addEventListener('click', scrollDown);
	})();

	
	// SCRIPT MENU---END

});
