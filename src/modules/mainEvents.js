// project HTML page images
import cross from '../images/icon-cross.svg';
import moon from '../images/icon-moon.svg';
// import sun from '../images/icon-sun.svg';

export default function mainEvents() {
  // setting src attribute od every todo item
  const crossIcon = document.querySelectorAll('.cross-icon');
  crossIcon.forEach((element) => {
    element.src = cross;
  });

  // changing todo input element's placeholder value on focus
  const todoInput = document.querySelector('.todo-input');
  todoInput.addEventListener('focus', (e) => {
    e.target.placeholder = 'Currently typing...';
  });

  // changing todo input element's placeholder value on blur
  todoInput.addEventListener('blur', (e) => {
    e.target.placeholder = 'Create a new todo...';
  });


  document.querySelector('.themeChanger').src = moon;
}
