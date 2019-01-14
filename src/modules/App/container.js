import React, { Component } from 'react';

import { Component as App } from './component';
import { addTodo, deleteTodo } from './logic';

const defaultState = {
  todo: '',
  todos: []
}
export class AppContainer extends Component {
  displayName = 'AppContainer';
  
  constructor (props) {
    super(props);
    /**
     * the component will ovveride the default state with the 
     * one taken by the props
     */
    this.state  = {
      ...defaultState,
      ...props
    };
  }

  handleDeleteTodo = (index) => {
    this.setState(deleteTodo(this.state, index));
  }

  handleAddTodo = (todo) => {
    this.setState(addTodo(this.state, todo));
  }

  render () {
    return (
      <App 
        todos={this.state.todos}
        deleteTodo={this.handleDeleteTodo}
        addTodo={this.handleAddTodo} />
      );
  }
}