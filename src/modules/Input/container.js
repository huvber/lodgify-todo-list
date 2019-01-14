import React, {Component} from 'react';

const defaultState = {
  value: ''
};

export class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultState
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  handleClick = () => {
    const value = this.state.value
    this.setState({...this.state, value: ''})
    this.props.onClick(value)
  }

  render() {
    return (
      <div className="todo-input">
        <input 
          type="text"
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          value={this.state.value} 
          initialvalue={this.props.value} />
        <button onClick={this.handleClick}>
          {this.props.addLabel || 'Add'}
        </button>
      </div>
    );
  }
};