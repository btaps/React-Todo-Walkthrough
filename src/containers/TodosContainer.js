import React, { Component } from 'react';
import TodoModel from '../models/Todo';
import Todos from '../components/Todos';
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends Component {
    
  state = {
      todos: []
  };
  
  
  componentDidMount() {
    this.fetchData();
  };
  
  fetchData = () => {
    TodoModel.all().then(res => {
      this.setState ({todos: res.todos})
      //console.log(this.sate.todos)
    });
  };
  

createTodo = (todo) => {
    // Grab todo passed from CreateTodoForm and pur it in newTodo object
    let newTodo = {
        body: todo,
        completed: false,
    };
    // Used our create() we passed from Todo Model. 
    // This sends our todo through fetch and returns a promise
    // We then use then() to store response in variable 'todos'
    // Then push into our state.todos, then setState() to re-render 
    TodoModel.create(newTodo).then((res) => {
        console.log(res)
	let todos = this.state.todos;
        todos.push(res);
        this.setState({ todos: todos });
    });
};
// After the todo delete response is sent back from the server, we find the corresponding entry for the todo in our todos state array and remove it.
  deleteTodo = (todo) => {
    TodoModel.delete(todo).then(data => {
      let todos = this.state.todos.filter(todo => {
        return todo._id !== data._id
      })
    this.setState({ todos })
    })
  }

  updateTodo = (todo) => {
    const isUpdatedTodo = t => {
      return t._id === todo._id
    }
    
    TodoModel.update(todo)
	    .then(data => {
	      let todos = this.state.todos
	      todos.find(isUpdatedTodo).body = todo.body
	      this.setState({ todos })
	    })
  }

  render() {
    return (
      <div className="todosComponent">
        <CreateTodoForm
	/* Passing our function createTodo down to CreateTodoForm
           Which we then use to send back our new todo when clicked on submit */
          createTodo={this.createTodo} />

        <Todos
          todos={this.state.todos} 
	/* Pass down the deleteTodo function */
	  deleteTodo = {this.deleteTodo}
	/* Pass down update function */
	  updateTodo = {this.updateTodo}/>
      </div>
    );
  };  
};

export default TodosContainer;
