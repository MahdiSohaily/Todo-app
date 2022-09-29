import { constant } from 'lodash';
import Todo from './Todo.js';
export default class todoController {
  run() {
    this.formListener();
    this.displayTodo();
  }
  // function to listen to form submission
  formListener() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', this.createTodo);
  }

  // function to create new todo object
  createTodo() {
    let dataContainer = document.querySelector('.todo-list');
    const input = document.querySelector('.todo-input');
    const todo = new Todo(input.value);
    todo.addTodo();
    input.value = null;
    if (todo.getIndex() <= 1) {
      dataContainer.innerHTML = '';
    }
    dataContainer.innerHTML += `
        <li class="todo-item px-4" id="${todo.index}" >
            <input type="checkbox" name="vehicle1" value="${todo.description}">
            <p title="Double click to edit" class="task">${todo.description}</p>
            <img title="Delete item" class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
        </li>`;
    const control = new todoController();
    control.enableEdit();
    control.enableDelete();
  }

  // function to get data from local storage and display it to the main page
  displayTodo(state = 'all') {
    let dataContainer = document.querySelector('.todo-list');
    dataContainer.innerHTML = '';
    const todo = new Todo();
    const data = todo.getTodo(state);
    if (data) {
      data.forEach((element) => {
        dataContainer.innerHTML += this.generateElements(element);
      });
      this.enableEdit();
      this.enableDelete();
    } else {
      dataContainer.innerHTML = `
        <li class="todo-item px-4">
            <p class="task">Nothing to show</p>
        </li>`;
    }
  }

  // function to create corresponding HTML elements for local storage data
  generateElements(element) {
    let elements = '';
    if (element.completed) {
      elements = `
            <li class="todo-item px-4 active" id="${element.index}" >
                <input type="checkbox" name="vehicle1" value="${element.description}"> 
                <p title="Double click to edit" class="task">${element.description}</p>
                <img title="Delete item" class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
            </li>`;
    } else {
      elements = `
            <li class="todo-item px-4" id="${element.index}" >
                <input type="checkbox" name="vehicle1" value="${element.description}">
                <p title="Double click to edit" class="task">${element.description}</p>
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
  }

  // function to listen for delete icon click to delete intended todo item
  enableDelete() {
    const delete_btn = document.querySelectorAll('.cross-icon');
    delete_btn.forEach((element) => {
      element.addEventListener('click', (e) => {
        const parent = e.target.closest('.todo-item');
        const todo = new Todo();
        todo.deleteTodo(parent.id);
        parent.remove();
      });
    });
  }
}
