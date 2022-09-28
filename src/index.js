import _ from 'lodash';
import './styles.css';
import cross from './images/icon-cross.svg';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';

const crossIcon = document.querySelectorAll('.cross-icon');
document.querySelector('.themeChanger').src = moon;
crossIcon.forEach((element) => {
  element.src = cross;
});

const todoinput = document.querySelector('.todo-input');
todoinput.addEventListener('focus',(e) => {
    e.target.placeholder = 'Currently typing...';
})

todoinput.addEventListener('blur',(e) => {
    e.target.placeholder = 'Create a new todo...';
})
