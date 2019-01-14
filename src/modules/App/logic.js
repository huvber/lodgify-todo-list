import {uniqueId} from 'lodash'; 
/**
 * Delete Element in todos 
 * 
 * @param {Object} state - the previous state 
 * @param {Number} index - the index to remove
 */
export const deleteTodo = (state, index) => (
  state.todos.length - 1 >= index 
  ? {
      ...state,
      todos: [...state.todos.splice(index, 1)]
    }
  : {...state}
);

/**
 * 
 * @param {Object} state - the previous state 
 * @param {Object} todo -  the new todo element to add
 */
export const addTodo = (state, todo) => ({
  ...state,
  todos: [...state.todos, {text: todo, id: uniqueId()}]
});

