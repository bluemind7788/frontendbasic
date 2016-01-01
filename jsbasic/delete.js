var o = {};
var a = {x:10};
o.a = a;
delete o.a;

// 删除对属性的引用，而非删除属性对象
console.log(a.x)

function C() {this.x=10}
C.prototype.x =20;
var o = new C();
console.log(o.x)
delete o.x;

console.log(o.x)

var x=36;
delete x;

console.log(x)

y=12;
delete y;

console.log(y)

function foo() { return 42; }
delete foo;
foo();  // 42