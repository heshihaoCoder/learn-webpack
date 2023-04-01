/**
 * 这里的函数可以接受三个参数
 * content  :通过fs阅读出来的内容
 * sourcemap  : 一般不实用
 * meta:   元数据  一般不使用
 */

module.exports = function (content) {
  console.log('我自己loader');
  return content + 123;
};
