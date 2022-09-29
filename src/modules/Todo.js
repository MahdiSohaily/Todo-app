export default class Todo {
  //constructor function to assign the todo properties
  constructor(description, completed = false) {
    this.description = description;
    this.index = this.getIndex() + 1;
    this.completed = completed;
  }

  // function to get the array length from local storage
  getIndex() {
    let items = JSON.parse(localStorage.getItem('todos'));
    return items ? items.length : 0;
  }

  // function to add new todo to the local storage
  addTodo() {
    let dataStored = [];
    let todos = [];
    if (localStorage.getItem('todos')) {
      dataStored = localStorage.getItem('todos');
      todos = JSON.parse(dataStored);
    }
    todos.push(this);
    this.updateLocalStorage(todos);
  }

  // function to get all the todo items stored in the local storage
  getTodo(state = 'all') {
    let todos = 0;
    let dataStored = localStorage.getItem('todos');
    if (dataStored && state === 'all') {
      todos = JSON.parse(dataStored);
    } else if (dataStored) {
      let data = JSON.parse(dataStored);
      todos = data.filter(this.getPartOfData(state));
    }
    return todos;
  }

  getPartOfData(part) {
    if (part === 'active') {
      return function (element) {
        if ((element.completed === false)) {
          return element;
        }
      };
    } else {
      return function (element) {
        if ((element.completed === true)) {
          return element;
        }
      };
    }
  }

  // function to delete an specific item from local storage based on it's ID
  deleteTodo(index) {
    const toDos = this.getTodo();
    let data = toDos.filter(this.cleanData(index));
    let update = data.map(this.updateID(index));
    this.updateLocalStorage(update);
  }

  // function to filter existing data from the one intended to be deleted
  cleanData(index) {
    return function (element) {
      return element.index != index;
    };
  }

  // function to update the rest of remaining elements ID after deleting one
  updateID(index) {
    return function (element) {
      if (element.index > index) {
        element.index -= 1;
      }
      return element;
    };
  }

  // function to mark a todo as a complete
  markComplete(index, completed) {
    const toDos = this.getTodo();
    let update = toDos.map(this.updateStatus(index, completed));
    this.updateLocalStorage(update);
  }

  updateStatus(index, operation) {
    return function (element) {
      if (element.index == index) {
        element.completed = operation;
      }
      return element;
    };
  }

  // function to update local storage with new data
  updateLocalStorage(data) {
    localStorage.setItem('todos', JSON.stringify(data));
  }
}
