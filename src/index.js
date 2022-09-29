// import project modules
import themeController from './modules/themeController.js';
import todoController from './modules/todoController.js';
themeController();
const controller = new todoController();
localStorage.removeItem('todos')