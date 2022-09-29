// import project modules
import themeController from './themeController.js';
import todoController from './todoController.js';
export default function start() {
  themeController();
  const controller = new todoController();
  controller.run();
}
