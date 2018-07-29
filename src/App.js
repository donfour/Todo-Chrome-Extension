import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [],
    idCount: 0,
    input: ''
  }

  addTodo(todoName){
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().concat({
        name: todoName,
        id: prevState.idCount
      });
      return {
        todos: newTodos,
        idCount: prevState.idCount + 1,
        input: ''
      }
    })
  }

  deleteTodo(todoId){
    this.setState(prevState => {
      const newTodos = prevState.todos.slice().filter( todo => todo.id !== todoId );
      return {
        todos: newTodos
      }
    })
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.input} onChange={e => this.setState({input: e.target.value})}></input>
        <button onClick={this.addTodo.bind(this, this.state.input)}>add todo</button>
        <ul>
          {this.state.todos.map(todo =>
            <li key={todo.id}>{todo.name}<button onClick={this.deleteTodo.bind(this,todo.id)}>X</button></li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
