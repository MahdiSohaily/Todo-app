import Todo from './Todo.js';
export default class todoController {
  //
  formListener() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', this.createTodo);
  }

  //   function to create new todo object
  createTodo() {
    const value = document.querySelector('.todo-input').value;
    const todo = new Todo(value);
    todo.addTodo();
  }
}
