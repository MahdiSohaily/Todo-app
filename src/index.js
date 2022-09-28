// project style file
import './styles.css';
// import project modules
import mainEvents from './modules/mainEvents.js';
import appendTOdo from './modules/Todo.js';

const container = document.querySelector('.todo-list');
container.innerHTML = appendTOdo();
mainEvents();
