const todo = [
  {
    description: 'Complete on;ine javascript course',
    completed: true,
    index: 1,
  },
  {
    description: 'Jog around the park 3x',
    completed: false,
    index: 2,
  },
  {
    description: '10 minutes meditation',
    completed: false,
    index: 3,
  },
  {
    description: 'Read for One hour',
    completed: false,
    index: 4,
  },
  {
    description: 'Pick up groceries',
    completed: false,
    index: 5,
  },
  {
    description: 'Complete todo App project',
    completed: false,
    index: 6,
  },
];

export default function appendTOdo() {
  let elements = '';
  todo.forEach((element) => {
    elements += generateElements(element);
  });

  return elements;
}

function generateElements(element) {
  let elements = '';
  if (element.completed) {
    elements = `
        <li class="todo-item px-4">
            <div class="check active"></div>
            <p class="task active">${element.description}</p>
            <img class="cross-icon" src="#" width="15" height="15" alt="cross icon">
        </li>`;
  } else {
    elements = `
        <li class="todo-item px-4">
            <div class="check"></div>
            <p class="task">${element.description}</p>
            <img class="cross-icon" src="#" width="15" height="15" alt="cross icon">
        </li>`;
  }
  return elements;
}
