import {uniqueId} from 'lodash'; 
/**
 * Delete Element in todos 
 * 
 * @param {Object} state - the previous state 
 * @param {Number} index - the index to remove
 */
export const deleteTodo = (state, index) => {
  if(state.todos.length -1 < index) return {...state};
  const newTodos = [...state.todos];
  newTodos.splice(index, 1);
  return {
    ...state,
    todos: newTodos
  }
};

/**
 * 
 * @param {Object} state - the previous state 
 * @param {Object} todo -  the new todo element to add
 */
export const addTodo = (state, todo) => ({
  ...state,
  todos: [...state.todos, {text: todo, id: uniqueId()}]
});

