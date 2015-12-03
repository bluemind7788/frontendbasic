// 最简单的性能测试函数
function test(fn, param) {
	var s, d;
	// 记录执行的起始时间
	s = new Date().getTime();
	// 执行待测试的方法
	fn(param);
	// 记录执行的结束时间
	d = new Date().getTime();
	// 输出待测试方法所运行的结果和耗时
	alert( ‘计算结果：’ + sum + ‘，耗时：’ + (d-s) + ‘毫秒’ );
}