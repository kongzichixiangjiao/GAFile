/*
 * @Author: houjianan 
 * @Date: 2020-11-27 18:28:59 
 * @Last Modified by: hjn
 * @Last Modified time: 2020-11-28 22:51:43
 * @Description: 相关描述 
 */

/*
class Car {

    // 构造函数
    // constructor() {
    //     console.log("开始构造");
    // }

    // constructor(...args) {
    //     console.log(args);
    // }

    // static关键字提案了，并没有发布
    static totalCar = 0;  

    total = 10;

    constructor(wheel, color, lenght, width) {
        this.wheel = wheel;
        this.color = color;
        this.lenght = lenght;
        this.width = width;

        this.speed = 0;
        Car.totalCar += 1;
        this.speedUp();
    }

    speedUp() {
        console.log(this.total);
        
        this.speed += 1;
    }

    static run() {
        console.log('run, total: ' + Car.totalCar);
    }
}

new Car();
const car = new Car(4, '#f00', 20, 50);
console.log(car.color);
console.log(car.speed);

Car.run();
*/


/* 类表达式 */
/*
// P只能在内部使用
const Person = class P {
    constructor() {
        P.a = 'a';
        console.log(P); // [Function: P]
        console.log(Person === P); // true
    }
};

// console.log(P); // Uncaught ReferenceError: P is not defined

new Person();
*/

/* setter getter */

// es5中 对象自变量中
/*
const obj = {
    _name: '', // 变量名字不能和set get方法名一样 
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = '姓名:' + val;
    }
}
obj.name = 'hjn';
console.log(obj); // { _name: '姓名:hjn', name: [Getter/Setter] }
*/

/* 
class A {
    _name = '';
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
} 
*/

// es5中 Object.defineProperty 提供set get方法
var obj = {
    _name: ''
};
/* 
Object.defineProperty(obj, 'age', {
    value: 30,
    enumerable: true
});

// 不添加enumerable 不会遍历到age
// console.log(obj); // { _name: '' }

// 添加了enumerable
console.log(obj); // { _name: '', age: 30 } 
*/

/* 
Object.defineProperty(obj, 'name', {
    get: function () {
        return this._name;
    },
    set: function (v) {
        this._name = "姓名：" + v;
    }
});
obj.name = 10;
console.log(obj.name); // 姓名：10

 */
// es6中书写 set get
/* 
class Person {
    constructor() {
        this._name = '';
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = "姓名：" + v;
    }
}

const p = new Person();
p.name = "hjn";
console.log(p._name); // 姓名：hjn
*/

// name属性 返回类的名字
/* 
class ABC {

}
console.log(ABC.name); // ABC

const DADA = class  dada {

}
console.log(DADA.name); // dada
 */

// new.target 不可以直接访问
/* 
class WO {
    constructor() {
        console.log(new.target); // [Function: WO]
    }
}
new WO();

// es5模拟类
function CarES5() {
    console.log(new.target);
    if (new.target !== CarES5) {
        throw Error('必须使用new关键字调用CarES5');
    }
    if (!(this instanceof CarES5)) {
        throw Error('必须使用new关键字调用CarES5');
    }
}

new CarES5(); // [Function: CarES5] 
*/

/* ES5中模拟类 ES6中的class底层还是模拟类 */

/* 
构造函数流程：
1、创建一个空的对象
2、把构造函数的prototype属性 作为空对象的原型
3、this赋值为这个空对象
4、执行函数
5、如果函数没有返回值 则返回this[返回之前那个空对象]
 */
/* 
function Constructor(fn, args) {
    // 1、创建一个空的对象
    // 2、把构造函数的prototype属性 作为空对象的原型
    // Object.create({}); // 创建空对象
    // 以fn.prototype为原型的对象
    var _this = Object.create(fn.prototype);
    // 3、this赋值为这个空对象
    // 4、执行函数
    var res = fn.apply(_this, args); // this在fn中调用 fn中的this就是以fn.prototype为原型的
    // 5、如果函数没有返回值 则返回this[返回之前那个空对象]
    return res ? res : _this;
}

function TEST(name) {
    this.name = name;
}
TEST.prototype.test = function() {
    console.log("测试");
}
var t = Constructor(TEST, ['hjn']);
console.log(t); // TEST { name: 'hjn' }
console.log(t.name); // hjn
t.test();
 */

/* 继承 */
/* 
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    desc() {
        const {
            name,
            age
        } = this;
        console.log(`我叫：${name}, 年龄：${age}`);
    }
    eat() {
        console.log("kangchi kangchi");
    }
}

class Coder extends Human {
    constructor(skill) {
        super("hjn", 30);
        this.skill = skill;
    }
}

const coder = new Coder("HTML");
coder.desc(); // 我叫：hjn, 年龄：30
coder.eat(); // kangchi kangchi
 */


/* 多态 */


/* ES5继承 */
/* 
function Person() {
    this.name = 'hjn'
    this.say = function() {
        console.log("可以");
    }
}
Person.prototype.test = function() {
    console.log("test 方法");
}
function Ci() {
    Person.call(this);
    this.name = "Ci";
}
var ci = new Ci();
ci.say(); // 可以
// ci.test(); // ci.test is not a function 原型上的方法访问不了
 */
/* 
function Person() {
    this.name = 'hjn'
    this.say = function() {
        console.log("可以");
    }
}
Person.prototype.test = function() {
    console.log("test 方法");
}
function Ci() {
    Person.call(this);
    this.name = "Ci";
}

Ci.prototype = new Person(); // 解决 原型上的方法继承不了

var ci = new Ci();
ci.say(); // 可以
ci.test(); // test 方法 
*/