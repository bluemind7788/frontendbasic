// http://blog.jobbole.com/29454/
var createMask1 = function() {
	var mask;
	return function() {
		return mask || mask = document.body.appendChild(document.createElement('div'));
	}
}()

var singleton = function(fn) {
	var result;
	return function() {
		return result || result = fn.apply(this, arguments)
	}
}

var createMask = singleton(function() {
	return document.body.appendChild(document.createElement('div'));
})
