/**
 * @jest-environment jsdom
 */
import Todo from '../modules/Todo';

// Script to test the
escribe('Addition test', () => {
  // Test One
  test('Adding new TODO item to local storage', () => {
    const obj = new Todo('Item One');
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    obj.addTodo();
    console.log(obj);
    const len = data.length;
    console.log(data);
    expect(JSON.parse(localStorage.getItem('todos')).length).toBe(len + 1);
  });

  // Test Two
  test('Adding new TODO item to local storage', () => {
    const obj = new Todo('Item One');
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    obj.addTodo();
    console.log(obj);
    const len = data.length;
    console.log(data);
    expect(JSON.parse(localStorage.getItem('todos')).length).toBe(len + 1);
  });

  //   Test Three
  test('Adding new TODO item to local storage', () => {
    const obj = new Todo('Item One');
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    obj.addTodo();
    console.log(obj);
    const len = data.length;
    console.log(data);
    expect(JSON.parse(localStorage.getItem('todos')).length).toBe(len + 1);
  });
});
