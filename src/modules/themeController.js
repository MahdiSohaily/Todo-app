// project HTML page images
import cross from '../images/icon-cross.png';
// project style file
import '../styles.css';

export default function themeController() {
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

  // get user prefer color theme through the system preferred theme or through local storage
  function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    localStorage.getItem('todo.theme')
      ? (theme = localStorage.getItem('todo.theme'))
      : null;
    return theme;
  }

  // select theme changer button
  const themeChanger = document.querySelector('.themeChanger');

  // add an event listener to change between light and dark mode base on the user click
  themeChanger.addEventListener('click', (e) => {
    const element = e.target;
    let theme = getCurrentTheme();
    if (theme === 'dark') {
      element.src = './images/icon-sun.png';
      theme = 'light';
      localStorage.setItem('todo.theme', `${theme}`);
    } else {
      element.src = './images/icon-moon.png';
      theme = 'dark';
      localStorage.setItem('todo.theme', `${theme}`);
    }
    loadTheme(theme);
  });

  // load the current active theme and change the UI based on that
  function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (theme === 'light') {
      themeChanger.src = './images/icon-moon.png';
    } else {
      themeChanger.src = './images/icon-sun.png';
    }
    root.setAttribute('color-scheme', `${theme}`);
  }

  // add an event lister to the window load to active the user's active theme
  window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
  });
}
