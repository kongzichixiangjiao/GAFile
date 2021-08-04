/*
 * @Author: houjianan 
 * @Date: 2020-11-25 18:42:39 
 * @Last Modified by: hjn
 * @Last Modified time: 2020-11-29 10:34:10
 */

/* ****** */
/* 解构赋值 */
/* ****** */



/* 数组的解构赋值---开始 */
// const arr = [1, 2, 3, 5];
// let [a, b, c, d] = arr;

// console.log(a) // 1
// console.log(c); // 3

// const arr = ['a', 'b', ['c', 'd', ['e', 'f', 'g']]];

// // const [a, b] = arr; // 只拿a, b 
// const [, b] = arr; // 只拿b 
// const [, , [, d]] = arr // 只拿d
// const [, , [, , [, f]]] = arr // 只拿f
// console.log(b); // b 
// console.log(d); // d
// console.log(f); // f

/* 扩展运算符 */
// const arr1 = [1, 2, 3];
// const arr2 = ['a', 'b'];
// const arr3 = ['zz', 1];
// const arr4 = [...arr1, ...arr2, ...arr3];
// console.log(arr4); // [ 1, 2, 3, 'a', 'b', 'zz', 1 ]

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// console.log(c); // [ 3, 4, 5 ]

// const [a1, b1, ...c1, d1] = arr; // Rest element must be last element


/* 默认值 */
// const arr = [1, undefined, undefined];
// const [a, b = 2, c, d = 'abc'] = arr;
// console.log(b); // 2
// console.log(c); // undefined
// console.log(d); // 'abc'

/* 交换变量 */
// let a = 2;
// let b = 1;

// // let temp;
// // temp = a;
// // a = b;
// // b = temp;
// // console.log(a); // 1
// // console.log(b); // 2

// // 使用解构赋值交换变量
// [a, b] = [b, a];
// console.log(a); // 1
// console.log(b); // 2


// function getUserInfo(id) {
//     // ..ajax 
//     return [
//         true,
//         {
//             name: 'hjn',
//             gennder: '男',
//             id: id
//         },
//         '请求成功'
//     ];
// };

// // const resData = getUserInfo(010111);

// const [status, data, msg] = getUserInfo(0101111);
// console.log(status); // true
// console.log(data); // { name: 'hjn', gennder: '男', id: 33353 }
// console.log(msg); // 请求成功

/* 数组的解构赋值---结束 */

/* 对象的解构赋值---开始 */

// 对象的解构赋值

// const obj = {
//     name: "hjn",
//     age: '30'
// }

// const {
//     name1,
//     age1
// }
// console.log(name1); // Missing initializer in destructuring declaration
// // 名字 必须 对应
// const {
//     name,
//     age
// } = obj;

// console.log(name); // hjn
// console.log(age); // 30

// const player = {
//     nickname: '演技不咋地',
//     master: '东海龙王',
//     skill: [{
//             skillName: '龙吟',
//             mp: '100',
//             time: 6000
//         },
//         {
//             skillName: '龙卷雨击',
//             mp: '400',
//             time: 3000
//         },
//         {
//             skillName: '龙腾',
//             mp: '900',
//             time: 60000
//         }
//     ]
// }
// const {
//     nickname
// } = player;
// const {
//     master
// } = player;

// console.log(nickname); // 演技不咋地
// console.log(master); // 东海龙王
// const {
//     skill: [, skill2]
// } = player;

// console.log(skill2); // { skillName: '龙卷雨击', mp: '400', time: 3000 }

// const {
//     skill: [, {
//         skillName
//     }, {
//         skillName: skillName2 // 设置新的变量名
//     }]
// } = player;
// console.log(skillName); // 龙卷雨击
// console.log(skillName2); // 龙腾


// // 结合扩展运算符
// const obj = {
//     name: "hjn",
//     age: '30',
//     gender: '男'
// }
// const {
//     age,
//     ...object
// } = obj;

// console.log(age); // /30
// console.log(object); // { name: 'hjn', gender: '男' }

// // 扩展运算符-合并
// const obj1 = {
//     id: 100,
//     state: 2,
//     phone: '13146218617',
//     ...obj
// }

// console.log(obj1);
// /* { id: 100,
//     state: 2,
//     phone: '13146218617',
//     name: 'hjn',
//     age: '30',
//     gender: '男' } */


// 建议写法
// let age3;
// const obj3 = {
//     name: 'hjn',
//     age: '30'
// };

// ({
//     age3
// } = obj); // 不建议这么写
// console.log(ag3);

// let {
//     age3
// } = obj;

// 默认值
let girlfriend = {
    name4: 'hjn',
    age4: undefined
};
let {
    name4 = "改个名字",
        age4 = 29,
        hobby = ['读书', '写代码']
} = girlfriend;
console.log(name4); // 'hjn'
console.log(age4); // 29
console.log(hobby); // [ '读书', '写代码' ]

const {
    name5,
    hobby5: [hobby5_1],
    hobby5
} = {
    name5: "hjnn",
    hobby5: [ '跑步' ]
}
console.log(name5); // hjnn
console.log(hobby5_1); // 跑步
console.log(hobby5); // [ '跑步' ]

// // 使用对象传入乱序的函数参数

// function AJAX({
//     url,
//     data,
//     type = 'get'
// }) {
//     console.log(type) // post
// }

// AJAX({
//     data: {
//         a: 1,
//         b: 2,
//     },
//     url: "path",
//     type: "post"
// });


// // 获取多个函数返回值
// function getUserInfo(uid) {
//     // ...ajax 

//     return {
//         status: true,
//         data: {
//             name: 'hjn'
//         },
//         msg: '请求成功'
//     };
// };
// const {
//     status,
//     data,
//     msg: message
// } = getUserInfo(134);

// console.log(status); // true
// console.log(data); // { name: 'hjn' }
// console.log(message); // 请求成功