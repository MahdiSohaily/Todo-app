import Todo from './Todo.js';

export default class TodoController {
  constructor() {
    const todo = new Todo();
    const data = todo.getTodo('active');
    this.counter = data.length;
    this.counterContainer = document.querySelector('.counter');
  }

  activeCount() {
    const todo = new Todo();
    const data = todo.getTodo('active');
    return data.length;
  }

  run() {
    this.formListener();
    this.displayTodo();
    this.getPartOfData();
    this.deleteCompleted();
  }

  // function to listen to form submission
  formListener() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', this.createTodo);
  }

  // function to create new todo object
  createTodo() {
    const dataContainer = document.querySelector('.todo-list');
    const input = document.querySelector('.todo-input');
    const todo = new Todo(input.value);
    todo.addTodo();
    input.value = null;
    if (todo.getIndex() <= 1) {
      dataContainer.innerHTML = '';
      this.counter = 0;
    }
    dataContainer.innerHTML += `
        <li class="todo-item px-4" id="${todo.index}" >
            <span class="check change-state"></span>
            <input class="mark-complete" type="checkbox" name="todo" value="${todo.description}">
            <p title="Double click to edit" class="task">${todo.description}</p>
            <img title="Delete item" class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
        </li>`;
    const Control = new TodoController();
    Control.counterContainer.innerText = Control.counter;
    Control.enableEdit();
    Control.enableDelete();
    Control.changeStatus();
  }

  // function to get data from local storage and display it to the main page
  displayTodo(state = 'all') {
    const dataContainer = document.querySelector('.todo-list');
    dataContainer.innerHTML = '';
    const todo = new Todo();
    const data = todo.getTodo(state);
    if (data.length) {
      data.forEach((element) => {
        dataContainer.innerHTML += this.generateElements(element);
      });
      this.counterContainer.innerText = this.counter;
      this.enableEdit();
      this.enableDelete();
      this.changeStatus();
    } else {
      this.counterContainer.innerText = this.counter;
      dataContainer.innerHTML = `
        <li class="todo-item px-4">
            <p class="task">Nothing to show</p>
        </li>`;
    }
  }

  // function to create corresponding HTML elements for local storage data
  generateElements(item) {
    let elements = '';
    if (item.completed) {
      elements = `
            <li class="todo-item px-4 active" id="${item.index}" >
                <span class="check active change-state"></span>
                <input checked class="mark-complete" type="checkbox" name="todo" value="${item.description}"> 
                <p title="Double click to edit" class="task">${item.description}</p>
                <img title="Delete item" class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
            </li>`;
    } else {
      elements = `
            <li class="todo-item px-4" id="${item.index}" >
                <span class="check change-state"></span>
                <input class="mark-complete" type="checkbox" name="todo" value="${item.description}">
                <p title="Double click to edit" class="task">${item.description}</p>
                <img title="Delete item" class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
            </li>`;
    }
    return elements;
  }

  // function to listen for double click to edit intended todo item
  enableEdit() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((element) => {
      element.addEventListener('dblclick', (e) => {
        const element = e.target;
        element.style.display = 'none';
        const input = element.previousElementSibling;
        input.type = 'text';
        const end = input.value.length;
        input.setSelectionRange(end, end);
        input.focus();
      });
    });
    const markComplete = document.querySelectorAll('.mark-complete');
    markComplete.forEach((element) => {
      element.addEventListener('blur', (e) => {
        const input = e.target;
        const index = input.closest('.todo-item').id;
        const newValue = input.value;

        const todo = new Todo();
        todo.updateTodo(index, newValue);

        input.nextElementSibling.style.display = 'block';
        input.type = 'checkbox';
        input.nextElementSibling.innerText = newValue;
      });
    });
  }

  // function to listen for delete icon click to delete intended todo item
  enableDelete() {
    const deleteBtn = document.querySelectorAll('.cross-icon');
    deleteBtn.forEach((element) => {
      element.addEventListener('click', (e) => {
        this.counter -= 1;
        const parent = e.target.closest('.todo-item');
        const todo = new Todo();
        todo.deleteTodo(parent.id);
        parent.remove();
        this.displayTodo();
      });
    });
  }

  // a function to add an event listener to checkbox input to mark todo as completed;
  changeStatus() {
    const todos = document.querySelectorAll('.change-state');
    todos.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        const index = e.target.closest('.todo-item').id;
        if (e.target.classList.contains('active')) {
          e.target.nextElementSibling.checked = true;
          this.markComplete(index, true);
          this.counter = this.activeCount();
          this.counterContainer.innerText = this.counter;
        } else {
          e.target.nextElementSibling.checked = false;
          this.markComplete(index, false);
          this.counter = this.activeCount();
          this.counterContainer.innerText = this.counter;
        }
      });
    });
  }

  // function to mark a todo task as complete
  markComplete(index, completed) {
    const todo = new Todo();
    todo.markComplete(index, completed);
  }

  // function to get a specific part of data
  getPartOfData() {
    const stage = document.querySelectorAll('.stage-item');
    let activeItem = document.querySelector('.stage-item.active');
    stage.forEach((element) => {
      element.addEventListener('click', (e) => {
        const current = e.currentTarget;
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        activeItem = current;
        current.classList.add('active');
        const part = e.target.getAttribute('data-display');
        this.displayTodo(part);
      });
    });
  }

  // function to delete all the completed tasks at once
  deleteCompleted() {
    const removeCompleted = document.querySelector('.remove-complete');
    removeCompleted.addEventListener('click', () => {
      const todo = new Todo();
      const data = todo.getTodo('active');
      todo.updateLocalStorage(data);
      this.displayTodo();
      this.counterContainer.innerText = this.activeCount();
    });
  }
}
