/**
 * @jest-environment jsdom
 */
import Todo from '../modules/Todo';
import LocalStorageMock from '../../__mocks__/localStorage';
const obj = new Todo('New Item');

test('should first', () => {
  global.localStorage = new LocalStorageMock;
  const data = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];
  const len = data.length;
  obj.addTodo();
  expect(data.length).toBe(len + 1);
});
