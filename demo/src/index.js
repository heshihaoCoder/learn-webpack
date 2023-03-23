import _ from 'lodash';

const { name } = require('./foo');

function component() {
  const element = document.createElement('div');
  let index = 'world';
  console.log(index, name);

  //lodash在当前script中使用import引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
