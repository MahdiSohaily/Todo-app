import { constant } from 'lodash';
import Todo from './Todo.js';
export default class todoController {
  // function to listen to form submission
  formListener() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', this.createTodo);
  }

  // function to create new todo object
  createTodo() {
    const input = document.querySelector('.todo-input');
    const todo = new Todo(input.value);
    todo.addTodo();
    input.value = null;
    const control = new todoController();
    control.displayTodo();
  }

  displayTodo() {
    let dataContainer = document.querySelector('.todo-list');
    dataContainer.innerHTML = '';
    const todo = new Todo();
    const data = todo.getTodo();
    if (data) {
      data.forEach((element) => {
        dataContainer.innerHTML += this.generateElements(element);
      });
    } else {
      dataContainer.innerHTML = `
        <li class="todo-item px-4">
            <p class="task">Nothing to show</p>
        </li>`;
    }
  }

  generateElements(element) {
    let elements = '';
    if (element.completed) {
      elements = `
            <li class="todo-item px-4 active" id="${element.index}" title="Double click to edit">
                <input type="radio" id="vehicle1" name="vehicle1" value="${element.description}"> 
                <p class="task">${element.description}</p>
                <img class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
            </li>`;
    } else {
      elements = `
            <li class="todo-item px-4" id="${element.index}" title="Double click to edit">
                <input type="radio" id="vehicle1" name="vehicle1" value="${element.description}"> <p class="task">${element.description}</p>
                <img class="cross-icon" src="./images/icon-cross.png" width="15" height="15" alt="cross icon">
            </li>`;
    }
    return elements;
  }
  enableEdit() {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach((element) => {
      element.addEventListener('dblclick', (e) => {
        const element = e.target;
        const input = element.previousElementSibling;
        input.type = 'text';
      });
    });
  }
}
