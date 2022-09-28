// project HTML page images
import cross from '../images/icon-cross.svg';
import moon from '../images/icon-moon.svg';
// import sun from '../images/icon-sun.svg';

export default function mainEvents() {
  const crossIcon = document.querySelectorAll('.cross-icon');
  document.querySelector('.themeChanger').src = moon;
  crossIcon.forEach((element) => {
    element.src = cross;
  });

  const todoInput = document.querySelector('.todo-input');
  todoInput.addEventListener('focus', (e) => {
    e.target.placeholder = 'Currently typing...';
  });

  todoInput.addEventListener('blur', (e) => {
    e.target.placeholder = 'Create a new todo...';
  });
}
