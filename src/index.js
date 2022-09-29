// import project modules
import themeController from './modules/themeController.js';
import todoController from './modules/todoController.js';

const container = document.querySelector('.todo-list');
// container.innerHTML = appendTOdo();
themeController();
const controller = new todoController();
controller.formListener();
controller.displayTodo();
controller.enableEdit();
