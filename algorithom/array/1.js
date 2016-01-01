// 1 两数之和 ： 给定一个整形数组，是否能找出其中的两个数使其和为某个指定的值
function hasSum(ary, target) {
	if(!ary || Object.prototype.toString.call(ary) !== '[object Array]' || ary.length < 2 || typeof target !== 'number') {
		return;
	}
	
	var i = 0,j = ary.length-1, res = false;
	ary.sort();
	while(i < j) {
		if( (ary[i]+ary[j]) == target) {
			res = true;
			break;
		} else if(ary[i] < ary[j]) {
			i++
		}else {
			j--
		}
	}
	return res;
}

// 2 
function findTwoSum(ary, target) {
	if(!ary || Object.prototype.toString.call(ary) !== '[object Array]' || ary.length < 2 || typeof target !== 'number') {
		return;
	}
	var map = {}
	for(var i = 0; i < ary.length; i++) {
		map[ary[i]] = i;
	}
	var res = [];
	for(var i = 0; i < ary.length; i++) {
		var sub = target-ary[i]
		if(map[sub] !== undefined && ary[i]*2 !== target) {
			res.push([ary[i],sub])
		}
	}
	return res;
}

// 3 
function rotateK(ary, k) {
	if(!ary || Object.prototype.toString.call(ary) !== '[object Array]' || typeof k !== 'number') {
		return;
	}
	reverse(ary, 0, ary.length-1);
	reverse(ary, 0, k-1);
	reverse(ary, k, ary.length-1);
	
	function reverse(ary, start, end) {
		var tmp;
		for(var i=start;i<=end;i++) {
			tmp = ary[i];
			ary[i] = ary[end-i];
			ary[end-i] = tmp;
		}
		return ary;
	}
	return ary;
}
