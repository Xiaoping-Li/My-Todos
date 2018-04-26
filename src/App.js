import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      	<div><TodoList /></div>   
      </div> 
    );
  }
}

export default App;
