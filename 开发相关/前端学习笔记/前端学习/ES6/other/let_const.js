/*
 * 变量声明
 */

/*  let只作用在当前块级作用域内  */

// 块级作用域
{
    // ...
}

/*--------------开始---------------*/

// {
//      let a = 1;
//      var b = 2;
// }
// console.log(a); // a is not defined
// console.log(b); // 2

/*--------------结束---------------*/
/*--------------开始---------------*/

// {
//     let a = 1; 
//    {
//         let b = 2;
//         console.log(a); // 1
//     }
//     console.log(b); b is not defined

// }

/*--------------结束---------------*/
/*--------------开始---------------*/

// if (true) {
//     let a = 1;
//     var b = 2;
// }
// console.log(a); // a is not defined
// console.log(b); // 2

/*--------------结束---------------*/
/*--------------开始---------------*/

// let
// for(let i = 0; i < 3; i++) {
//     console.log(i); // 0 1 2
// }
//     console.log(i); // i is not defined

// var 
// for(var i = 0; i < 3; i++) {
//     console.log(i); // 0 1 2
// }
// console.log(i); // 3

/*--------------结束---------------*/
/*--------------开始---------------*/

// 使用let或者const声明的变量 不能再被重新声明
// var a = "a";
// var a = "b";
// var a; // 不会被替换成undefined
// console.log(a); // b

// let b = "b";
// let b = "a"; // Identifier 'b' has already been declared

/*--------------结束---------------*/
/*--------------开始---------------*/

// var 变量提升
// console.log(d); // undefined
// var d = "d";
// // 编译=>
//     var d;
//     console.log(d);
//     d = "d"

// let 不存在变量提升
// console.log(d);
// let d = "d"; // d is not defined

/*--------------结束---------------*/
/*--------------开始---------------*/

// // 暂存死区
// var monkey = "老大";
// {
//     console.log(monkey); // 老大
//     var monkey = "新老大";
// }
// console.log(monkey); // 新老大

// let monkey = "老大";
// {
//     console.log(monkey); // monkey is not defined
//     let monkey = "新老大";
// }
// console.log(monkey); // 新老大

/*--------------结束---------------*/
/*--------------开始---------------*/

// var i = 0;
// for (i = 1; i <= 10; i++) {
//     (function (index) {
//         var btn = document.createElement('button');
//         btn.innerText = index;
//         btn.onclick = function () {
//             console.log(index);
//         }
//         document.body.appendChild(btn);
//     })(i)
// }

/*--------------结束---------------*/
/*--------------开始---------------*/

// let a;
// var b;
// const d; //  Missing initializer in const declaration
// const c = "常量，声明必须赋值";
// let e = "e";
// var f = "变量";

/*--------------结束---------------*/
/*--------------开始---------------*/

// const a = "123";
// a = "234"; // Assignment to constant variable.

/*--------------结束---------------*/
/*--------------开始---------------*/

// 常量为引用类型的时候 可以修改该引用类型

// const person = {
//     age: 14,
//     name: 'xiao'
// }
// console.log(person); // { age: 14, name: 'xiao' }
// person.age = 30;
// console.log(person); // { age: 30, name: 'xiao' }
// person = {}; // Assignment to constant variable.

/*--------------结束---------------*/
/*--------------开始---------------*/

// const arr = [];
// arr.push(1);
// console.log(arr); // [ 1 ]
// arr = [] // Assignment to constant variable.

/*--------------结束---------------*/
/*--------------开始---------------*/

/*  防止常量为引用类型的时候能被修改的情况 */
// Object.freeze()

// const person = {
//     age: 14,
//     name: 'xiao'
// };
// // 禁止常量扩展和被修改-开始
// Object.freeze(person); 
// // 禁止常量扩展和被修改-结束
// console.log(person); // { age: 14, name: 'xiao' }
// person.age = 30;
// console.log(person); // { age: 14, name: 'xiao' }

/*--------------结束---------------*/
/*--------------开始---------------*/

// es6之前声明常量

// var DEVICE = {};
// Object.defineProperty(DEVICE, 'NAME', {
//     value: 'iPhoneX',
//     writable: false, // 只读
// })
// Object.seal(DEVICE); // 不可以再添加变量

// // 也可以直接加到window上
// Object.defineProperty(window, 'NAME', {
//     value: 'iPhoneX',
//     writable: false, // 只读
// })


/* 封装变量方法 */
// 1、遍历属性和方法
// 2、修改遍历到额属性的描述
// 3、Object.seal 
/* Object.defineProperty(Object, 'freezePolyfill', {
    value: function (obj) {
        var i;
        for (i in obj) {
            // hasOwnProperty属性是否自身的，原型链上的过滤掉
            if (obj.hasOwnProperty(i)) {
                Object.defineProperty(obj, i, {
                    writable: false
                });
            };
        };
        Object.seal(obj);
    }
});

const person = {
    age: 30,
    name: 'person',
    obj: {
        a: 1
    }
};
Object.freezePolyfill(person); */