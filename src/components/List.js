import React, { Component } from "react";
import { Card } from "material-ui/Card";

const styles = {
  card: {
    width: "60%",
    margin: "auto",
    padding: "10px",
    position: "relative"
  },
  title: {
    width: "80%",
    display: "inline-block"
  },
  buttons: {
    width: "20%",
    display: "inline-flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    cursor: "pointer"
  }
};

class List extends Component {
  render() {
    const list = this.props.todos.map((todo, ind) => (
      <Card key={ind} className="todos" style={styles.card}>
        <div style={styles.title}>
          {/* If in edit mode, display input, else just display title */}
          {todo.edit ? (
            <input
              onKeyDown={e =>
                e.keyCode === 13 &&
                this.props.handleEditSubmit(todo.id, todo.title)
              }
              id={todo.id}
              onChange={this.props.handleEditChange}
              value={todo.title}
            />
          ) : (
            <p> {todo.title} </p>
          )}
        </div>

        <div style={styles.buttons}>
          <i
            onClick={() => this.props.handleEditSelect(todo.id)}
            className="material-icons"
          >
            edit
          </i>
          <i
            onClick={e => this.props.deleteTodo(todo.id)}
            id="delete"
            className="material-icons"
          >
            clear
          </i>
        </div>
      </Card>
    ));
    return <div>{list}</div>;
  }
}
export default List;
