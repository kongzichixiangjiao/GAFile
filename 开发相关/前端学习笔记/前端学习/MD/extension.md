[TOC]

##### 随机数
```
randomNum(minNum, maxNum) {
        switch (arguments.length) {
          case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
          case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
            break;
          default:
            return 0;
            break;
        }
      }
```