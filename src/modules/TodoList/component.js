import React from 'react';

import { Todo } from '../Todo';

export const Component = ({ todos, finalMessage, deleteTodo }) => (
  <div>
    {
      Array.isArray(todos) && todos.length
      ? todos.map((todo, index) => (
          <Todo 
            key={todo.id}
            text={todo.text}
            onClickDelete={() => 
              deleteTodo(index)
            } />
        ))
      : finalMessage || 'You\'re all done 🌴'
    }
  </div>
);

Component.displayName = 'TodoList';