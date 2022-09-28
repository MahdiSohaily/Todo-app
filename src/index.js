import _ from 'lodash';
// project style file
import './styles.css';
// import project modules
import mainEvent from './modules/mainEvents';
import appendTOdo from './modules/Todo';

const container = document.querySelector('.todo-list');
container.innerHTML = appendTOdo();
mainEvent();
