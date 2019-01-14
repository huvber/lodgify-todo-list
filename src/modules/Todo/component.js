import React from 'react';

export const Component = ({ text, onClickDelete }) => (
  <div className="todo-item">
    {text}
    <span onClick={onClickDelete}>&times;</span>
  </div>
);

Component.displayName = 'Todo';