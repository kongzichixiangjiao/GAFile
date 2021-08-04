/*
 * @Author: houjianan 
 * @Date: 2020-11-26 20:41:26 
 * @Last Modified by: hjn
 * @Last Modified time: 2020-11-29 10:15:24
 */

/* 模板字符串 */

// `abcdef-gddf ÎÍ`;

{
    // const xm = {
    //     name: 'xiaoming',
    //     age: 30,
    //     say1: function () {
    //         console.log('我叫' + this.name + ', 我今年' + this.age + '岁');
    //     },
    //     say2: function () {
    //         console.log(`我叫${`Mr.${this.name}`}, 我今年${this.age}岁`);
    //     }
    // }
    // xm.say1();
    // xm.say2();
}

/* 模板字符串示例 */
/*
{
    const getImoocCourseList = function () {
        // ajax
        return {
            status: true,
            msg: '获取成功',
            data: [{
                id: 1,
                title: 'Vue 入门',
                date: 'xxxx-01-09'
            }, {
                id: 2,
                title: 'ES6 入门',
                date: 'xxxx-01-10'
            }, {
                id: 3,
                title: 'React入门',
                date: 'xxxx-01-11'
            }]
        }
    };
    
    const {
        data: listData,
        status,
        msg
    } = getImoocCourseList();
    
    if (status) {
        let arr = [];
        listData.forEach(function ({
            date,
            title
        }) {
            // arr.push(
            // '<li> \
            //     <span>' + title + '</span> \
            //     <span>' + date + '</span> \
            // </li>'
            // );
            arr.push(
                `
                <li>
                    <span>${ `课程：${title}` }</span>
                    <span>${ `时间：${date}` }</span>
                </li>
                `
            )
        });
        let ul = document.createElement('ul');
        ul.innerHTML = arr.join('');
        document.body.appendChild(ul);
    } else {
        alert(msg);
    }
}
*/

/* 补全函数：padStart padEnd */
{
    // let str = '-补全-';
    // let str1 = str.padStart(8, 'mooc'); // mmooc-补全-
    // console.log(str1);

    // let str2 = str.padEnd(8, 'mooc'); // -补全-mooc
    // console.log(str2);
}


/* repeat */
{
    // let s = 'hjn'.repeat(3);
    // console.log(s); // hjnhjnhjn


    // function _repeat(str, num) {
    //     return new Array(num + 1).join(str);
    // }
    // console.log(_repeat('h', 3)); // hhh
}

/* startsWith endsWith // 开头是什么 结尾是什么 */
{
    // const str = 'B promise is a promise';
    // console.log(str.startsWith('A')); // false
    // console.log(str.startsWith('B')); // true

    // console.log(str.endsWith('e')); // true
    // console.log(str.endsWith('z')); // false 
}

/* includes */
{
    // const str = 'A promise is a promise';
    // // if (str.indexOf('promise') !== -1) {
    // if (~str.indexOf('promise')) {
    //     console.log('存在'); // 存在
    // }

    // if (str.includes('a promise')) {
    //     console.log('存在'); // 存在
    // }
}

/* 遍历字符串 */
{
    // let str = 'PROMISE';

    // // for循环
    // for (var i = 0, len = str.length; i < len; i++) {
    //     // console.log(str[i]);
    //     // console.log(str.charAt(i));
    // }

    // // 转成数组后遍历 4种方法
    // // var oStr = Array.prototype.slice.call(str);
    // // var oStr = str.split('');
    // // const oStr = [...str];
    // const [...oStr] = str;
    // console.log(oStr); // [ 'P', 'R', 'O', 'M', 'I', 'S', 'E' ]

    // oStr.forEach(function (s) {
    //     // console.log(s);
    // });
}

/* 字符串遍历示例 及 for-of的使用 */
{
    // const map = {
    //     A: '100',
    //     B: '99',
    //     C: '98',
    //     D: '97',
    //     E: '96',
    //     F: '95',
    //     G: '94',
    //     H: '93',
    //     I: '92',
    //     J: '91',
    //     K: '90',
    //     L: '89',
    //     M: '88',
    //     N: '87',
    //     O: '86',
    //     P: '85',
    //     Q: '84',
    //     R: '83',
    //     S: '82',
    //     T: '81',
    //     U: '80',
    //     V: '79',
    //     W: '78',
    //     X: '77',
    //     Y: '76',
    //     Z: '75'
    // };
    // const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // oStr.forEach(function (word, index) {
    //     if (words.includes(word)) {
    //         oStr[index] = map[word];
    //     }
    // })
    // console.log(oStr.join(' ')); // 85 83 86 88 92 82 96


    // // for-of遍历字符串
    // for (let word of str) {
    //     console.log(word);
    // }

    // let newString = ''
    // for (let word of str) {
    //     if (words.includes(word)) {
    //         newString += map[word]
    //     }
    // }
    // console.log(newString); // 85838688928296
}


/* unicode */
{
    // console.log('\u{1f435}');

    // // codePointAt

    // console.log('🐵'.codePointAt(0).toString(16)); // 1f435

    // // at
    // // console.log('🐵abc'.at(0));  // chrom不支持ES6 at语法 可以通过编译器编译成ES5 SE3
}


/* 正则扩展(u, y修饰符) */

{
    // const reg1 = /^a/g;
    // const reg2 = new RegExp('^a', 'g');
    // const reg3 = new RegExp(/^a/g);
    // console.log('abcaa'.match(reg1));
    // console.log('babcca'.match(reg1));

    // const reg4 = new RegExp(/^a/giuy, 'ig'); // es6 'ig'都会把giuy替换

    // // uy 修饰符

    // // u： 按unicode匹配 不加u 直接按字符串匹配了
    // console.log(/^\ud83d/.test('\ud83d\udc36')); // true 
    // console.log(/^\ud83d/u.test('\ud83d\udc36')); // false 
    // console.log(/^\ud83d/u.test('\ud83d')); // true 

    // // y：粘连修饰符 : 连续匹配到一样的字符串，中间没有分割
    // const r1 = /hjn/g;
    // const r2 = /hjn/y;
    // console.log(r1.exec('hjnhjn-hjn')); // [ 'hjn', index: 0, input: 'hjnhjn-hjn', groups: undefined ]
    // console.log(r1.exec('hjnhjn-hjn')); // [ 'hjn', index: 3, input: 'hjnhjn-hjn', groups: undefined ]
    // console.log(r1.exec('hjnhjn-hjn')); // [ 'hjn', index: 7, input: 'hjnhjn-hjn', groups: undefined ]
    // console.log(r1.exec('hjnhjn-hjn')); // null
    // console.log("--------");

    // console.log(r2.exec('hjnhjn-hjn')); // [ 'hjn', index: 0, input: 'hjnhjn-hjn', groups: undefined ]
    // console.log(r2.exec('hjnhjn-hjn')); // [ 'hjn', index: 3, input: 'hjnhjn-hjn', groups: undefined ]
    // console.log(r2.exec('hjnhjn-hjn')); // null
}

/* 进制表示法 */
{
    // 0o 0O  octonary  8进制
    // 0b 0B  binary  2进制
}

/* Number.parseInt Number.parseFloat */
{
    // // Number.parseInt Number.parseFloat

    // // console.log(window.parseInt('1.23')); // es6之前
    // console.log(parseFloat('1.23')); // es6之前

    // console.log(Number.parseInt('1.23')); // es6 parseInt方法挂载到Number上
    // console.log(Number.parseFloat('1.23')); // es6
}

/* Number.isNaN  */
{
    // console.log(Number.isNaN(NaN)); // true
    // console.log(Number.isNaN(-NaN)) // true
    // console.log(Number.isNaN(1)); // false
    // console.log(Number.isNaN(true)); // false

    // // 自己实现
    // console.log(NaN === NaN); // false

    // function isNaN(value) {
    //     return value != value;
    // }
    // console.log(isNaN(NaN)); // true
    // console.log(isNaN(-NaN)); // true
    // console.log(isNaN(1)); // false
    // console.log(isNaN(true)); // false
}

/* Number.isFinite 是否是有限，只针对数字 */
{
    // console.log(Number.isFinite(Infinity)); // false
    // console.log(Number.isFinite(2 / 0)); // false
    // console.log(Number.isFinite(123)); // true
    // console.log(Number.isFinite('123')); // false
    // console.log(Number.isFinite(true)); // false
    // console.log(Number.isFinite(NaN)); // false
}

/* Number.isSafeInteger() 是否在范围内 */
{
    // // 整数的精确范围： Number.MIN_SAFE_INTEGER 至 Number.MAX_SAFE_INTEGER
    // console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
    // console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

    // console.log(Number.isSafeInteger(123)); // true
    // console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)); // true
    // console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
    // console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false 
}

/* 幂运算 (右结合) */
{
    // console.log(2 ** 2); // 4 
    // console.log(2 ** 3); // 8
    // console.log(2 ** 2 ** 0); // 2 右结合
    // console.log((2 ** 2) ** 0); // 1
}

/* 默认参数 */
{
    // // es6之前
    // function add1(a, b) {
    //     b = b | 9;
    //     return a + b;
    // }
    // // es6
    // function add(a, b = 9) {
    //     return a + b;
    // }
    // console.log(add(1));

    // // 默认值写前写后都可以
    // function Person({
    //     name,
    //     age = 30
    // } = {
    //     name: 'hjn'
    // }) {
    //     console.log(name, age); // hjn 30
    // }
    // Person();
}


/* 剩余参数 ... */
{
    // function sum1() {
    //     console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    //     console.log(Array.prototype.slice.call(arguments)); // [ 1, 2, 3, 4 ]
    //     console.log(...arguments); // 1 2 3 4
    //     console.log([...arguments]); // [ 1, 2, 3, 4 ]
    //     let [...args] = arguments;
    //     console.log(args); // [ 1, 2, 3, 4 ]
    // }

    // function sum(...args) {
    //     console.log(args); // [ 1, 2, 3, 4 ]
    //     return args.reduce(function (a, b) {
    //         return a + b;
    //     }, 1) // 从1开始计算 1 + 1 + 2 + 3 + 4
    // }

    // console.log(sum(1, 2, 3, 4)); // 11


    // // // Rest parameter must be last formal parameter
    // // // 剩余参数必须是最后一个
    // // function op(type, ...nums, a) {

    // // }
}


/* 箭头函数 */
{
    // const add1 = (a, b) => a + b;
    // const add2 = function (a, b) {
    //     return a + b;
    // }
    // const add3 = (a, b) => {
    //     console.log(a);
    //     return a + b;
    // }

    // console.log(add1(2, 2));
    // console.log(add2(2, 2));

    // // arr 是一个参数 一个参数可以不用括号
    // // void 无返回值
    // // const pop = (arr) => void arr.pop();
    // const pop = arr => void arr.pop();
    // console.log(pop([1, 2, 3]));

    // // 箭头函数中没有arugmens 需要使用扩展运算符...
    // const log = (...args) => {
    //     // console.log(arguments);
    //     console.log(args); // [ 1, 2, 3 ]

    // }
    // log(1, 2, 3);

    // // 箭头函数和原始函数 this的区别
    // const xm = {
    //     name: 'xiaoming',
    //     say1: function () {
    //         console.log(this); // 当前xm
    //     },
    //     say2: () => {
    //         console.log(this); // {}
    //     }
    // }
    // xm.say1();
    // xm.say2();

    // const person = {
    //     name: 'xiaoming',
    //     age: null,
    //     getAge: function () {
    //         // let _this = this;
    //         // setTimeout(function () {
    //         //     _this.age = 30;
    //         //     console.log(this); // setTimeout的this
    //         // }, 1000)

    //         setTimeout(() => {
    //             this.age = 30;
    //             console.log(this); // person的this
    //         }, 1000);
    //     }
    // }
    // person.getAge();
}

/* 简洁表示法 */
{
    // const getUserInfo = (id = 1) => {
    //     const name = 'xm'
    //     const age = 10;

    //     // return {
    //     //     name: name,
    //     //     age: age,
    //     //     say: function () {
    //     //         console.log(this.name + this.age);

    //     //     }
    //     // };

    //     return {
    //         name,
    //         age,
    //         say() {
    //             console.log(this.name + this.age);

    //         }
    //     };
    // };

    // const xm = getUserInfo();
}

/* 属性名表达式 */
{
    // const obj = {
    //     a: 1,
    //     $abc: 2,
    //     'fffff': 3,
    //     'afaf^%^@^&': 4,
    // }
    // console.log(obj.a); // 1
    // console.log(obj.$abc); // 2
    // console.log(obj.fffff); // 3
    // console.log(obj['afaf^%^@^&']); // 4

    // const key = 'age';
    // const xm = {
    //     name: 'xm',
    //     [`${key}001`]: 30
    // };

    // console.log(xm.name); // xm
    // console.log(xm[`${key}001`]); // 30    
}

/* 复制对象-浅拷贝 合并对象-浅拷贝 */
/* 
{
    const obj1 = {
        a: 1,
        b: 2,
        d: {
            aa: 1,
            bb: 2
        }
    };
    const obj2 = {
        c: 3,
        a: 9
    };

    // 复制对象
    const cObj1 = {
        ...obj1
    };

    console.log(cObj1.d.aa); // 1

    cObj1.d.aa = 999;

    console.log(cObj1.d.aa); // 999
    console.log(obj1.d.aa); // 999

    // 合并对象
    const cObj = {
        ...obj1,
        ...obj2
    }

    // a: 9 后面覆盖前面
    console.log(cObj); // { a: 9, b: 2, d: { aa: 999, bb: 2 }, c: 3 }

}
 */


/* Object新方法 */
/* 
{
    // is
    console.log(Object.is(+0, -0)); // false
    console.log(+0 === -0); // true
    console.log(Object.is(NaN, NaN)); // true
    console.log(NaN === NaN); // false
    console.log(Object.is(true, false)); // false
    console.log(Object.is(true, true)); // true

    // assign 合并对象-浅拷贝，后面替换前面
    const obj = Object.assign({
        a: 1
    }, {
        b: 2
    }, {
        c: 3
    }, {
        d: 4,
        e: 5
    });
    console.log(obj); // { a: 1, b: 2, c: 3, d: 4, e: 5 }

    // keys values entries
    console.log(Object.keys(obj)); // [ 'a', 'b', 'c', 'd', 'e' ]
    console.log(Object.values(obj)); // [ 1, 2, 3, 4, 5 ]
    console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ], [ 'e', 5 ] ]
    console.log(Object.entries(obj)[0]); // [ 'a', 1 ]
    console.log(Object.entries(obj)[0][0]); // a

    for (const [k, v] of Object.entries(obj)) {
        console.log(k, v);
        // 
        //     a 1
        //     b 2
        //     c 3
        //     d 4
        //     e 5
        // 
    }
}
 */


/* __proto__ 不建议使用 */
/* 
{
    console.log({
        a: 1
    }); // __proto__: Object

    const obj1 = {
        a: 1
    };
    const obj2 = {
        b: 1
    }

    const obj = Object.create(obj1);
    console.log(obj.__proto__); // { a: 1 }
    Object.setPrototypeOf(obj, obj2); // obj的原型对象被改成obj2
    console.log(obj.__proto__); // { b: 1 }

    // getPrototypeOf 等价 __proto__
    console.log(Object.getPrototypeOf(obj)); // { b: 1 }
}
 */

/* super */
/* 
{
    const obj = {
        name: 'xm'
    };
    const cObj = {
        name: 'xhhhhhh',
        say() {
            console.log(`My name is ${super.name}`); // My name is xm
            console.log(`My name is ${this.name}`); // My name is xhhhhhh
        }
    }

    Object.setPrototypeOf(cObj, obj); // cObj原型对象被改成obj
    cObj.say();
}
 */

/* 数组扩展 */
{
    // const user = ['xm', 30, ['吃饭', '大游戏'], '单身'];

    // function say(name, age, hobby, desc) {
    //     console.log(name, age, hobby, desc);
    // }

    // // 以前写法
    // // say(user[0], user[1], user[2], user[3]);

    // // 以前写法 apply
    // say.apply(null, user);

    // // 现在写法
    // say(...user);

    // // 数组中最大值
    // const arr = [1, 2, 99, 3, 10];
    // console.log(Math.max(...arr)); // 99
    // console.log(Math.max.apply(null, arr)); // 99


    // const arr1 = [1, 2, 3, 4];
    // const arr2 = [88, 99];
    // const arr3 = [2.2, '123', false];

    // const cArr1 = [1, 2, 3, ...arr3];
    // const cArr2 = [...arr1];
    // const [...cArr3] = [...arr2];
    // const cArr4 = [...arr1, ...arr2, ...arr3];

    // console.log(cArr1, cArr2, cArr3, cArr4); 
    // // [ 1, 2, 3, 2.2, '123', false ] [ 1, 2, 3, 4 ] [ 88, 99 ] [ 1, 2, 3, 4, 88, 99, 2.2, '123', false ]

}
/* 生成器函数 */
{
    // function* g() {
    //     console.log('1、' + Date());
    //     yield '第一步数据';
    //     console.log('2、' + Date());
    //     yield '第2步数据';
    // }

    // console.log([...g()]); // [ '第一步数据', '第2步数据' ]

    // const gg = g();
    // gg.next();
    // setTimeout(() => {
    //     gg.next();
    // }, 1000);

}

/* Set */
{
    // let set = new Set([1, 2, 3, 2, 2, 3]);
    // console.log(set); // Set { 1, 2, 3 }

    // console.log([...set]); // [ 1, 2, 3 ]
}

/* Array的新方法 */
/* {
    // from 对象的key必须是数值
    const obj = {
        0: 1,
        1: 'hjn',
        2: false,
        length: 3
    };
    console.log(Array.from(obj)); // [ 1, 'hjn', false ]

    console.log(Array.from(obj, item => {
        console.log('Array.from的回调函数');
        return item + "======";
    })); // [ '1======', 'hjn======', 'false======' ]

    // Array.prototype.slice.call();
    // [].slice.call();
    // [...];

    // of 返回数组
    console.log(Array.of(1, 2, '123', false)); // [ 1, 2, '123', false ]

    // fill 填充数组  fill(被填充的内容, 起始位置, 结束位置)
    let arr = new Array(10);
    console.log(arr); // [ <10 empty items> ]
    let arr1 = new Array(10).fill(0);
    console.log(arr1); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
    let arr2 = [1, 2, 3].fill(0);
    console.log(arr2); // [ 0, 0, 0 ]

    let arr3 = [1, 2, 3].fill(0, 0, 1); // fill(被填充的内容, 起始位置, 结束位置)
    console.log(arr3); // [ 0, 2, 3 ]


    // includes 
    var arr6 = [1, 2, 3, 4, 5];
    console.log(arr6.includes(1)); // true
    console.log(arr6.includes(55)); // false

    // keys 
    console.log(arr6.keys()); // Object [Array Iterator] {}
    for (const item of arr6.keys()) {
        console.log(item); // 0 1 2 3 4
    }

    console.log('---values---');

    // values 
    for (const item of arr6.values()) {
        console.log(item); // 1 2 3 4 5 
    }

    // entries 
    for (const item of arr6.entries()) {
        console.log(item);
            // [ 0, 1 ]
            // [ 1, 2 ]
            // [ 2, 3 ]
            // [ 3, 4 ]
            // [ 4, 5 ]
        
    }
    for (const [i, v] of arr6.entries()) {
        console.log(i, v);
            // 0 1
            // 1 2
            // 2 3
            // 3 4
            // 4 5
        
    }

    // find 根据条件（回调函数）按顺序遍历数组 返回true时 就返回当前遍历的值，结束遍历
    const res = [1, 7, 6, 3, 2].find(function (v, i, arr) {
        console.log(v, i, arr);
        
        // 1 0 [ 1, 7, 6, 3, 2 ]
        // 7 1 [ 1, 7, 6, 3, 2 ]
        // 6 2 [ 1, 7, 6, 3, 2 ]
        
        return v % 2 === 0;
    });
    console.log(res); // 6

    // findIndex 同find findIndex返回的是下标
    const res1 = [1, 7, 6, 3, 2].findIndex(function (v, i, arr) {
        console.log(v, i, arr);
        
        // 1 0 [ 1, 7, 6, 3, 2 ]
        // 7 1 [ 1, 7, 6, 3, 2 ]
        // 6 2 [ 1, 7, 6, 3, 2 ]
        
        return v % 2 === 0;
    });
    console.log(res1); // 2
}
*/
