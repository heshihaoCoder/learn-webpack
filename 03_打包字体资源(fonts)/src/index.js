const { name } = require('./foo');
import './index.css';
import '../assets/css/font-awesome.css';

import logo from '../assets/imgs/logo.png';
import scenery from '../assets/imgs/scenery.jpg';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  element.classList.add('foo');

  const myLcon = new Image();
  myLcon.src = logo;

  element.appendChild(myLcon);

  const myScenery = new Image();
  myScenery.src = scenery;

  element.appendChild(myScenery);

  return element;
}

const ele = document.createElement('div');
ele.innerHTML = 'hello world';

document.body.appendChild(ele);
document.body.appendChild(component());
