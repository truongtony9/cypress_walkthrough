import React, { Component } from "react";

import "./App.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Teach Cypress Testing Suite",
          currentTodo: ""
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <input
          value={this.state.currentTodo}
          className="new_todo"
          autoFocus
          placeholder="Add new Todo"
        />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
