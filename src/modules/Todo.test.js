import Todo from './Todo';

const obj = new Todo('New Item');

test('should first', () => {
  const data = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];
  const len = data.length;
  obj.addTodo();
  expect(data.length).toBe(len + 1);
});
