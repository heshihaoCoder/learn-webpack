const { name } = require('./foo');
import './index.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  element.classList.add('foo');

  return element;
}

document.body.appendChild(component());
