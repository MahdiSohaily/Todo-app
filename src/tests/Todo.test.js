/**
 * @jest-environment jsdom
 */
import Todo from '../modules/Todo';

// Script to test the
describe('Addition test', () => {
  // Test One
  test('Adding new TODO item to local storage', () => {
    const obj = new Todo('Item One');
    obj.addTodo();
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    const current = JSON.stringify(data[data.length - 1]);

    expect(JSON.stringify(obj)).toEqual(current);
  });

  // Test Two
  test('Adding new TODO item to local storage', () => {
    const obj = new Todo('Item Two');
    obj.addTodo();
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    const current = JSON.stringify(data[data.length - 1]);

    expect(JSON.stringify(obj)).toEqual(current);
  });

  //   Test Three
  test('Adding new TODO item to local storage', () => {
    const obj = new Todo('Item Three');
    obj.addTodo();
    const data = localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : [];
    const current = JSON.stringify(data[data.length - 1]);

    expect(JSON.stringify(obj)).toEqual(current);
  });
});
