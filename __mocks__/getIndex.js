function getIndex() {
  return localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos')).length
    : 0;
}
