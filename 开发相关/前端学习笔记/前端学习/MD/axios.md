#axios

##### 全局引入

main.js

```
import axios from 'axios'

Vue.prototype.axios = axios
```

##### 请求本地 json 文件

json 文件一定放在 static 文件夹中（src 外层的 static）
