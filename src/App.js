import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

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
      <div className="App">
        <Card className="main-container">
          <TextField
            className='add-todo-input'
            type='text'
            value={this.state.input}
            onChange={e =>
              this.setState({input: e.target.value})
            }
            label="Add New Todo"
            onKeyPress={e => {
              if(e.key=='Enter'){
                this.addTodo(this.state.input);
              }
            }}
          />
          <List>
            {this.state.todos.map(todo =>
              <ListItem>
                <Icon>drag_handle</Icon>
                <ListItemText
                  primary={todo.name}
                />
                <ListItemSecondaryAction>
                  <IconButton aria-label="Delete">
                    <Icon>delete</Icon>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )}
          </List>
        </Card>
      </div>
    );
  }
}

export default App;
