(function(root, factory) {
	"use strict";
	
	// CommonJS module is defined
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = factory(require("jquery"));
	}
	// AMD module is defined
	else if (typeof define === "function" && define.amd) {
		define("modalHelper", ["jquery"], function($) {
			return factory($);
		});
	} else {
		// planted over the root!
		root.modalHelper = factory(root.jQuery);
	  return root.modalHelper;
	}
}(this, function($) {
	"use strict";

	// width
	// max-width
	// height
	// max-height
	// resize when percent and window resize
	
	function ModalHelper () {
		var self = this;
		this.allowOptions = [
			'width', 
			'height',
			// not realize
			'max-width',
			'max-height'
		];
		var $e;

		$.fn.myModal = function(options) {
			var $e = $(this);
			
			self.setOptions($e, options);
			$e.modal(options);
		}

		function setWidth($e, width) {
			console.log($e, width);
			return;
		}
	}

	ModalHelper.prototype.setOptions = function($e, options) {
		if (options.width) {
			this.setWidth($e, options.width);
		}
		
		if (options.height) {
			this.setHeight($e, options.height);
		}
	}
	
	ModalHelper.prototype.setWidth = function($e, width) {
		if ($.isNumeric(width)) {
			setByPixel($e, width);
		} else if (width.substr(-2, 2) === 'px') {
			setByPixel($e, width.substring(0, width.length - 2));
		} else if (width.substr(-1, 1) === '%') {
			setByPercentage($e, width);
		} else {
			throw new Error('Invalid type of width');
		}

		function setByPixel($e, width) {
			return $e.find('.modal-dialog').css('width', width);	
		}

		function setByPercentage($e, percentage) {
			$(window).resize(function() {
				setByPercentage($e, percentage);
			});
			return $e.find('.modal-dialog').css('width', percentage);	
		}
	}
	
	ModalHelper.prototype.setHeight = function($e, height) {
		if ($.isNumeric(height)) {
			setByPixel($e, height);
		} else if (height.substr(-2, 2) === 'px') {
			setByPixel($e, height.substring(0, height.length - 2));
		} else if (height.substr(-1, 1) === '%') {
			setByPercentage($e, height);
		} else {
			throw new Error('Invalid type of heigth');
		}

		function setByPixel($e, height) {
			return $e.find('.modal-body').css('height', height);	
		}

		function setByPercentage($e, percentage) {
			percentage = percentage.substring(0, percentage.length - 1) / 100;
			var height = parseInt($(window).height() * percentage);

			$(window).resize(function() {
				console.log(parseInt($(window).height() * percentage));
				return setByPixel($e, parseInt($(window).height() * percentage));
			});
			return setByPixel($e, height);
		}
	}

	return new ModalHelper();
}));
