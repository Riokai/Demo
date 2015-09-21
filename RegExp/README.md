# 正则表达示代码片段
###Trim
**方法一**:通过分别替换左右的空白来实现Trim方法
```js
function trim(str) {
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
```
