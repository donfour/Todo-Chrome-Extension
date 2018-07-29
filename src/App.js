import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './App.css';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends Component {
  state = {
    todos: [],
    idCount: 0
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const todos = reorder(
      this.state.todos,
      result.source.index,
      result.destination.index
    );

    this.setState({
      todos,
    });
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
      <div className="App">
        <Card className="main-container">
          <TodoInput handleSubmit={this.addTodo.bind(this)}/>
          <TodoList
            data={this.state.todos}
            handleClick={this.deleteTodo.bind(this)}
            onDragEnd={this.onDragEnd.bind(this)}
          />
        </Card>
      </div>
    );
  }
}

export default App;
