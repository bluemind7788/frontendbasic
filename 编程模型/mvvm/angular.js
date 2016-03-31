	var _callbacks = {}
	var pubsub = {
		sub: function(name, cb) {
			if(_callbacks[name] == undefined) {
				_callbacks[name] = []
			}
			_callbacks[name].push(cb)
		},
		pub: function(name) {
			if(_callbacks[name] == undefined) return;
			  var args = Array.prototype.slice.call(arguments,1)
			for(var i=0;i < _callbacks[name].length;i++) {
				_callbacks[name][i].apply(this, args);
			}
		}
	}
	
	var Model = function() {
		this.props = {}
		pubsub.sub('view.change', function(name, value) {
			this.set(name, value)
		})
	}
	
	Model.prototype.set = function(key, value) {
		this.props[key] = value;
		pubsub.pub('model.change', key, value)
	}
	
	Model.prototype.get = function(key) {
		return this.props[key]
	}	
	
	document.addEventListener('change', changeHandler, false);
	var changeHandler = function(event) {
	    var target = event.target,
	        propName = target.getAttribute('data-bind');
	    if( propName && propName !== '' ) {
	        pubsub.pub('view.change', propName, target.value);
	    }
	}
	
	pubsub.sub('model.change', function(propName, newVal) {
	    var elements = document.querySelectorAll('[data-bind=' + propName +']'),
	        tagName;
	    for(var i=0,l=elements.length; i<l; i++) {
	        tagName = elements[i].tagName.toLowerCase();
	        if(tagName==='input' || tagName==='textarea' || tagName==='select') {
	            elements[i].value = newVal;
	        } else {
	            elements[i].innerHTML = newVal;
	        }
	    }

	})
	
	
	
