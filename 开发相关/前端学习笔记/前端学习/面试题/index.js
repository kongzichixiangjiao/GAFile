// var a = 100;
// var b = a;
// a = 100;
// console.log(b); // 100


// var a = { age: 20 };
// var b = a;
// b.age = 21;
// console.log(a.age); // 21


// 引用类型 Object Array function

// typeof undefined // undefined
// typeof 'abk' // string
// typeof 123 // number
// typeof true // boolean
// typeof {} // object
// typeof [] // object
// typeof null // object 
// typeof console.log // function


function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function () {
    console.log(this.name);
}

Person.prototype.eye = "眼睛";

function Student(name, age) {
    Person.apply(this, [name, age])
}

Student.prototype = new Person();

var s = new Student("hjn", 30);
s.eye = "一双眼睛"
console.log(s.eye);
console.log(s.name);
console.log(s.age);



function animal() {
    this.name = "ani";
    this.showName = function () {
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

function demo1() {
    console.log("----demo1-----");
    console.log(arguments.callee);
    // console.log(arguments.callee()); // 死循环
}
demo1();

var x = 1;

function test1212() {
    this.x = 1999; // 改变了 全局变量x
    // x = 12;
    console.log(this.x);
}
test1212();
console.log(x);


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

// s1.walk();



// var Add = {
//     a: 2,
//     add: function (b, c) {
//         console.log(this);

//         return b + c;
//     }
// }

// Add.add(2, 3) // this === Add
// Add.add.call({ c: 3 }, 1, 2) // this === {c:3}

// var add = Add.add;
// add(3, 4); // this === window

// var add1 = Add.add.bind({ d: 4 });
// add(3, 4) // this === {d : 4}

console.log(1);
setTimeout(() => {
    console.log(2);

}, 0);
console.log(3);
// 1 3 2