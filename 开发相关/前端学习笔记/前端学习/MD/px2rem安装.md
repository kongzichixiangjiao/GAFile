[TOC]

##### lib-flexible

###### 安装

`npm install lib-flexible --save`

###### 引用

在 main.js 中
import 'lib-flexible'

###### lib-flexible 中代码段

```
 if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }

```

##### postcss-px2rem

###### 安装

`npm install postcss-px2rem --save-dev`

###### 配置

```
module.exports = {
    css: {
        loaderOptions: {
          postcss: {
            // 根据设计稿配置
             plugins: [
              require("postcss-px2rem")({
                remUnit: 75
          })
        ]
      }
    }
}
```

##### 如果使用 vant 安装 npm install postcss-px2rem-exclude --save

postcss.config.js 中

```
module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px2rem-exclude": {
            remUnit: 37.5, // 与vant统一
            exclude: /node_modules|folder_name/i
        }
    }
};
```
