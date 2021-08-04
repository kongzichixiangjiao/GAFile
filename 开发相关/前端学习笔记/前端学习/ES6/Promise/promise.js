/*
 * @Author: houjianan 
 * @Date: 2020-11-27 12:51:25 
 * @Last Modified by: hjn
 * @Last Modified time: 2020-11-29 10:42:28
 */

function fTest(val) {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve({
                'key': '只能传一个参数',
                'result': "success"
            });
        } else {
            reject('失败回调参数');
        }
    });
};

fTest(false)
    .then((data) => {
        console.log(data);
    }, (error) => {
        console.log(error);
    }).catch(() => {
        console.log("如果上面的then没处理error就会执行这里");
    });

fTest(false)
    .then((data) => {
        console.log(data);
    }).catch(e => {
        console.log("如果上面的then没处理error就会执行这里");
    }).finally(() => {
        console.log("执行finally");
    });

// promise状态 pendding fulfilled rejected

// Promise.all 

function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("第一条数据" + Date());
            resolve('data1')
        }, 1000);
    });
}

function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("第二条数据" + Date());
            resolve('data2')
        }, 2000);
    });
}

// // all 所有请求完成才返回
// let pAll = Promise.all([getData1(), getData2()]);
// pAll.then(arr => {
//     console.log("all--1，2都执行完返回的数据：" + arr + Date());
// });

// // race 只要有其中一个决议为成功或者失败就返回
// let pRace = Promise.race([getData1(), getData2()]);
// pRace.then(arr => {
//     let pRace = Promise.race([getData1(), getData2()]);
//     console.log("race--1，2都执行完返回的数据：" + arr + Date());
// });


let p1 = new Promise((resolve, reject) => {
    resolve('success');
})
let p2 = Promise.resolve('success');

let p3 = new Promise((resolve, reject) => {
    resolve("实例");
})

let p4 = Promise.resolve(p3);
p4.then((data) => {
    console.log(data);
})

// thenable
let obj = {
    then(cb) {
        console.log("thenable-被执行");
        cb("thenable回调")
    },
    oth() {
        console.log("thenable失败");
    }
}

Promise.resolve(obj).then(data => {
    console.log(data);
})

//  同步任务转成异步任务

function createAsyncTask(syncTast) {
    return Promise.resolve(syncTast).then(syncTast => syncTast());
}

createAsyncTask(() => {
    console.log("异步任务执行");
    return "异步执行返回结果"
}).then(res => {
    console.log(res);
})
console.log("同步任务");


// 例子
const loadImg = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            resolve(img);
        }
        img.onerror = (e) => {
            reject(e);
        }
    });
};
const imgs = ['imgurl1', 'imgurl2'];

const promises = imgs.map((src) => {
    return loadImg(src);
});

Promise.all(promises).then((arr) => {
    arr.forEach((img) => {
        document.body.appendChild(img);
    })
});