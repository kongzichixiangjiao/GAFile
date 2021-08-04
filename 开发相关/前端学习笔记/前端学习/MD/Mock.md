[mock 首页](http://rap2.taobao.org)
[mock 规则](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

{
"base": {
"range": "@range(3, 7)",// [3,4,5,6]
"string": "@string(7, 20)", //输出 7-20 个字符长度的字符串
"character": "@character('abcde')",//随机从 abcde 中选一个字母
"float": "@float(60, 100)",//60 到 100 的浮点数
"integer": "@integer(60, 100)",//60 到 100 的整数
"natural": "@natural(60, 100)",//60 到 100 的自然数
"boolean": "@boolean" //boolean 类型 true,false
},

  <!--时间类型-->

"date": {
"date": "@date",//1982-07-20
"time": "@time",// 11:21:39
"datetime": "@datetime",// 1972-12-16 02:04:24
"now": "@now" //当前时间 2018-07-17 18:19:29
},

  <!--图片-->

"image": {
"image": "@image('200x100', '#50B347', '#FFF', 'EasyMock')" // https://dummyimage.com/200x100/50B347/FFF&text=EasyMock 尺寸 背景 文字颜色 提示信息
},

  <!--颜色系列-->

"color": {
"color": "@color", //16 进制颜色值#79e0f2
"hex": "@hex", // #f2e179
"rgb": "@rgb", //rgb(189, 121, 242)
"rgba": "@rgba",//rgba(189, 121, 242, .7)
"hsl": "@hsl" //hsl(136, 82, 71)
},

  <!--文案类-->

"text": {
"paragraph": "@paragraph(1, 3)",// 随机段落
"sentence": "@sentence(3, 5)",// 随机句子
"word": "@word(3, 5)",// 随机 3-5 个字母
"title": "@title(3, 5)",// 随机 3-5 个单词的 title
"cparagraph": "@cparagraph(1, 3)",
"csentence": "@csentence(3, 5)",
"cword": "@cword('零一二三四五六七八九十', 5, 7)",
"ctitle": "@ctitle(3, 5)"
},

  <!--姓名-->

"name": {
"first": "@first",//姓
"last": "@last",//名
"name": "@name",//姓名
"cfirst": "@cfirst",
"clast": "@clast",
"cname": "@cname"
},

  <!--网站-->

"web": {
"url": "@url",//url 地址
"domain": "@domain",//域名
"protocol": "@protocol",//协议
"tld": "@tld",
"email": "@email",//邮箱
"ip": "@ip"//ip 地址
},

  <!--地址-->

"address": {
"region": "@region",//区域
"province": "@province",//省
"city": "@city(true)",//市
"county": "@county(true)",//区 带 true 则携带上级
"zip": "@zip"
},
"helper": {
"capitalize": "@capitalize('hello')",
"upper": "@upper('hello')",//全大写单词
"lower": "@lower('HELLO')",//全小写单词
"pick": "@pick(['a', 'e', 'i', 'o', 'u'])", //随机选择一个字母
"shuffle": "@shuffle(['a', 'e', 'i', 'o', 'u'])" //打乱数组顺序
},
"miscellaneous": {
"id": "@id",//身份证 id
"guid": "@guid",//生成 32 位的随机 id
"increment": "@increment(1)"//自增数，阶度为 1
}
}
