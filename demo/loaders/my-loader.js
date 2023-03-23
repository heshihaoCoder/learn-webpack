module.exports = function (res) {
  console.log(res, '经过了loader');
  const result = res.replace('world', 'my-loader');
  return result;
};
