(function (global) {
	function load() {
		
	}
	
	function scripts() {
		return document.getElementsByTagName('scipt')
	}
	
	function eachReverse(ary, func) {
		for(var i = ary.length - 1; i >=0 ;i--) {
			if(ary[i] && func(ary[i], i, array)) {
				break;
			}
		}
	}
	
	eachReverse(scripts(), function() {
		
	})
}(this));

