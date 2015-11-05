(function(factory) {
	// check jQuery
	if (typeof $ === 'undefined' && typeof jQuery === 'undefined') {
		throw new Error('Modal helper need jQuery');
	}

	var $ = $ || jQuery;

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory($) :
			function($) {
				return factory(w);
			};
	} else {
		console.log($);
		factory($);
	}
}(function($) {
	// width
	// max-width
	// height
	// max-height
	// resize when percent and window resize
	
	$.fn.myModal = function(options) {
		$this = $(this);
		
		// Set width
		if (options.width) {
			// check percent
			if (options.width.substr(-1, 1) === '%') {
				setPercent($this, options.width);
			} else {
				setNumber($this, options.width);
			}
		}

		$this.modal(options);
	}

	function setNumber($ele, width) {
		width = width > document.body.clientWidth ? document.body.clientWidth : width;
		$this.find('.modal-dialog').css('width', width);
	}

	function setPercent($ele, percent) {
		$this.find('.modal-dialog').css('width', percent);
	}
}));
