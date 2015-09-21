# 正则表达示代码片段

###Trim

**方法一**：通过分别替换左右的空白来实现Trim方法
```js
function trim(str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
```

**方法二**：利用候选操作符连接两个正则，注意末尾要加g
```js
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
```

**方法三**：把符合要求的部分提取出来，放到一个空字符串中，效率较差
```js
function trim(str) {
  return str.replace(/^\s*(\S*(\s+\S+)*)\s*$/, '$1');
}
```
