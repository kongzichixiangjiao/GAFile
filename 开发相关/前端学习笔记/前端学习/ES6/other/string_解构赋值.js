/*
 * @Author: houjianan 
 * @Date: 2020-11-25 20:32:51 
 * @Last Modified by: houjianan
 * @Last Modified time: 2020-11-25 20:42:38
 */

/* 字符串解构赋值 */

const str = 'But, just like Iterable'
const [a, b, c, ...others] = str;
// console.log(a); // B 
// console.log(b); // u
// console.log(c); // t
// console.log(others); // [ ',', ' ', 'j', 'u', ...]

// 分成数组

const [...strArray] = str;
const strArray1 = str.split('');
// console.log(strArray); // [ 'B', 'u', 't', ..., 'e'];
// console.log(strArray1); // [ 'B', 'u', 't', ..., 'e'];

// 提取属性
const {length, split: split1} = str;
console.log(length); // 23
console.log(split1); // [Function: split]


