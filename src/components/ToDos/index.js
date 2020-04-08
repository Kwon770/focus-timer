import React from "react";
import Panel from "./ToDosPanel";

export default class ToDosPresenter extends React.Component {
  state = {
    toDos: [
      {
        isSelected: true,
        name: "Coding",
        time: 180,
        isDone: true,
      },
      {
        isSelected: false,
        name: "Japanese",
        time: 120,
        isDone: true,
      },
      {
        isSelected: false,
        name: "English",
        time: 60,
        isDone: false,
      },
    ],
  };
  addToDo = () => {};
  render() {
    return (
      <Panel
        toDos={this.state.toDos}
        setCurDo={this.props.setCurDo}
        addTodo={this.addToDo}
      />
    );
  }
}
