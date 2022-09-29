export default class Todo {
  constructor(description, completed = false) {
    this.description = description;
    this.index = this.getIndex();
    this.completed = completed;
  }

  getIndex() {
    let items = localStorage.getItem('todos');
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
}
