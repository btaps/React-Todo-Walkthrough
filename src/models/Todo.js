const endPoint = 'https://super-crud-api.herokuapp.com/api/todos'

class TodoModel {
  static all = () => {
    return fetch(endPoint)
	     .then(res => res.json())
	     .catch(err => console.log('Could not get all todos', err))
  }

  static create = (todo) => {
    return fetch(endPoint, {
        method: 'POST',
	headers: {
	  'Content-Type': 'application/json'
	},
	body: JSON.stringify(todo)
    })
            .then(res => res.json())
            .catch(err => console.log('Could not pass todo', err))
  }

  static delete = (todo) => {
    return fetch(`${endPoint}/${todo._id}`, {
        method: 'DELETE'
    })
            .then(res => res.json())
	    .catch(err => console.log('Could not delete todo', err))
  }
  static update = (todo) => {
    return fetch(`${endPoint}/${todo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(todo)
    })
      .then(response => response.json())
      .catch(err => console.log('Could not update todo \n', err));
  };
}


export default TodoModel
