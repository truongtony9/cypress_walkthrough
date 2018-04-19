import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Card
          style={{
            width: "60%",
            margin: "auto",
            padding: "10px"
          }}
        >
          <p> {this.props.todo.title} </p>
        </Card>
      </div>
    );
  }
}
export default Todo;
