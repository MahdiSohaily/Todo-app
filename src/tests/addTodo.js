const addTodo = () => {
  let dataStored = [];
  let todos = [];
  if (localStorage.getItem('todos')) {
    dataStored = localStorage.getItem('todos');
    todos = JSON.parse(dataStored);
  }
  todos.push(this);
  this.updateLocalStorage(todos);
};
