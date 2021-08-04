##### 创建

###### 初始化 pack.json 文件

`-y`所有需要输入的都使用默认
`npm init -y`
`npm init`

```
{
  "name": "babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
  },
  "dependencies": {}
}
```

###### 安装 babel-cli

`npm install --save-dev babel-cli`

###### 全局安装

`npm i babel-cli -g`

###### 安装 babel-preset-env

`npm install babel-preset-env --save-dev`

##### 配置 package.json

```
{
  "name": "babel",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel entry.js -o index.js -w" // 新增
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0"
  }
}

```

##### 配置 .babelrc 此文件手动创建

```
.babelrc
```

```
{
    "presets": [
        [
            "env",
            {
                "targets": {
                    "browsers": [
                        "last 1 version"
                    ]
                }
            }
        ]
    ]
}
```

##### 运行

```
houjianan@localhost babel % npm run build

> babel@1.0.0 build /Users/houjianan/Documents/GitHub/前端学习/babel
> babel entry.js

const add = (a, b) => a + b;
class Person {
    static A() {
        alert('b');
    }
    constructor() {}
}

houjianan@localhost babel %
```

##### 安装 babel-plugin

`npm i -D babel-plugin-transform-class-properties`

编译 static 静态变量报错，安装 babel-plugin-transform-class-properties

```
SyntaxError: entry.js: Unexpected token (4:10)
  2 | class Person {
  3 |
> 4 | static aa = 1;
    |           ^
  5 | bb = 2;
  6 |
  7 |     static A() {
^C
houjianan@localhost babel % npm i -D babel-plugin-transform-class-properties
```

.babelrc 文件

```
{
    "presets": [
        [
            "env",
            {
                "targets": {
                    "browsers": [
                        "last 1 version"
                    ]
                }
            }
        ]
    ],
    "plugins": ["ransform-class-properties"]
}
```

##### npmjs 官网

[npmjs](https://www.npmjs.com)
搜索 babel-plugin class 查找 babel 插件


