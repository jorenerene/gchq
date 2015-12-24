$ (document).ready (function () {
	// Custom Number Type
	/*HTML
	<div class='input-group'>
	<span class="input-group-btn">
	<button class="btn btn-default btn-danger" type="button"><i class='fa fa-fw fa-arrow-down'></i></button>
	</span>
	<span class="input-group-addon"><i class='fa fa-fw fa-refresh'></i></span>
	<input class='form-control' id="transaction-every" type="number" value="1">
	<span class="input-group-btn">
	<button class="btn btn-default btn-success" type="button"><i class='fa fa-fw fa-arrow-up'></i></button>
	</span>
	</div> */

	$ ('.input-group .fa-arrow-down').click (function () {
		var thisInput = $ (this).parents ('.input-group').eq (0).children ('input').eq (0);
		
		var inputValue = $ (thisInput).val ();
		if (inputValue > 0) inputValue --;
		
		$ (thisInput).val (inputValue);
	});
	$ ('.input-group .fa-arrow-up').click (function () {
		var thisInput = $ (this).parents ('.input-group').eq (0).children ('input').eq (0);
		
		var inputValue = $ (thisInput).val ();
		inputValue ++;
		
		$ (thisInput).val (inputValue);
	});
	
	// Smooth Scroll
	$ ('a[href*=#]:not([href=#])').click (function (e) {
		if (location.pathname.replace (/^\//,'') == this.pathname.replace (/^\//,'') && location.hostname == this.hostname) {
			var target = $ (this.hash);
			target = target.length ? target : $ ('[name=' + this.hash.slice(1) +']');
			
			if (target.length && $ (this).attr ('id') != 'filter-button') {
				var buffer = $ ('nav.navbar').eq (0).hasClass ('navbar-fixed-top') ? $ ('nav.navbar').eq (0).height () : 0;
				
				$ ('html, body').animate ({
					scrollTop: target.offset ().top - buffer
				}, 1000);
				return false;
			}
		}
	});

	// Topper
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	$topper = $ ('#topper');

	// Toggle Topper
	$ (window).scroll (function () {
		($ (this).scrollTop () > offset) ? $topper.addClass ('topper-is-visible') : $topper.removeClass ('topper-is-visible topper-fade-out');
		if ($ (this).scrollTop () > offset_opacity) { 
			$topper.addClass ('topper-fade-out');
		}
	});

	// Smooth Topper
	$topper.on ('click', function (event) {
		event.preventDefault ();
		$ ('body, html').animate ({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
});