import React, { Component } from "react";
import { Card } from "material-ui/Card";

const styles = {
  delete: {
    position: "absolute",
    top: 10,
    right: 10
  },
  card: {
    width: "60%",
    margin: "auto",
    padding: "10px",
    position: "relative"
  }
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Card style={styles.card}>
          <p> {this.props.todo.title} </p>
          <i id="delete" style={styles.delete} className="material-icons">
            clear
          </i>
        </Card>
      </div>
    );
  }
}
export default Todo;
