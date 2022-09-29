export default class Todo {
  constructor(description, completed = false) {
    this.description = description;
    this.index = this.getIndex() + 1;
    this.completed = completed;
  }

  getIndex() {
    let items = JSON.parse(localStorage.getItem('todos'));
    return items ? items.length : 0;
  }

  addTodo() {
    let dataStored = [];
    let todos = [];
    if (localStorage.getItem('todos')) {
      dataStored = localStorage.getItem('todos');
      todos = JSON.parse(dataStored);
    }
    todos.push(this);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  getTodo() {
    let todos = 0;
    if (this.getIndex()) {
      let dataStored = localStorage.getItem('todos');
      todos = JSON.parse(dataStored);
    }
    return todos;
  }
}
