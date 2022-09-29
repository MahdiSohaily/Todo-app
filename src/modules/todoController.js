import Todo from './Todo.js';
export default class todoController {
  static formListener() {
    const form = document.querySelector('.form');
    const input = document.querySelector('.todo-input');
    form.addEventListener('submit', () => {
      console.log('hello');
      const value = input.value;
      const todo = new Todo(value);
      console.log(todo);
    });
  }
}
