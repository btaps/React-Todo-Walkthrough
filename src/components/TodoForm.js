import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    todo: '',
  };

 // onChange event update out state.todo string with values changed	
  onChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  // update use props.todo, and assign it a body of this.state.todo
  // use the updateTodo function with the todo we just made.
  // setState to empyt string ''
  // call toggleBodyForm that was passed down from Container 
  onSubmit = (event) => {
    event.preventDefault();
    const todo = this.props.todo;
    todo.body = this.state.todo;
    this.props.updateTodo(todo);
    this.setState({ todo: '' });
    this.props.toggleBodyForm();
  };

  render() {
    return (
      <div style={this.props.style} className='todoForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};

export default TodoForm;
