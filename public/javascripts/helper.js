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

		$.fn.myModal = function(options) {
			var $this = $(this);
			self.setOptions.call($this, options);

			$this.modal(options);
		}

		this.setOptions = function(options) {
			var $e = this;
			console.log(this);
			console.log(options);
		}
	}

	return new ModalHelper();
}));
