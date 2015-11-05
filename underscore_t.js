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
			var cloneobj = {}
			for(var k in obj) {
				cloneobj[k] = _.clone(obj[k])
			}
			return cloneobj;
		}
	}
	
}