// import project modules
import themeController from './themeController.js';
import todoController from './todoController.js';
import Sortable from './Sortable.js';

export default function start() {
  themeController();
  const controller = new todoController();
  controller.run();
  new Sortable(document.querySelector('.todo-list'), {
    animation: 300,
  });
}
