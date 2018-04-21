import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const list = this.props.todos.map((todo, ind) => (
      <Todo
        index={ind}
        deleteTodo={this.props.deleteTodo}
        todo={todo}
        key={ind}
      />
    ));
    return <div>{list}</div>;
  }
}
export default List;
