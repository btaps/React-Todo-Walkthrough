import React, { Component } from 'react';

class CreateTodoForm extends Component {
  state = {
    todo: '',
  }
  
  // Update our this.state.todo string with every character added to the input element
  onInputChange = (event) => {
    this.setState({
      todo: event.target.value,
    });
  };

  // Prevent from submitting, assign 'todo; to the state todo value
  // Use our function passed from TodosContainer and pass in our new todo
  // reset the state to have a value of '' (empty string)  
  onFormSubmit = (event) => {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.createTodo(todo);
    this.setState({
      todo: '',
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="taskForm">
          <input  
            onChange={this.onInputChange} 
            type="text" id="newItemDescription" 
            placeholder="What do you need to do?" 
            value={this.state.todo}
          />
          <button type="submit" id="addTask" className="btn">Add Todo</button>
        </form>
      </div>
    );
  };
};

export default CreateTodoForm;
