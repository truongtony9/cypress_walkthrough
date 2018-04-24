import React, { Component } from "react";
import { Card } from "material-ui/Card";
import { Checkbox } from "material-ui";
import CheckBoxOutlineBlank from "material-ui/svg-icons/toggle/check-box-outline-blank";
import CheckBox from "material-ui/svg-icons/toggle/check-box";

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
  },
  checkbox: {
    position: "absolute",
    top: "50%",
    transform: "translate(0, 50%)",
    left: 20
  }
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.isComplete);
    return (
      <div className="">
        <Card className="todos" style={styles.card}>
          <div>
            {" "}
            <Checkbox
              checkedIcon={<CheckBox style={styles.checkbox} />}
              uncheckedIcon={<CheckBoxOutlineBlank style={styles.checkbox} />}
              checked={this.props.isComplete}
            />
            {this.props.title}{" "}
          </div>
          <i id="delete" style={styles.delete} className="material-icons">
            clear
          </i>
        </Card>
      </div>
    );
  }
}
export default Todo;
