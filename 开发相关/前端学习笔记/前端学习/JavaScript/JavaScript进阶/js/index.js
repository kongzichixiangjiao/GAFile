// console.log("instanceof------");
// console.log([] instanceof Array);
// console.log([] instanceof Object);
// console.log({}
// 	instanceof Object);
// console.log({}
// 	instanceof Array);


// console.log("变量的作用域------");
// 1. 变量的生命周期
// 2. 访问到变量

// 全局作用域:
// var name = 'xm';

// function fn(argument) {
// 	var sex = 'male';

// 	function fn2(argument) {
// 		var age = 18;
// 		console.log(age);
// 	}
// 	fn2();
// }
// fn();

// // 块级作用域:js没有块级作用域
// if (true) {
// 	var name = 'xm';
// }
// console.log(name); // 可以访问
// for (var i = 0; i < 10; i++) {

// }
// console.log(i); // 10
// for (;i < 2; i++) {

// }
// console.log(i); // 10


// // 局部作用域:函数作用域
// var name = 'xm';
// function fn(argument) {
// 	var sex = 'male';
// 	console.log(name);
// }
// fn();


// console.log("作用域链-------")
// // 作用域链 过长影响查询速度
// var person = {};
// person.name = 'xm';
// person.sex = 'male';
// var score = 4;

// // with延长作用域链 尽量不要使用with
// with (person) {
// 	name = 'xh';
// 	sex = 'female';
// 	score = 44;
// 	console.log("执行 with");
// }

// console.log(person.name);
// console.log(person.sex);
// console.log(score);


/* JS解析机制 */
/*
JS解析过程
	1、预解析	
		全局
			查找var
			查找function
		局部
			查找var
			查找function
			
	2、逐行读代码解析
*/

// console.log("预解析");
// var name = 'xm';
// var age = 18;
// function fn(argument) {
// 	console.log(name); // undefined
// 	var name = 'xh'; // 方法内没定义name 上面打印 xm
// 	var age = 10;
// }
// fn();

// 预解析
/*
全局作用域:window 
	name = undefined 
	age = undefined
	// 直接将函数拿过来
	function fn(argument) {
		console.log(name); // undefined
		var name = 'xh';
		var age = 10;
	}
局部作用域:fn  
	name = undefined 
	age = undefined
	argument = undefined

预解析: 函数名覆盖相同的常量名
		函数名相同的后面的覆盖前面的函数
		if() for() 中的函数内无法预解析 
*/


// 垃圾回收机制
/*
原理：找出没用的数据，打上标记，释放其内存；周期性执行。
*/
/*
标记无用数据的策略
1、标记清除
	环境中的变量
2、引用计数-循环引用问题
*/

/*
1、自动收集

2、手动收集
*/

// 内存管理
/*
	分配给Web浏览器的内存 < 分配给桌面应用程序
	只保留有用的数据 无用的置为null
*/

/* call 和 apply */
// function add(a, b) {
// 	return a + b;
// }

// var datas = [1, 2];

// console.log(add.call(window, 1, 2));
// console.log(add.apply(window, datas));

// console.log(add(1)); // NaN


// function add1() {
// 	return arguments[0] + arguments[1];
// }

// 原型模式
function test9() {

}
test9.prototype.name = "nam";
test9.prototype.age = "age";
test9.prototype.showInfo = function () {
	console.log("info function")
}
var t1 = new test9();
console.log(t1.name);


function test8() {

}

test8.prototype = {
	color: "red",
	widht: "190px",
	info: function () {
		alert("test8");
	}
}

//混合模式   构造+原型
function blog(name, url, friend) {
	this.name = name;
	this.url = url;
	this.friend = friend;
}
blog.prototype = {
	test: "tes",
	showInfo: function () {
		alert(this.name);
		alert(this.friend);
	}
}

var peo = new blog("张三", "urlurlrurl", "李四");

/* 继承 */

// 原型继承
var Person = function () { };

Person.prototype.name = "";
Person.prototype.say = function () {
	console.log(this.name);
}


var p = new Person();
p.name = "hjn";
p.say();

var Student = function () { }
Student.prototype = p;
Student.prototype.no = "";
Student.prototype.study = function () {
	console.log("学习");
};

console.log("------");
var s = new Student();
s.name = "学生";
s.say();


console.log("----构造函数继承-----");
// 构造函数继承
function parents(name) {
	this.name = name;
	this.say = function () {
		console.log("父类", this.name);
	}
}
function child(name, age) {
	// this.pObj = parents;
	// this.pObj(name);
	// call和apply实现继承
	// parents.call(this, name);
	parents.apply(this, [name]);
	this.age = age;
	this.sayC = function () {
		console.log("子类", this.name, this.age);
	}
}
var p = new parents("zhangdada");
p.say();
var c = new child("lishasha", 20);
c.sayC();
console.log("----构造函数继承-----end");




/* 关键词 */
/*
	1、instanceof：判断变量是否是对象的实例
*/
var arr = new Array();
console.log(arr instanceof Array); // true 

function test121() { }
var obj = new test121();
console.log(obj instanceof Object);

console.log("-------delete--------");
/*
	2、delete 只能删除对象的属性；（删除不了原型链中的属性）
*/
function fun123() {
	this.name = "hjn";
	this.say = function () {
		console.log(this.name);
	}
}

var obj123 = new fun123();
console.log(obj123.name); // hjn
// delete obj123.name;
console.log(obj123.name); // undefined

obj123.say(); // hjn
// delete obj123.say(); 
delete obj123.name;
obj123.say(); // undefined


/*
	3、call apply
*/
function add1(a, b) {
	console.log(a + b);
}

function subs(a, b) {
	console.log(a - b);
}
add1.call(subs, 5, 2); // 7 // 并不是调用subs
// add1.call(已经定义的对象, 5, 2);
add1.apply(subs, [5, 2]); // 7

function animal() {
	this.name = "ani";
	this.showName = function () {
		// 注意this调用showName方法的对象
		console.log(this.name);
	}
}

function cat() {
	this.name = "cat";
}

// 初始化的两个对象就会替换
var an = new animal();
var c = new cat();
an.showName.call(cat, ","); // cat
an.showName.apply(c, []); // cat


/*
	4、callee:返回正在执行的function对象，function内容
*/
function demo1() {
	console.log("----demo1-----");
	console.log(arguments.callee);
	// console.log(arguments.callee()); // 死循环
}
demo1();

var sum = function (n) {
	if (n < 1) { // 终止
		return 1;
	} else {
		return n + arguments.callee(n - 1); // 调用本身
	}
}

console.log(sum(8));

/*
	5、arguments：每个函数都有一个Arguments对象的实例arguments，引用函数的参数（实参）
*/

function test12(a, b, c) {
	console.log(arguments); // [1, 2, 3]
	console.log(arguments[0]); // 1
}
test12(1, 2, 3);


/*
	6、this 
	this函数调用
*/

/*
function test1212() {
	this.x = 1999
	console.log(this.x);
}
test1212();
*/

var x = 1;

function test1212() {
	this.x = 1999; // 改变了 全局变量x
	// x = 12;
}
test1212();
console.log(x);


console.log("---------");

var y = 0;

function testY() {
	console.log(this.y); // apply传入的对象是哪个
}
var o = {};
o.y = 1;
o.m = testY;
o.m.apply(); // 0
o.m.apply(o); // 1


/* 对象冒充 */
function person99(name, age) {
	this.name = name;
	this.age = age;
	this.sayHi = function () {
		console.log("hi");
	}
}

person99.prototype.walk = function () {
	console.log("wakl....");
}

function student99(name, age, grade) {
	this.newMethod = person99; // 冒充person对象，传递特权属性和特权方法给子类（除prototype属性和方法）
	this.newMethod(name, age);
	this.grade = grade
}
var s1 = new student99("zhangdada", 15, 5); // s1是student对象，继承person，拥有person所有属性和方法
// s1继承了person中的特权方法和属性，没有集成共有方法和属性














