import React from 'react';

import { TodoList } from '../TodoList';
import { Input } from '../Input';
import { Counter } from '../Counter';

export const Component = ({todos, deleteTodo, addTodo, finalMessage}) => (
  <div className="todo-list">
    <h1>Todos</h1>
    <p>
      <Counter counter={Array.isArray(todos) ? todos.length : 0} />
    </p>
    <TodoList todos={todos} finalMessage={finalMessage} />
    <Input 
      onClick={addTodo}
      placeholder="..."
      addLabel="Add" />
  </div>
);

