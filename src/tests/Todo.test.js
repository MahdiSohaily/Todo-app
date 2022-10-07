/**
 * @jest-environment jsdom
 */
import Todo from '../modules/Todo';

// Script to test the addTodo() function
// describe('Addition test', () => {
//   // Test One
//   test('Adding TODO One to local storage', () => {
//     const obj = new Todo('Item One');
//     obj.addTodo();
//     const data = localStorage.getItem('todos')
//       ? JSON.parse(localStorage.getItem('todos'))
//       : [];
//     const current = JSON.stringify(data[data.length - 1]);

//     expect(JSON.stringify(obj)).toEqual(current);
//   });

//   // Test Two
//   test('Adding TODO two to local storage', () => {
//     const obj = new Todo('Item Two');
//     obj.addTodo();
//     const data = localStorage.getItem('todos')
//       ? JSON.parse(localStorage.getItem('todos'))
//       : [];
//     const current = JSON.stringify(data[data.length - 1]);

//     expect(JSON.stringify(obj)).toEqual(current);
//   });

//   //   Test Three
//   test('Adding TODO three to local storage', () => {
//     const obj = new Todo('Item Three');
//     obj.addTodo();
//     const data = localStorage.getItem('todos')
//       ? JSON.parse(localStorage.getItem('todos'))
//       : [];
//     const current = JSON.stringify(data[data.length - 1]);
//     expect(JSON.stringify(obj)).toEqual(current);
//   });
// });

// describe('Delete items tests', () => {
//   test('Adding TODO Four to local storage and deleting it', () => {
//     const obj = new Todo('Item Four');
//     obj.addTodo();
//     const delIndex = obj.index;
//     obj.deleteTodo(delIndex);

//     const data = localStorage.getItem('todos')
//       ? JSON.parse(localStorage.getItem('todos'))
//       : [];

//     function startsWith(delIndex) {
//       return function (element) {
//         return element.index === delIndex;
//       };
//     }
//     const deletedItem = data.filter(startsWith(delIndex));
//     expect(deletedItem).toEqual([]);
//   });

//   test('Adding two Todos to local storage and deleting one', () => {
//     const obj = new Todo('Item Five');
//     const obj2 = new Todo('Item Six');
//     obj.addTodo();
//     obj2.addTodo();
//     const delIndex = obj2.index;
//     obj2.deleteTodo(delIndex);

//     const data = localStorage.getItem('todos')
//       ? JSON.parse(localStorage.getItem('todos'))
//       : [];

//     function startsWith(delIndex) {
//       return function (element) {
//         return element.index === delIndex;
//       };
//     }
//     const deletedItem = data.filter(startsWith(delIndex));
//     expect(deletedItem).toEqual([]);
//   });

//   test('Adding three Todos to local storage and deleting the first', () => {
//     const obj = new Todo('Item Five');
//     const obj2 = new Todo('Item Six');
//     const obj3 = new Todo('Item Seven');
//     obj.addTodo();
//     obj2.addTodo();
//     obj3.addTodo();
//     const delIndex = obj.index;
//     obj.deleteTodo(delIndex);

//     const data = localStorage.getItem('todos')
//       ? JSON.parse(localStorage.getItem('todos'))
//       : [];

//     function startsWith(delIndex) {
//       return function (element) {
//         return element.index === delIndex;
//       };
//     }
//     const deletedItem = data.filter(startsWith(delIndex));
//     expect(deletedItem).toEqual([]);
//   });
// });

describe('Editing Items test', () => {
  // Test One
  
});
