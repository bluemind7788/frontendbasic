var _ = function() {};

_.genDomUid = function(prefix) {
	do prefix += ~~(Math.random() * 1000000)
	while (document.getElementById(prefix))
	return prefix
}

_.isEqual = function(a, b) {
	if(a === b) return true;
	
}

_.clone = function(obj) {
	
	if(typeof obj !== 'object') {
		return obj;
	} else {
		if(obj == null) {
			return null
		} else {
			var cloneobj;
			if(Object.prototype.toString.call(obj) == '[object Array]') {
				cloneobj = []
			} else {
				cloneobj = {}
			}
			for(var k in obj) {
				cloneobj[k] = _.clone(obj[k])
			}
			return cloneobj;
		}
	}
	
}

_.humpStr = function(str) {
	var reg = /-(\w)/g
	str = str.replace(reg, function($0, $1) {
		return $1.toUpperCase()
	})
	return str;
}

// 模拟new
_.newObject = function(f) {
	var o = new Object();
	o.__proto__ = f.prototype;
	f.apply(o, Array.prototype.slice.call(arguments, 1))
	return o;
}

_.compose = function() {
	var funcs = arguments;
	return function() {
		var args = arguments;
		for(var i=funcs.length-1;i>0;i--) {
			args = [funcs[i].apply(this, args)]
		}
		return args;
	}
}

