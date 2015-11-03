function genDomUid(prefix) {
	do prefix += (Math.random() * 1000000
	while (document.getElementById(prefix))
	return prefix
} 