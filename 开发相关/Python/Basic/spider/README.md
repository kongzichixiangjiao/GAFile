#### 库

Rquests库：（爬取网页）小规模，数量小，爬虫速度不敏感
Scrapy库：（爬取网站）中规模，数据规模较大，爬取速度敏感

#### 网络爬虫限制

1. 来源审查：判断User-Agent
   * 检查来访HTTP协议头的User-Agent域，只响应浏览器或友好爬虫的访问。
2. 发布公告：Robots协议
   * 告知所有爬虫网站的爬取策略，要求爬虫遵守

#### Robots协议：

##### 协议地址

http://www.baidu.com/robots.txt
http://www.douban.com/robots.txt
http://www.sina.com.cn/robots.txt

##### 说明

User-agent:*
Disallow:/

##### 使用

网络爬虫：自动或人工识别robots.txt，再进行内容爬取。
约束性：Robots协议是建议但非约束性，网络爬虫可以不遵守，但存在法律风险。
