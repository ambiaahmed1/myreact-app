import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todo';
import AddTodo from './components/AddTodo';
import './App.css';
import uuid from 'uuid';

class App extends Component {
    state = {
        todos: [
          {
            id: uuid.v4(),
            title: 'Take out the trash',
            completed: false
          },
          {
            id: uuid.v4(),
            title: 'Dinner with wife',
            completed: true
          },
          {
            id: uuid.v4(),
            title: 'Meeting with boss',
            completed: false
          }
        ]
    }
  render() {
    return (
      <div className="App">
        <div className="Container">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    );
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  markComplete = (id) => {
    this.setState({todo: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id
      !== id)] });
  }

}
export default App;
