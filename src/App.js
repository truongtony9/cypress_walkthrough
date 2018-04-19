import React, { Component } from "react";
import { RaisedButton, TextField } from "material-ui";

import "./App.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Teach Cypress Testing Suite"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <TextField
          style={{
            width: "60%",
            marginBottom: "40px"
          }}
          floatingLabelText="Add new Todo"
          hintText="Yes, another todo list..."
        />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
