// project HTML page images
import cross from '../images/icon-cross.png';
// project style file
import '../styles.css';

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

  const themeChanger = document.querySelector('.themeChanger');
  themeChanger.addEventListener('click', (e) => {
    const element = e.target;

    if (element.classList.contains('night')) {
      element.classList.remove('night');
      element.src = './images/icon-moon.png';
    } else {
      element.classList.add('night');
      element.src = './images/icon-sun.png';
    }
  });
}
