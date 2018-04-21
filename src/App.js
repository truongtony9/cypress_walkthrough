import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: "",
      todos: [
        {
          title: "Teach Cypress Testing Suite",
          isComplete: false
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    axios.get("/api/todos").then(({ data }) => {
      this.setState({ todos: [...this.state.todos, ...data] });
    });
  }

  deleteTodo(ind) {
    console.log("ind: ", ind);
    axios
      .delete("/api/todos")
      .then(({ data }) => {
        console.log("data: ", data);
        this.setState({ todos: data });
        return data;
      })
      .catch(console.log);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/api/todos", {
        title: this.state.currentTodo,
        isComplete: false
      })
      .then(({ data }) => {
        this.setState({
          todos: [...this.state.todos, data],
          currentTodo: ""
        });
      })
      .catch(console.log);
  }

  handleChange = (prop, val) => {
    this.setState({ [prop]: val });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={e => this.handleChange("currentTodo", e.target.value)}
            value={this.state.currentTodo}
            className="new_todo"
            autoFocus
            placeholder="Add new Todo"
          />
        </form>
        <List deleteTodo={this.deleteTodo} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
